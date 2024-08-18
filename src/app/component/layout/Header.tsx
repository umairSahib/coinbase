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
        <div className="border border-[#ECEFF1]">
          <div>
            <h1 className="text-base font-semibold ml-6 mt-4">
              Top gainer (24h)
            </h1>
          </div>
          <div className="flex justify-between items-center ml-6 mr-6 mt-6 mb-4">
            <div className="flex gap-2 ">
              <div>
                <Image
                  src={topGainer.image}
                  alt="image"
                  width={32}
                  height={32}
                />
              </div>
              <div>
                <h1 className="text-base font-normal">{topGainer.name}</h1>
                <h2
                  className={`text-sm font-normal mt-1 ${
                    topGainer.price_change_percentage_24h < 0
                      ? "text-red-500"
                      : "text-[#3ACC8A]"
                  }`}
                >
                  {topGainer.price_change_percentage_24h}%
                </h2>
              </div>
            </div>
            <div>
              <h2 className="text-base font-normal">
                ${topGainer.total_volume}
              </h2>
              <Image src="/chart5.png" alt="chart" width={60} height={19} />
            </div>
          </div>
        </div>
        <div className="border border-[#ECEFF1]">
          <div>
            <h1 className="text-base font-semibold ml-6 mt-4">
              Highest volume (24h)
            </h1>
          </div>
          <div className="flex justify-between items-center ml-6 mr-6 mt-6 mb-4">
            <div className="flex gap-2 ">
              <div>
                <Image
                  src={highestVolume.image}
                  alt="image"
                  width={32}
                  height={32}
                />
              </div>
              <div>
                <h1 className="text-base font-normal">{highestVolume.name}</h1>
                <h2
                  className={`text-sm font-normal mt-1 ${
                    highestVolume.price_change_percentage_24h < 0
                      ? "text-red-500"
                      : "text-[#3ACC8A]"
                  }`}
                >
                  {highestVolume.price_change_percentage_24h}%
                </h2>
              </div>
            </div>
            <div>
              <h2 className="text-base font-normal">
                ${highestVolume.total_volume}
              </h2>
              <Image src="/chart5.png" alt="chart" width={60} height={19} />
            </div>
          </div>
        </div>
        <div className="border border-[#ECEFF1]">
          <div>
            <h1 className="text-base font-semibold ml-6 mt-4">
              Low Volume (24h)
            </h1>
          </div>
          <div className="flex justify-between items-center ml-6 mr-6 mt-6 mb-4">
            <div className="flex gap-2 ">
              <div>
                <Image
                  src={lowestVolume.image}
                  alt="image"
                  width={32}
                  height={32}
                />
              </div>
              <div>
                <h1 className="text-base font-normal">{lowestVolume.name}</h1>
                <h2
                  className={`text-sm font-normal mt-1 ${
                    lowestVolume.price_change_percentage_24h < 0
                      ? "text-red-500"
                      : "text-[#3ACC8A]"
                  }`}
                >
                  {lowestVolume.price_change_percentage_24h}%
                </h2>
              </div>
            </div>
            <div>
              <h2 className="text-base font-normal">
                ${lowestVolume.total_volume}
              </h2>
              <Image src="/chart5.png" alt="chart" width={60} height={19} />
            </div>
          </div>
        </div>
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
      </div>
    </header>
  );
};

export default Header;
