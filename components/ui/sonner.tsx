"use client"

import { Toaster as Sonner, type ToasterProps } from "sonner"
import {
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  OctagonXIcon,
  Loader2Icon,
} from "lucide-react"

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="system"
      position="bottom-right"
      expand={false}
      richColors
      closeButton
      duration={3500}
      gap={8}
      offset={20}
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      toastOptions={{
        classNames: {
          toast: [
            "group/toast",
            "!font-sans",
            "!rounded-xl",
            "!border",
            "!shadow-xl",
            "!backdrop-blur-md",
            "!px-4 !py-3",
            "!gap-3",
            "!items-start",
            /* light */
            "!bg-white/80",
            "!border-border/60",
            "!text-foreground",
            /* dark */
            "dark:!bg-card/80",
            "dark:!border-border/40",
            "dark:!text-foreground",
            /* hover lift */
            "hover:!shadow-2xl hover:!-translate-y-0.5 !transition-all !duration-200",
          ].join(" "),
          title: "!font-semibold !text-sm !leading-snug",
          description: "!text-xs !leading-relaxed !text-muted-foreground",
          icon: "!mt-0.5",
          closeButton: [
            "!border-border/50 !bg-background/70 hover:!bg-muted",
            "!text-muted-foreground hover:!text-foreground",
            "!transition-colors !duration-150",
          ].join(" "),
          actionButton:
            "!bg-primary !text-primary-foreground !rounded-lg !text-xs !font-medium !px-3 !py-1.5 hover:!opacity-90 !transition-opacity",
          cancelButton:
            "!bg-muted !text-muted-foreground !rounded-lg !text-xs !font-medium !px-3 !py-1.5 hover:!bg-muted/80 !transition-colors",
          error:
            "!border-destructive/30 dark:!border-destructive/20 !bg-destructive/5 dark:!bg-destructive/10",
          success:
            "!border-emerald-500/30 dark:!border-emerald-500/20 !bg-emerald-50/70 dark:!bg-emerald-950/30",
          warning:
            "!border-amber-400/30 dark:!border-amber-400/20 !bg-amber-50/70 dark:!bg-amber-950/30",
          info: "!border-sky-400/30 dark:!border-sky-400/20 !bg-sky-50/70 dark:!bg-sky-950/30",
        },
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "0.75rem",
          fontFamily: "var(--font-sans, Outfit, sans-serif)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
