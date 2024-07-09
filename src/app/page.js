import Choose from "@/components/coaching/Choose";
import Gain from "@/components/coaching/Gain";
import Program from "@/components/coaching/Program";
import Footer from "@/components/common/Footer";
import GrabPdf from "@/components/common/GrabPdf";
import Header from "@/components/common/Header";
import ReviewSwiperCards from "@/components/common/ReviewSwiperCards";
import Business from "@/components/several/Business";


export default function Home() {
  return <>
  <Header/>
  <Choose/>
  <Gain/>
  <Program/>
  <Business/>
  <ReviewSwiperCards/>
  <GrabPdf/>
  <Footer/>
  </>;
}
