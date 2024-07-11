import Choose from "@/components/coaching/Choose";
import Gain from "@/components/coaching/Gain";
import Program from "@/components/coaching/Program";
import Footer from "@/components/common/Footer";
import GrabPdf from "@/components/common/GrabPdf";
import Header from "@/components/common/Header";
import Navbar from "@/components/common/Navbar";
import Appearnce from "@/components/homePage/Appearnce";
import HomeHeader from "@/components/homePage/HomeHeader";
import MyBrands from "@/components/homePage/MyBrands";
import ProdcastVideos from "@/components/homePage/ProdcastVideos";
import WhoAllan from "@/components/homePage/WhoAllan";
import AllanPrinciple from "@/components/meetAllan/AllanPrinciple";
import AllanStory from "@/components/meetAllan/AllanStory";
import Archivement from "@/components/meetAllan/Archivement";
import BookAllan from "@/components/meetAllan/BookAllan";
import Glimpse from "@/components/meetAllan/Glimpse";
import LawMoney from "@/components/meetAllan/LawMoney";
import Opinion from "@/components/meetAllan/Opinion";
import Sacrifice from "@/components/meetAllan/Sacrifice";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Header /> */}
      <HomeHeader />
      <Appearnce />
      <ProdcastVideos />
      <WhoAllan />
      <MyBrands />
      <GrabPdf />
      <Footer />
    </>
  );
}
