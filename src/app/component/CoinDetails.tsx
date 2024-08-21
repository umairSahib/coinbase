import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faAngleDown,
  faArrowUpFromBracket,
  faChartSimple,
  faMagnifyingGlass,
  faStar,
  faArrowDownUpLock,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "./layout/Navbar";
import FlowBiteAccordion from "./FlowBiteAccordion";

const CoinDetails = () => {
  return (
    <>
      <Navbar />
      <nav className=" mt-10 ml-10 mr-10">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center ">
            <Image src="/bitcoin.png" alt="btc" width={50} height={40} />
            <h1 className=" font-normal text-4xl">Bitcoin</h1>
            <h2 className="text-[#F7931A] font-normal text-4xl">BTC</h2>
          </div>
          <div className="flex gap-4 items-center">
            <button className="bg-[#014CEC] rounded-3xl text-white pl-5 pr-5 pt-2 pb-2 text-base font-semibold flex gap-1 items-center">
              <FontAwesomeIcon icon={faChartSimple} className="text-white" />
              Buy
            </button>
            <button className="bg-[#EEF0F3] w-10 h-10 rounded-full">
              <FontAwesomeIcon icon={faStar} className="text-base text-black" />
            </button>
            <button className="bg-[#EEF0F3] w-10 h-10 rounded-full">
              <FontAwesomeIcon
                icon={faArrowUpFromBracket}
                className="text-base text-black"
              />
            </button>
            <button className="rounded-3xl bg-[#EEF0F3] text-black pl-5 pr-5 pt-2 pb-2 text-sm font-semibold flex gap-2 items-center">
              PKR
              <FontAwesomeIcon
                icon={faAngleDown}
                className="text-base text-black"
              />
            </button>
            <div className="relative sm:hidden md:flex lg:flex 2xl:flex">
              <div className="flex items-center">
                <input
                  type="text"
                  name="inputName"
                  placeholder="Search all assets"
                  className="pt-2 pr-20 pb-2 pl-12 rounded-3xl border text-base bg-[#EEF0F3] font-normal border-[#ECEFF1]  text-[#0A0B0D]"
                />
                <button type="submit" className="absolute left-3">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="fa-magnifying-glass text-base font-normal text-[#0A0B0D]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="border border-[#5B616E33] mt-20 "></div>
      <header className="border border-[#5B616E33]">
        <div className="grid grid-cols-2 pt-10 ">
          <div className="">First Section</div>
          <div className="bg-[#F5F8FF] pt-10 pb-20">
            <div className="pl-10 pr-10">
              <div className="inline-flex items-center rounded-full bg-gray-100 p-1">
                <button className="bg-black text-white px-4 py-2 rounded-full focus:outline-none">
                  Buy
                </button>
                <button className="text-black px-4 py-2 focus:bg-black focus:rounded-full focus:text-white text-sm font-semibold">
                  Sell
                </button>
                <button className="text-black px-4 py-2 focus:bg-black focus:rounded-full focus:text-white text-sm font-semibold">
                  Convert
                </button>
              </div>
              {/* <div className="text-xl font-bold animate-blink">
                Blinking Text
              </div> */}
              <div className="pt-12">
                <h1 className="text-8xl font-normal text-[#5B616E]">
                  <span className="animate-blink">0</span>PKR
                </h1>
              </div>
              <div className="pt-10 flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faArrowDownUpLock}
                  className="text-sm font-semibold text-[#0052FF]"
                />
                <h2 className="text-sm font-semibold text-[#0052FF]">0 BTC</h2>
              </div>
              <div className="pt-10 flex items-center justify-between">
                <div className="flex gap-4 items-center">
                  <div>
                    <Image
                      src="/bitcoin.png"
                      alt="pnb"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold ">Buy</h2>
                    <h2 className="text-base font-normal text-[#5B616E]">
                      Bitcoin (BTC)
                    </h2>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <div>
                    <h1 className="text-base font-normal">PKR 16,873,500.51</h1>
                    <h2 className="text-base font-normal text-[#5B616E]">
                      Price
                    </h2>
                  </div>
                  <button>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-base font-normal text-[#5B616E]"
                    />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between pt-10">
                <div>
                  <h1 className="text-base font-semibold ">Pay with</h1>
                  <h2 className="text-base font-normal text-[#5B616E]">
                    Cash (PKR)
                  </h2>
                </div>
                <div>
                  <button>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-base font-normal text-[#5B616E]"
                    />
                  </button>
                </div>
              </div>
              <div className="flex justify-center pt-10">
                <button className="pl-40 pt-4 pb-4 pr-40 bg-[#014CEC] rounded-full text-white text-base font-semibold">
                  Buy Bitcoin
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <FlowBiteAccordion />
    </>
  );
};

export default CoinDetails;
