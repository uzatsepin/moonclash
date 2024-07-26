import React from "react";
import PrimaryButton from "./Others/PrimaryButton";
import Image from "next/image";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { motion } from "framer-motion";
import { fadeIn } from "@/libs/variants";
import BlurryBlob from "./animata/background/blurry-blob";

export default function Hero() {
    const mainText = [
        {
            text: "MoonClash"
        }
    ];

    return (
        <div>
            <div className="container relative min-h-[70vh] flex flex-col justify-between">
                <motion.div
                    variants={fadeIn("down", 0.3)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="max-w-[687px] lg:pt-[300px] lg:pb-[400px] z-10 relative mt-auto">
                    <div>
                        <div className="flex justify-center">
                            <TypewriterEffectSmooth
                                words={mainText}
                                className="font-semibold text-gray text-[36px] lg:text-[88px] uppercase leading-[48px] lg:leading-[107px] text-center my-0 lg:my-6"
                                cursorClassName="h-[36px] lg:h-[107px]"
                            />
                        </div>
                        <p className="mt-4 text-gray font-medium text-[16px] lg:text-[40px] leading-[20px] lg:leading-[49px] text-center top-auto uppercase">
                            A Cryptocurrency Saga
                        </p>
                    </div>
                    <div className="flex items-center gap-4 mt-5 lg:mt-24 justify-center lg:justify-normal">
                        <PrimaryButton text="Buy" />

                        <div className="py-[9px] px-[30px] lg:py-[17px] lg:px-[60px] flex items-center justify-center font-semibold text-[16px] lg:text-4xl leading-[20px] lg:leading-[44px] uppercase text-gray rounded-full border-[3px] border-[#A32F30] hover:bg-[#E95141] cursor-pointer transition-all duration-300">
                            Join community
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    variants={fadeIn("down", 0.4)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="absolute bottom-0 right-0 w-auto h-full">
                    <Image
                        src="/main-photo.png"
                        alt="Main"
                        className="min-w-[300px] min-h-[350px] h-full lg:object-right object-contain"
                        width={827}
                        height={1099}
                    />
                </motion.div>
            </div>
        </div>
    );
}
