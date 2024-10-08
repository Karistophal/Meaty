import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'

interface IngredientProps {
    scale: number
    top: string
    left: string
    src: StaticImageData
    alt: string
    zIndex?: number
}

function Ingredient({ scale, top, left, src, alt, zIndex }: IngredientProps) {
    return (
        <motion.div
            className="absolute w-[200px] rounded-full flex items-center justify-center translate-x-[1000px] "
            style={{ transform: `scale(${scale})`, top, left, zIndex }}
            initial={{ scale: scale }}
            animate={{
                y: [0, -6, 4, -4, 2, 0], // Lévitations (montée et descente)
                rotate: [0, 1.5, -1.5, 0.5, -1, 0], // Rotation
            }}
            transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
                delay: (Math.random()-0.5) * 10,
            }}
        >
            <Image src={src} alt={alt} />
        </motion.div>
    )
}

export default Ingredient
