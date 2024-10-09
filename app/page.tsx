"use client"

import Image from "next/image";
import Burger from "@/app/assets/Burger.png"

import Header from "./components/Header";
import Band from "./components/Band";
import MainBurger from "./components/main/MainBurger";
import TextFoodRules from "./components/main/TextFoodRules";
import Loader from "./components/Loader"; 
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // Remet le user en haut de la page
  }, []);  
  
  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden select-text">
      <Header top />  
      <MainBurger />
      <TextFoodRules />
      
      <div className="lg:mt-[200px] sm:mt-[150px] mt-[100px]">
        <Band />
      </div>

      {/* Buttom Burger */}
      <div className="lg:mt-[1000px] md:mt-[750px] sm:mt-[600px] mt-[500px]"></div>
      <div className="absolute lg:w-[500px] md:w-[400px] sm:w-[300px] w-[250px] lg:min-h-[1400px] md:min-h-[1120px] sm:min-h-[840px] h-[700px] bg-[#FEC51C] rounded-full flex flex-col mt-[100px] bottom-0 translate-y-1/2">
        <p className="absolute w-[1400px] -left-[calc(700px-50%)] lg:top-[-100px] md:top-[-70px] sm:top-[-55px] top-[-40px] text-center lg:text-10xl md:text-9xl sm:text-8xl text-7xl font-black text-[var(--fontColor)] fontsherif">ORDER NOW</p>
        <Image src={Burger} alt="Burger"className="absolute pl-2 z-20" />
      </div>

      <Header />
      <Loader />
    </div>
  );
}
