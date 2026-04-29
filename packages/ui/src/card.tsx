import { clsx, type ClassValue } from "clsx";
import * as React from "react";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function Card({
  title,
  description,
  icon,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "glass-card p-8 flex flex-col gap-4 text-left transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 group",
        className,
      )}
      {...props}
    >
      {icon && (
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
          {icon}
        </div>
      )}
      <h3 className="font-outfit font-bold text-2xl tracking-tight text-foreground">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
