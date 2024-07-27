import Image from "next/image";
import React, { useEffect, useState } from "react";
import PrimaryButton from "./Others/PrimaryButton";
import SocialItem from "./Others/SocialItem";
import { motion } from "framer-motion";
import { fadeIn } from "@/libs/variants";
import BlurryBlob from "./animata/background/blurry-blob";
import Modal from "./Others/Modal";
import { Icon } from "@iconify/react";

export default function Footer() {
    const [dimensions, setDimensions] = useState({ width: 251, height: 110 });

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errors, setErrors] = useState({ name: false, email: false, message: false });

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = async () => {
        const newErrors = {
            name: name === "",
            email: email === "",
            message: message === ""
        };

        if (newErrors.name || newErrors.email || newErrors.message) {
            setErrors(newErrors);
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch("/api/submitForm", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, message })
            });

            const data = await response.json();
            setIsLoading(false);

            if (response.ok) {
                setIsModalOpen(true);
                setName("");
                setEmail("");
                setMessage("");
                setErrors({ name: false, email: false, message: false });
            }
        } catch (error) {
            setIsLoading(false);
            alert("An error occurred while submitting the form.");
        }
    };

    useEffect(() => {
        const updateDimensions = () => {
            if (window.innerWidth > 768) {
                setDimensions({ width: 251, height: 110 });
            } else {
                setDimensions({ width: 113, height: 113 });
            }
        };

        updateDimensions();

        window.addEventListener("resize", updateDimensions);

        return () => window.removeEventListener("resize", updateDimensions);
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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={`appearance-none border-[3px] rounded-full w-full py-[8px] lg:py-[14px] px-4 lg:px-8 text-gray focus:outline-none text-md lg:text-2xl leading-[30px] bg-transparent outline-none transition-all duration-300 ${
                                errors.name ? "border-red-500" : "border-[#A32F30] focus:border-[#E95141]"
                            }`}
                        />
                        {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
                        <input
                            type="text"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`appearance-none border-[3px] rounded-full w-full py-[8px] lg:py-[14px] px-4 lg:px-8 text-gray focus:outline-none text-md lg:text-2xl leading-[30px] bg-transparent outline-none transition-all duration-300 ${
                                errors.email ? "border-red-500" : "border-[#A32F30] focus:border-[#E95141]"
                            }`}
                        />
                        {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
                        <textarea
                            placeholder="Your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className={`appearance-none border-[3px] rounded-3xl lg:rounded-[40px] w-full py-[8px] lg:py-[14px] px-4 lg:px-8 text-gray focus:outline-none text-md lg:text-2xl leading-[30px] bg-transparent outline-none transition-all duration-300 h-[150px] lg:h-[180px] resize-none ${
                                errors.message ? "border-red-500" : "border-[#A32F30] focus:border-[#E95141]"
                            }`}></textarea>
                        {errors.message && <p className="text-red-500 text-sm">Message is required</p>}

                        <div className="flex gap-4 lg:gap-[22px] items-center mt-6 lg:mt-20">
                            <PrimaryButton
                                text="Submit"
                                onClick={handleSubmit}
                                icon={isLoading}
                            />
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
                    exit="hidden"
                    className="hidden md:block">
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
                        <a href="#header">
                            <Image
                                src="/logo.svg"
                                width={dimensions.width}
                                alt="LOGO"
                                height={dimensions.height}
                            />
                        </a>
                    </div>
                    <div className="flex items-center gap-6 mt-10">
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
                </div>
            </motion.div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}>
                <div className="flex justify-center">
                    <Icon
                        icon="icon-park-solid:success"
                        style={{ color: "#04dc30" }}
                        className="text-6xl"
                    />
                </div>
                <h2 className="text-gray text-center text-2xl mt-4 font-semibold">Thank you! We will contact you soon</h2>
            </Modal>

            <BlurryBlob
                className="rounded-xl opacity-60 bottom-0 -left-24 hidden lg:block"
                firstBlobColor="bg-[#E95141]"
            />
        </footer>
    );
}
