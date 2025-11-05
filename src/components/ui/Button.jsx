import { forwardRef } from "react";

const Button = forwardRef(
  (
    {
      variant = "primary",
      size = "md",
      children,
      leftIcon,
      rightIcon,
      iconOnly,
      disabled = false,
      className = "",
      as = "button",
      ...props
    },
    ref
  ) => {
    // Base styles that apply to all buttons
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg disabled:cursor-not-allowed disabled:opacity-50 min-h-[44px]";

    // Variant styles
    const variants = {
      primary: "bg-white text-black hover:opacity-90 active:opacity-80",
      secondary: "ring-1 ring-white/30 text-white hover:bg-white/10 active:bg-white/20",
      link: "text-white underline underline-offset-4 hover:opacity-80 active:opacity-60 rounded-none",
    };

    // Size styles
    const sizes = {
      sm: {
        button: iconOnly ? "p-2" : "px-4 py-2 text-sm",
        icon: "w-4 h-4",
        gap: "gap-2",
      },
      md: {
        button: iconOnly ? "p-3" : "px-6 py-3",
        icon: "w-5 h-5",
        gap: "gap-2",
      },
      lg: {
        button: iconOnly ? "p-4" : "px-8 py-4 text-lg",
        icon: "w-6 h-6",
        gap: "gap-3",
      },
    };

    // Disabled styles override
    const disabledStyles = disabled ? "hover:opacity-50 active:opacity-50 hover:bg-opacity-100" : "";

    // Combine all styles
    const buttonClasses = [
      baseStyles,
      variants[variant],
      sizes[size].button,
      iconOnly ? "" : sizes[size].gap,
      disabledStyles,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const iconClasses = sizes[size].icon;

    // Render icon with proper classes
    const renderIcon = (icon) => {
      if (!icon) return null;

      if (typeof icon === "string") {
        // If it's a string, assume it's an SVG path or simple text
        return <span className={iconClasses}>{icon}</span>;
      }

      // If it's a React element, render it as-is since it likely has its own styling
      return <span aria-hidden="true">{icon}</span>;
    };

    // Create the component element
    const Component = as;

    return (
      <Component ref={ref} className={buttonClasses} disabled={disabled} {...props}>
        {leftIcon && renderIcon(leftIcon)}
        {!iconOnly && children}
        {rightIcon && renderIcon(rightIcon)}
        {iconOnly && renderIcon(iconOnly)}
      </Component>
    );
  }
);

Button.displayName = "Button";

export default Button;
