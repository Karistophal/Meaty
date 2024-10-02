import React from 'react'
import Band from '../Band'
import Image from 'next/image'

import Certification from "@/app/assets/Certification.png"
import BurgerSvg from "@/app/assets/BurgerSvg.svg"
import Burger from "@/app/assets/Burger.png"


function MainBurger() {
    return (
        <div className="relative w-[500px] min-h-[2000px] flex flex-col items-center mt-[100px]">
            <Band first />
            <div className="relative w-full min-h-[2000px] bg-[#FEC51C] rounded-full z-0" >
                <Image src={Burger} alt="Burger" layout="responsive" width={100} height={100} className="absolute pl-2 z-20" />
                <div>
                    <p className="absolute w-[1400px] -left-[calc(700px-50%)] top-[-100px] text-center text-10xl font-black text-[var(--fontColor)] fontsherif">LOVE EVERY BITE</p>
                    <Image src={Certification} alt="Certfication" width={200} height={200} className="absolute left-[105%] z-20 rotate-[25deg]" />
                </div>
            </div>
            <div className="absolute w-full h-full rounded-full overflow-hidden">
                <Image src={BurgerSvg} alt="Burger" width={280} height={280} className="absolute -bottom-[100px] left-1/2 -translate-x-1/2 z-20" />
            </div>
        </div>
    )
}

export default MainBurger