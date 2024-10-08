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
        <>
            <div className={`absolute flex w-[8000px] h-[120px] text-[var(--background)] font-black text-5xl z-100 rotate-[4deg] left-1/2 -translate-x-[50%] -z-10 ${first ? 'top-[400px]' : ''}`}>
                <div className='band-container band-container-left' style={{ animationDelay: '6s' }}>
                    {
                        Array(9).fill(0).map((_, index) => (
                            <div className={`band-item band-item${index} flex justify-around items-center`}
                                key={index}>
                                <p className='w-[350px] text-center'>BITE NOW</p>
                                <BurgerBubble src={Chicken} small />
                                <p className='w-[350px] text-center'>BITE NOW</p>
                                <BurgerBubble src={Bacon} small />
                                <p className='w-[350px] text-center'>BITE NOW</p>
                                <BurgerBubble src={Double} small />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={`absolute flex w-[8000px] h-[120px] text-[var(--background)] font-black text-5xl z-100 rotate-[-4deg] left-1/2 -translate-x-[50%] z-10 ${first ? 'top-[400px]' : ''}`}>
                <div className='band-container band-container-right' style={{ animationDelay: '6.5s' }}>

                    {
                        Array(9).fill(0).map((_, index) => (
                            <div className={`band-item reverse band-item${index} flex justify-around items-center`}
                                key={index}>
                                <p className='w-[350px] text-center'>BITE NOW</p>
                                <BurgerBubble src={Chicken} small />
                                <p className='w-[350px] text-center'>BITE NOW</p>
                                <BurgerBubble src={Bacon} small />
                                <p className='w-[350px] text-center'>BITE NOW</p>
                                <BurgerBubble src={Double} small />
                            </div>
                        ))
                    }
                </div>
            </div >
        </>

    )
}

export default Band