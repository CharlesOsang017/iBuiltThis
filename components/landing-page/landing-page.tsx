import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  EyeIcon,
  RocketIcon,
  Sparkles,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import StatsCard from "./stats-card";

const LiveBadge = () => {
  return (
    <Badge
      variant="outline"
      className="px-4 py-3 mb-8 text-sm backdrop-blur-sm"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
      </span>
      <span className="text-muted-foreground">
        Join thousands of creators sharing their work
      </span>
    </Badge>
  );
};

const statsData = [
  {
    icon: RocketIcon,
    value: "2.5K+",
    label: "Projects Shared",
  },
  {
    icon: UsersIcon,
    value: "10K+",
    label: "Active Creators",
    hasBoarder: true,
  },
  {
    icon: EyeIcon,
    value: "50K+",
    label: "Active Visitors",
  },
];

const LandingPage = () => {
  return (
    <section className="relative overflow-hidden bg-kinear-to-b from-background via-background to-muted/28">
      <div className="wrapper">
        <div className="flex flex-col items-center justify-center lg:py-24 py-12 text-center">
          <LiveBadge />
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-5xl">
            Share what You&apos;ve Built, Discover what&apos;s Launching
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            A community platform for creators to showcase their apps, AI tools,
            saas products, and creative projects. Authentic launches, real
            builders, genuine feedback.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button asChild size={"lg"} className="text-base px-8 shadow-lg">
              <Link href="/submit">
                <Sparkles className="mr-2 h-5 w-5" />
                Share Your Projects
              </Link>
            </Button>
            <Button
              variant="secondary"
              asChild
              size="lg"
              className="text-base px-8 shadow-lg"
            >
              <Link href="/explore">
                Explore Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-2xl w-full">
            {statsData.map((stat) => (
              <StatsCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
