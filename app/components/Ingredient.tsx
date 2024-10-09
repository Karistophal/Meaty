import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'

interface IngredientProps {
    top: string
    src: StaticImageData
    alt: string
    zIndex?: number
    className?: string
}

function Ingredient({ top, src, alt, zIndex = 0, className = '' }: IngredientProps) {
    return (
        <motion.div
            className={`absolute ${className}`}
            style={{ top, zIndex }}
            animate={{
                y: [0, -6, 4, -4, 2, 0],
                rotate: [0, 1.5, -1.5, 0.5, -1, 0],
            }}
            transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
                delay: (Math.random() - 0.5) * 10,
            }}
        >
            <Image src={src} alt={alt} />
        </motion.div>
    )
}

export default Ingredient
