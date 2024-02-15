"use client";

import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaCodepen } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-[#0a0a22] w-full">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-wrap justify-between space-x-5 items-center pb-10">
          <p className="text-lg text-[#AAAAAA] w-full lg:flex-1">
            Copyright © 2023 Wasp Finance. All Rights Reserved.
          </p>
          <ul className="flex items-center justify-end gap-10 w-full lg:flex-1 mt-4 lg:mt-0">
            <Link
              href="/"
              className="text-white hover:text-white focus:text-white"
            >
              <FaSquareXTwitter className="text-white text-xl" />
            </Link>
            <Link
              href="/"
              className="text-white hover:text-white focus:text-white"
            >
              <FaCodepen className="text-white text-xl" />
            </Link>
            <Link
              href="/"
              className="text-white hover:text-white focus:text-white"
            >
              <FaLinkedinIn className="text-white text-xl" />
            </Link>
            <Link
              href="/"
              className="text-white hover:text-white focus:text-white"
            >
              <FaGithub className="text-white text-xl" />
            </Link>
            <Link
              href="/"
              className="text-white hover:text-white focus:text-white"
            >
              <FaRedditAlien className="text-white text-xl" />
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
