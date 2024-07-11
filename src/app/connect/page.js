import CommonHeader from "@/components/common/CommonHeader";
import Footer from "@/components/common/Footer";
import GrabPdf from "@/components/common/GrabPdf";
import FormValidation from "@/components/connect/FormValidation";
import React from "react";

const page = () => {
  return <>
    <CommonHeader
    heading='Connect with Allan'
    paddingYclass='pt-[139px] pb-[219px]'
    background='bg-connectHeaderBg'/>
    <FormValidation/>
<GrabPdf/>
    <Footer/>
  </>;
};

export default page;
