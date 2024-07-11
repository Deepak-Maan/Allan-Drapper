import Choose from "@/components/coaching/Choose";
import Gain from "@/components/coaching/Gain";
import Program from "@/components/coaching/Program";
import Wellsay from "@/components/coaching/Wellsay";
import Footer from "@/components/common/Footer";
import GrabPdf from "@/components/common/GrabPdf";
import Header from "@/components/common/Header";
import Business from "@/components/several/Business";
import Library from "@/components/several/Library";
import Related from "@/components/several/Related";


export default function Home() {
  return <>
  <Header/>
  <Choose/>
  <Program/>
  <Gain/>  
  <Wellsay/>
  <Related/>
  <Business/>
  <GrabPdf/>
  <Footer/>
  <Library/>
  </>;
}
