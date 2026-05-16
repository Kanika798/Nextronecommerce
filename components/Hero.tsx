// *********************
// Role of the component: Classical hero component on home page
// Name of the component: Hero.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <Hero />
// Input parameters: no input parameters
// Output: Classical hero component with two columns on desktop and one column on smaller devices
// *********************

import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-[700px] w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 max-lg:h-[900px] max-md:h-[750px] relative overflow-hidden flex items-center">
      {/* Decorative Blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px]"></div>
      <div className="absolute top-1/2 -right-24 w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-[120px]"></div>
      <div className="grid grid-cols-3 items-center justify-items-center px-10 gap-x-10 max-w-screen-2xl mx-auto h-full max-lg:grid-cols-1 max-lg:py-10 max-lg:gap-y-10">
        <div className="flex flex-col gap-y-5 max-lg:order-last col-span-2">
          <h1 className="text-7xl text-slate-900 font-[900] mb-3 max-xl:text-6xl max-md:text-5xl max-sm:text-4xl tracking-tighter leading-none uppercase">
            THE <span className="text-blue-600">PRODUCT</span> OF THE <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">FUTURE</span>
          </h1>
          <p className="text-slate-600 max-sm:text-sm text-xl leading-relaxed font-medium max-w-xl">
            Experience the next generation of technology with our curated collection of premium electronics designed for the modern lifestyle.
          </p>
          <div className="flex gap-x-1 max-lg:flex-col max-lg:gap-y-1">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-14 py-4 rounded-full max-lg:text-xl max-sm:text-lg hover:scale-105 hover:shadow-[0_20px_50px_rgba(37,99,235,0.3)] transition-all duration-300 shadow-xl tracking-wide uppercase">
              BUY NOW
            </button>
            <button className="bg-white/80 backdrop-blur-md text-slate-800 font-bold px-14 py-4 rounded-full max-lg:text-xl max-sm:text-lg border border-slate-200 hover:bg-white hover:shadow-lg transition-all duration-300 shadow-md tracking-wide uppercase">
              LEARN MORE
            </button>
          </div>
        </div>
        <Image
          src="/watch for banner.png"
          width={400}
          height={400}
          alt="smart watch"
          className="max-md:w-[300px] max-md:h-[300px] max-sm:h-[250px] max-sm:w-[250px] w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
