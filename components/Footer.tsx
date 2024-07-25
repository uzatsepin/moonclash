import Image from "next/image";
import React, { useEffect, useState } from "react";
import PrimaryButton from "./Others/PrimaryButton";
import SocialItem from "./Others/SocialItem";
import { motion } from "framer-motion";
import { fadeIn } from "@/libs/variants";
import BlurryBlob from "./animata/background/blurry-blob";

export default function Footer() {

    const [dimensions, setDimensions] = useState({ width: 251, height: 110 });

    useEffect(() => {
      const updateDimensions = () => {
        if (window.innerWidth > 768) {
          setDimensions({ width: 251, height: 110 });
        } else {
          setDimensions({ width: 113, height: 113 });
        }
      };
  
      updateDimensions();
  
      window.addEventListener('resize', updateDimensions);
  
      return () => window.removeEventListener('resize', updateDimensions);
    }, []);
    return (
        <footer className="container mx-auto mt-8 lg:mt-32 pb-16 relative px-4 lg:px-0">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="w-full lg:w-[579px]">
                    <motion.h3
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="text-gray text-center lg:text-left text-[28px] lg:text-[56px] lg:leading-[48px] font-medium">
                        Contact Us
                    </motion.h3>

                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="flex flex-col gap-6 mt-8 lg:mt-14">
                        <input
                            type="text"
                            placeholder="Name"
                            className="appearance-none border-[3px] border-[#A32F30] rounded-full w-full py-[8px] lg:py-[14px] px-4 lg:px-8 text-gray focus:outline-none text-md lg:text-2xl leading-[30px] bg-transparent outline-none focus:border-[#E95141] transition-all duration-300"
                        />
                        <input
                            type="text"
                            placeholder="E-mail"
                            className="appearance-none border-[3px] border-[#A32F30] rounded-full w-full py-[8px] lg:py-[14px] px-4 lg:px-8 text-gray focus:outline-none text-md lg:text-2xl leading-[30px] bg-transparent outline-none focus:border-[#E95141] transition-all duration-300"
                        />

                        <textarea
                            placeholder="Your message"
<<<<<<< HEAD
                            className="appearance-none border-[3px] border-[#A32F30] rounded-3xl lg:rounded-[40px] w-full py-[8px] lg:py-[14px] px-4 lg:px-8 text-gray focus:outline-none text-md lg:text-2xl leading-[30px] bg-transparent outline-none focus:border-[#E95141] transition-all duration-300 h-[150px] lg:h-[180px] resize-none"></textarea>
=======
                            className="appearance-none border-[3px] border-[#A32F30] rounded-3xl lg:rounded-full w-full py-[8px] lg:py-[14px] px-4 lg:px-8 text-gray focus:outline-none text-md lg:text-2xl leading-[30px] bg-transparent outline-none focus:border-[#E95141] transition-all duration-300 h-[150px]"></textarea>
>>>>>>> 9c4ccea96026ef822090ecf9fbfb840d2cea0627

                        <div className="flex gap-4 lg:gap-[22px] items-center mt-6 lg:mt-20">
                            <PrimaryButton text="Submit" />
                            <p className="font-normal text-[12px] leading-[15px] text-gray">
                                By clicking on this button, you agree to the processing of personal data
                            </p>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    variants={fadeIn("left", 0.4)}
                    initial="hidden"
                    animate="show"
                    exit="hidden" className="hidden md:block">
                    <Image
                        src="/footer-img.png"
                        width={581}
                        height={581}
                        alt="Footer image"
                    />
                </motion.div>
            </div>

            <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mt-32">
                <div className="flex flex-col justify-center items-center">
                    <div>
                    <Image
                            src="/logo.svg"
                            width={dimensions.width}
                            alt="LOGO"
                            height={dimensions.height}
                        />
                    </div>
                    <div className="flex items-center gap-6 mt-10">
                        <SocialItem
                            src="/x-logo.svg"
                            width={60}
                            height={60}
                            alt="X logo"
                            link="#"
                        />
                        <SocialItem
                            src="/tg-logo.svg"
                            width={60}
                            height={60}
                            alt="Telegram logo"
                            link="#"
                        />
                        <SocialItem
                            src="/dex-logo.svg"
                            width={51}
                            height={60}
                            alt="DEX-Tools logo"
                            link="#"
                        />
                    </div>
                </div>
            </motion.div>

            <BlurryBlob
                className="rounded-xl opacity-60 bottom-0 -left-24 hidden lg:block"
                firstBlobColor="bg-[#E95141]"
            />
        </footer>
    );
}
