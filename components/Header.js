"use client";

import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full min-h-[741px] bg-[url('/images/header-bg.png')] bg-no-repeat bg-cover bg-black relative before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-black after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#09080C] ">
      <div className="absolute top-0 left-0 w-[200px] lg:w-[500px] h-full">
        <Image
          src="/images/shap1.png"
          fill
          className="w-full h-full object-cover"
          alt="shap"
        />
      </div>
      <div className="absolute top-0 right-0 w-[200px] lg:w-[400px] h-full">
        <Image
          src="/images/shap2.png"
          fill
          className="w-full h-full object-cover"
          alt="shap"
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-start lg:items-center max-w-screen-xl mx-auto px-6 min-h-[741px] gap-8">
        <h1 className="text-white w-full lg:w-[749px] text-6xl md:text-[76px] font-bold leading-[64px] md:leading-[76px] z-[9999]">
          Empowering the Future of Finance
        </h1>
        <img
          src="/images/big-logo.png"
          alt="logo"
          className="w-[300px] sm:w-[200px] z-[999] md:w-[300px] lg:w-[376px] mt-10 lg:mt-0 h-auto object-contain"
        />
      </div>
    </header>
  );
};

export default Header;
