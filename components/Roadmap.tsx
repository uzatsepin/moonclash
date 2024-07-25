import Image from "next/image";
import React from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { motion } from "framer-motion";
import { fadeIn } from "@/libs/variants";

export default function Roadmap() {

    const words = [
        {
            text: 'Roadmap'
        }
    ]

    return (
        <div className="container mt-32 mx-auto">
            <div>
                <TypewriterEffectSmooth words={words} className="flex justify-center text-3xl lg:text-[56px] leading-[30px] lg:leading-[48px] font-medium uppercase text-center" cursorClassName="h-[30px] w-[4px] lg:h-[56px]"/>
            </div>

            <div className="relative wrap overflow-hidden mt-16 max-w-full lg:max-w-[884px] mx-auto">
                <div className="hr absolute border-white h-full left-12 lg:left-1/2 pb-10"></div>
                <motion.div variants={fadeIn("down", 0.1)}
                        initial="hidden"
                        animate="show"
                        exit="hidden" className="mb-8 flex justify-between lg:flex-row-reverse lg:gap-[40px] items-center left-timeline">
                    <div className="order-1 lg:w-5/12"></div>
                    <div className="z-20 flex items-center order-1">
                        <Image
                            src="/coins-number/coin-number-1.png"
                            width={139}
                            height={139}
                            alt="coin-number"
                            className="min-h-[100px] min-w-[100px] lg:min-h-[139px] lg:min-w-[139px]"></Image>
                    </div>
                    <div className="order-1 bg-gray-400 rounded-lg lg:w-5/12">
                        <div className="">
                            <h3 className="mb-4 lg:mb-8 font-medium leading-[36px] uppercase text-gray text-2xl lg:text-[32px]">Q3 2024</h3>
                            <p className="text-gray text-md lg:text-[18px] font-normal">
                                Announce the project on major crypto forums and social media
                            </p>
                            <p className="text-gray text-md lg:text-[18px] mt-2 lg:mt-4 font-normal">Launch the official website and whitepaper</p>
                            <p className="text-gray text-md lg:text-[18px] mt-2 lg:mt-4 font-normal">Begin the startup round for early investors</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden" className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="hidden lg:block order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1">
                    <Image
                            src="/coins-number/coin-number-2.png"
                            width={139}
                            height={139}
                            alt="coin-number"
                            className="min-h-[100px] min-w-[100px] lg:min-h-[139px] lg:min-w-[139px]"></Image>
                    </div>
                    <div className="order-1 bg-gray-400 rounded-lg lg:w-5/12">
                        <div className="lg:ml-10">
                            <h3 className="mb-4 lg:mb-8 font-medium leading-[36px] uppercase text-gray text-2xl lg:text-[32px]">Q4 2024</h3>
                            <p className="text-gray text-md lg:text-[18px] font-normal">
                                Launch a marketing campaign, promote through thematic memes and video content
                            </p>
                            <p className="text-gray text-[18px] mt-4 font-normal">Partner with crypto bloggers and influencers</p>
                            <p className="text-gray text-[18px] mt-4 font-normal">
                                Start airdrops and rewards for active community members
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={fadeIn("down", 0.3)}
                        initial="hidden"
                        animate="show"
                        exit="hidden" className="mb-16 flex justify-between lg:flex-row-reverse items-center w-full left-timeline">
                    <div className="hidden lg:block order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1">
                    <Image
                            src="/coins-number/coin-number-3.png"
                            width={139}
                            height={139}
                            alt="coin-number"
                            className="min-h-[100px] min-w-[100px] lg:min-h-[139px] lg:min-w-[139px]"></Image>
                    </div>
                    <div className="order-1 bg-gray-400 rounded-lg lg:w-5/12">
                        <div className="">
                            <h3 className="mb-4 lg:mb-8 font-medium leading-[36px] uppercase text-gray text-2xl lg:text-[32px]">Q1 2025</h3>
                            <p className="text-gray text-md lg:text-[18px] font-normal">List on popular decentralized and centralized exchanges</p>
                            <p className="text-gray text-md lg:text-[18px] mt-2 lg:mt-4 font-normal">
                                Develop and launch a decentralized application (dApp) for token interaction
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={fadeIn("down", 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden" className="flex justify-between items-center w-full right-timeline">
                    <div className="hidden lg:block order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1">
                    <Image
                            src="/coins-number/coin-number-4.png"
                            width={139}
                            height={139}
                            alt="coin-number"
                            className="min-h-[100px] min-w-[100px] lg:min-h-[139px] lg:min-w-[139px]"></Image>
                    </div>
                    <div className="order-1 bg-gray-400 rounded-lg lg:w-5/12">
                        <div className="lg:ml-10">
                            <h3 className="mb-4 lg:mb-8 font-medium leading-[36px] uppercase text-gray text-2xl lg:text-[32px]">Q2 2025</h3>
                            <p className="text-gray text-md lg:text-[18px] font-normal">Integrate with DeFi platforms</p>
                            <p className="text-gray text-md lg:text-[18px] mt-2 lg:mt-4 font-normal">Launch staking and farming programs to retain tokens</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

/* Q3 2024 */

// width: 133px;
// height: 36px;

// font-family: 'Montserrat';
// font-style: normal;
// font-weight: 500;
// font-size: 32px;
// line-height: 36px;
// /* identical to box height, or 112% */
// text-align: center;
// text-transform: uppercase;

// color: #F4F3F3;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

/* Announce the project on major crypto forums and social media */

// width: 352px;
// height: 44px;

// font-family: 'Montserrat';
// font-style: normal;
// font-weight: 400;
// font-size: 18px;
// line-height: 22px;

// color: #F4F3F3;

// /* Inside auto layout */
// flex: none;
// order: 0;
// align-self: stretch;
// flex-grow: 0;
