import { fadeIn } from "@/libs/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import BlurryBlob from "./animata/background/blurry-blob";

export default function About() {
    const words = [
        {
            text: "About the project"
        }
    ];

    return (
          <div className="container relative px-4 lg:px-0 w-full mt-8 lg:mt-0">
            <motion.div
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex flex-col-reverse w-full justify-center gap-6 lg:grid lg:grid-cols-[456px_1fr] items-center lg:gap-9">
                <div>
                    <Image
                        src="/about-image.png"
                        width={456}
                        height={456}
                        alt="About the project"
                    />
                </div>
                <div className="max-w-full mx-auto md:max-w-[816px]">
                    <TypewriterEffectSmooth
                        words={words}
                        className="text-[28px] lg:text-[40px] leading-[30px] lg:leading-[48px] uppercase"
                        cursorClassName="h-[40px]w-[4px]"
                    />

                    <p className="text-gray text-md lg:text-2xl lg:leading-[36px] font-normal mt-4 lg:mt-6">
                        MoonClash (MCLSH) is more than just a memecoin. It is an epic story of ambition, innovation, and power that can
                        transform the world of cryptocurrency. Join us on this exciting journey and become part of a new era in financial
                        technology.
                    </p>
                </div>
            </motion.div>
            <BlurryBlob
                className="hidden lg:block top-0 -right-24 opacity-60"
                firstBlobColor="bg-[#E95141]"
            />
        </div>
    );
}
