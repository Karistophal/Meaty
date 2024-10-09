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
            <div className={`absolute flex md:w-[8000px] w-[6650px] lg:h-[120px] md:h-[100px] h-[80px] text-[var(--background)] font-black md:text-5xl text-4xl z-100 rotate-[4deg] left-1/2 -translate-x-[50%] -z-20 ${first ? 'lg:top-[400px] md:top-[320px] sm:top-[240px] top-[200px]' : ''}`}>
                <div className='band-container band-container-left' style={{ animationDelay: '8s' }}>
                    {
                        Array(9).fill(0).map((_, index) => (
                            <div className={`band-item band-item${index} flex justify-around items-center`}
                                key={index}>
                                <p className='md:w-[350px] w-[300px] text-center'>BITE NOW</p>
                                <BurgerBubble src={Chicken} small />
                                <p className='md:w-[350px] w-[300px] text-center'>BITE NOW</p>
                                <BurgerBubble src={Bacon} small />
                                <p className='md:w-[350px] w-[300px] text-center'>BITE NOW</p>
                                <BurgerBubble src={Double} small />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={`absolute flex md:w-[8000px] w-[6650px] lg:h-[120px] md:h-[100px] h-[80px] text-[var(--background)] font-black md:text-5xl text-4xl z-100 rotate-[-4deg] left-1/2 -translate-x-[50%] z-20 ${first ? 'lg:top-[400px] md:top-[320px] sm:top-[240px] top-[200px]' : ''}`}>
                <div className='band-container band-container-right' style={{ animationDelay: '8.5s' }}>

                    {
                        Array(9).fill(0).map((_, index) => (
                            <div className={`band-item reverse band-item${index} flex justify-around items-center`}
                                key={index}>
                                <p className='md:w-[350px] w-[300px] text-center'>BITE NOW</p>
                                <BurgerBubble src={Chicken} small />
                                <p className='md:w-[350px] w-[300px] text-center'>BITE NOW</p>
                                <BurgerBubble src={Bacon} small />
                                <p className='md:w-[350px] w-[300px] text-center'>BITE NOW</p>
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