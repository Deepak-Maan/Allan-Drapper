import CommonHeader from "@/components/common/CommonHeader";
import FormValidation from "@/components/connect/FormValidation";
import React from "react";

const page = () => {
  return <div>
    <CommonHeader
    heading='Connect with Allan'
    paddingYclass='pt-[139px] pb-[219px]'
    background='bg-connectHeaderBg'/>
    <FormValidation/>
  </div>;
};

export default page;
