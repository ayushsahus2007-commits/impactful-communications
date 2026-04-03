"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const liquidbuttonVariants = cva(
  "inline-flex relative items-center justify-center cursor-pointer gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "text-foreground hover:scale-105 hover:brightness-110 active:scale-95",
        outline: "text-foreground hover:scale-105",
        secondary: "text-secondary-foreground hover:scale-105",
        ghost: "text-foreground hover:scale-105",
        destructive: "text-destructive-foreground hover:scale-105",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
      tone: {
        primary: "",
        mint: "",
        slate: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      tone: "primary",
    },
  },
);

function LiquidButton({
  className,
  variant,
  size,
  tone,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof liquidbuttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  const toneClass =
    tone === "mint"
      ? "before:bg-gradient-to-b before:from-primary/20 before:to-emerald-400/10"
      : tone === "slate"
        ? "before:bg-gradient-to-b before:from-white/12 before:to-white/4"
        : "before:bg-gradient-to-b before:from-primary/16 before:to-primary/8";

  return (
    <Comp
      className={cn("relative isolate", liquidbuttonVariants({ variant, size, tone, className }))}
      {...props}
    >
      <span
        className={cn(
          "absolute inset-0 -z-10 rounded-full border border-white/15 bg-transparent backdrop-blur-md",
          "shadow-[0_2px_8px_hsl(var(--primary)/0.12),inset_0_1px_0_hsl(0_0%_100%/0.2),inset_0_-1px_0_hsl(0_0%_0%/0.15)]",
          "before:absolute before:inset-[1px] before:rounded-full before:content-['']",
          toneClass,
        )}
        style={{ backdropFilter: 'url("#container-glass") blur(8px)' }}
      />
      <span className="pointer-events-none absolute inset-[1px] -z-10 rounded-full bg-white/5" />
      <span className="relative z-10">{children}</span>
      <GlassFilter />
    </Comp>
  );
}

function GlassFilter() {
  return (
    <svg className="hidden">
      <defs>
        <filter id="container-glass" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.05 0.05" numOctaves="1" seed="1" result="turbulence" />
          <feGaussianBlur in="turbulence" stdDeviation="1.8" result="blurredNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="34"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />
          <feGaussianBlur in="displaced" stdDeviation="2.5" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

export { LiquidButton, liquidbuttonVariants };
