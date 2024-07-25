import React from "react";
import Image from "next/image";

export default function SocialItem({src, width, height, alt, link}: {src: string, width: number, height: number, alt: string, link: string}) {
    return (
        <div className="p-[6px] md:p-3 rounded-md md:rounded-2xl bg-[#E95141] hover:bg-[#A32F30] transition-all duration-300 w-[40px] h-[40px] md:w-[84px] md:h-[84px] flex items-center justify-center cursor-pointer">
            <a href={link}>
            <Image
                src={src}
                width={width}
                height={height}
                alt={alt}
            />
            </a>
        </div>
    );
}
