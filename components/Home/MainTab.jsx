/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import { Disclosure } from "@headlessui/react";
import AccHead from "@/widgets/AccHead";
import CardSm from "@/widgets/CardSm";
import { CART_ITEMS } from "@/utils/constant";
import AppContext from "@/utils/appContext";

const MainTab = () => {
  const context = useContext(AppContext)
  const itemArray = [
    { id: 5, image: "chocolate_bowl.jpeg", title: "Chocolate Acai Bowl", price: 299 },
    { id: 6, image: "maui-acai_bowl.jpg", title: "Sunset Acai Bowl", price: 300 },
    { id: 7, image: "chocolate_bowl.jpeg", title: "Strawberry Acai Bowl", price: 295 },
    { id: 8, image: "maui-acai_bowl.jpg", title: "Ice Cream Acai Bowl", price: 599 }
  ]

  const itemArrayDown = [
    { id: 9, image: "chocolate_bowl.jpeg", title: "Chocolate Bowl Down", price: 299 },
    { id: 10, image: "maui-acai_bowl.jpg", title: "Sunset Bowl Down", price: 300 },
    { id: 11, image: "chocolate_bowl.jpeg", title: "Strawberry Bowl Down", price: 295 },
    { id: 12, image: "maui-acai_bowl.jpg", title: "Ice Cream Bowl Down", price: 599 }
  ]

  const handleAddItem = (item) => {
    let cartItems = JSON.parse(localStorage.getItem(CART_ITEMS))
    let newItems = cartItems?.length ? [...cartItems, item] : [item]
    localStorage.setItem(CART_ITEMS, JSON.stringify(newItems))
    context.setCartItems(newItems)
  }

  return (
    <>
      <div className="relative block mb-6">
        <Disclosure>
          {({ open }) => (
            <>
              <AccHead title="Acai bowls" open={open} />
              <Disclosure.Panel className="grid grid-cols-1 gap-4 pt-4">
              {itemArray?.map(item => 
                <CardSm
                  key={item.id}
                  image={`/images/${item.image}`}
                  title={item.title}
                  price={`₹${item.price}`}
                  cardDetail
                  onClick={() => handleAddItem(item)}
                />)}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
      <div className="relative block mb-6">
        <Disclosure>
          {({ open }) => (
            <>
              <AccHead title="Acai bowls down" open={open} />
              <Disclosure.Panel className="grid grid-cols-1 gap-4 pt-4">
              {itemArrayDown?.map(item => 
                <CardSm
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

export default MainTab;
