"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { apiData } from "../apiData";

interface CryptoData {
  price_change_percentage_24h: number;
  total_volume: number;
  low_24h: number;
  image: string;
  name: string;
  current_price: number;
}

const Header: React.FC = () => {
  const [data, setData] = useState<CryptoData[]>(apiData);

  const topGainer = data.reduce((prev, current) =>
    prev.price_change_percentage_24h > current.price_change_percentage_24h
      ? prev
      : current
  );
  console.log("🚀 ~ topGainer:", topGainer);

  const highestVolume = data.reduce((prev, current) =>
    prev.total_volume > current.total_volume ? prev : current
  );
  console.log("🚀 ~ highestVolume:", highestVolume);

  const lowestVolume = data.reduce((prev, current) =>
    prev.low_24h < current.low_24h ? prev : current
  );
  console.log("🚀 ~ lowestVolume:", lowestVolume);

  return (
    <header className="pl-10 pr-10 pt-6">
      <div className="flex justify-between">
        <div>
          <h2 className="text-[#AEBAE5] font-normal text-sm">
            In the past 24 hours
          </h2>
          <h1 className="text-lg font-semibold mt-2">
            Market is up <span className="text-[#3ACC8A]">2.29%</span>
          </h1>
        </div>

        <div className="relative sm:hidden md:flex lg:flex 2xl:flex">
          <div className="flex items-center">
            <input
              type="text"
              name="inputName"
              placeholder="Search all assets"
              className="w-96 h-12 border border-[#ECEFF1] pl-8 text-[#AEBAE5]"
            />
            <button type="submit" className="absolute left-2">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="fa-magnifying-glass text-lg text-[#AEBAE5]"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="flex sm:flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 2xl:grid 2xl:grid-cols-2 mt-8">
        <div className="flex justify-between pt-8 bg-[#B8C9C8] border border-[#ECEFF1]">
          <div>
            <h1 className="font-semibold text-base text-black max-w-48 ml-6">
              Crypto questions, answered
            </h1>
            <h2 className="font-normal text-sm ml-6 mt-2">
              Learn with Coinbase
            </h2>
          </div>
          <div>
            <Image
              className="ml-6 mb-0"
              src="/learn.png"
              alt="pic"
              width={113}
              height={95}
            />
          </div>
        </div>
        <div className="flex justify-between pt-8  border border-[#ECEFF1]">
          <div>
            <h1 className="font-semibold text-base text-black max-w-48 ml-6"></h1>
            <h2 className="font-normal text-sm ml-6 mt-2"></h2>
          </div>
          <div>
            <Image
              className="ml-6 mb-0"
              src="/learn.png"
              alt="pic"
              width={113}
              height={95}
            />
          </div>
        </div>
        <div className="flex justify-between pt-8  border border-[#ECEFF1]">
          <div>
            <h1 className="font-semibold text-base text-black max-w-48 ml-6"></h1>
            <h2 className="font-normal text-sm ml-6 mt-2"></h2>
          </div>
          <div>
            <Image
              className="ml-6 mb-0"
              src="/learn.png"
              alt="pic"
              width={113}
              height={95}
            />
          </div>
        </div>
        <div className="flex justify-between pt-8  border border-[#ECEFF1]">
          <div>
            <h1 className="font-semibold text-base text-black max-w-48 ml-6"></h1>
            <h2 className="font-normal text-sm ml-6 mt-2"></h2>
          </div>
          <div>
            <Image
              className="ml-6 mb-0"
              src="/learn.png"
              alt="pic"
              width={113}
              height={95}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
