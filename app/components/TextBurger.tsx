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
    <div className='relative w-full h-[90px] translate-y-[5px] bg-[var(--primary)] rounded-full'>
        <div className="absolute overflow-hidden bottom-0 w-full h-[200%] flex justify-center items-end">
        <Image src={bacon ? Bacon : chicken ? Chicken : Double} alt="Bacon" 
        className={`left object-contain 
            ${bacon ? 'w-[210px] translate-y-[40px]'
            : double ? 'w-[250px] translate-y-[45px]' 
            : chicken ? 'w-[120px] translate-y-[30px]' 
            : 'w-[200px]'}`} />
        </div>
    </div>
  )
}

export default TextBurger