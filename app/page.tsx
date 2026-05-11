import FeaturedProducts from "@/components/landing-page/featured-products";
import LandingPage from "@/components/landing-page/landing-page";
import RecentlyLaunchedProducts from "@/components/landing-page/recently-launched-products";
import ProductSkeleton from "@/components/products/product-skeleton";
import { LoaderIcon } from "lucide-react";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <LandingPage />
      <FeaturedProducts />
      <Suspense fallback={<ProductSkeleton />}>
        <RecentlyLaunchedProducts />
      </Suspense>
    </main>
  );
}
