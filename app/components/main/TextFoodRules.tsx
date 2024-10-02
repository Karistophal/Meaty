import React from 'react'

import TextBurger from '../TextBurger'

function TextFoodRules() {
    return (
        <div className="flex flex-col text-9xl font-black text-[var(--fontColor)] fontsherif uppercase mt-[100px] w-full min-w-[1050px] max-w-[1200px] px-[50px]">
            <div className="flex flex-row gap-8 justify-between ">
                <div>Food</div>
                <div>rules</div>
                <div>:</div>
                <div>little</div>
            </div>
            <div className="flex flex-row items-center gap-8 justify-between ">
                <div>rivals</div>
                <TextBurger bacon />
                <div>the</div>
            </div>
            <div className="flex flex-row items-center gap-8 justify-between">
                <div>pleasure</div>
                <TextBurger double />
                <div>of</div>
            </div>
            <div className="flex flex-row items-center gap-8 justify-between">
                <div>tearing</div>
                <TextBurger chicken />
                <div className="flex flex-row gap-8">
                    <div>into</div>
                    <div>a</div>
                </div>
            </div>
            <div className="flex flex-row gap-8 justify-between">
                <div>glistening</div>
                <div>burger</div>
            </div>
        </div>
    )
}

export default TextFoodRules