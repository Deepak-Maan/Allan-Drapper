import CommonHeader from "@/components/common/CommonHeader";
import Footer from "@/components/common/Footer";
import GrabPdf from "@/components/common/GrabPdf";
import ScrollToTop from "@/components/common/ScrollToTop";
import Library from "@/components/several/Library";
import React from "react";

const page = () => {
  return (
    <>
      <CommonHeader
        heading="Library"
        paddingYclass="pt-[139px] pb-[219px]"
        background="bg-libraryHeaderBg"
      />
      <Library />
      <GrabPdf />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default page;
