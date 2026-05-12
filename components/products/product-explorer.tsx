"use client";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Clock1Icon, SearchIcon, TrendingUpIcon } from "lucide-react";
import ProductCard from "./ProductCard";
import { ProductType } from "@/types";
import { useMemo, useState } from "react";

const ProductExplorer = ({ products }: { products: ProductType[] }) => {
  const [sortBy, setSortBy] = useState<'trending' | 'recent' | 'newest'>("trending");
  const [searchQuery, setSearchQuery] = useState("");


const filteredProducts = useMemo(()=>{
  const filtered = [...products]
    if (searchQuery.length > 0) {
        return filtered.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()),
        );
    } 
     switch (sortBy) {
       case "trending":
         return filtered.sort((a, b) => b.voteCount - a.voteCount);
       case "recent":
         return filtered.sort(
           (a, b) =>
             new Date(b.createdAt || "").getTime() -
             new Date(a.createdAt || "").getTime(),
         );
       case "newest":
         return filtered.sort(
           (a, b) =>
             new Date(b.createdAt || "").getTime() -
             new Date(a.createdAt || "").getTime(),
         );
       default:
         return filtered;
     }
   
}, [searchQuery, sortBy, products]);

 
    
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
        <div className="flex gap-2 cursor-pointer">
          <Button variant={sortBy==='trending'?'default':'outline'} onClick={()=>setSortBy('trending')}>
            <TrendingUpIcon className="size-4" />
            Trending
          </Button>
          <Button variant={sortBy==='recent'?'default':'outline'} onClick={()=>setSortBy('recent')}>
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
