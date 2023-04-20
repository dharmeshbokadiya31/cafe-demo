/* eslint-disable @next/next/no-img-element */
import Button from "@/widgets/Button";
import React from "react";
import { TbArrowLeft } from "react-icons/tb";
import ChatIcon from "@/icons/chatIcon";

import { Disclosure } from "@headlessui/react";
import AccHead from "@/widgets/AccHead";
import routes from "@/utils/routes";
import CartCard from "@/widgets/CartCard";
import Link from "next/link";

const Cart = () => {
  return (
    <div className="overflow-auto scroll-hidden h-[calc(100%-62px)]">
      <div className="sticky top-0 z-[20] bg-head rounded-b-lg shadow-out">
        <div className=" px-4 py-6 flex items-center justify-between gap-2 ">
          <div className="flex items-center justify-center gap-4">
            <Button
              isLink
              href={routes.home}
              icon={<TbArrowLeft />}
              className="w-[30px] !px-0 !text-xl shadow-glow"
            />
            <h1 className="text-gray font-semibold text-base">Place Order</h1>
          </div>
          <Button icon={<ChatIcon />} className="w-[30px] !px-0 shadow-glow" />
        </div>
      </div>
      <div className="p-6">
        <div className="relative block mb-6">
          <Disclosure>
            {({ open }) => (
              <>
                <AccHead title="Current order" open={open} />
                <Disclosure.Panel className="pt-4">
                  <div className="grid grid-cols-1 shadow-box rounded-lg">
                    <CartCard title="Sunrise Acai Bowl" price="₹299" />
                    <CartCard title="Sunrise Acai Bowl" price="₹299" />
                    <CartCard title="Sunrise Acai Bowl" price="₹299" />
                    <Link href={routes.cart} className="text-[#76DFE5] underline hover:text-cyan p-3 text-sm" >Add cooking instruction</Link>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="relative block mb-6">
          <Disclosure>
            {({ open }) => (
              <>
                <AccHead title="Previous orders" open={open} />
                <Disclosure.Panel className="pt-4">
                  <div className="grid grid-cols-1 shadow-box rounded-lg">
                    <CartCard
                      title="Sunrise Acai Bowl"
                      price="₹299"
                      count="1"
                    />
                    <CartCard
                      title="Sunrise Acai Bowl"
                      price="₹299"
                      count="1"
                    />
                    <CartCard
                      title="Sunrise Acai Bowl"
                      price="₹299"
                      count="2"
                    />
                    <Link href={routes.cart} className="text-[#76DFE5] underline hover:text-cyan p-3 text-sm" >Add cooking instruction</Link>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default Cart;
