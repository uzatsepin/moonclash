import Image from "next/image";
import React from "react";
import TokenomicsItems from "./Others/TokenomicsItems";
import TokenomicsCard from "./Others/TokenomicsCard";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { motion } from "framer-motion";
import { fadeIn } from "@/libs/variants";

export default function Tokenomics() {

    const words = [
        {
            text: "TOKENOMICS"
        }
    ]

    return (
        <div className="container mt-[244px] relative px-4 lg:px-0">
            <div>
                <div className="flex justify-center relative z-10">
                    <TypewriterEffectSmooth words={words} className="text-center font-medium text-3xl lg:text-[56px] leading-[30px] lg:leading-[48px] uppercase"  cursorClassName="h-[40px]w-[4px]"/>
                </div>
                <div className="mt-4 lg:mt-16 max-w-[200px] lg:max-w-[625px] mx-auto">
                    <p className="text-left  lg:text-center font-normal text-md lg:text-2xl leading-[19px] lg:leading-[36px] text-gray">
                        MoonClash (MCLSH) — The Memecoin of the Future
                    </p>
                    <div className="lg:max-w-[543px] mx-auto mt-4 lg:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <TokenomicsItems
                            name="Name"
                            descr="MoonClash"
                        />
                        <TokenomicsItems
                            name="Ticker"
                            descr="MCLSH"
                        />
                        <TokenomicsItems
                            name="Blockchain"
                            descr="Solana"
                        />
                        <TokenomicsItems
                            name="Total Supply"
                            descr="555,547,646 MCLSH"
                        />
                    </div>
                </div>

                <motion.div variants={fadeIn("down", 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden" className="mt-6 lg:mt-24 flex flex-col md:grid lg:grid-cols-3 md:grid-cols-2 gap-4 lg:gap-9 relative justify-center">
                    <TokenomicsCard
                        cardNum="1"
                        name="Startup Round and Early Investors"
                        descr="10% (55,554,764 MCLSH)"
                    />
                    <TokenomicsCard
                        cardNum="2"
                        name="Team and Advisors"
                        descr="15% (83,332,147 MCLSH)"
                    />

                    <TokenomicsCard
                        cardNum="3"
                        name="Reserve Fund"
                        descr="10% (55,554,764 MCLSH)"
                    />

                    <TokenomicsCard
                        cardNum="4"
                        name="Liquidity"
                        descr="25% (138,886,911 MCLSH)"
                    />

                    <TokenomicsCard
                        cardNum="5"
                        name="Community and Marketing"
                        descr="20% (111,109,529 MCLSH)"
                    />

                    <TokenomicsCard
                        cardNum="6"
                        name="Rewards and Airdrops"
                        descr="10% (55,554,764 MCLSH)"
                    />

                    <div></div>
                    <TokenomicsCard
                        cardNum="7"
                        name="DeFi and Gaming Bonuses"
                        descr="10% (55,554,764 MCLSH)"
                        className="col-span-3 flex justify-center"
                    />

                    <motion.div variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden" className="absolute -top-12 right-0 lg:-top-[350px] lg:-right-9">
                        <Image
                            src="/coin-2.png"
                            width={408}
                            height={408}
                            alt="Coin"
                            layout="responsive"
                            className="max-h-[120px] max-w-[120px] lg:max-h-[408px] lg:max-w-[408px]"
                        />
                    </motion.div>
                </motion.div>
            </div>
            <motion.div variants={fadeIn("down", 0.3)}
                        initial="hidden"
                        animate="show"
                        exit="hidden" className="absolute top-0 -left-8 lg:-left-16">
                <Image
                    src="/coin-1.png"
                    width={456}
                    height={456}
                    alt="Coin"
                    className="max-h-[120px] max-w-[120px] lg:max-h-[408px] lg:max-w-[408px]"
                />
            </motion.div>
        </div>
    );
}
