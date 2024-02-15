"use client";

import Image from "next/image";

const Join = () => {
  return (
    <section className="bg-gradient-to-t from-[#0a0a22] to-black text-white py-24">
      <div className="max-w-screen-xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h1 className="text-white text-4xl md:text-[54px] text-center">
              Join The Hive
            </h1>
            <div className="flex justify-center">
              <button className="bg-[#1E1E1E] mt-10 flex items-center justify-center text-white uppercase text-sm font-medium h-[55px] px-8 rounded-[5px] border border-[#C8C3D5]">
                discord
              </button>
            </div>
          </div>
          <div className="w-full relative">
            <div className="pt-[56.25%]">
              <Image
                src={"/images/join.png"}
                alt="Your Image"
                fill
                className="w-full h-full absolute inset-0 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
