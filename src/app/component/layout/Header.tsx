"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const Header = () => {
  const [data, setData] = useState<any>([]);
  let [field, setField] = useState({
    topGainer: 0,
    highestVol: 0,
    lowVolme: 0,
  });
  console.log("🚀 ~ Header ~ field:", field);

  useEffect(() => {
    // Check if data is available
    if (data.length > 0) {
      // Initialize temporary variables to track the desired values
      let tempTopGainer = field.topGainer;
      let tempHighestVol = field.highestVol;
      let tempLowVolme = field.lowVolme;

      // Loop through the data to find the max/min values
      data.forEach((element: any) => {
        if (tempTopGainer < element.price_change_24h) {
          tempTopGainer = element.price_change_24h;
        }
        if (tempHighestVol < element.total_volume) {
          tempHighestVol = element.total_volume;
        }
        if (tempLowVolme > element.low_24h) {
          tempLowVolme = element.low_24h;
        }
      });

      // Update state once after the loop
      setField((prevState) => ({
        ...prevState,
        topGainer: tempTopGainer,
        highestVol: tempHighestVol,
        lowVolme: tempLowVolme,
      }));

      // Debugging logs
      console.log("top-gainer", tempTopGainer);
      console.log("highestVol", tempHighestVol);
      console.log("lowVolme:", tempLowVolme);
    }
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const results = await response.json();
        if (results.length > 0) {
          setField({
            topGainer: results[0].price_change_24h,
            highestVol: results[0].total_volume,
            lowVolme: results[0].low_24h,
          });
        }

        // console.log("🚀 ~ fetchData ~ results:", results);
        setData(results);
      } catch (error) {
        console.error("data ka error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
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
                ></FontAwesomeIcon>
              </button>
            </div>
          </div>
        </div>

        <div className="flex sm:flex-col  md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 2xl:grid 2xl:grid-cols-2 mt-8">
          {data.map(
            (item: any, index: any) =>
              (item.price_change_24h === field.topGainer ||
                item.low_24h === field.lowVolme ||
                item.total_volume === field.highestVol) && (
                <div className="border border-[#ECEFF1]">
                  <div>
                    <h1 className="text-base font-semibold text-[#050F19] mt-4 ml-6">
                      {item.price_change_24h === field.topGainer
                        ? "Top gainer (24h)"
                        : item.low_24h === field.lowVolme
                        ? "Lowest (24h)"
                        : item.total_volume === field.highestVol
                        ? "Highest volume (24h)"
                        : ""}
                    </h1>
                  </div>
                  <div
                    key={index}
                    className="flex justify-between items-center mt-6 mb-4 ml-6 mr-6"
                  >
                    <div className="flex items-center gap-4">
                      <div>
                        <Image
                          src={item.image}
                          width={32}
                          height={32}
                          alt={item.name}
                        />
                      </div>
                      <div>
                        <h1 className="text-[#050F19] text-base font-normal">
                          {item.name}
                        </h1>
                        <h2
                          className={`font-normal text-sm mt-1 ${
                            item.price_change_percentage_24h < 0
                              ? "text-[#DF5F67]"
                              : "text-[#3ACC8A]"
                          }`}
                        >
                          {item.price_change_percentage_24h.toFixed(2)}%
                        </h2>
                      </div>
                    </div>
                    <div>
                      <h1 className="text-[#050F19] text-base font-normal">
                        $ {item.current_price}
                      </h1>
                      <Image
                        className="mt-1"
                        src="/chart5.png"
                        alt="chart"
                        width={60}
                        height={14}
                      />
                    </div>
                  </div>
                </div>
              )
          )}
          <div className="flex justify-between pt-8  bg-[#B8C9C8] border border-[#ECEFF1]">
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
    </>
  );
};

export default Header;
