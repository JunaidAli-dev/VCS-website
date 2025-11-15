import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div 
    ref={ref} 
    className={cn(
      "rounded-lg border border-blue-500/20 bg-gradient-to-br from-slate-900/90 via-blue-950/90 to-slate-900/90 text-card-foreground shadow-lg backdrop-blur-sm",
      "hover:border-blue-400/40 hover:shadow-blue-500/20 hover:shadow-xl transition-all duration-300",
      "relative overflow-hidden",
      "before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-500/5 before:via-purple-500/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
      className
    )} 
    {...props} 
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6 relative z-10", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 
      ref={ref} 
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        "bg-gradient-to-r from-blue-300 via-cyan-400 to-yellow-300 bg-clip-text text-transparent",
        className
      )} 
      {...props} 
    />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p 
      ref={ref} 
      className={cn(
        "text-sm text-slate-300/80",
        className
      )} 
      {...props} 
    />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0 relative z-10", className)} {...props} />
  ),
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div 
      ref={ref} 
      className={cn(
        "flex items-center p-6 pt-0 relative z-10",
        className
      )} 
      {...props} 
    />
  ),
);
CardFooter.displayName = "CardFooter";

// Variant with gradient border effect (inspired by the button design)
const CardGradient = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div 
    ref={ref} 
    className={cn(
      "rounded-lg p-[1px] bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400",
      "hover:from-blue-400 hover:via-purple-400 hover:to-yellow-400 transition-all duration-500",
      "shadow-lg hover:shadow-2xl hover:shadow-blue-500/30",
      className
    )}
    {...props}
  >
    <div className="rounded-lg bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 h-full w-full">
      {props.children}
    </div>
  </div>
));
CardGradient.displayName = "CardGradient";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardGradient };