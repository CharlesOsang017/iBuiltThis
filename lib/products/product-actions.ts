"use server"

import { productSchema } from "@/components/products/product-validations";
import { db } from "@/db";
import { products } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import z from "zod";
import { FormState } from "@/types";
import { eq, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const addProductAction = async (prevState: FormState,formData: FormData): Promise<FormState> => {

    try{
        const {userId, orgId} = await auth()
        const user = await currentUser()
        const userEmail = user?.emailAddresses[0].emailAddress || "anonymous"

        if(!userId){           
            return {
                success: false,
                message: "You must be logged in to add a product.",
            } as FormState
        }

        if(!orgId){            
            return {
                success: false,
                message: "You must be a member of an organization to add a product.",
            } as FormState
        }



        // data
    const rawFormData = Object.fromEntries(formData.entries());
    // validate the data
    const validatedData = productSchema.safeParse(rawFormData);

    if(!validatedData.success){
    return {
        success: false,
        message: "Please fix the errors below.",
        errors: validatedData.error.flatten().fieldErrors,
    } 
}

  const {name,slug,tagline,websiteUrl,tags,description} = validatedData.data
  const tagsArray = tags ? tags.filter((tag: any)=> typeof tag === "string") : []
  // Check if slug already exists before inserting
  const existing = await db.select({ id: products.id }).from(products).where(eq(products.slug, slug)).limit(1)
  if (existing.length > 0) {
    return {
      success: false,
      message: "A product with this slug already exists. Please choose a different slug.",
      errors: { slug: ["This slug is already taken."] },
    } as FormState
  }

  await db.insert(products).values({
    name,
    slug,
    tagline,
    websiteUrl,
    tags: tagsArray,
    description,
    submittedBy: userEmail,
    userId,
    status: "pending",
    organizationId: orgId,
  })

  // refresh()
    revalidatePath("/")

  return {
    success: true,
    message: "Product added successfully! It will be reviewed shortly.",
  }

// database operations
     }catch(error: any){
        console.error("addProductAction error:", error)
        if (error instanceof z.ZodError){
            return {
                success: false,
                message: "Please fix the validation errors below.",
                errors: error.flatten().fieldErrors,
            } 
        }
        // PostgreSQL unique constraint violation
        if (error?.code === "23505" || error?.message?.includes("unique") || error?.message?.includes("duplicate")) {
            return {
                success: false,
                message: "A product with this slug already exists. Please choose a different slug.",
                errors: { slug: ["This slug is already taken."] },
            }
        }
        return {
            success: false,
            message: "An error occurred. Please try again.",
        }
    }
    
}

export const upvoteProduction = async(productId: number)=> {
    try{
        const {userId, orgId} = await auth()
        if(!userId){
            return {
                success: false,
                message: "You must be logged in to upvote a product.",
            }
        }
        if(!orgId){
            return {
                success: false,
                message: "You must be a member of an organization to upvote a product.",
            }
        }

        await db.update(products).set({
            voteCount: sql`GREATEST(0, vote_count+1)`
        }).where(eq(products.id, productId))

        // refresh()
        revalidatePath("/")

        return {
            success: true,
            message: "Product upvoted successfully!",
        }
    }catch(error){
        console.log(error)
        if (error instanceof  z.ZodError){
            return {
                success: false,
                message: "Failed to submit product",
                errors: error.flatten().fieldErrors,
            } 
        }
        return {
            success: false,
            message: "An error occurred. Please try again.",
        }
    }
}

export const downvoteProduction = async(productId: number)=> {
    try{
        const {userId, orgId} = await auth()
        if(!userId){
            return {
                success: false,
                message: "You must be logged in to downvote a product.",
            }
        }
        if(!orgId){
            return {
                success: false,
                message: "You must be a member of an organization to downvote a product.",
            }
        }

        await db.update(products).set({
            voteCount: sql`GREATEST(0, vote_count-1)`
        }).where(eq(products.id, productId))
        // refresh()
        revalidatePath("/")

        return {
            success: true,
            message: "Product downvoted successfully!",
        }
    }catch(error){
        console.log(error)
        if (error instanceof  z.ZodError){
            return {
                success: false,
                message: "Failed to downvote product",
                errors: error.flatten().fieldErrors,
            } 
        }
        return {
            success: false,
            message: "An error occurred. Please try again.",
        }
    }
}