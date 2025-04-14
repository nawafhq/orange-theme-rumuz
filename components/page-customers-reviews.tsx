"use client"

import React from 'react'
import { Button } from './ui/button';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { DateFormate } from '@/helpers/date-fomate';
import { CheckCircle, StarFour } from '@phosphor-icons/react';

type Reviews = {
    review_id: string;
    display_name: string;
    has_purchased: boolean;
    time_stamp: Date;
    rate_score: number;
    rate_content: string;
};

interface CustomersReivewsProps {
    is_reviews_visible: boolean;
    main_title: string;
    main_short_discreption: string;
    reviews: Reviews[];
}

const CustomersReivews = ({
    is_reviews_visible,
    main_title,
    main_short_discreption,
    reviews
}: CustomersReivewsProps) => {

    if (!is_reviews_visible) return null;

    return (
        <div className='w-full max-w-6xl flex flex-col justify-center items-center space-y-6 lg:mx-auto my-8'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-2xl md:text-4xl font-semibold text-center'>{main_title}</h1>
                <p className='text-gray-500 text-center'>{main_short_discreption}</p>
                <Button className='rounded-full bg-[#ff563b] cursor-pointer mt-5'>
                    Write a review
                </Button>
            </div>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full lg:px-0 px-3"
            >
                <CarouselContent>
                    {reviews.map((review, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                            <div className="p-1">
                                <Card className='bg-gray-100 border-0'>
                                    <CardContent className="flex flex-col space-y-3 items-center justify-center px-6">
                                        <div className='flex flex-row justify-between items-center w-full'>
                                            <h1 className='text-sm font-semibold'>{review.display_name}</h1>
                                            <p className='text-xs text-gray-500'>{DateFormate(review.time_stamp)}</p>
                                        </div>
                                        <h3 className='text-sm text-center'>{review.rate_content}</h3>
                                        {review.has_purchased && (
                                            <div className='flex flex-row justify-center items-center gap-1'>
                                                <CheckCircle size={18} weight="duotone" />
                                                <p className='text-xs font-semibold'>He made a purchase</p>
                                            </div>
                                        )}
                                        <div className='flex flex-row justify-start items-center gap-2 h-5'>
                                            <div className='flex flex-row items-center'>
                                                {Array.from({ length: 5 }).map((_, index) => (
                                                    <StarFour key={index} size={16} weight="duotone" color='#ff563b' />
                                                ))}
                                            </div>
                                            <p className='text-sm'>{review.rate_score}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default CustomersReivews