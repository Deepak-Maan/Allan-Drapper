import Header from "@/components/common/Header";
import ProdcastVideos from "@/components/homePage/ProdcastVideos";
import Companies from "@/components/Portfolio/Companies";
import Investments from "@/components/Portfolio/Investments";

export default function Home() {
  return (
    <>
      <Header />
      <ProdcastVideos />
      <Companies />
      <Investments />
    </>
  );
}
