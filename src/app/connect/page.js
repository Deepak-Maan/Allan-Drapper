import GrabPdf from "@/components/common/GrabPdf";
import Header from "@/components/common/Header";
import FormValidation from "@/components/connect/FormValidation";
import React from "react";

const page = () => {
  return (
    <>
      <Header
        heading="Connect with Allan"
        paddingYclass="lg:pt-[139px] py-16 sm:py-20 md:py-28 lg:pb-[219px]"
        background="bg-connectHeaderBg"
      />
      <FormValidation />
      <GrabPdf />
    </>
  );
};

export default page;
