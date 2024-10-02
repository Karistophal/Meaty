import Image from "next/image";
import Burger from "@/app/assets/Burger.png"
import Sauce from "@/app/assets/Sauce.png"

import Header from "./components/Header";
import CardImage from "./components/CardImage";
import Band from "./components/Band";
import MainBurger from "./components/main/MainBurger";
import TextFoodRules from "./components/main/TextFoodRules";

export default function Home() {
  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden">
      <Header />
      <MainBurger />
      <TextFoodRules />
      
      {/* Bandeau Bas */}
      <div className="mt-[200px]">
        <Band />
      </div>

      {/* Buttom Burger */}
      <div className="mt-[1000px]"></div>
      <div className="absolute w-[500px] min-h-[1400px] bg-[#FEC51C] rounded-full flex flex-col mt-[100px] bottom-0 translate-y-1/2">
        <p className="absolute w-[1400px] -left-[calc(700px-50%)] top-[-100px] text-center text-10xl font-black text-[var(--fontColor)] fontsherif">ORDER NOW</p>
        <Image src={Burger} alt="Burger" layout="responsive" width={100} height={100} className="absolute pl-2 z-20" />
      </div>

      <Header />
    </div>
  );
}
