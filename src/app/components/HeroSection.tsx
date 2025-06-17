import { ArrowRight, Github, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 bg-[#0a0a0f]">
      <div className="flex flex-col items-center max-w-7xl mx-auto text-center relative z-20 gap-20">
        <div className="mb-8">
          <Image
            src="/transcodeNetworkInfinity.png"
            alt="Transcode Network Logo"
            width={200}
            height={200}
            className="w-32 sm:w-40 lg:w-48 mx-auto object-contain"
            priority
          />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4 bg-white bg-clip-text text-transparent">
            Transcode <br /> Network
          </h2>
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-12 bg-gradient-to-r from-[#5BCEFA] via-[#FFFFFF] to-[#F5A9B8] bg-clip-text text-transparent leading-[1.1] tracking-tight">
        Open-source tech for trans survival and self-determination.
        </h1>
        <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed font-light text-center">
        We're building digital infrastructure for mutual aid, privacy, and care — by and for trans&nbsp;people.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-12">
          <Link
            href="https://discord.gg/PTD4Fdh5T4"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#5BCEFA] to-[#F5A9B8] text-black px-20 py-8 rounded-full text-xl font-semibold flex items-center justify-center gap-4 min-w-[280px] hover:shadow-lg hover:shadow-[#5BCEFA]/25 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Join the Movement</span>
          </Link>
          <Link
            href="https://github.com/Transcode-Network"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#5BCEFA] text-[#5BCEFA] px-20 py-8 rounded-full text-xl font-semibold flex items-center justify-center gap-4 min-w-[280px] hover:bg-[#5BCEFA] hover:text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105"
          >
            <Github className="w-6 h-6" />
            <span>Contribute on GitHub</span>
          </Link>
        </div>
      </div>
    </section>
  );
} 