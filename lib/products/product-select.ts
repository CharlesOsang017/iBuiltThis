import { db } from "@/db";
import { products } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { connection } from "next/server";

export const getFeaturedProducts = async () => {
    "use cache"
  const productsData = await db
    .select()
    .from(products)
    .where(eq(products.status, "approved"))
    .orderBy(desc(products.voteCount));

  return productsData;
};

export const getAllAprovedProducts = async () => {
  const productsData = await db
    .select()
    .from(products)
    .where(eq(products.status, "approved"))
    .orderBy(desc(products.voteCount));

  return productsData;
};

export const getAllProducts = async()=>{
  "use cache"
  const productsData = await db.select().from(products).orderBy(desc(products.voteCount))
  return productsData
}


export const getRecentlyLaunchedProducts = async () => {
  await connection()   
  const productsData = await getAllProducts();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

 

  return productsData.filter((product)=>product.createdAt && new Date (product.createdAt.toISOString()) >= oneWeekAgo);
};

export const getProductBySlug= async(slug: string)=>{
  const product = await db.select().from(products).where(eq(products.slug, slug))
  return product?.[0] ?? null
}