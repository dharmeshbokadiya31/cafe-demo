/* eslint-disable @next/next/no-img-element */
import CheckIcon from "@/icons/checkIcon";
import React from "react";
import NumberButton from "./NumberButton";

const CartCard = ({ title, price, count, showCount }) => {
  return (
    <>
      <div className="relative flex items-start gap-4 rounded-md overflow-hidden p-3">
        <div className="flex gap-2 items-center justify-between w-full">
          <div className="flex items-center justify-between gap-3">
            <CheckIcon />
            <div className="flex flex-col">
              <h2 className="font-medium text-gray mb-0">{title}</h2>
              <h3 className="font-medium text-gray text-[13px]">{price}</h3>
            </div>
          </div>
          {!showCount ? <div className="font-medium text-gray">{count}</div> : <NumberButton count={count} />}
        </div>
      </div>
    </>
  );
};

export default CartCard;
