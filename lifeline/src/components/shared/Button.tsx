import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { PhoneIcon } from "./icons";

type ButtonVariant = "primary" | "outline" | "on-dark" | "emergency" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-sm",
  outline:
    "bg-white text-primary border-[1.5px] border-primary hover:bg-primary/5",
  "on-dark":
    "bg-white text-navy hover:bg-blue-50 shadow-sm",
  emergency:
    "bg-[#e23d3d] text-white hover:bg-[#c93232] shadow-sm",
  ghost: "bg-transparent text-primary hover:bg-surface-2",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-3 text-[15px]",
  lg: "px-8 py-3.5 text-base",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-colors focus-ring min-h-[44px]";

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
} & ComponentProps<"button">) {
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href">) {
  const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  const cls = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (external) {
    const isHttp = href.startsWith("http");
    return (
      <a
        href={href}
        className={cls}
        {...(isHttp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(rest as object)}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}

export function PhoneButton({
  phone,
  href,
  variant = "outline",
  size = "md",
}: {
  phone: string;
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}) {
  return (
    <ButtonLink href={href} variant={variant} size={size}>
      <PhoneIcon className="h-4 w-4" aria-hidden />
      Call {phone}
    </ButtonLink>
  );
}
