"use client";

import { Toaster as Sonner, ToasterProps } from "sonner";

type ToasterTheme = "light" | "dark" | "system";

interface ToasterComponentProps extends Omit<ToasterProps, "theme"> {
  theme?: ToasterTheme;
}

const Toaster = ({ theme = "system", ...props }: ToasterComponentProps) => {
  // Simple theme detection based on CSS class
  const getTheme = (): ToasterTheme => {
    if (theme !== "system") return theme;
    
    // Check if dark mode is applied
    //const isDark = document.documentElement.classList.contains("dark");
    return "light"; //isDark ? "dark" : "light";
  };

  return (
    <Sonner
      theme={getTheme()}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: "group toast group-[.toaster]:bg-popover group-[.toaster]:text-popover-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          success: "group-[.toaster]:bg-popover group-[.toaster]:text-popover-foreground group-[.toaster]:border-border",
          error: "group-[.toaster]:bg-destructive group-[.toaster]:text-destructive-foreground group-[.toaster]:border-destructive",
          warning: "group-[.toaster]:bg-popover group-[.toaster]:text-popover-foreground group-[.toaster]:border-border",
          info: "group-[.toaster]:bg-popover group-[.toaster]:text-popover-foreground group-[.toaster]:border-border",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };