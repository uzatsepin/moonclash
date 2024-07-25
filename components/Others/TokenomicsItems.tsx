import React from "react";
import Image from "next/image";

export default function TokenomicsItems({name, descr}:{name: string, descr: string}) {
    return (
        <div className="flex gap-3 items-center">
            <div>
                <Image
                    src="coin-icon.svg"
                    width={64}
                    height={64}
                    alt="Coin icon"
                    className="max-w-[33px] max-h-[33px] lg:max-w-[64px] lg:max-h-[64px]"
                />
            </div>
            <div className="flex flex-col">
                <h4 className="text-gray font-medium text-sm lg:text-2xl leading-[19px] lg:leading-[36px] uppercase">{name}</h4>
                <p className="text-gray font-normal text-sm lg:text-2xl leading-[19px] lg:leading-[36px]">{descr}</p>
            </div>
        </div>
    );
}
