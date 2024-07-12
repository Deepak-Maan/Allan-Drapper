import Footer from "@/components/common/Footer";
import GrabPdf from "@/components/common/GrabPdf";
import Header from "@/components/common/Header";
import ScrollToTop from "@/components/common/ScrollToTop";
import Keynote from "@/components/speaking/Keynote";
import Memories from "@/components/speaking/Memories";
import React from "react";

const page = () => {
  return <>
    <Header
      heading='For years Allan has been inspiring others to build their businesses and wealth.'
      para='Build, scale 8-9 figure businesses, leverage network, repeat success formula.'
      paddingYclass='pt-[84px] pb-[165px]'
      headingclass='max-w-[975px] mx-auto'
      background='bg-speakingHeaderBg' />
    <Keynote />
    <Memories />
    <GrabPdf />
    <Footer />
    <ScrollToTop />
  </>;
};

export default page;
