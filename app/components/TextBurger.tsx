import Image from 'next/image'
import React from 'react'

import Bacon from '@/app/assets/littlesBurgers/Bacon.png'
import Chicken from '@/app/assets/littlesBurgers/Chicken.png'
import Double from '@/app/assets/littlesBurgers/Double.png'

interface TextBurgerProps {
    bacon?: boolean
    chicken?: boolean
    double?: boolean
}

function TextBurger({ bacon, chicken, double }: TextBurgerProps) {
  return (
    <div className='relative w-full lg:h-[90px] sm:h-[55px] h-[33px] lg:translate-y-[5px] sm:translate-y-[3px] translate-y-[2px] bg-[var(--primary)] rounded-full'>
        <div className="absolute overflow-hidden bottom-0 w-full h-[200%] flex justify-center items-end">
        <Image src={bacon ? Bacon : chicken ? Chicken : Double} alt="Bacon" 
        className={`left object-contain select-none
            ${bacon ? 'lg:w-[210px] sm:w-[140px] w-[85px] lg:translate-y-[40px] sm:translate-y-[35px] translate-y-[18px]'
            : double ? 'lg:w-[250px] sm:w-[160px] w-[100px] lg:translate-y-[45px] sm:translate-y-[30px] translate-y-[19px]' 
            : chicken ? 'lg:w-[120px] sm:w-[70px] w-[45px] lg:translate-y-[30px] sm:translate-y-[16px] translate-y-[10px]' 
            : 'w-[200px]'}`} />
        </div>
    </div>
  )
}

export default TextBurger