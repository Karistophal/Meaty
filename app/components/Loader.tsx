"use client";

import React from 'react'
import { motion } from 'framer-motion'

function Loader() {
    return (
        <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0, display: "none"}} transition={{ ease: "easeInOut", delay: 5, duration: 1 }} className="fixed top-0 left-0 z-50 w-full h-full bg-[var(--fontColor)] flex justify-center items-center">

            <div className="relative sm:px-16 px-12 py-3 ">
                <motion.div className="sm:text-9xl text-8xl font-normal fontsherif text-[var(--background)] flex spacing-normal"
                    initial={{ opacity: 0,}}
                    animate={{ opacity: 1,}}
                    transition={{ duration: 0, delay: 2,}}
                >
                    Meaty
                    <div className="absolute sm:text-6xl text-5xl font-light right-[-30px] top-[10px]">®</div>
                </motion.div>
                <div className="loader">
                    <div className="loader-item loader-item0 bg-[var(--primary)]" style={{ animationDelay: "1s" }}></div>
                    <div className="loader-item loader-item1 bg-amber-700" style={{ animationDelay: "1.3s" }}></div>
                    <div className="loader-item loader-item2 bg-[var(--fontColor)]" style={{ animationDelay: "1.6s" }}></div>
                    <div className="loader-item loader-item2 bg-[#448444]" style={{ animationDelay: "1.8s" }}></div>
                </div>
            </div>

        </motion.div>
    )
}

export default Loader