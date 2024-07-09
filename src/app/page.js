import GrabPdf from "@/components/common/GrabPdf";
import Companies from "@/components/Portfolio/Companies";
import Hustle from "@/components/Portfolio/Hustle";
import Investments from "@/components/Portfolio/Investments";
import Work from "@/components/Portfolio/Work";

export default function Home() {
  return <>
  <Companies/>
  <Investments/>
  <Work/>
  <Hustle/>
  <GrabPdf/>
  </>;
}
