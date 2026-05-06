import FunForAllAges from "@/components/FunForAllAges";
import HomeHero from "@/components/HomeHero";
import ProductSlider from "@/components/ProductSlider";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HomeHero/>
      <ProductSlider/>
      <FunForAllAges/>
    </div>
  );
}
