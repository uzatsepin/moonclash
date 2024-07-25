import Image from "next/image";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>MoonClash – A Cryptocurrency Saga</title>
                <meta
                    name="description"
                    content="This is the homepage of my Next.js application"
                />
                <meta name="description" content="MoonClash – A Cryptocurrency Saga" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <main className={`flex min-h-screen flex-col ${montserrat.className}`}>
                <Header />
                <Hero />
                <About />
                <Tokenomics />
                <Roadmap />
                <Features />
                <Footer />
            </main>
        </>
    );
}
