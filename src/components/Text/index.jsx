import React from "react";

const variantClasses = {
  h1: "font-medium text-4xl sm:text-[32px] md:text-[34px]",
  h2: "text-sm",
  h3: "font-medium text-xs",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
