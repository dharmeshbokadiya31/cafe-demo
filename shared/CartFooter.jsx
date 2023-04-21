/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { TbArrowRight } from "react-icons/tb";
import { useRouter } from "next/router";
import { CART_ITEMS } from "@/utils/constant";
import routes from "@/utils/routes";

const CartFooter = () => {
  const router = useRouter();
  const [cartCount, setCartCount] = useState(0)
  useEffect(() => {
    let cartLength = JSON.parse(localStorage.getItem(CART_ITEMS))?.length
    setCartCount(cartLength || 0)
  }, [])

  const placeOrder = () => {
    localStorage.clear()
    router.push(routes.home)
  }
  return (
    <div className="absolute bottom-0 left-0 w-full p-2  rounded-t-lg">
      <div className="flex items-center justify-between rounded-lg p-2 gap-2 bg-gradient-to-r from-[#459EAF] to-[#007991] shadow-cartfoot ">
        <div className="text-xs font-medium text-white pl-2">{cartCount} Items</div>
        <div className="relative flex items-center gap-3">
          <p className="uppercase text-white font-medium text-[13px] leading-normal">PLACE ORDER</p>
          <button className="h-7 w-7 rounded-full bg-gradient-to-l from-[#459EAF] to-[#007991] shadow-cartbtn flex items-center justify-center text-white text-lg">
            <TbArrowRight onClick={() => placeOrder()} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartFooter;
