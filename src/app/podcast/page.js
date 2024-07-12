
import Footer from "@/components/common/Footer";
import GrabPdf from "@/components/common/GrabPdf";
import Header from "@/components/common/Header";
import ScrollToTop from "@/components/common/ScrollToTop";
import AllanDaper from "@/components/podcast/AllanDaper";
import DoYou from "@/components/podcast/DoYou";
import ReviewSwiper from "@/components/podcast/ReviewSwiper";
import StopGoogling from "@/components/podcast/StopGoogling";
import WorldMost from "@/components/podcast/WorldMost";
import React from "react";

const page = () => {
  return<>
<Header
heading='Welcome to The Allan Draper Show!'
para='Allan has recorded hundreds of podcast episode with some of the successful and motivational entrepreneur in the world.'
paddingYclass='lg:pt-[100px]  py-16 sm:py-20 md:py-28 lg:pb-[180px]'
paraclass='max-w-[652px]'
background='bg-podcastHeaderBg'/>
  <StopGoogling/>
  <WorldMost/>
  <DoYou/>
  <ReviewSwiper/>
  <AllanDaper/>
  <GrabPdf/>
  </>
};

export default page;
