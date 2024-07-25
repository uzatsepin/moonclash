import Image from "next/image";
import React from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { motion } from "framer-motion";
import { fadeIn } from "@/libs/variants";

export default function Features() {

    const words = [
        {
            text: 'Unique'
        },
        {
            text: 'features'
        }
    ]

    return (
        <div className="container mx-auto mt-8 lg:mt-32 px-4 lg:px-0">
            <div>
                <div className="flex justify-center">
                    <TypewriterEffectSmooth words={words} className="font-medium text-[28px] lg:text-[56px] leading-[30px] lg:leading-[48px] uppercase" cursorClassName="h-[28px] lg:h-[56px]"/>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-24 mt-8 lg:mt-24">
                    <motion.div variants={fadeIn("left", 0.1)}
                        initial="hidden"
                        animate="show"
                        exit="hidden">
                        <Image
                            src="/features/gamification.png"
                            width={333}
                            height={280}
                            alt="Gamification"
                            className="min-w-[150px] max-w-[150px] lg:min-h-[280px] lg:min-w-[337px] mx-auto" 
                        />
                        <div className="mt-6 lg:mt-[60px]">
                          <h3 className="text-gray text-center font-medium text-[20px] lg:text-[32px] leading-[30px] lg:leading-[36px]">Gamification</h3>
                          <p className="text-center font-normal text-[16px] lg:text-2xl leading-[20px] md:leading-[36px] text-gray mt-4">Participate in quests and missions inspired by the MoonClash storyline</p>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden">
                        <Image
                            src="/features/memes.png"
                            width={362}
                            height={280}
                            alt="Memes and culture"
                            className="min-w-[150px] max-w-[150px] lg:min-h-[280px] lg:min-w-[337px] mx-auto" 
                        />
                        <div className="mt-6 lg:mt-[60px]">
                          <h3 className="text-gray text-center font-medium text-[20px] lg:text-[32px] leading-[30px] lg:leading-[36px]">Memes and Culture</h3>
                          <p className="text-center font-normal text-[16px] lg:text-2xl leading-[20px] md:leading-[36px] text-gray mt-4">Actively create and spread memes to boost engagement</p>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        animate="show"
                        exit="hidden">
                        <Image
                            src="/features/community.png"
                            width={333}
                            height={280}
                            alt="Memes and culture"
                            className="min-w-[150px] max-w-[150px] lg:min-h-[280px] lg:min-w-[337px] mx-auto" 
                        />
                        <div className="mt-6 lg:mt-[60px]">
                          <h3 className="text-gray text-center font-medium text-[20px] lg:text-[32px] leading-[30px] lg:leading-[36px]">Community</h3>
                          <p className="text-center font-normal text-[16px] lg:text-2xl leading-[20px] md:leading-[36px] text-gray mt-4">Meme contests, weekly AMA sessions, and voting on the future development of the project</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
