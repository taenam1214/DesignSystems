"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "./utils";

// Provider component with sensible defaults
const TooltipProvider = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Provider>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Provider>
>(({ delayDuration = 300, skipDelayDuration = 100, ...props }, ref) => (
  <TooltipPrimitive.Provider
    ref={ref}
    delayDuration={delayDuration}
    skipDelayDuration={skipDelayDuration}
    {...props}
  />
));
TooltipProvider.displayName = "TooltipProvider";

// Root tooltip component
const Tooltip = TooltipPrimitive.Root;

// Trigger component with enhanced focus management
const TooltipTrigger = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TooltipPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center outline-none",
      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
      "disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
  />
));
TooltipTrigger.displayName = TooltipPrimitive.Trigger.displayName;

// Content component with modern styling
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 6, collisionPadding = 8, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      collisionPadding={collisionPadding}
      className={cn(
        // Base styles
        "z-50 overflow-hidden rounded-lg border bg-popover px-3 py-2 text-sm text-popover-foreground shadow-lg",
        // Animation styles
        "animate-in fade-in-0 zoom-in-95",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        // Slide animations based on side
        "data-[side=bottom]:slide-in-from-top-2",
        "data-[side=left]:slide-in-from-right-2", 
        "data-[side=right]:slide-in-from-left-2",
        "data-[side=top]:slide-in-from-bottom-2",
        // Max width for better text wrapping
        "max-w-xs break-words",
        className
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// Arrow component for enhanced visual connection
const TooltipArrow = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Arrow>
>(({ className, ...props }, ref) => (
  <TooltipPrimitive.Arrow
    ref={ref}
    className={cn("fill-popover stroke-border stroke-1", className)}
    {...props}
  />
));
TooltipArrow.displayName = TooltipPrimitive.Arrow.displayName;

// Simple tooltip interface for ease of use
interface SimpleTooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  sideOffset?: number;
  delayDuration?: number;
  skipDelayDuration?: number;
  className?: string;
  contentClassName?: string;
  triggerClassName?: string;
  disabled?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

// Simplified tooltip component that handles provider internally
const SimpleTooltip = React.forwardRef<
  HTMLButtonElement,
  SimpleTooltipProps
>(({
  children,
  content,
  side = "top",
  align = "center",
  sideOffset = 6,
  delayDuration = 300,
  skipDelayDuration = 100,
  className,
  contentClassName,
  triggerClassName,
  disabled = false,
  open,
  defaultOpen,
  onOpenChange,
  ...props
}, ref) => {
  // Don't render tooltip if disabled or no content
  if (disabled || !content) {
    return <>{children}</>;
  }

  return (
    <TooltipProvider delayDuration={delayDuration} skipDelayDuration={skipDelayDuration}>
      <Tooltip open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
        <TooltipTrigger asChild className={triggerClassName}>
          <span className={className} {...props}>
            {children}
          </span>
        </TooltipTrigger>
        <TooltipContent
          side={side}
          align={align}
          sideOffset={sideOffset}
          className={contentClassName}
        >
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
});
SimpleTooltip.displayName = "SimpleTooltip";

// Hook for managing tooltip state
function useTooltip({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
}: {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
} = {}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const open = controlledOpen ?? uncontrolledOpen;
  
  const setOpen = React.useCallback(
    (nextOpen: boolean) => {
      if (controlledOpen === undefined) {
        setUncontrolledOpen(nextOpen);
      }
      onOpenChange?.(nextOpen);
    },
    [controlledOpen, onOpenChange]
  );

  return {
    open,
    setOpen,
  };
}

// Advanced tooltip component with full control
interface TooltipComponentProps {
  children: React.ReactNode;
  content: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  sideOffset?: number;
  alignOffset?: number;
  delayDuration?: number;
  skipDelayDuration?: number;
  className?: string;
  contentClassName?: string;
  triggerClassName?: string;
  disabled?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  asChild?: boolean;
  withArrow?: boolean;
}

const TooltipComponent = React.forwardRef<
  HTMLButtonElement,
  TooltipComponentProps
>(({
  children,
  content,
  side = "top",
  align = "center",
  sideOffset = 6,
  alignOffset = 0,
  delayDuration = 300,
  skipDelayDuration = 100,
  className,
  contentClassName,
  triggerClassName,
  disabled = false,
  open,
  defaultOpen,
  onOpenChange,
  asChild = true,
  withArrow = false,
  ...props
}, ref) => {
  const { open: isOpen, setOpen } = useTooltip({
    open,
    defaultOpen,
    onOpenChange,
  });

  if (disabled || !content) {
    return <>{children}</>;
  }

  return (
    <TooltipProvider delayDuration={delayDuration} skipDelayDuration={skipDelayDuration}>
      <Tooltip open={isOpen} onOpenChange={setOpen}>
        <TooltipTrigger 
          asChild={asChild}
          className={triggerClassName}
          ref={ref}
          {...props}
        >
          {asChild ? children : <span className={className}>{children}</span>}
        </TooltipTrigger>
        <TooltipContent
          side={side}
          align={align}
          sideOffset={sideOffset}
          alignOffset={alignOffset}
          className={contentClassName}
        >
          {content}
          {withArrow && <TooltipArrow />}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
});
TooltipComponent.displayName = "TooltipComponent";

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  TooltipArrow,
  SimpleTooltip,
  TooltipComponent,
  useTooltip,
  type SimpleTooltipProps,
  type TooltipComponentProps,
};