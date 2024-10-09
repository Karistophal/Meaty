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
        <div className="absolute h-full w-full z-10">
            <Ingredient className="w-[240px] sm:w-[280px] md:w-[360px] lg:w-[450px] lg:left-[10px] md:left-[10px] sm:left-[0px] left-[0px]" top="39%" src={BreadTop} alt="BreadTop" zIndex={1000} />
            <Ingredient className="w-[220px] sm:w-[260px] md:w-[320px] lg:w-[420px] lg:left-[40px] md:left-[40px] sm:left-[20px] left-[20px]" top="47%" src={Bacon1} alt="Bacon1" zIndex={10} />
            <Ingredient className="w-[220px] sm:w-[260px] md:w-[320px] lg:w-[420px] lg:left-[40px] md:left-[40px] sm:left-[20px] left-[20px]" top="50%" src={Bacon2} alt="Bacon2" />
            <Ingredient className="w-[120px] sm:w-[150px] md:w-[175px] lg:w-[250px] lg:left-[230px] md:left-[230px] sm:left-[150px] left-[120px]" top="56%" src={TomatoeUp} alt="TomatoeUp" zIndex={50} />
            <Ingredient className="w-[230px] sm:w-[280px] md:w-[330px] lg:w-[430px] lg:left-[50px] md:left-[50px] sm:left-[10px] left-[10px]" top="55%" src={Cheese} alt="Cheese" zIndex={40} />
            <Ingredient className="w-[180px] sm:w-[230px] md:w-[260px] lg:w-[350px] lg:left-[80px] md:left-[80px] sm:left-[35px] left-[35px]" top="62%" src={Steak} alt="Steak" zIndex={30} />
            <Ingredient className="w-[210px] sm:w-[260px] md:w-[305px] lg:w-[400px] lg:left-[60px] md:left-[60px] sm:left-[20px] left-[20px]" top="68%" src={TomatoeBottom} alt="TomatoeBottom" zIndex={20} />
            <Ingredient className="w-[240px] sm:w-[290px] md:w-[340px] lg:w-[440px] lg:left-[30px] md:left-[30px] sm:left-[10px] left-[10px]" top="70%" src={Salad} alt="Salad" zIndex={10} />
            <Ingredient className="w-[300px] sm:w-[360px] md:w-[450px] lg:w-[550px] lg:left-[-30px] md:left-[-30px] sm:left-[-30px] left-[-25px]" top="77%" src={Plate} alt="Plate" />


        </div>
    )
}

export default FloatingBurger