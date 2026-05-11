import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { InferSelectModel } from "drizzle-orm";
import { products } from "@/db/schema";
import { StarIcon } from "lucide-react";
import VotingButtons from "./voting-buttons";
import { ProductType } from "@/types";

type Product = InferSelectModel<typeof products>;

const ProductCard = ({ product }: { product: ProductType }) => {
    const hasVoted = false
  return (
    <Link href={`/products/${product.slug}`}>
      <Card className="group card-hover hover:bg-primary-foreground/10 border-solid border-gray-400 min-h-[200px]">
        <CardHeader>
          <div className="flex items-start gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>
                {product.voteCount > 100 && (
                  <Badge className="gap-1 bg-primary text-primary-foreground">
                    <StarIcon className="size-3 fill-current" />
                    Featured
                  </Badge>
                )}
              </div>
              <CardDescription>{product.description}</CardDescription>
            </div>
            {/* Voting button */}
            <VotingButtons productId={product.id} hasVoted={hasVoted} voteCount={product.voteCount} />
      
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            {product.tags?.map((tag) => (
              <Badge variant="secondary" key={tag}>
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
