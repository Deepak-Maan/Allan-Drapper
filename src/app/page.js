import Header from "@/components/common/Header";
import AllanPrinciple from "@/components/meetAllan/AllanPrinciple";
import AllanStory from "@/components/meetAllan/AllanStory";
import Archivement from "@/components/meetAllan/Archivement";
import Glimpse from "@/components/meetAllan/Glimpse";
import LawMoney from "@/components/meetAllan/LawMoney";
import Opinion from "@/components/meetAllan/Opinion";
import Sacrifice from "@/components/meetAllan/Sacrifice";

export default function Home() {
  return <>
  <Header/>
    <Archivement />
    <AllanStory />
    <AllanPrinciple/>
    <Sacrifice/>
    <Glimpse/>
    <Opinion/>
    <LawMoney/>
  </>;
}
