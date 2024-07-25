import React from "react";

export default function TokenomicsCard({ cardNum, name, descr }: { cardNum: string; name: string; descr: string }) {
    return (
        <div className="bg-no-repeat bg-contain w-[350px] min-h-[200px] lg:min-h-[250px] lg:w-[456px] lg:h-[250px] bg-center relative z-10" style={{ backgroundImage: `url('/cards/card-${cardNum}.png')` }}>
            <div className="flex flex-col items-center justify-center h-[200px] lg:h-full">
                <h3 className="text-gray text-xl leading-[30px] lg:text-4xl lg:leading-[36px] font-medium uppercase text-center">{name}</h3>
                <p className="font-normal text-xl leading-[30px] lg:text-2xl lg:leading-[36px] text-center text-gray mt-2">{descr}</p>
            </div>
        </div>
    );
}
