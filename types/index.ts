import { products } from "@/db/schema"
import { InferSelectModel } from "drizzle-orm"

export type FormState = {
    success: boolean,
    message: string,
    errors?: Record<string, string[] | undefined>
}

export type ProductType = InferSelectModel<typeof products>;