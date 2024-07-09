import Footer from "@/components/common/Footer";
import GrabPdf from "@/components/common/GrabPdf";
import Header from "@/components/common/Header";
import ProdcastVideos from "@/components/homePage/ProdcastVideos";
import WhoAllan from "@/components/homePage/WhoAllan";
import Companies from "@/components/Portfolio/Companies";
import Hustle from "@/components/Portfolio/Hustle";
import Investments from "@/components/Portfolio/Investments";
import Work from "@/components/Portfolio/Work";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <ProdcastVideos />
      <WhoAllan />
      <GrabPdf />
      <Footer />
      {/* <Companies />
      <Investments /> */}
    </>
  );
}
