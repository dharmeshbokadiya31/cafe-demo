import { CART_ITEMS } from "@/utils/constant";
import cx from "classnames";
import Link from "next/link";
import React from "react";

const Button = ({
  className = "",
  title,
  icon,
  href = "/",
  labelFirst = false,
  loading = false,
  textSize = "sm",
  onClick,
  isLink = false,
  active = false,
  disabled = false,
  showCartIcon = false,
  cartLength,
  ...other
}) => {
  const classes = cx(
    className,
    `inline-flex text-gray items-center justify-center h-[30px] gap-1.5 rounded-[10px] px-4 bg-foot transition-all ${className} ${
      active ? "shadow-in" : "shadow-out hover:shadow-in"
    } 
    }`
  );

  return isLink ? (
    <div className="relative">
    <Link href={href} className={classes} {...other}>
      {!labelFirst && icon}
      {title}
      {labelFirst && icon}
    </Link>
    {cartLength ?
     <div className="px-2 bg-red-500 absolute flex justify-end -top-3 -right-3 rounded-xl text-white">
      {cartLength}
      </div> : ""}
      </div>
  ) : (
    <button
      disabled={disabled || loading}
      onClick={onClick}
      className={classes}
      {...other}
    >
      {!labelFirst && icon}
      {title}
      {labelFirst && icon}
    </button>

  );
};

export default Button;
