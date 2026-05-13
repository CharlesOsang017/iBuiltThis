import { products } from "@/db/schema"
import { InferSelectModel } from "drizzle-orm"

export type FormState = {
    success: boolean,
    message: string,
    toastType?: "success" | "error" | "warning" | "info",
    toastDuration?: number,
    showToast?: boolean,    
    errors?: Record<string, string[] | undefined>
}

export type ProductType = InferSelectModel<typeof products>;