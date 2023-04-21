/* eslint-disable @next/next/no-img-element */
import CheckIcon from "@/icons/checkIcon";
import React from "react";
import AddButton from "./AddButton";

const Card = ({ image, title, price, onClick = () => false }) => {
  return (
    <div className="relative rounded-md overflow-hidden shadow-card-in bg-card">
      <img src={image} className="h-32 cover" alt="" />
      <div className="flex flex-col gap-2 p-2">
        <div className="flex items-center gap-1">
          <CheckIcon />
          <h2 className="font-medium text-gray">{title}</h2>
        </div>
        <div className="flex items-center justify-between gap-1">
          <h3 className="font-medium text-gray text-[13px]">{price}</h3>
          <AddButton onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default Card;
