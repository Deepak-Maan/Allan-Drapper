import Header from "@/components/common/Header";
import ProdcastVideos from "@/components/homePage/ProdcastVideos";
import Companies from "@/components/Portfolio/Companies";
import Hustle from "@/components/Portfolio/Hustle";
import Investments from "@/components/Portfolio/Investments";
import Work from "@/components/Portfolio/Work";

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
