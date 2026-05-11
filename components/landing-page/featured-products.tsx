"use cache"
import { ArrowUpRightIcon, StarIcon } from "lucide-react";
import SectionHeader from "../common/section-header";
import { Button } from "../ui/button";
import Link from "next/link";
import ProductCard from "../products/ProductCard";
import { getFeaturedProducts } from "@/lib/products/product-select";

// const featuredProducts = [
//   {
//     id: 1,
//     name: "ParityKit",
//     description: "A toolkit for creating parity products",
//     tags: ["Saas", "Pricing", "Global"],
//     votes: 123,
//     isFeatured: true,
//     link: "https://paritykit.com",
//   },
//   {
//     id: 2,
//     name: "Modern Full Stack Next.js Course",
//     description: "Learn to build production-ready full stack apps with Next.js",
//     tags: ["Next.js", "Full-Stack", "Course"],
//     votes: 624,
//     isFeatured: false,
//     link: "https://ibulithis.com",
//   },
// ];

const FeaturedProducts = async () => {
  const featuredProducts = await getFeaturedProducts();
  return (
    <section className="py-20 bg-muted/20">
      <div className="wrapper">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader
            title="Featured Products"
            icon={StarIcon}
            description="Top picks from our community this week."
          />
          <Button variant="outline" asChild className="hidden sm:flex">
            <Link href="/explore">
              View All <ArrowUpRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="grid-wrapper">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
