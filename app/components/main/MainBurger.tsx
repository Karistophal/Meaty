"use client";

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

import { motion } from 'framer-motion'

function MainBurger() {
    return (
        <motion.div className="relative lg:w-[500px] md:w-[400px] sm:w-[300px] w-[250px] min-h-[2400px] flex flex-col items-center mt-[100px]" initial={{ opacity: 0, y: 300 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 6 }}>

            <Band first />
            <div className="relative w-full min-h-[2400px] bg-[#FEC51C] rounded-full z-0" >
                <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 6.5, ease: "easeInOut" }} className="absolute pl-2 z-20">
                    <Image src={Burger} alt="Burger" layout="responsive" className='w-full' />
                </motion.div>

                <div>
                    <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 7, ease: "easeInOut" }}>
                        <p className="absolute w-[1400px] -left-[calc(700px-50%)] lg:top-[-100px] md:top-[-70px] sm:top-[-55px] top-[-40px] text-center lg:text-10xl md:text-9xl sm:text-8xl text-7xl font-black text-[var(--fontColor)] fontsherif">LOVE EVERY BITE</p>
                    </motion.div>

                    <motion.div initial={{ y: -100, scale: 1.5, rotate: 20, opacity: 0 }} animate={{ y: 0, scale: 1, rotate: 0, opacity: 1 }} transition={{ type: "tween", duration: 0.8, delay: 8, ease: [1, 0, .75, .45] }} className='absolute left-[105%] z-20 rotate-[25deg] lg:w-[200px] md:w-[150px] sm:w-[100px]'>
                        <Image src={Certification} alt="Certfication" />
                    </motion.div>

                </div>
            </div>
            <div className="absolute w-full h-full rounded-full overflow-hidden">
                <Image src={BurgerSvg} alt="Burger" width={280} height={280} className="absolute -bottom-[100px] left-1/2 -translate-x-1/2 z-20" />
            </div>

            <div className="absolute w-[140%] h-full lg:translate-y-[580px] md:translate-y-[480px] sm:translate-y-[380px] translate-y-[320px]">
                <div className="text-center lg:text-10xl md:text-9xl sm:text-8xl text-7xl font-black text-[var(--fontColor)] fontsherif">OUR SECRET RECIPE</div>

                <CardImage src={Bacon} title="Bacon" text="Powered by bacon and admit it, for a seconde here, all your problems were away" left='-180px' rotation='-13deg' top='450px' />
                <CardImage src={Cheese} title="Cheese" text="The cheese for an awewome healthy future, because cheese means more" left='-190px' top='950px' />
                <CardImage src={Tomatoes} title="Veggie" text="Veggies filled with the essence of nature, don't panic, it's organic" left='-190px' rotation="-13deg" top='1500px' />
                <CardImage src={Steak} title="Patty" text="100% pure beef, big and beefy, go wild for our juicy beefy burgers" right='-190px' rotation="13deg" top='550px' />
                <CardImage src={Bread} title="Bun" text="Fresh bun, baked to perfection, where every loaf is a masterpiece" right='-230px' rotation="-13deg" top='1050px' />
                <CardImage src={Sauce} title="Sauce" text="Our secret sauce, a blend of spices and herbs, a taste of heaven" right='-140px' top='1570px' />

                {/* <CardImage src={Bacon} title="Bacon" text="Powered by bacon and admit it, for a seconde here, all your problems were away" left='-100px' rotation='-13deg' top='450px' />
                <CardImage src={Cheese} title="Cheese" text="The cheese for an awewome healthy future, because cheese means more" left='-110px' top='950px' />
                <CardImage src={Tomatoes} title="Veggie" text="Veggies filled with the essence of nature, don't panic, it's organic" left='-110px' rotation="-13deg" top='1500px' />
                <CardImage src={Steak} title="Patty" text="100% pure beef, big and beefy, go wild for our juicy beefy burgers" right='-110px' rotation="13deg" top='550px' />
                <CardImage src={Bread} title="Bun" text="Fresh bun, baked to perfection, where every loaf is a masterpiece" right='-150px' rotation="-13deg" top='1050px' />
                <CardImage src={Sauce} title="Sauce" text="Our secret sauce, a blend of spices and herbs, a taste of heaven" right='-60px' top='1570px' /> */}
            </div>
        </motion.div>
    )
}

export default MainBurger