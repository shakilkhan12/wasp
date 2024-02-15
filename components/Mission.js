"use client";

import Image from "next/image";

const Mission = () => {
  return (
    <>
      <section className="bg-[#09080C] bg-[url('/images/blocks.png')] bg-no-repeat bg-cover w-full h-full">
        <div className="max-w-screen-xl mx-auto px-6 pb-20 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-[#0610FF] text-[22px] uppercase">mission</h3>
              <h1 className="mt-4 text-white uppercase text-5xl leading-[53px] lg:text-[55px] lg:leading-[60px]">
                revolutionize the DeFi landscape
              </h1>
              <p className="mt-4 text-zinc-400 text-lg">
                Our mission is to revolutionize the DeFi landscape by delivering
                a powerful, secure, and user-centric liquidity platform on
                Polygon. We strive to empower our community with innovative
                features, unparalleled fee discounts, and a unique voting
                mechanism that promotes deep liquidity for the WASP governance
                token.
              </p>
            </div>
            <div className="w-full relative">
              <div className="pt-[56.25%]">
                <Image
                  src={"/images/mission.png"}
                  alt="Your Image"
                  fill
                  className="w-full h-full absolute inset-0 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#09080C]">
        <div className="w-full relative">
          <div className="pt-[56.25%]">
            <Image
              src={"/images/lp.png"}
              alt="Your Image"
              fill
              className="w-full h-full absolute inset-0 object-contain"
            />
          </div>
        </div>
        {/* <div className="relative 2xl:w-[1440px] xl:w-[1200px] w-full 2xl:h-[918px] xl:h-[800px] h-[400px] mx-auto">
          <Image
            src="/images/lp.png"
            fill
            className="w-full h-full object-contain"
          />
        </div> */}
      </div>
    </>
  );
};

export default Mission;
