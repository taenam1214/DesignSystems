"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "./utils";

export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  /**
   * Size variant of the label
   */
  size?: "sm" | "default" | "lg";
  /**
   * Visual variant of the label
   */
  variant?: "default" | "muted" | "destructive" | "success" | "warning";
  /**
   * Whether the field is required. Shows a red asterisk.
   */
  required?: boolean;
  /**
   * Whether the field has an error state.
   */
  error?: boolean;
  /**
   * Help text to display below the label.
   */
  helpText?: string;
  /**
   * Error message to display below the label when in error state.
   */
  errorMessage?: string;
}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ 
  className, 
  size = "default",
  variant = "default", 
  required = false,
  error = false, 
  helpText, 
  errorMessage, 
  children,
  ...props 
}, ref) => {
  // Size classes
  const sizeClasses = {
    sm: "text-xs",
    default: "text-sm", 
    lg: "text-base"
  };

  // Variant classes - override with error if error state is true
  const variantClasses = {
    default: "font-medium text-foreground",
    muted: "font-normal text-muted-foreground", 
    destructive: "font-medium text-destructive",
    success: "font-medium text-green-600 dark:text-green-400",
    warning: "font-medium text-amber-600 dark:text-amber-400"
  };

  const effectiveVariant = error ? "destructive" : variant;
  
  return (
    <div className="space-y-1">
      <LabelPrimitive.Root
        ref={ref}
        data-slot="label"
        className={cn(
          // Base styles
          "leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          // Size styles
          sizeClasses[size],
          // Variant styles
          variantClasses[effectiveVariant],
          // Required asterisk
          required && "after:content-['*'] after:ml-0.5 after:text-destructive",
          className
        )}
        {...props}
      >
        {children}
      </LabelPrimitive.Root>
      
      {/* Help text or error message */}
      {(helpText || errorMessage) && (
        <p 
          className={cn(
            "text-xs",
            error || errorMessage 
              ? "text-destructive" 
              : "text-muted-foreground"
          )}
        >
          {error || errorMessage ? errorMessage : helpText}
        </p>
      )}
    </div>
  );
});

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };