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
            <div className={`absolute w-[6000px] h-[120px] text-[var(--background)] font-black text-5xl z-100 rotate-[4deg] bg-[var(--fontColorDark)] left-1/2 -translate-x-[50%] -z-10 ${first ? 'top-[400px]' : ''}`}>
                <div className="band-container">
                    {
                        Array(9).fill(0).map((_, index) => (
                            <div className='band-child absolute left-[90%] flex justify-around items-center' key={index}>
                                <p>BITE NOW</p>
                                <BurgerBubble src={Chicken} small />
                                <p>BITE NOW</p>
                                <BurgerBubble src={Bacon} small />
                                <p>BITE NOW</p>
                                <BurgerBubble src={Double} small />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={`absolute w-[10000px] h-[120px] flex justify-around items-center text-[var(--background)] font-black text-5xl z-100 rotate-[-4deg] bg-[var(--fontColor)] left-1/2 -translate-x-[50%] z-10 ${first ? 'top-[400px]' : ''}`}>
                {
                    Array(9).fill(0).map(() => (
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