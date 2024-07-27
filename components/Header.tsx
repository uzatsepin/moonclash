import Image from "next/image";
import React, { useEffect, useState } from "react";
import SocialItem from "./Others/SocialItem";
import { motion } from "framer-motion";
import { fadeIn } from "@/libs/variants";
import BlurryBlob from "./animata/background/blurry-blob";

export default function Header() {

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
        <header>
            <BlurryBlob
                className="rounded-xl opacity-60 -top-14 -left-14 z-20 hidden lg:block"
                firstBlobColor="bg-[#E95141]"
            />
            <div className="container pt-10 px-4 lg:px-0">
                <motion.div
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="flex justify-between">
                    <div>
                        <Image
                            src="/logo.svg"
                            width={dimensions.width}
                            alt="LOGO"
                            height={dimensions.height}
                        />
                    </div>
                    <div className="flex items-center gap-6">
                        <SocialItem
                            src="/x-logo.svg"
                            width={60}
                            height={60}
                            alt="X logo"
                            link="https://x.com/moonclash_coin"
                        />
                        <SocialItem
                            src="/tg-logo.svg"
                            width={60}
                            height={60}
                            alt="Telegram logo"
                            link="https://t.me/moonclash_coin"
                        />
                        <SocialItem
                            src="/dex-logo.svg"
                            width={51}
                            height={60}
                            alt="DEX-Tools logo"
                            link="https://pump.fun/5nxYYE2ADShm6nELhwTKkdz3kuZBvgtgmSHWFYipump"
                        />
                    </div>
                </motion.div>
            </div>
        </header>
    );
}
