// *********************
// Role of the component: IntroducingSection with the text "Introducing Singitronic"
// Name of the component: IntroducingSection.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <IntroducingSection />
// Input parameters: no input parameters
// Output: Section with the text "Introducing Singitronic" and button
// *********************

import Link from "next/link";
import React from "react";

const IntroducingSection = () => {
  return (
    <div className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="text-center flex flex-col gap-y-5 items-center">
        <h2 className="text-slate-900 text-7xl font-black text-center mb-4 max-md:text-5xl max-[480px]:text-3xl tracking-tight relative">
          INTRODUCING <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">NEXT</span><span className="text-slate-300">RON</span>
        </h2>
        <div>
          <p className="text-slate-500 text-center text-2xl font-semibold max-md:text-xl max-[480px]:text-base">
            Buy the latest electronics.
          </p>
          <p className="text-slate-500 text-center text-2xl font-semibold max-md:text-xl max-[480px]:text-base">
            The best electronics for tech lovers.
          </p>
          <Link href="/shop" className="group relative block w-96 mt-8 mx-auto max-md:w-72 max-[480px]:w-60">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative block text-white bg-slate-900 font-bold px-12 py-4 text-xl rounded-full hover:bg-slate-800 transition-all duration-300 text-center tracking-widest uppercase">
              EXPLORE SHOP
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroducingSection;
