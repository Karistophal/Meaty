import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface BurgerBubbleProps {
    src: StaticImageData
    small?: boolean
}

function BurgerBubble({ src, small }: BurgerBubbleProps) {
  return (
    <div className={'aspect-square bg-[var(--primary)] rounded-full flex justify-center items-center' + (small ? ' w-10 h-10' : ' w-24 h-24')}>
        <Image src={src} alt='Burger' className='h-[70%] object-contain' />
    </div>
  )
}

export default BurgerBubble