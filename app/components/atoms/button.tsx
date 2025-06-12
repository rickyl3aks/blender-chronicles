import React from "react";
import { ButtonProps, Variant } from "@/app/types/types";

const variants: Record<Variant, string> = {
  primary: "bg-[#5a3f58] text-white hover:bg-[#4a3548] shadow-md hover:shadow-lg",
  accent: "bg-[#392d35] text-[#C6A4B6] hover:bg-[#5a3f58] hover:text-white",
};

export const Button = ({ children, variant = "primary", className = "", icon, ...props }: ButtonProps) => {
  const baseClasses =
    "cursor-pointer px-5 py-2.5 rounded-lg font-bold text-center transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#5a3f58] focus:ring-opacity-50 inline-flex items-center justify-center";

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className} text-xl font-medium`;

  if ("href" in props) {
    const { href } = props;
    return (
      <a className={combinedClasses} href={href}>
        {children}
        {icon && (
          <span className={`ml-2 transition-transform duration-300 ${variant === "accent" ? "group-hover:translate-x-1" : "hover:translate-x-1"}`}>
            {icon}
          </span>
        )}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
      {icon && (
        <span className={`ml-2 transition-transform duration-300 ${variant === "accent" ? "group-hover:translate-x-1" : "hover:translate-x-1"}`}>
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;
