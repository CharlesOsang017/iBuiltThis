"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import FormField from "../forms/form-field";
import { Button } from "../ui/button";
import { Loader2Icon, SparkleIcon } from "lucide-react";
import { addProductAction } from "@/lib/products/product-actions";
import { useActionState } from "react";
import { FormState } from "@/types";
import { cn } from "@/lib/utils";

const initialState: FormState = {
  message: "",
  errors: {},
  success: false,
};

const ProductSubmitForm = () => {
  const [state, formAction, isPending] = useActionState(
    addProductAction,
    initialState,
  );
  const { errors, message, success } = state;
  return (
    <form className="space-y-6" action={formAction}>
      {message && (
        <div
          className={cn(
            "p-4 rounded-lg border",
            success
              ? "bg-primary/10 border-primary text-primary"
              : "bg-destructive/10 border-destructive text-destructive",
          )}
          role="alert"
          aria-live="polite"
        >
          {message}
        </div>
      )}
      <FormField
        label="Product Name"
        id="name"
        name="name"
        placeholder="Product Name"
        // required
        error={errors?.name}
        onChange={() => {}}
      />
      <FormField
        label="Slug"
        id="slug"
        name="slug"
        placeholder="product-slug"
        // required
        error={errors?.slug}
        helperText="URL-friendly version of your product name"
        onChange={() => {}}
      />
      <FormField
        label="Tagline"
        id="tagline"
        name="tagline"
        placeholder="Short description of your product"
        // required
        error={errors?.tagline}
        onChange={() => {}}
      />
      <FormField
        label="Description"
        id="description"
        name="description"
        placeholder="Tell us more about your product..."
        //   required
        error={errors?.description}
        textarea
        onChange={() => {}}
      />
      <FormField
        label="Website URL"
        id="websiteUrl"
        name="websiteUrl"
        placeholder="https://yourproduct.com"
        // required
        error={errors?.websiteUrl}
        helperText="Enter your product's website or landing page"
        onChange={() => {}}
      />
      <FormField
        label="Tags"
        id="tags"
        name="tags"
        placeholder="AI, Productivity, SaaS"
        // required
        error={errors?.tags}
        helperText="Comma-separated tags (e.g., AI, SaaS, Productivity"
        onChange={() => {}}
      />
      <Button type="submit" className="w-full cursor-pointer">
        {isPending ? (
          <Loader2Icon className="size-4 animate-spin" />
        ) : (
          <>
            <SparkleIcon className="size-4" />
            Submit Product
          </>
        )}
      </Button>
    </form>
  );
};

export default ProductSubmitForm;
