"use client"

import { Envelope, FacebookLogo, InstagramLogo, Phone, WhatsappLogo, XLogo } from '@phosphor-icons/react'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#271d1c] w-full flex flex-col justify-center items-center py-4 lg:py-10 space-y-10'>
            <div className='w-full max-w-6xl grid lg:grid-cols-3 grid-cols-1 p-3 justify-center items-center mx-auto text-white lg:space-y-0 space-y-16'>
                <div className='flex flex-col lg:justify-start lg:items-start justify-center items-center space-y-3 lg:border-l lg:border-l-[#4b3836] h-full px-5'>
                    <h1 className='text-md font-semibold'>نبذة عنا</h1>
                    <p className='text-sm font-light text-gray-300 lg:text-right text-center'>منتجات منزلية أنيقة وبأسعار معقولة من منتجات ذات جودة ممتازة تناسب كل فرد من أفراد الأسرة.</p>
                    <div className='flex flex-row lg:justify-start lg:items-start justify-center items-center gap-2'>
                        <a href="https://www.instagram.com" className='hover:opacity-85 duration-300'>
                            <InstagramLogo size={22} weight="duotone" />
                        </a>
                        <a href="https://www.x.com" className='hover:opacity-85 duration-300'>
                            <XLogo size={22} weight="duotone" />
                        </a>
                        <a href="https://www.facebook.com" className='hover:opacity-85 duration-300'>
                            <FacebookLogo size={22} weight="duotone" />
                        </a>
                        <a href="https://www.whatsapp.com" className='hover:opacity-85 duration-300'>
                            <WhatsappLogo size={22} weight="duotone" />
                        </a>
                    </div>
                </div>
                <div className='flex flex-col lg:justify-start lg:items-start justify-center items-center space-y-3 lg:border-l lg:border-l-[#4b3836] h-full px-5'>
                    <h1 className='text-md font-semibold'>روابط هامة</h1>
                    <div className='flex flex-col lg:justify-start lg:items-start justify-center items-center gap-1'>
                        <a href="/" className='text-sm font-light text-gray-300 lg:text-right text-center hover:opacity-85'>تواصل معنا</a>
                        <a href="/" className='text-sm font-light text-gray-300 lg:text-right text-center hover:opacity-85'>سياسة الخصوصية</a>
                        <a href="/" className='text-sm font-light text-gray-300 lg:text-right text-center hover:opacity-85'>سياسة الإسترجاع</a>
                        <a href="/" className='text-sm font-light text-gray-300 lg:text-right text-center hover:opacity-85'>الشروط و الأحكام</a>
                    </div>
                </div>
                <div className='flex flex-col lg:justify-start lg:items-start justify-center items-center space-y-3 h-full px-5'>
                    <h1 className='text-md font-semibold'>تواصل معنا</h1>
                    <p className='text-sm font-light text-gray-300 lg:text-right text-center'>متاح من الساعة ٨ صباحًا حتى ٨ مساءً. جاهز للإجابة على استفساراتكم.</p>
                    <div className='flex flex-row lg:justify-start lg:items-start justify-center items-center gap-2'>
                        <a href="/" className='hover:opacity-85 duration-300 flex flex-row justify-start items-center gap-1'>
                            <Phone size={22} weight="duotone" />
                            <p className='text-sm'>9200001326</p>
                        </a>
                        <a href="/" className='hover:opacity-85 duration-300 flex flex-row justify-start items-center gap-1'>
                            <Envelope size={22} weight="duotone" />
                            <p className='text-sm'>support@yourstore.com</p>
                        </a>
                    </div>
                </div>
            </div>
            <h1 className='text-white'>صنع بحب في الخبر من قبل رموز ❤️</h1>
        </div>
    )
}

export default Footer