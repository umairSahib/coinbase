import React from "react";
import Image from "next/image";

type FilterHandler = (filter: string) => void;

interface NavigationProps {
  handleFilterData: FilterHandler;
}

const Navigation: React.FC<NavigationProps> = ({ handleFilterData }) => {
  return (
    <>
      <div className="pt-6 pl-10 pr-10 sm:pl-2 sm:pr-2 md:pl-4 md:pr-4 lg:pl-10 lg:pr-10 flex justify-between">
        <div className="flex gap-3">
          <button
            onClick={() => handleFilterData("allAssets")}
            className="pt-1 pr-6 pb-1 pl-6 bg-[#F1F5FE] font-semibold text-sm text-[#0052FF] rounded-3xl"
          >
            All assets
          </button>

          <button
            onClick={() => handleFilterData("Gainers")}
            className="pt-1 pr-6 pb-1 pl-6 font-semibold text-sm"
          >
            Gainers
          </button>
          <button
            onClick={() => handleFilterData("Losers")}
            className="pt-1 pr-6 pb-1 pl-6 font-semibold text-sm"
          >
            Losers
          </button>
        </div>
        <div className="flex sm:hidden md:hidden lg:flex 2xl:flex gap-8">
          <h2 className="text-[#587088] font-semibold text-sm">1H</h2>
          <h2 className="text-[#0052FF] font-semibold text-sm">24H</h2>
          <h2 className="text-[#587088] font-semibold text-sm">1W</h2>
          <h2 className="text-[#587088] font-semibold text-sm">1M</h2>
          <h2 className="text-[#587088] font-semibold text-sm">1Y</h2>
        </div>
      </div>
    </>
  );
};

export default Navigation;
