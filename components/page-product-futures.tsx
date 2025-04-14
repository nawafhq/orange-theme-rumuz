"use client"

import React from 'react'
import * as PhosphorIcons from '@phosphor-icons/react'

type Futures = {
    icon: string
    title: string
    short_discreption: string
}

interface ProductFuturesProps {
    is_product_futures_visible: boolean;
    main_title: string;
    main_short_discreption: string;
    futures: Futures[];
}

const ProductFutures = ({
    is_product_futures_visible,
    main_title,
    main_short_discreption,
    futures,
}: ProductFuturesProps) => {

    if (!is_product_futures_visible) return null;

    return (
        <div className='w-full max-w-6xl flex flex-col justify-center items-center space-y-6 lg:mx-auto my-8'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-2xl md:text-4xl font-semibold text-center'>{main_title}</h1>
                <p className='text-gray-500 text-center'>{main_short_discreption}</p>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-3 rounded-lg md:rounded-xl border shadow-md border-gray-300 mx-3 lg:mx-0 overflow-hidden'>
                {futures.map((feature, index) => {
                    const Icon = (PhosphorIcons as any)[feature.icon] || null

                    return (
                        <div key={index} className={`group hover:bg-[#ff553b0e] duration-200 p-6 flex relative flex-col justify-center items-center space-y-2 ${index === 0 ? 'border-r border-r-gray-300' : index === 1 ? 'lg:border-r border-r-gray-300 border-r-0' : index === 2 ? 'border-t border-t-gray-200 lg:border-t-0 border-r border-r-gray-300 lg:border-r-0' : index === 3 ? 'lg:border-r border-r-0 border-r-gray-300 border-t border-t-gray-200' : index === 4 ? 'border-r border-r-gray-300 border-t border-t-gray-200' : 'border-t border-t-gray-200'}`}>
                            {Icon ? (
                                <Icon size={26} weight="duotone" />
                            ) : (
                                <div className="w-[26px] h-[26px] bg-gray-300 rounded" />
                            )}
                            <h1 className='text-md font-semibold text-center'>{feature.title}</h1>
                            <p className='text-sm text-gray-500 text-center'>{feature.short_discreption}</p>
                            <div className='w-full h-1 bg-[#ff563b] absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductFutures