import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";
import { Container } from "./Container";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  id?: string;
  containerClassName?: string;
}

export function Section({
  children,
  id,
  className,
  containerClassName,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-18 md:py-22", className)}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
