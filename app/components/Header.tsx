import React from 'react'
import Button from './Button'
import Logo from './Logo'

import { Menu } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';

function Header() {
  return (
    <div className='w-full flex justify-between items-center py-8 px-20'>
        <Button text="Menu" logo={<Menu size={18} />} />
        <Logo />
        <Button text="Order" logo={<ShoppingBag size={18} />} invert />
    </div>
  )
}

export default Header