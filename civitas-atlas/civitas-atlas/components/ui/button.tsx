import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 ease-atlas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atlas-gold focus-visible:ring-offset-2 focus-visible:ring-offset-atlas-black disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-b from-atlas-purple-light to-atlas-purple text-atlas-white shadow-[0_0_0_1px_rgba(124,58,237,0.4),0_8px_24px_-8px_rgba(91,33,182,0.6)] hover:shadow-[0_0_0_1px_rgba(124,58,237,0.6),0_12px_32px_-6px_rgba(91,33,182,0.8)] hover:-translate-y-0.5",
        gold: "bg-atlas-gold text-atlas-black font-semibold shadow-[0_8px_24px_-8px_rgba(212,175,55,0.5)] hover:shadow-[0_12px_32px_-6px_rgba(212,175,55,0.7)] hover:-translate-y-0.5",
        outline:
          "border border-white/15 bg-white/[0.03] text-atlas-white backdrop-blur-sm hover:bg-white/[0.07] hover:border-white/25",
        ghost: "text-atlas-mist hover:text-atlas-white hover:bg-white/5",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-[13px]",
        lg: "h-12 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
