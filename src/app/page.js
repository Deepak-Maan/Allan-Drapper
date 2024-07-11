import Footer from "@/components/common/Footer";
import GrabPdf from "@/components/common/GrabPdf";
import ScrollToTop from "@/components/common/ScrollToTop";
import Appearnce from "@/components/homePage/Appearnce";
import HomeHeader from "@/components/homePage/HomeHeader";
import MyBrands from "@/components/homePage/MyBrands";
import ProdcastVideos from "@/components/homePage/ProdcastVideos";
import Review from "@/components/homePage/Review";
import WhoAllan from "@/components/homePage/WhoAllan";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <Appearnce />
      <ProdcastVideos />
      <WhoAllan />
      <MyBrands />
      <Review />
      <GrabPdf />
      <Footer />
      <ScrollToTop />
    </>
  );
}
