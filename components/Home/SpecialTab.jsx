/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import Card from "@/widgets/Card";
import AccHead from "@/widgets/AccHead";
import { CART_ITEMS } from "@/utils/constant";
import AppContext from "@/utils/appContext";

const itemArray = [
  { id: 1, image: "chocolate_bowl.jpeg", title: "Chocolate Bowl", price: 299 },
  { id: 2, image: "maui-acai_bowl.jpg", title: "Sunset Bowl", price: 300 },
  { id: 3, image: "chocolate_bowl.jpeg", title: "Strawberry Bowl", price: 295 },
  { id: 4, image: "maui-acai_bowl.jpg", title: "Ice Cream Bowl", price: 599 }
]

const SpecialTab = () => {
  const context = useContext(AppContext)

  useEffect(() => {
    let cartItems = localStorage.getItem(CART_ITEMS) && JSON.parse(localStorage.getItem(CART_ITEMS))
    context.setCartItems(cartItems)
  }, [])

  const handleAddItem = (item) => {
    let cartItems = JSON.parse(localStorage.getItem(CART_ITEMS))
      let newItems = cartItems?.length ? [...cartItems, item] : [item]
      localStorage.setItem(CART_ITEMS, JSON.stringify(newItems))
      context.setCartItems(newItems)
  }

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
                {itemArray?.map(item => 
                  <Card
                    key={item.id}
                    image={`/images/${item.image}`}
                    title={item.title}
                    price={`₹${item.price}`}
                    onClick={() => handleAddItem(item)}
                  />)}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};

export default SpecialTab;
