import Brand from "@/components/coaching/Brand";
import Choose from "@/components/coaching/Choose";
import Gain from "@/components/coaching/Gain";
import Program from "@/components/coaching/Program";
import Wellsay from "@/components/coaching/Wellsay";
import CommonHeader from "@/components/common/CommonHeader";
import Footer from "@/components/common/Footer";
import GrabPdf from "@/components/common/GrabPdf";
import React from "react";

const page = () => {
  return <div>
    <CommonHeader
      heading='Coaching with Allan Draper'
      para="Welcome to Allan Draper's coaching, offering strategies, insights, and motivation to elevate your business and success."
      paddingYclass='pt-[100px] pb-[165px]'
      headingclass='max-w-[975px] mx-auto'
      background='bg-coachingHeaderBg'
      paraclass="max-w-[605px] mx-auto" />
    <Choose />
    <Program />
    <Gain />
    <Brand />
    <Wellsay />
    <GrabPdf />
    <Footer />
  </div>;
};

export default page;
