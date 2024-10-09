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
import FloatingBurger from './FloatingBurger';

function MainBurger() {
    return (
        <motion.div className="relative lg:w-[500px] md:w-[400px] sm:w-[300px] w-[250px] lg:h-[2200px] md:h-[1800px] sm:h-[1400px] h-[1200px] flex flex-col items-center mt-[100px]" initial={{ opacity: 0, y: 300 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 6 }}>

            <Band first />
            <div className="relative w-full lg:h-[2200px] md:h-[1800px] sm:h-[1400px] h-[1200px] bg-[#FEC51C] rounded-full" >

                <FloatingBurger />

                <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 6, ease: "easeInOut" }} className="absolute top-0 pl-2 z-10">
                    <Image src={Burger} alt="Burger" layout="responsive" className='w-full' />
                </motion.div>

                <div>
                    <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 6.5, ease: "easeInOut" }} className="absolute w-[1400px] -left-[calc(700px-50%)] lg:top-[-100px] md:top-[-70px] sm:top-[-55px] top-[-44px] text-center lg:text-10xl md:text-9xl sm:text-8xl text-[63px] font-black text-[var(--fontColor)] fontsherif">
                        LOVE EVERY BITE
                    </motion.div>

                    <motion.div initial={{ y: -100, scale: 1.5, rotate: 20, opacity: 0 }} animate={{ y: 0, scale: 1, rotate: 0, opacity: 1 }} transition={{ type: "tween", duration: 0.8, delay: 8, ease: [1, 0, .75, .45] }} className='absolute sm:left-[105%] left-[90%] z-20 top-0 rotate-[25deg] lg:w-[200px] md:w-[170px] sm:w-[140px] w-[100px]'>
                        <Image src={Certification} alt="Certfication" />
                    </motion.div>

                </div>

            </div>
            <div className="absolute w-full h-full rounded-full overflow-hidden">
                <Image src={BurgerSvg} alt="Burger" className="absolute w-[55%] lg:bottom-[-100px] md:bottom-[-80px] sm:bottom-[-60px] bottom-[-50px] left-1/2 -translate-x-1/2 z-20" />
            </div>

            <div className="absolute w-[140%] h-full lg:translate-y-[580px] md:translate-y-[480px] sm:translate-y-[380px] translate-y-[320px]">
                <motion.div className="text-center lg:text-10xl md:text-9xl sm:text-8xl text-7xl font-black text-[var(--fontColor)] fontsherif " initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 7, ease: "easeInOut" }} >
                    OUR SECRET RECIPE
                </motion.div>

                <CardImage className='lg:top-[300px] md:top-[250px] sm:top-[300px] top-[300px] lg:left-[-180px] md:left-[-120px] sm:left-[-120px] left-[-100px]' src={Bacon} title="Bacon" text="Powered by bacon and admit it, for a second here, all your problems were away" rotation='-13deg' imageScale='1.8' imagePosition='-2rem 50%' />
                <CardImage className='lg:top-[800px] md:top-[700px] sm:top-[800px] top-[800px] lg:left-[-190px] md:left-[-130px] sm:left-[-130px] left-[-110px]' src={Cheese} title="Cheese" text="The cheese for an awesome healthy future, because cheese means more" imageScale='1.5' imagePosition='-1.8rem 0.5rem' />
                <CardImage className='lg:top-[1350px] md:top-[1150px] sm:top-[1350px] top-[1350px] lg:left-[-190px] md:left-[-130px] sm:left-[-130px] left-[-110px]' src={Tomatoes} title="Veggie" text="Veggies filled with the essence of nature, don't panic, it's organic" rotation="-13deg" imageScale='1.2' imagePosition='-2rem 0' />
                <CardImage className='lg:top-[400px] md:top-[350px] sm:top-[400px] top-[400px] lg:right-[-190px] md:right-[-130px] sm:right-[-130px] right-[-110px]' src={Steak} title="Patty" text="100% pure beef, big and beefy, go wild for our juicy beefy burgers" rotation="13deg" imageScale='1.2' imagePosition='1rem 0' />
                <CardImage className='lg:top-[900px] md:top-[750px] sm:top-[900px] top-[900px] lg:right-[-230px] md:right-[-170px] sm:right-[-170px] right-[-150px]' src={Bread} title="Bun" text="Fresh bun, baked to perfection, where every loaf is a masterpiece" rotation="-13deg" imageScale='1.7' imagePosition='2.2rem -0.5rem' />
                <CardImage className='lg:top-[1420px] md:top-[1170px] sm:top-[1420px] top-[1420px] lg:right-[-140px] md:right-[-80px] sm:right-[-90px] right-[-80px]' src={Sauce} title="Sauce" text="Our secret sauce, a blend of spices and herbs, a taste of heaven" imageScale='1.3' imagePosition='1rem 0.5rem' />


            </div>
        </motion.div>
    )
}

export default MainBurger