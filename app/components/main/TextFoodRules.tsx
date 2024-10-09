import React from 'react'

import TextBurger from '../TextBurger'

function TextFoodRules() {
    return (
        <div className="flex flex-col lg:text-9xl sm:text-7xl text-[45px] leading-[1] font-black text-[var(--fontColor)] fontsherif uppercase lg:mt-[200px] sm:mt-[150px] mt-[70px] w-full lg:min-w-[1050px] lg:max-w-[1200px] sm:min-w-[700px] sm:max-w-[750px] min-w-[390px] max-w-[440px] sm:tracking-tight sm:px-[50px] px-[20px]">
            <div className="flex flex-row sm:gap-8 gap-3 justify-between ">
                <div>Food</div>
                <div>rules</div>
                <div>:</div>
                <div>little</div>
            </div>
            <div className="flex flex-row items-center sm:gap-8 gap-3 justify-between ">
                <div>rivals</div>
                <TextBurger bacon />
                <div>the</div>
            </div>
            <div className="flex flex-row items-center sm:gap-8 gap-3 justify-between">
                <div>pleasure</div>
                <TextBurger double />
                <div>of</div>
            </div>
            <div className="flex flex-row items-center sm:gap-8 gap-3 justify-between">
                <div>tearing</div>
                <TextBurger chicken />
                <div className="flex flex-row sm:gap-8 gap-3">
                    <div>into</div>
                    <div>a</div>
                </div>
            </div>
            <div className="flex flex-row sm:gap-8 gap-3 justify-between">
                <div>glistening</div>
                <div>¨</div>
                <div>burger</div>
            </div>
        </div>
    )
}

export default TextFoodRules