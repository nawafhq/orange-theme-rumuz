"use client"

import { List, ShoppingBag } from '@phosphor-icons/react';
import Image from 'next/image'
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

interface HeaderProps {
  logo_url: string;
  logo_alt: string;
}

const Header = ({ logo_alt, logo_url }: HeaderProps) => {
  return (
    <div className='w-full px-4 py-2 md:px-6 md:py-3 border-b border-b-gray-200'>
      <div className='w-full max-w-6xl mx-auto flex flex-row justify-between items-center'>
        <a href="/">
          <Image
            alt={logo_alt}
            src={logo_url}
            width={90}
            height={90}
            className='object-cover'
          />
        </a>
        <div className='flex-row justify-start items-center space-x-6 md:flex hidden'>
          <button className='font-semibold hover:text-[#ff563b] duration-300 cursor-pointer'>
            Features
          </button>
          <button className='font-semibold hover:text-[#ff563b] duration-300 cursor-pointer'>
            Reviews
          </button>
          <button className='font-semibold hover:text-[#ff563b] duration-300 cursor-pointer'>
            FAQs
          </button>
          <button className='font-semibold hover:text-[#ff563b] duration-300 cursor-pointer'>
            Contact us
          </button>
        </div>
        <div className='flex flex-row justify-start items-center gap-3'>
          <a href='/cart' className='cursor-pointer'>
            <ShoppingBag size={32} weight='duotone' className='hover:text-[#ff563b] duration-300'/>
          </a>
          <Sheet>
            <SheetTrigger asChild className='flex md:hidden'>
              <button className='cursor-pointer'>
                <List size={32} />
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <Image
                    alt={logo_alt}
                    src={logo_url}
                    width={70}
                    height={70}
                    className='object-cover'
                  />
                </SheetTitle>
              </SheetHeader>
              <div className='flex-col justify-start items-center space-y-6 md:hidden flex px-4'>
                <button className='font-semibold hover:text-[#ff563b] duration-300 cursor-pointer'>
                  Features
                </button>
                <button className='font-semibold hover:text-[#ff563b] duration-300 cursor-pointer'>
                  Reviews
                </button>
                <button className='font-semibold hover:text-[#ff563b] duration-300 cursor-pointer'>
                  FAQs
                </button>
                <button className='font-semibold hover:text-[#ff563b] duration-300 cursor-pointer'>
                  Contact us
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}

export default Header