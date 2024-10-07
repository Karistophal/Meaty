import React from 'react'
import Image from 'next/image'

import { StaticImageData } from 'next/image'

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
    <div className="absolute w-fit text-[var(--fontColor)]"
      style={{ left, right, top, bottom, transform: `rotate(${rotation})` }}
    >
      <div className="absolute -top-[0] -translate-y-[80%] flex justify-center w-full rounded-full -z-10 text-9xl font-black fontsherif uppercase">{title}</div>
      <div className="flex w-fit flex-col p-3 bg-[#fff6EA] rounded-xl shadow-xl">
        <div className="relative bg-[var(--primary)] overflow-hidden rounded-md w-[220px] h-[220px] flex items-center justify-center">
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
        <p className="text-base mt-3 text-center max-w-[220px]" style={{ lineHeight: '1.2' }}>
          {text}
        </p>
      </div>
    </div>
  )
}

export default CardImage
