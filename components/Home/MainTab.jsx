/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Disclosure } from "@headlessui/react";
import AccHead from "@/widgets/AccHead";
import CardSm from "@/widgets/CardSm";

const MainTab = () => {
  return (
    <>
      <div className="relative block mb-6">
        <Disclosure>
          {({ open }) => (
            <>
              <AccHead title="Acai bowls" open={open} />
              <Disclosure.Panel className="grid grid-cols-1 gap-4 pt-4">
                <CardSm
                  image="/images/chocolate_bowl.jpeg"
                  title="Sunrise Acai Bowl"
                  price="₹299"
                  cardDetail
                />
                <CardSm
                  image="/images/maui-acai_bowl.jpg"
                  title="Item name in two lines increases height"
                  price="₹299"
                />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
      <div className="relative block mb-6">
        <Disclosure>
          {({ open }) => (
            <>
              <AccHead title="Acai bowls" open={open} />
              <Disclosure.Panel className="grid grid-cols-1 gap-4 pt-4">
                <CardSm
                  image="/images/chocolate_bowl.jpeg"
                  title="Sunrise Acai Bowl"
                  price="₹299"
                />
                <CardSm
                  image="/images/maui-acai_bowl.jpg"
                  title="Item name in two lines increases height"
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

export default MainTab;
