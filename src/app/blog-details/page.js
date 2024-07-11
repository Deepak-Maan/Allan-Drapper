import CommonHeader from "@/components/common/CommonHeader";
import Footer from "@/components/common/Footer";
import GrabPdf from "@/components/common/GrabPdf";
import ScrollToTop from "@/components/common/ScrollToTop";
import Business from "@/components/several/Business";
import Related from "@/components/several/Related";
import React from "react";

const page = () => {
  return (
    <>
      <CommonHeader background="bg-darkGray !min-h-[unset]" />
      <Business />
      <Related />
      <GrabPdf />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default page;
