"use client";
import { GiHamburgerMenu } from "react-icons/gi";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [navStatus, setNavStatus] = useState(false);
  return (
    <nav className="bg-[#09080C] w-full h-[101px] relative">
      <div className="h-[101px] max-w-screen-2xl w-full mx-auto px-6 flex justify-between items-center space-x-5 ">
        <Link href="/">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-[100px] h-auto object-contain"
          />
        </Link>
        {/* mobile links */}
        {navStatus && (
          <ul className="z-[999999] flex lg:hidden flex-col items-center w-full absolute right-0 top-full ">
            <Link
              href="/"
              className=" px-4 py-3 text-sm font-medium capitalize bg-black text-white hover:bg-zinc-600 block w-full"
            >
              contact
            </Link>
            <Link
              href="/"
              className=" px-4 py-3 text-sm font-medium capitalize bg-black text-white hover:bg-zinc-600 block w-full"
            >
              mission
            </Link>
            <Link
              href="/"
              className=" px-4 py-3 text-sm font-medium capitalize bg-black text-white hover:bg-zinc-600 block w-full"
            >
              faq
            </Link>
            <Link
              href="/"
              className=" px-4 py-3 text-sm font-medium capitalize bg-black text-white hover:bg-zinc-600 block w-full"
            >
              contact
            </Link>
          </ul>
        )}
        <ul className="hidden lg:flex items-center space-x-6">
          <Link
            href="/"
            className="text-white uppercase text-[13px] font-medium hover:text-white focus:text-white"
          >
            contact
          </Link>
          <Link
            href="/"
            className="text-white uppercase text-[13px] font-medium hover:text-white focus:text-white"
          >
            mission
          </Link>
          <Link
            href="/"
            className="text-white uppercase text-[13px] font-medium hover:text-white focus:text-white"
          >
            faq
          </Link>
          <Link
            href="/"
            className="text-white uppercase text-[13px] font-medium hover:text-white focus:text-white"
          >
            contact
          </Link>
        </ul>
        <Link
          href="/"
          className="bg-[#1E1E1E] flex items-center justify-center text-white uppercase text-sm font-medium h-[55px] px-8 rounded-[5px] border border-[#C8C3D5]"
        >
          open app
        </Link>
        <span
          className="block lg:hidden cursor-pointer text-white"
          onClick={() => setNavStatus(!navStatus)}
        >
          <GiHamburgerMenu size={24} />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
