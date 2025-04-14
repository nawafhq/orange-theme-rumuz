"use client"

import React from 'react'
import * as PhosphorIcons from '@phosphor-icons/react'

interface Feature {
  icon: string
  title: string
  short_discreption: string
}

interface ProtectionPurchaseProps {
  is_protection_purchase_visible: boolean
  features: Feature[]
}

const ProtectionPurchase = ({
  is_protection_purchase_visible,
  features
}: ProtectionPurchaseProps) => {
  if (!is_protection_purchase_visible) return null

  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 px-3 py-5 rounded-md md:rounded-lg bg-gray-100 max-w-6xl lg:mx-auto mx-3 lg:space-y-0 space-y-3'>
      {features.map((feature, index) => {
        const Icon = (PhosphorIcons as any)[feature.icon] || null

        return (
          <div
            key={index}
            className={`flex flex-row justify-center items-center gap-2 px-3 ${
              index !== features.length - 1 ? 'lg:border-r border-r-gray-300' : ''
            }`}
          >
            {Icon ? (
              <Icon size={26} weight="duotone" className='text-[#ff563b]' />
            ) : (
              <div className="w-[26px] h-[26px] bg-gray-300 rounded" />
            )}
            <div className='flex flex-col justify-start items-start'>
              <h1 className='text-md font-semibold'>{feature.title}</h1>
              <p className='text-sm text-gray-500'>{feature.short_discreption}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProtectionPurchase
