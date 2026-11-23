import styles from "./Button.module.css";
import { type ComponentProps } from "react";

type variantsKeys = "primary" | "secondary" | "ghost" | "danger";

const variants: Record<variantsKeys, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  ghost: styles.ghost,
  danger: styles.danger,
};

type sizeKeys = "sm" | "md" | "lg";

const sizes: Record<sizeKeys, string> = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
};

type ButtonProps = ComponentProps<"button"> & {
  variant?: variantsKeys;
  size?: sizeKeys;
  loading?: boolean;
  loadingText?: string;
};

function Button({
  variant = "primary",
  size = "md",
  loading = false,
  className,
  disabled,
  loadingText = "Loading...",
  children,
  ...buttonProps
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${className ?? ""} ${variants[variant]} ${sizes[size]}`}
      disabled={loading || disabled}
      aria-busy={loading}
      {...buttonProps}
    >
      {loading ? loadingText : children}
    </button>
  );
}

export default Button;
