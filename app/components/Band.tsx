import React from 'react'
import BurgerBubble from './BurgerBubble'

import Chicken from '@/app/assets/littlesBurgers/Chicken.png'
import Bacon from '@/app/assets/littlesBurgers/Bacon.png'
import Double from '@/app/assets/littlesBurgers/Double.png'

interface BandProps {
    first?: boolean
}


function Band({ first }: BandProps) {
    return (
        <div>
            <div className={`absolute w-[10000px] h-[120px] flex justify-around items-center text-[var(--background)] font-black text-5xl z-100 rotate-[4deg] bg-[var(--fontColorDark)] left-1/2 top-[${first ? '400px' : '0px'}] -translate-x-[50%] -z-10`}>
                {
                    Array(9).fill(0).map((_, i) => (
                        <>
                            <p>BITE NOW</p>
                            <BurgerBubble src={Chicken} small />
                            <p>BITE NOW</p>
                            <BurgerBubble src={Bacon} small />
                            <p>BITE NOW</p>
                            <BurgerBubble src={Double} small />
                        </>
                    ))
                }
            </div>
            <div className={`absolute w-[10000px] h-[120px] flex justify-around items-center text-[var(--background)] font-black text-5xl z-100 rotate-[-4deg] bg-[var(--fontColor)] left-1/2 top-[${first ? '400px' : '0px'}] -translate-x-[50%] z-10`}>
                {
                    Array(9).fill(0).map((_) => (
                        <>
                            <p>BITE NOW</p>
                            <BurgerBubble src={Chicken} small />
                            <p>BITE NOW</p>
                            <BurgerBubble src={Bacon} small />
                            <p>BITE NOW</p>
                            <BurgerBubble src={Double} small />
                        </>
                    ))
                }
            </div >
        </div>

    )
}

export default Band