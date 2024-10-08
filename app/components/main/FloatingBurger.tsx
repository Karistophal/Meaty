import React from 'react'

import Ingredient from '../Ingredient'

import BreadTop from "@/app/assets/floatingBurger/BreadTop.png"
import Bacon1 from "@/app/assets/floatingBurger/Bacon1.png"
import Bacon2 from "@/app/assets/floatingBurger/Bacon2.png"
import Cheese from "@/app/assets/floatingBurger/Cheese.png"
import Steak from "@/app/assets/floatingBurger/Steak.png"
import Salad from "@/app/assets/floatingBurger/Salad.png"
import TomatoeUp from "@/app/assets/floatingBurger/TomatoeUp.png"
import TomatoeBottom from "@/app/assets/floatingBurger/TomatoesDown.png"
import Plate from "@/app/assets/floatingBurger/Plate.png"

function FloatingBurger() {
    return (
        <div className="relative w-full h-full pt-[1000px] flex flex-col items-center overflow-hidden">
            <Ingredient scale={2.2} top="41%" left="30%" src={BreadTop} alt="BreadTop" zIndex={1000} />
            <Ingredient scale={2} top="48%" left="30%" src={Bacon1} alt="Bacon1" zIndex={10} />
            <Ingredient scale={2} top="51%" left="30%" src={Bacon2} alt="Bacon2" />
            <Ingredient scale={1.2} top="55%" left="50%" src={TomatoeUp} alt="TomatoeUp" zIndex={50} />
            <Ingredient scale={2.1} top="57%" left="30%" src={Cheese} alt="Cheese" zIndex={40} />
            <Ingredient scale={1.7} top="63%" left="30%" src={Steak} alt="Steak" zIndex={30} />
            <Ingredient scale={2} top="69%" left="30%" src={TomatoeBottom} alt="TomatoeBottom" zIndex={20} />
            <Ingredient scale={2.2} top="73%" left="30%" src={Salad} alt="Salad" zIndex={10} />
            <Ingredient scale={3} top="82%" left="30%" src={Plate} alt="Plate" />

        </div>
    )
}

export default FloatingBurger