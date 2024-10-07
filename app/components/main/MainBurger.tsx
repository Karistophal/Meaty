import React from 'react'
import Band from '../Band'
import Image from 'next/image'
import CardImage from '../CardImage'

import Bacon from "@/app/assets/foodCard/Bacon.png"
import Cheese from "@/app/assets/foodCard/CheesePiece.png"
import Tomatoes from "@/app/assets/foodCard/Tomatoes.png"
import Steak from "@/app/assets/foodCard/Steaks.png"
import Bread from "@/app/assets/foodCard/BurgerBreads.png"
import Sauce from "@/app/assets/foodCard/Sauce.png"

import Certification from "@/app/assets/Certification.png"
import BurgerSvg from "@/app/assets/BurgerSvg.svg"
import Burger from "@/app/assets/Burger.png"


function MainBurger() {
    return (
        <div className="relative w-[500px] min-h-[2400px] flex flex-col items-center mt-[100px]">
            <Band first />
            <div className="relative w-full min-h-[2400px] bg-[#FEC51C] rounded-full z-0" >
                <Image src={Burger} alt="Burger" layout="responsive" width={100} height={100} className="absolute pl-2 z-20" />
                <div>
                    <p className="absolute w-[1400px] -left-[calc(700px-50%)] top-[-100px] text-center text-10xl font-black text-[var(--fontColor)] fontsherif">LOVE EVERY BITE</p>
                    <Image src={Certification} alt="Certfication" width={200} height={200} className="absolute left-[105%] z-20 rotate-[25deg]" />
                </div>
            </div>
            <div className="absolute w-full h-full rounded-full overflow-hidden">
                <Image src={BurgerSvg} alt="Burger" width={280} height={280} className="absolute -bottom-[100px] left-1/2 -translate-x-1/2 z-20" />
            </div>

            <div className="absolute w-[140%] h-full translate-y-[580px]">
                <div className="text-center text-10xl font-black text-[var(--fontColor)] fontsherif">OUR SECRET RECIPE</div>


                <CardImage src={Bacon} title="Bacon" text="Powered by bacon and admit it, for a seconde here, all your problems were away" left='-100px' rotation='-13deg' top='450px' />
                <CardImage src={Cheese} title="Cheese" text="The cheese for an awewome healthy future, because cheese means more" left='-110px' top='950px' />
                <CardImage src={Tomatoes} title="Veggie" text="Veggies filled with the essence of nature, don't panic, it's organic" left='-110px' rotation="-13deg" top='1500px'  />
                <CardImage src={Steak} title="Patty" text="100% pure beef, big and beefy, go wild for our juicy beefy burgers" right='-110px' rotation="13deg" top='550px' />
                <CardImage src={Bread} title="Bun" text="Fresh bun, baked to perfection, where every loaf is a masterpiece" right='-150px' rotation="-13deg" top='1050px' />
                <CardImage src={Sauce} title="Sauce" text="Our secret sauce, a blend of spices and herbs, a taste of heaven" right='-60px' top='1570px' />
            </div>

        </div>
    )
}

export default MainBurger