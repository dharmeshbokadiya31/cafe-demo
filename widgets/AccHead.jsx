import React from "react";
import { Disclosure } from "@headlessui/react";
import { VscTriangleDown } from "react-icons/vsc";

const AccHead = ({ title, open }) => {
  return (
    <Disclosure.Button className="relative flex items-center justify-between w-full">
      <h2 className="font-medium text-gray pr-4 z-[2] bg-foreground leading-normal">
        {title}
      </h2>
      <span className="absolute left-0 w-full top-2/4 -translate-y-2/4 h-[1px] bg-gray/10" />
      <div className="z-[1] pl-4 bg-foreground">
        <VscTriangleDown
          className={`${open ? "rotate-180 transform" : ""} text-cyan `}
        />
      </div>
    </Disclosure.Button>
  );
};

export default AccHead;
