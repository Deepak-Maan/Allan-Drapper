import CommonHeader from "@/components/common/CommonHeader";
import Footer from "@/components/common/Footer";
import GrabPdf from "@/components/common/GrabPdf";
import ScrollToTop from "@/components/common/ScrollToTop";
import AllanPrinciple from "@/components/meetAllan/AllanPrinciple";
import AllanStory from "@/components/meetAllan/AllanStory";
import Archivement from "@/components/meetAllan/Archivement";
import BookAllan from "@/components/meetAllan/BookAllan";
import Glimpse from "@/components/meetAllan/Glimpse";
import LawMoney from "@/components/meetAllan/LawMoney";
import Opinion from "@/components/meetAllan/Opinion";
import Sacrifice from "@/components/meetAllan/Sacrifice";

export default function Home() {
  return <>
    <CommonHeader />
    <Archivement />
    <AllanStory />
    <AllanPrinciple />
    <Sacrifice />
    <Glimpse />
    <Opinion />
    <LawMoney />
    <BookAllan />
    <GrabPdf />
    <Footer />
    <ScrollToTop />
  </>;
}
