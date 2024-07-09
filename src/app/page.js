import Footer from "@/components/common/Footer";
import GrabPdf from "@/components/common/GrabPdf";
// import Header from "@/components/common/Header";
// import ProdcastVideos from "@/components/homePage/ProdcastVideos";
// import WhoAllan from "@/components/homePage/WhoAllan";
// import AllanPrinciple from "@/components/meetAllan/AllanPrinciple";
// import AllanStory from "@/components/meetAllan/AllanStory";
// import Archivement from "@/components/meetAllan/Archivement";
// import BookAllan from "@/components/meetAllan/BookAllan";
// import Glimpse from "@/components/meetAllan/Glimpse";
// import LawMoney from "@/components/meetAllan/LawMoney";
// import Opinion from "@/components/meetAllan/Opinion";
// import Sacrifice from "@/components/meetAllan/Sacrifice";
import Investments from "@/components/Portfolio/Investments";
import Companies from "@/components/Portfolio/Companies";
import Hustle from "@/components/Portfolio/Hustle";
import Work from "@/components/Portfolio/Work";
import Navbar from "@/components/common/Navbar";

export default function Home() {
  return (
    <>
    <Navbar/>
      {/* <Header /> */}
      {/* <ProdcastVideos /> */}
      {/* <WhoAllan /> */}
      <Companies />
      <Investments />
      <Work/>
      <Hustle/>
      <GrabPdf />
      <Footer />
      {/* <Choose /> */}
      {/* <Program /> */}
      {/* <Gain /> */}
      {/* <Business /> */}
    </>
  );
}
