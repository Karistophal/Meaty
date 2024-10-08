import React from 'react'
import Image, { StaticImageData } from 'next/image'

import { motion } from 'framer-motion'

interface CardImageProps {
  src: StaticImageData
  text: string
  title: string
  imageScale?: string
  imagePosition?: string
  left?: string
  right?: string
  top?: string
  bottom?: string
  rotation?: string
}

function CardImage({ 
  src, 
  title, 
  text, 
  imageScale = '1', // valeur par défaut 
  imagePosition = 'center', // valeur par défaut
  left = 'auto', 
  right = 'auto', 
  top = 'auto', 
  bottom = 'auto',
  rotation = '0deg',
}: CardImageProps) {
  return (
    <motion.div
    className="absolute w-fit text-[var(--fontColor)]"
    style={{ left, right, top, bottom }}
    animate={{
      y: [0, -10, 5, 0],
      rotate: [
        `${rotation}`,
        `${parseFloat(rotation) + 1}deg`,
        `${parseFloat(rotation) - 1}deg`,
        `${parseFloat(rotation) + 2}deg`,
        `${rotation}`,
      ],
    }}
    transition={{ duration: 20, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop', delay: (Math.random()-0.5) * 10 }}
  >
      <div className="absolute -top-[0] -translate-y-[80%] flex justify-center w-full rounded-full -z-10 text-8xl font-black fontsherif uppercase">{title}</div>
      <div className="flex w-fit flex-col p-3 bg-[#fff6EA] rounded-xl shadow-xl">
        <div className="relative bg-[var(--primary)] overflow-hidden rounded-md w-[200px] h-[200px] flex items-center justify-center">
          <Image 
            src={src} 
            alt={title} 
            className="absolute" 
            style={{ 
              transform: `scale(${imageScale})`,
              objectPosition: imagePosition,
            }} 
          />
        </div>
        <p className="text-base mt-3 text-center max-w-[200px]" style={{ lineHeight: '1.2' }}>
          {text}
        </p>
      </div>
    </motion.div>
  )
}

export default CardImage
