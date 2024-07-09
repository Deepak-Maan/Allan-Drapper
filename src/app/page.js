import Choose from "@/components/coaching/Choose";
// import Lawcardlayout from "@/components/coaching/Lawcardlayout";
import Gain from "@/components/coaching/Gain";
import Program from "@/components/coaching/Program";
import Business from "@/components/several/Business";

export default function Home() {
  return  <div>
     <Choose/>
     <Program/>
     <Gain/>
     <Business/>
     {/* <Lawcardlayout/> */}
  </div>;
}
