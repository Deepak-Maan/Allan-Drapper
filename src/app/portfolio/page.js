import CommonHeader from "@/components/common/CommonHeader";
import React from "react";

const page = () => {
  return <div className=" text">
    <CommonHeader
heading='My Brands'
para='I have built multiple brands in different industries. I have built amazing teams and couldn’t have done it alone.'
paddingYclass='pt-[100px] pb-[180px]'
paraclass='max-w-[536px] md:text-start md:mx-0'
headingclass='md:text-start mx-0'
background='bg-portFolioHeaderBg'
content="flex justify-between flex-col md:flex-row md:items-end"
button='!flex justify-center md:justify-start'
btntext='PARTNER WITH ALLAN'/>
  </div>;
};

export default page;
