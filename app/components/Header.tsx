'use client'

import React from 'react'
import Button from './Button'
import Logo from './Logo'

import { Menu } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';

import { motion } from 'framer-motion'

interface HeaderProps {
  top?: boolean
}

function Header({ top }: HeaderProps) {
  return (
    <motion.div className='w-full flex justify-between items-center py-4 px-3 sm:py-8 sm:px-20 '
        initial={top ? { y: -100 } : { y: 0 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 7 }}
    >
        <Button text="Menu" logo={<Menu size={18} />} />
        <Logo />
        <Button text="Order" logo={<ShoppingBag size={18} />} invert />
    </motion.div>
  )
}

export default Header