/* eslint-disable @next/next/no-img-element */
import CheckIcon from "@/icons/checkIcon";
import React from "react";
import AddButton from "./AddButton";

const CardSm = ({ image, title, price, cardDetail = false, onClick = () => false }) => {
  return (
    <>
      <div className="relative flex items-start gap-4 rounded-md overflow-hidden shadow-card-in p-3 bg-card">
        <img src={image} className="w-[70px] h-[70px] cover rounded-lg" alt="" />
        <div className="flex flex-col gap-2 w-full h-full justify-between">
          <h2 className="font-medium text-gray mb-0">{title}</h2>
          <div className="flex items-center justify-between gap-1">
            <div className="flex items-center gap-2">
              <CheckIcon />
              <h3 className="font-medium text-gray text-[13px]">{price}</h3>
            </div>
            <AddButton onClick={onClick} />
          </div>
        </div>
      </div>

      {cardDetail && (
        <div className="relative flex items-start gap-4 rounded-md overflow-hidden shadow-card-in p-3 bg-card">
          <div className="flex flex-col gap-2 w-full">
            <h2 className="font-medium text-gray mb-0">{title}</h2>
            <div className="flex items-center justify-between gap-1">
              <div className="flex items-center gap-2">
                <CheckIcon />
                <h3 className="font-medium text-gray text-[13px]">{price}</h3>
              </div>
              <AddButton onClick={onClick} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardSm;
