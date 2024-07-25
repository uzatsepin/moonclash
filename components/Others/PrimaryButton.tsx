import React from 'react'

export default function PrimaryButton({text}: {text: string}) {
  return (
    <div className='py-[9px] px-[30px] lg:py-[17px] lg:px-[63px] bg-[#E95141] shadow-button flex items-center justify-center font-semibold text-[16px] lg:text-4xl leading-[20px] lg:leading-[44px] uppercase text-gray rounded-full cursor-pointer hover:bg-[#A32F30] transition-all duration-300'>{text}</div>
  )
}