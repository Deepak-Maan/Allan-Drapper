import CommonHeader from "@/components/common/CommonHeader";
import AllanStory from "@/components/meetAllan/AllanStory";
import Archivement from "@/components/meetAllan/Archivement";
import React from "react";

const page = () => {
  return <div>
   <CommonHeader
heading='Meet Allan'
para='I have a unique ability to motivate people to make short-term sacrifices to build businesses and wealth. Are you next?'
paddingYclass='pt-[100px] pb-[61px]'
paraclass='max-w-[536px] md:text-start md:mx-0'
headingclass='md:text-start mx-0'
background='bg-meetAllanHeaderBg'
content="flex justify-between flex-col md:flex-row md:items-end"
button='!flex justify-center md:justify-start'
btntext='TALK TO ALLAN'
signature='!flex justify-center md:justify-start'
/>
  </div>;
};

export default page;
