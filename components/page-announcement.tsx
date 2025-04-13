"use client"

import React, { useState } from 'react'
import { Bag, SealPercent, Truck } from "@phosphor-icons/react";

type AnnouncementIcon = 'discount' | 'free-shipping' | 'offer';

interface AnnouncementProps {
  title: string;
  icon: AnnouncementIcon;
}

const Announcement = ({ title, icon }: AnnouncementProps) => {
  const [announcementTitle, setAnnouncementTitle] = useState(title);
  const [announcementIcon, setAnnouncementIcon] = useState<AnnouncementIcon>(icon);

  return (
    <div className='bg-[#ff563b] w-full px-6 py-2 flex flex-row justify-center items-center gap-2'>
      {announcementIcon === 'discount' ?
        <SealPercent size={18} weight="duotone" className="text-white" /> :
        announcementIcon === 'free-shipping' ?
          <Truck size={18} weight="duotone" className="text-white" /> :
          <Bag size={18} weight="duotone" className="text-white" />
      }
      <h1 className='font-semibold text-xs text-white uppercase md:text-sm text-center'>{announcementTitle}</h1>
    </div>
  )
}

export default Announcement