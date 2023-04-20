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
    <Link href={href} className={classes} {...other}>
      {!labelFirst && icon}
      {title}
      {labelFirst && icon}
    </Link>
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
