"use client";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Clock1Icon, SearchIcon, TrendingUpIcon } from "lucide-react";
import ProductCard from "./ProductCard";
import { ProductType } from "@/types";
import { useMemo, useState } from "react";

const ProductExplorer = ({ products }: { products: ProductType[] }) => {
  const [searchQuery, setSearchQuery] = useState("");


const filteredProducts = useMemo(()=>{
    if (searchQuery.length > 0) {
        return products.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()),
        );
    } 
    return products;
}, [searchQuery, products]);
    
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-4" />
          <Input
            type="text"
            placeholder="Search products..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <TrendingUpIcon className="size-4" />
            Trending
          </Button>
          <Button>
            <Clock1Icon className="size-4" />
            Recent
          </Button>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-sm text-muted-foreground">
          Showing {filteredProducts.length} products
        </p>
      </div>
      <div className="grid-wrapper">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductExplorer;
