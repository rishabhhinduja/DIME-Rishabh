import { forwardRef, type ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "secondary" | "ghost" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
}

const buttonVariants = {
  default: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",
  outline: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50",
  secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
  ghost: "hover:bg-gray-100 text-gray-900",
  destructive: "bg-red-600 text-white hover:bg-red-700",
}

const sizeVariants = {
  default: "h-10 px-4 py-2 text-sm",
  sm: "h-8 px-3 py-1.5 text-xs",
  lg: "h-12 px-6 py-3 text-base",
  icon: "h-10 w-10 p-0",
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          buttonVariants[variant],
          sizeVariants[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button }
