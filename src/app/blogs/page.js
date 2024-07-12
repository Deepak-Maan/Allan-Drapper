import GrabPdf from "@/components/common/GrabPdf";
import Header from "@/components/common/Header";
import Library from "@/components/several/Library";
import React from "react";

const page = () => {
  return (
    <>
      <Header
        heading="Library"
        paddingYclass="pt-[139px] pb-[219px]"
        background="bg-libraryHeaderBg"
      />
      <Library />
      <GrabPdf />
    </>
  );
};

export default page;
