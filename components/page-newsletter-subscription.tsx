"use client"

import React, { useState } from 'react'
import { Button } from './ui/button';

const NewsletterSubsicrption = () => {
    const [isFocus, setIsFocus] = useState(false);

    const handleFocusTextInput = () => {
        setIsFocus(true);
    };

    const handleBlurTextInput = () => {
        setIsFocus(false);
    };

    return (
        <div className='w-full max-w-6xl flex flex-col justify-center items-center space-y-6 lg:mx-auto my-8'>
            <div className='flex flex-col justify-center items-center space-y-2'>
                <h1 className='text-2xl md:text-4xl font-semibold text-center'>اشترك للحصول على أحدث العروض</h1>
                <p className='text-gray-500 text-center'>انضم إلى قائمة البريد الإلكتروني لدينا للحصول على عروض حصرية وأحدث الأخبار.</p>
            </div>
            <div className='flex flex-row justify-center items-center w-full gap-3 max-w-3xl px-3 lg:px-0'>
                <div className={`flex px-5 py-3 rounded-full border ${isFocus ? 'border-[#ff563b]' : 'border-gray-300'} w-full`}>
                    <input
                        type="text"
                        placeholder='قم بتعبئة بريدك الإلكتروني'
                        className='outline-0 focus:outline-0 w-full'
                        onFocus={handleFocusTextInput}
                        onBlur={handleBlurTextInput}
                    />
                </div>
                <Button className='rounded-full bg-[#ff563b] cursor-pointer p-6'>
                    إشتراك الآن
                </Button>
            </div>
        </div>
    )
}

export default NewsletterSubsicrption