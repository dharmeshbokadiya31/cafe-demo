/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Disclosure } from "@headlessui/react";
import AccHead from "@/widgets/AccHead";
import CheckIcon from "@/icons/checkIcon";
import AddButton from "@/widgets/AddButton";
import Card from "@/widgets/Card";

const SpecialTab = () => {
  return (
    <>
      <div className="relative h-32 rounded-md overflow-hidden flex items-end p-4 shadow-thumb-img">
        <h1 className="font-medium text-white z-[2]">
          Welcome to <span className="block">Sacred Earth Cafe</span>
        </h1>
        <span className="absolute inset-0 bg-black/30 z-[1]" />
        <img src="/images/cafe.jpg" className="absolute inset-0" alt="cafe" />
      </div>

      <div className="relative block my-6">
        <Disclosure >
          {({ open }) => (
            <>
              <AccHead title="Today’s Special" open={open} />
              <Disclosure.Panel className="grid grid-cols-2 gap-4 pt-4">
                <Card
                  image="/images/chocolate_bowl.jpeg"
                  title="Chocolate Bowl"
                  price="₹299"
                />
                <Card
                  image="/images/maui-acai_bowl.jpg"
                  title=" Sunset Acai Bowl"
                  price="₹299"
                />
                <Card
                  image="/images/chocolate_bowl.jpeg"
                  title="Chocolate Bowl"
                  price="₹299"
                />
                <Card
                  image="/images/maui-acai_bowl.jpg"
                  title=" Sunset Acai Bowl"
                  price="₹299"
                />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};

export default SpecialTab;
