import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
  {
    variants: {
      variant: {
        default:
          "border-white/10 bg-white/[0.04] text-atlas-mist backdrop-blur-sm",
        gold: "border-atlas-gold/30 bg-atlas-gold/[0.08] text-atlas-gold",
        purple:
          "border-atlas-purple-light/30 bg-atlas-purple/[0.12] text-[#C4B5FD]",
        outline: "border-white/15 text-atlas-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
