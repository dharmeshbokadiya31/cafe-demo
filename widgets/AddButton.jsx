import cx from "classnames";
import React from "react";
import { HiPlus } from 'react-icons/hi'

const AddButton = ({
  className = "",
  title,
  ...other
}) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={`inline-flex text-gray items-center justify-center h-[32px] gap-1.5 rounded-lg px-1.5 bg-foot font-medium text-[13px] shadow-out hover:shadow-in uppercase transition-all ${className} `}
      {...other}
    >
      <span className="h-6 w-6 bg-foot shadow-in flex items-center justify-center text-cyan rounded-full">
        <HiPlus />
      </span>

      Add
    </button>
  );
};

export default AddButton;
