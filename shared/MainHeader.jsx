/* eslint-disable @next/next/no-img-element */
import Button from "@/widgets/Button";
import React from "react";
import { RiUserVoiceFill, RiHashtag } from "react-icons/ri"

const MainHeader = () => {
  return (
    <div className="px-4 py-8 bg-head rounded-b-lg shadow-out">
      <div className="flex items-center justify-between gap-2 ">
        <div className="flex items-center justify-center gap-2">
          <img
            src="/images/black_cafe.jpeg"
            className="h-7 w-7 rounded-full object-cover bg-no-repeat bg-center"
            alt="Cafe Image"
          />
          <h1 className="text-gray font-semibold text-base">Sacred Earth Cafe</h1>
        </div>

        <div className="flex items-center gap-4">
          <Button icon={<RiUserVoiceFill />} className="w-[30px] !px-0 !text-base" />
          <Button icon={<RiHashtag />} className="w-[30px] !px-0 !text-base" />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
