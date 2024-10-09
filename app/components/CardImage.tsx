import React from 'react'
import Image, { StaticImageData } from 'next/image'

import { motion } from 'framer-motion'

interface CardImageProps {
  src: StaticImageData
  text: string
  title: string
  imageScale?: string
  imagePosition?: string
  rotation?: string
  className?: string
}

function  CardImage({ 
  src, 
  title, 
  text, 
  imageScale = '1',
  imagePosition = 'center', 
  rotation = '0deg',
  className = ''
}: CardImageProps) {
  return (
    <motion.div
    className={`absolute w-fit text-[var(--fontColor)] hidden md:block  ${className}`}
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
      <div className="absolute -top-[0] lg:translate-y-[-80%] translate-y-[-82%] flex justify-center w-full rounded-full -z-10 lg:text-[7rem] text-8xl leading-[1] font-black fontsherif uppercase">{title}</div>
      <div className="flex w-fit flex-col p-3 bg-[#fff6EA] rounded-xl shadow-xl select-none">
      <div className="relative bg-[var(--primary)] overflow-hidden rounded-md w-full aspect-square flex items-center justify-center">
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
        <p className="lg:text-base text-[15px] mt-3 text-center lg:max-w-[200px] max-w-[160px]" style={{ lineHeight: '1.2' }}>
          {text}
        </p>
      </div>
    </motion.div>
  )
}

export default CardImage
