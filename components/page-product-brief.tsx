"use client"

import React, { useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';
import { Fire, KeyReturn, Package, ShieldCheck, StarFour } from '@phosphor-icons/react';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import {
    Tabs,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

type SigmentsType = 'guarantee' | 'delivery' | 'return';

interface ProductBriefProps {
    images: string[];
    badge_title?: string;
    is_badge_title_visible: boolean;
    title: string;
    product_price: number;
    is_discount_product: boolean;
    discount_rate?: number;
    discount_percentage?: number;
    rate_score: number;
    rate_count: number;
    short_description?: string;
    long_description: string;
    guarantee_detailed_content?: string;
    delivery_detailed_content?: string;
    return_detailed_content?: string;
}

const ProductBrief = ({
    images,
    badge_title,
    is_badge_title_visible,
    title,
    product_price,
    is_discount_product,
    discount_rate,
    discount_percentage,
    rate_score,
    rate_count,
    short_description,
    long_description,
    guarantee_detailed_content,
    delivery_detailed_content,
    return_detailed_content,
}: ProductBriefProps) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedSigment, setSelectedSigment] = useState<SigmentsType>('guarantee');

    const handleSelectingIndex = (index: number) => {
        setSelectedIndex(index);
    };

    const handleChangeSigment = (sigment: SigmentsType) => {
        setSelectedSigment(sigment);
    };

    return (
        <div className='w-full px-4 py-2 md:px-6 md:py-3 max-w-6xl mx-auto flex md:flex-row flex-col md:justify-between justify-start items-start'>
            <div className='flex flex-col justify-center items-center md:w-1/2 md:p-4 w-full space-y-3 md:space-y-6'>
                <Carousel className="w-full">
                    <CarouselContent>
                        {images.map((image, index = selectedIndex) => (
                            <CarouselItem
                                key={index}
                                style={{
                                    transform: `translateX(-${selectedIndex * 100}%)`,
                                    transition: 'transform 0.5s ease'
                                }}
                            >
                                <div className="p-1">
                                    <div className='border border-gray-200 rounded-lg md:rounded-2xl overflow-hidden'>
                                        <div className="flex aspect-square items-center justify-center">
                                            <Image
                                                alt={title}
                                                src={image}
                                                width={1080}
                                                height={1080}
                                                className='object-cover w-full h-full'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {images.map((image, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 basis-1/3">
                                <button onClick={() => handleSelectingIndex(index)} className="p-1 cursor-pointer">
                                    <div className='border border-gray-200 rounded-md md:rounded-xl overflow-hidden'>
                                        <div className="flex aspect-square items-center justify-center">
                                            <Image
                                                alt={title}
                                                src={image}
                                                width={1080}
                                                height={1080}
                                                className='object-cover w-full h-full'
                                            />
                                        </div>
                                    </div>
                                </button>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className='md:flex hidden'>
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>
            </div>
            <div className='md:w-1/2 w-full md:rounded-2xl flex flex-col md:ml-10 ml-0 md:my-0 my-6 md:space-y-5 space-y-3 h-full py-6'>
                {is_badge_title_visible && (
                    <Badge className='flex flex-row justify-start items-center bg-[#ff563b] mr-auto px-2 py-1 rounded-full'>
                        <Fire size={16} weight="duotone" className="text-white leading-0" />
                        <h1 className='text-xs font-semibold text-white leading-0'>{badge_title}</h1>
                    </Badge>
                )}
                <h1 className='text-2xl md:text-3xl font-semibold'>{title}</h1>
                <Separator />
                <div className='flex flex-row justify-between items-center w-full'>
                    <div className='flex flex-row justify-start items-center gap-2'>
                        <span className='text-xl md:text-2xl text-gray-600 font-semibold flex flex-row items-center'>
                            <h1 className='text-xl md:text-2xl text-gray-600 font-semibold'>{`${discount_rate && is_discount_product ? (product_price - (product_price * discount_rate)) : product_price}`}</h1>
                            <svg width="20" height="20" viewBox="0 0 1125 1257" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_531_69)">
                                    <path d="M699.619 1113.02C679.559 1157.5 666.299 1205.77 661.219 1256.39L1085.73 1166.15C1105.79 1121.68 1119.04 1073.4 1124.13 1022.78L699.619 1113.02Z" fill="currentColor" />
                                    <path d="M1085.73 895.8C1105.79 851.33 1119.05 803.05 1124.13 752.43L793.448 822.76V687.56L1085.72 625.45C1105.78 580.98 1119.04 532.7 1124.12 482.08L793.438 552.35V66.13C742.768 94.58 697.768 132.45 661.188 177.12V580.47L528.938 608.58V0C478.268 28.44 433.268 66.32 396.688 110.99V636.68L100.778 699.56C80.7183 744.03 67.4483 792.31 62.3583 842.93L396.688 771.88V942.14L38.3883 1018.28C18.3283 1062.75 5.06828 1111.03 -0.0117188 1161.65L375.028 1081.95C405.558 1075.6 431.798 1057.55 448.858 1032.71L517.638 930.74V930.72C524.778 920.17 528.938 907.45 528.938 893.75V743.77L661.188 715.66V986.06L1085.72 895.78L1085.73 895.8Z" fill="currentColor" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_531_69">
                                        <rect width="1124.14" height="1256.39" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                        {is_discount_product && (
                            <span className='text-lg md:text-xl text-gray-400 font-medium line-through flex flex-row items-center'>
                                <h3 className='text-lg md:text-xl text-gray-400 font-medium line-through'>{is_discount_product && discount_rate ? product_price : null}</h3>
                                <svg width="16" height="16" viewBox="0 0 1125 1257" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_531_69)">
                                        <path d="M699.619 1113.02C679.559 1157.5 666.299 1205.77 661.219 1256.39L1085.73 1166.15C1105.79 1121.68 1119.04 1073.4 1124.13 1022.78L699.619 1113.02Z" fill="currentColor" />
                                        <path d="M1085.73 895.8C1105.79 851.33 1119.05 803.05 1124.13 752.43L793.448 822.76V687.56L1085.72 625.45C1105.78 580.98 1119.04 532.7 1124.12 482.08L793.438 552.35V66.13C742.768 94.58 697.768 132.45 661.188 177.12V580.47L528.938 608.58V0C478.268 28.44 433.268 66.32 396.688 110.99V636.68L100.778 699.56C80.7183 744.03 67.4483 792.31 62.3583 842.93L396.688 771.88V942.14L38.3883 1018.28C18.3283 1062.75 5.06828 1111.03 -0.0117188 1161.65L375.028 1081.95C405.558 1075.6 431.798 1057.55 448.858 1032.71L517.638 930.74V930.72C524.778 920.17 528.938 907.45 528.938 893.75V743.77L661.188 715.66V986.06L1085.72 895.78L1085.73 895.8Z" fill="currentColor" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_531_69">
                                            <rect width="1124.14" height="1256.39" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                        )}
                        <div className='flex border border-[#ff563b] rounded-[4px] px-1 py-0.5'>
                            <p className='text-xs md:text-sm text-[#ff563b] font-semibold'>{`-${discount_percentage}%`}</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-start items-center gap-2 h-5'>
                        <button className='flex flex-row cursor-pointer items-center'>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <StarFour key={index} size={16} weight="duotone" color='#ff563b' />
                            ))}
                        </button>
                        <p className='text-sm'>{rate_score}</p>
                        <Separator orientation="vertical" />
                        <p className='text-sm'>{`(${rate_count})`}</p>
                    </div>
                </div>
                <h2 className='text-gray-600'>{short_description}</h2>
                <button className='flex p-3 rounded-full bg-[#ff563b] w-full items-center justify-center text-white font-bold cursor-pointer hover:scale-105 duration-200'>
                    Buy Now
                </button>
                <h2 className='text-gray-600'>{long_description}</h2>
                <Tabs defaultValue="guarantee" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 h-12">
                        <TabsTrigger onClick={() => handleChangeSigment('guarantee')} value="guarantee" className='flex flex-row justify-center items-center gap-1 cursor-pointer'>
                            <ShieldCheck size={26} weight="duotone" />
                            <p>Guarantee</p>
                        </TabsTrigger>
                        <TabsTrigger onClick={() => handleChangeSigment('delivery')} value="delivery" className='flex flex-row justify-center items-center gap-1 cursor-pointer'>
                            <Package size={26} weight="duotone" />
                            <p>Delivery</p>
                        </TabsTrigger>
                        <TabsTrigger onClick={() => handleChangeSigment('return')} value="return" className='flex flex-row justify-center items-center gap-1 cursor-pointer'>
                            <KeyReturn size={26} weight="duotone" />
                            <p>Return</p>
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
                <h2 className='text-gray-600'>
                    {selectedSigment === 'guarantee' ? guarantee_detailed_content : selectedSigment === 'delivery' ? delivery_detailed_content : return_detailed_content}
                </h2>
            </div>
        </div>
    )
}

export default ProductBrief