import React from "react";
import Image from "next/image";

const Navigation = () => {
  return (
    <>
      <div className="pt-6 pl-10 pr-6 flex justify-between ">
        <div className="flex gap-3">
          <button className="pt-1 pr-6 pb-1 pl-6 bg-[#F1F5FE] font-semibold text-sm text-[#0052FF] rounded-3xl">
            All assets
          </button>
          <button className="pt-1 pr-6 pb-1 pl-6 font-semibold text-sm">
            Tradable
          </button>
          <button className="pt-1 pr-6 pb-1 pl-6 font-semibold text-sm">
            Gainers
          </button>
          <button className="pt-1 pr-6 pb-1 pl-6 font-semibold text-sm">
            Losers
          </button>
        </div>
        <div className="flex gap-8">
          <h2 className="text-[#587088] font-semibold text-sm ">1H</h2>
          <h2 className="text-[#0052FF] font-semibold text-sm">24H</h2>
          <h2 className="text-[#587088] font-semibold text-sm ">1W</h2>
          <h2 className="text-[#587088] font-semibold text-sm ">1M</h2>
          <h2 className="text-[#587088] font-semibold text-sm ">1Y</h2>
        </div>
      </div>
    </>
  );
};

export default Navigation;
