import z from "zod";

export const productSchema = z.object({
  name: z.string().min(5, "Product name is required"),
  slug: z
    .string()
    .min(5, "Product slug is required")
    .regex(
      /^[a-z0-9-]+(?:-[a-z0-9]+)*$/i,
      "Invalid slug format"
    ),
  tagline: z.string().max(100, "Product tagline cannot be longer than 100 characters."),
  description: z.string().optional(),
  websiteUrl: z.url().min(1, "website URL is required"),
  tags: z.string().transform((val) => val.split(",").map((tag) => tag.trim()).filter(Boolean)),
});