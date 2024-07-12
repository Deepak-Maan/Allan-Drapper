import GrabPdf from "@/components/common/GrabPdf";
import Header from "@/components/common/Header";
import Business from "@/components/several/Business";
import Related from "@/components/several/Related";
import React from "react";

const page = () => {
  return (
    <>
      <Header background="bg-darkGray !min-h-[unset]" />
      <Business />
      <Related />
      <GrabPdf />
    </>
  );
};

export default page;
