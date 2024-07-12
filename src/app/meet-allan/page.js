import Footer from "@/components/common/Footer";
import GrabPdf from "@/components/common/GrabPdf";
import Header from "@/components/common/Header";
import ScrollToTop from "@/components/common/ScrollToTop";
import AllanPrinciple from "@/components/meetAllan/AllanPrinciple";
import AllanStory from "@/components/meetAllan/AllanStory";
import Archivement from "@/components/meetAllan/Archivement";
import BookAllan from "@/components/meetAllan/BookAllan";
import Glimpse from "@/components/meetAllan/Glimpse";
import LawMoney from "@/components/meetAllan/LawMoney";
import Opinion from "@/components/meetAllan/Opinion";
import Sacrifice from "@/components/meetAllan/Sacrifice";
const page = () => {
  return <>
    <Header
      heading='Meet Allan'
      para='I have a unique ability to motivate people to make short-term sacrifices to build businesses and wealth. Are you next?'
      paddingYclass='lg:pt-[100px] py-16 sm:py-20 md:py-28 lg:pb-[61px]'
      paraclass='max-w-[536px] md:text-start md:mx-0'
      headingclass='md:text-start mx-0'
      background='bg-meetAllanHeaderBg'
      content="flex justify-between flex-col md:flex-row md:items-end"
      button='!flex justify-center md:justify-start'
      btntext='TALK TO ALLAN'
      signature='!flex justify-center md:justify-start'
    />
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
};

export default page;
