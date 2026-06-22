import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";

/**
 * LinkButton — a Next.js Link styled as a shadcn Button.
 * Use this instead of <Button asChild><Link ...> since the Base UI Button
 * in this version of shadcn does not support the asChild prop.
 */
interface LinkButtonProps extends VariantProps<typeof buttonVariants> {
  href: string;
  id?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function LinkButton({
  href,
  id,
  className,
  children,
  variant = "default",
  size = "default",
  onClick,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      id={id}
      onClick={onClick}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {children}
    </Link>
  );
}
