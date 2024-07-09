
import CommonHeader from "@/components/common/CommonHeader";
import AllanDaper from "@/components/podcast/AllanDaper";
import DoYou from "@/components/podcast/DoYou";
import ReviewSwiper from "@/components/podcast/ReviewSwiper";
import StopGoogling from "@/components/podcast/StopGoogling";
import WorldMost from "@/components/podcast/WorldMost";
import React from "react";

const page = () => {
  return<>
<CommonHeader/>
  <StopGoogling/>
  <WorldMost/>
  <DoYou/>
  <ReviewSwiper/>
  <AllanDaper/>
  </>
};

export default page;
