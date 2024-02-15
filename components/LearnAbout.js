"use client";
import { FaBook } from "react-icons/fa6";

const LearnAbout = () => {
  return (
    <section className="bg-[#09080C]">
      <div className="max-w-screen-xl mx-auto py-[250px] px-6">
        <div className="p-[1px] bg-gradient-to-r from-white to-[#0610FF] overflow-hidden rounded-tr-3xl rounded-br-3xl rounded-bl-3xl">
          <div className="bg-[#17161A] p-12 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl">
            <div className="flex flex-col md:flex-row md:space-x-14 md:items-center">
              <h1 className="text-white text-3xl leading-[45px] md:text-[54px] font-bold">
                Learn about the Revolution
              </h1>
              <button className="h-[54px] mt-5 md:mt-0 border rounded-[5px] border-white px-5 flex items-center justify-center text-white space-x-2 uppercase text-lg font-medium">
                <FaBook /> <span>gitbook</span>
              </button>
            </div>
            <p className="text-white text-lg mt-3">
              Experience the true potential of decentralized liquidity. Empower
              your trading with Wasp Finance's groundbreaking liquidity layer,
              designed to deliver unparalleled depth and stability on Arbitrum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnAbout;
