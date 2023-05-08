import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbRoundedBorder2: "rounded-sm",
  RoundedBorder6: "rounded-md",
};
const variants = {
  icbFillGray900: "bg-gray_900",
  OutlineGray500: "outline outline-[1px] outline-gray_500",
};
const sizes = { smIcn: "p-[3px]", sm: "p-[13px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["icbRoundedBorder2", "RoundedBorder6"]),
  variant: PropTypes.oneOf(["icbFillGray900", "OutlineGray500"]),
  size: PropTypes.oneOf(["smIcn", "sm"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
