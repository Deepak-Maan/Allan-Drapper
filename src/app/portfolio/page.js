import CommonHeader from "@/components/common/CommonHeader";
import Footer from "@/components/common/Footer";
import GrabPdf from "@/components/common/GrabPdf";
import Companies from "@/components/Portfolio/Companies";
import Hustle from "@/components/Portfolio/Hustle";
import Investments from "@/components/Portfolio/Investments";
import Work from "@/components/Portfolio/Work";
import React from "react";

const page = () => {
  return (
    <div className=" text">
      <CommonHeader
        heading="My Brands"
        para="I have built multiple brands in different industries. I have built amazing teams and couldn’t have done it alone."
        paddingYclass="lg:pt-[100px] lg:pb-[180px] py-16 sm:py-20 md:py-28"
        paraclass="max-w-[536px] md:text-start md:mx-0"
        headingclass="md:text-start mx-0"
        background="bg-portFolioHeaderBg"
        content="flex justify-between flex-col md:flex-row md:items-end"
        button="!flex justify-center md:justify-start !text-nowrap"
        btntext="PARTNER WITH ALLAN"
      />
      <Companies/>
      <Investments/>
      <Work/>
      <Hustle/>
      <GrabPdf/>
      <Footer/>
    </div>
  );
};

export default page;
