/* eslint-disable @next/next/no-img-element */
import Button from "@/widgets/Button";
import React from "react";
import { RiUserVoiceFill, RiHashtag } from "react-icons/ri";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MainTab from "./MainTab";
import SpecialTab from "./SpecialTab";

const Home = () => {
  return (
    <Tabs className="overflow-auto scroll-hidden h-[calc(100%-62px)]">
      <div className="sticky top-0 z-[20] bg-head rounded-b-lg shadow-out">
        <div className=" px-4 py-8 flex items-center justify-between gap-2 ">
          <div className="flex items-center justify-center gap-2">
            <img
              src="/images/black_cafe.jpeg"
              className="h-7 w-7 rounded-full object-cover bg-no-repeat bg-center"
              alt="Cafe Image"
            />
            <h1 className="text-gray font-semibold text-base">
              Sacred Earth Cafe
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <Button
              icon={<RiUserVoiceFill />}
              className="w-[30px] !px-0 !text-base"
            />
            <Button
              icon={<RiHashtag />}
              className="w-[30px] !px-0 !text-base"
            />
          </div>
        </div>
        <TabList className="flex items-center overflow-y-hidden overflow-x-auto scroll-hidden">
          <Tab
            className="text-gray/40 pb-3 px-5 font-semibold border-b-2 border-transparent cursor-pointer"
            selectedClassName="!text-cyan !border-cyan"
          >
            Special
          </Tab>
          <Tab
            className="text-gray/40 pb-3 px-5 font-semibold border-b-2 border-transparent cursor-pointer"
            selectedClassName="!text-cyan !border-cyan"
          >
            Main
          </Tab>
          <Tab
            className="text-gray/40 pb-3 px-5 font-semibold border-b-2 border-transparent cursor-pointer"
            selectedClassName="!text-cyan !border-cyan"
          >
            Deserts
          </Tab>
          <Tab
            className="text-gray/40 pb-3 px-5 font-semibold border-b-2 border-transparent cursor-pointer"
            selectedClassName="!text-cyan !border-cyan"
          >
            Beverages
          </Tab>
        </TabList>
      </div>
      <div className="p-5">
        <TabPanel>
          <SpecialTab />
        </TabPanel>
        <TabPanel>
          <MainTab />
        </TabPanel>
        <TabPanel>
          <MainTab />
        </TabPanel>
        <TabPanel>
          <MainTab />
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default Home;
