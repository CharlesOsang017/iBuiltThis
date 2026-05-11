"use client";
import {
  downvoteProduction,
  upvoteProduction,
} from "@/lib/products/product-actions";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useOptimistic, useTransition } from "react";

const VotingButtons = ({
  hasVoted,
  voteCount: initialVoteCount,
  productId,
}: {
  hasVoted?: boolean;
  voteCount: number;
  productId: number;
}) => {
  const [optimisticVoteCount, setOptimisticVoteCount] = useOptimistic(
    initialVoteCount,
    (currentCount, change: number) => Math.max(0, currentCount + change)
  );

  const [isPending, startTransition] = useTransition()


  const handleUpvote = async () => {

    startTransition(async () => {
        setOptimisticVoteCount(1);
        await upvoteProduction(productId);
        
    });
    
  };

  const handleDownvote = async () => {
    startTransition(async () => {
        setOptimisticVoteCount(-1);
        await downvoteProduction(productId);
    });

  };
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      className="flex flex-col items-center gap-1 shrink-0"
    >
      <Button
        onClick={handleUpvote}
        variant="ghost"
        size="icon-sm"
        className={cn(
          "h-8 w-8 text-primary",
          hasVoted
            ? "bg-primary/10 text-primary hover:bg-primary/20"
            : "hover:bg-primary/10 hover:text-primary",
        )}
        disabled={isPending}
      >
        <ChevronUpIcon className="size-6 " />
      </Button>
      <span className="text-sm font-semibold transition-colors text-foreground">
        {optimisticVoteCount}
      </span>
      <Button
        onClick={handleDownvote}
        variant="ghost"
        size="icon-sm"
        className={cn(
          "h-8 w-8 text-primary",
          hasVoted
            ? "text-destructive cursor-not-allowed"
            : "hover:bg-primary/10 hover:text-primary",
        )}
        disabled={isPending}
      >
        <ChevronDownIcon className="size-6 " />
      </Button>
    </div>
  );
};

export default VotingButtons;
