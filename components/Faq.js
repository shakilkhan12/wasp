"use client";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useState } from "react";
import Image from "next/image";
const Faq = () => {
  const [active, setActive] = useState(1);
  const [data] = useState([
    {
      id: 1,
      header: "What is Wasp Finance?",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
    },
    {
      id: 2,
      header: "Is Wasp Finance live yet?",
      content: "Quisque eget luctus mi, vehicula mollis lorem...",
    },
    {
      id: 3,
      header: "How do i acquire weWASP tokens",
      content: "Suspendisse massa risus, pretium id interdum in...",
    },
  ]);
  return (
    <section className="bg-[#09080C]">
      <div className="max-w-screen-xl mx-auto px-6 py-20 relative">
        <div className="absolute -bottom-10 left-0 w-[118px] h-[170px]  backdrop-blur">
          <Image
            src="/images/shap.png"
            fill
            alt="shap"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-0 right-0 w-[118px] h-[170px]  backdrop-blur">
          <Image
            src="/images/black-block.png"
            fill
            alt="shap"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-[#17161A]/50 border border-zinc-600 backdrop-blur relative p-8 rounded-b-3xl rounded-tr-3xl">
          <h1 className="text-white uppercase text-4xl md:text-[54px]">FAQ</h1>
          <div className="text-white mt-10">
            <div>
              {data.map(({ header, content, id }, i) => (
                <div className="border-b border-b-zinc-400 py-4">
                  <div
                    className="flex justify-between space-x-5 relative cursor-pointer"
                    onClick={() => setActive(id)}
                  >
                    <h4>{header}</h4>
                    {active === id ? <FaMinus /> : <FaPlus />}
                  </div>
                  {active === id && (
                    <p className="text-zinc-500 mt-4">{content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
