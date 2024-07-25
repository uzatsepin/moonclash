import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            keyframes: {
                "pop-blob": {
                    "0%": { transform: "scale(1)" },
                    "33%": { transform: "scale(1.2)" },
                    "66%": { transform: "scale(0.8)" },
                    "100%": { transform: "scale(1)" }
                }
            },
            container: {
                center: true,
                screens: {
                    sm: "100%",
                    md: "100%",
                    lg: "100%",
                    xl: "1440px"
                }
            },
            backgroundImage: {
                "social-gradient": "linear-gradient(314.03deg, #E95141 -10.68%, #A32F30 112.75%)",
                "button-gradient": "linear-gradient(279.51deg, #E95141 -2.41%, #A32F30 101.92%)",
                "button-gradient-hover": "linear-gradient(279.51deg, #FF7B6B -2.41%, #CC3E3F 101.92%)",
                card: "linear-gradient(135deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0) 100%)"
            },
            boxShadow: {
                button: "0px 10px 30px 10px rgba(233, 81, 65, 0.4)"
            },
            colors: {
                gray: "#F4F3F3",
                filter: {
                    "blur-20": "blur(20px)",
                    "blur-25": "blur(25px)"
                }
            },
            animation: {
              "pop-blob": "pop-blob 3s infinite",
            }
        }
    },
    plugins: []
};
export default config;
