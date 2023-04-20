import cx from "classnames";
import React from "react";
import { HiPlus, HiMinus } from "react-icons/hi";

const NumberButton = ({ className = "", title, ...other }) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <div
      className={`inline-flex text-gray items-center justify-center h-[32px] gap-3 rounded-lg px-1.5 bg-foot font-medium text-[13px] shadow-out  uppercase transition-all ${className} `}
      {...other}
    >
      <button type="button" className="h-6 w-6 bg-foot shadow-in hover:shadow-out focus:shadow-in flex items-center justify-center text-cyan rounded-full">
        <HiMinus />
      </button>
      <span>1</span>
      <button type="button" className="h-6 w-6 bg-foot shadow-in hover:shadow-out focus:shadow-in flex items-center justify-center text-cyan rounded-full">
        <HiPlus />
      </button>
    </div>
  );
};

export default NumberButton;
