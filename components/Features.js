"use client";

import Image from "next/image";
import { useState } from "react";

const Features = () => {
  const [state] = useState([
    {
      id: 1,
      image: "/images/1.png",
      heading: "Unleashing Unrivaled Liquidity",
      p: " Experience $WASPs unparalleled depth and stability, powered by our innovative voting mechanism and diverse WASP LP pairings.",
    },
    {
      id: 2,
      image: "/images/2.png",
      heading: "Driving Liquidity",
      p: "Igniting the next era of protocols on Polygon by unleashing a dynamic free market for WASP emissions. Empower yourself with the immense capital efficiency of veWASP, enabling you to LP and participate in the system, earning additional APR, at the same time.",
    },
    {
      id: 3,
      image: "/images/3.png",
      heading: "Elite Fee Discounts",
      p: "Enhance your trading experience on Wasp Finance by locking up $WASP to receive up to fee discount.",
    },
  ]);
  return (
    <section className="bg-[#09080C]">
      <div className="max-w-screen-xl mx-auto px-6 pb-20">
        <h3 className="text-center text-[22px] uppercase font-medium text-[#0610FF]">
          features
        </h3>
        <h1 className="text-center text-white text-4xl md:leading-[60px] md:text-[54px] uppercase mt-5 font-bold">
          Discover WASP Finance’s unique features
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-20 relative">
          <div className="absolute -top-5 right-0 2xl:-right-10 w-[124px] h-[98px]">
            <Image
              src="/images/feature-shap.png"
              fill
              className="w-full h-full"
              alt="image"
            />
          </div>

          {state.map((item, key) => (
            <div
              className={`bg-[#17161A]/10 border border-zinc-600 backdrop-blur relative p-8 rounded-b-3xl rounded-tr-3xl clip min-h-[358px] ${
                item.id === 2 && "mt-12"
              }`}
              key={item.id}
            >
              <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-white to-black"></span>
              <span className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-white to-black"></span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-left from-white to-black"></span>
              <div className="relative">
                <Image
                  width={76}
                  height={88}
                  src="/images/blue.png"
                  alt="blue block"
                />
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    width={76}
                    height={88}
                    src={item.image}
                    alt="blue block"
                  />
                </div>
              </div>
              <h2 className="text-white text-[24px] font-medium mt-2">
                {item.heading}
              </h2>
              <p className="mt-2 text-base text-zinc-400">{item.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
