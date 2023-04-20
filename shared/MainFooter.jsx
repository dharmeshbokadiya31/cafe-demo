/* eslint-disable @next/next/no-img-element */
import Button from "@/widgets/Button";
import React from "react";
import { RiShoppingBag3Line } from "react-icons/ri";
import { FiBookOpen } from "react-icons/fi";
import ThunderIcon from "@/icons/thunderIcon";
import routes from "@/utils/routes";
import { useRouter } from "next/router"

const MainFooter = () => {

  const router = useRouter()

  return (
    <div className="absolute bottom-0 left-0 w-full p-4 px-8 bg-foot rounded-t-lg">
      <div className="flex items-center justify-between gap-2 ">
        <Button
          isLink
          icon={<ThunderIcon />}
          className="w-[30px] !px-0 !text-base"
        />
        <Button
          isLink
          href={routes.home}
          active={router.pathname === routes.home ? true : false}
          icon={<FiBookOpen />}
          className="w-[30px] !px-0 !text-base"
          />
        <Button
          isLink
          href={routes.cart}
          active={router.pathname === routes.cart ? true : false}
          icon={<RiShoppingBag3Line />}
          className="w-[30px] !px-0 !text-base"
        />
      </div>
    </div>
  );
};

export default MainFooter;
