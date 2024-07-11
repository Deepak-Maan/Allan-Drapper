import Brand from "@/components/coaching/Brand";
import Choose from "@/components/coaching/Choose";
import Gain from "@/components/coaching/Gain";
import Program from "@/components/coaching/Program";
import Wellsay from "@/components/coaching/Wellsay";
import Footer from "@/components/common/Footer";
import GrabPdf from "@/components/common/GrabPdf";
import Business from "@/components/several/Business";
import Related from "@/components/several/Related";

export default function Home() {
  return <>
  <Choose/>
  <Program/>
  <Gain/>
  <Brand/>  
  <Wellsay/>
  <GrabPdf/>
  <Footer/>
  <Business/>  
  <Related/>
  </>;
}
