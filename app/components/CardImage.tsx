import React from 'react'
import Image from 'next/image'

import { StaticImageData } from 'next/image'

interface CardImageProps {
  src: StaticImageData
  title: string
  text: string
}

function CardImage({ src, title, text }: CardImageProps) {
  return (
    <div className="max-w-[20px] relative">
        <div className="absolute w-full h-full rounded-full z-[-1]">{title}</div>
        <div className="flex flex-col p-3 bg-[#fff6EA] rounded-xl shadow-xl">
            <div className="relative bg-[var(--primary)] rounded-md w-full aspect-square flex items-center justify-center">
                <Image src={src} alt="Burger" width={200} height={200} className='right-0' />
            </div>
            <p className="text-lg mt-3 text-center">{text}</p>
        </div>
    </div>
  )
}

export default CardImage