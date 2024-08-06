import React from "react";
import Image from "next/image";

const Navigation = () => {
  return (
    <>
      <div className="pt-6 pl-6 pr-6 flex justify-between ">
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

      {/* <div className="flex flex-wrap ml-8 ">
        <div className="w-1/5">
          <button className="p-3 text-sm font-normal text-[#113353]">
            Name
          </button>
        </div>
        <div className="flex-1">
          {" "}
          <button className="p-3 text-sm font-normal text-[#113353]">
            Price
          </button>
        </div>
        <div className="flex-1">
          {" "}
          <button className="p-3 text-sm font-normal text-[#113353]">
            Change
          </button>
        </div>
        <div className="flex-1">
          {" "}
          <button className="p-3 text-sm font-normal text-[#113353]">
            Price Chart
          </button>
        </div>
        <div className="flex-1">
          {" "}
          <button className="p-3 text-sm font-normal text-[#113353]">
            Volume (24h)
          </button>
        </div>
        <div className="flex-1">
          {" "}
          <button className="p-3 text-sm font-normal text-[#113353] flex items-center gap-1">
            <div>Market cap</div>
            <div>
              <Image src="/frame.png" width={8} height={10} alt="fram" />
            </div>
          </button>
        </div>
        <div className="flex-1">
          {" "}
          <button className="p-3 text-sm font-normal text-[#113353]">
            Supply
          </button>
        </div>
        <div className="flex-1">
          {" "}
          <button className="p-3 text-sm font-normal text-[#113353]">
            Trade
          </button>
        </div>
      </div>
      <div className="flex flex-wrap ml-8 items-center ">
        <div className="w-1/5">
          <button className="flex gap-4 items-center">
            <Image src="/bitcoin.png" alt="bitcoin" width={32} height={32} />
            <h2 className="text-base font-normal">Bitcoin</h2>
            <h3 className="text-[#11335399] text-sm font-normal">BTC</h3>
          </button>
        </div>
        <div className="flex-1">
          <button className="p-3  whitespace-pre text-base font-normal">
            TRY 375,552.63
          </button>
        </div>
        <div className="flex-1">
          <button className="p-3 text-base font-normal text-[#3ACC8A]">
            +0.85%
          </button>
        </div>
        <div className="flex-1">
          <button>
            <Image src="/vector.png" alt="vector" width={83} height={27} />
          </button>
        </div>
        <div className="flex-1">
          <button className="p-3 text-base font-normal">TRY 80.8B</button>
        </div>
        <div className="flex-1">
          <button className="p-3 text-base font-normal">TRY 7.1T</button>
        </div>
        <div className="flex-1">
          <button className="p-3 text-base font-normal">18.7M</button>
        </div>
        <div className="flex-1">
          <button className=" text-[#FFFFFF] rounded-md pt-2 pr-2 pb-2 pl-2 bg-[#0052FF]">
            Trade
          </button>
        </div>
      </div> */}

      <table className="table w-full ">
        <thead className="">
          <tr className="">
            <th className="text-sm font-normal  text-left">Name</th>
            <th className="text-sm font-normal  text-left">Price</th>
            <th className="text-sm font-normal  text-left">Change</th>
            <th className="text-sm font-normal  text-left">price chart</th>
            <th className="text-sm font-normal  text-left">Volume(24h)</th>
            <th className="text-sm font-normal  text-left">Market cap</th>
            <th className="text-sm font-normal  text-left">Supply</th>
            <th className="text-sm font-normal  text-left">Trade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className=" text-left">
              {" "}
              <div className="flex gap-4 items-center">
                <Image
                  src="/bitcoin.png"
                  alt="bitcoin"
                  width={32}
                  height={32}
                />
                <h2 className="text-base font-normal">Bitcoin</h2>
                <h3 className="text-[#11335399] text-sm font-normal ">BTC</h3>
              </div>
            </td>
            <td className=" text-left">TRY 375,552.63</td>
            <td className="text-base font-normal text-[#3ACC8A]  text-left">
              +0.85%
            </td>
            <td className=" text-left">
              {" "}
              <Image src="/vector.png" alt="vector" width={83} height={27} />
            </td>
            <td className=" text-left">
              {" "}
              <button className="p-3 text-base font-normal">TRY 80.8B</button>
            </td>
            <td className=" text-left">
              <button className="p-3 text-base font-normal">TRY 7.1T</button>
            </td>
            <td className=" text-left">
              <button className="p-3 text-base font-normal">18.7M</button>
            </td>
            <td className=" text-left">
              <button className=" text-[#FFFFFF] rounded-md pt-2 pr-2 pb-2 pl-2 bg-[#0052FF]">
                Trade
              </button>
            </td>
          </tr>
          <tr>
            <td className=" text-left">
              {" "}
              <div className="flex gap-4 items-center">
                <Image
                  src="/bitcoin.png"
                  alt="bitcoin"
                  width={32}
                  height={32}
                />
                <h2 className="text-base font-normal">Bitcoin</h2>
                <h3 className="text-[#11335399] text-sm font-normal ">BTC</h3>
              </div>
            </td>
            <td className=" text-left">TRY 375,552.63</td>
            <td className="text-base font-normal text-[#3ACC8A]  text-left">
              +0.85%
            </td>
            <td className=" text-left">
              {" "}
              <Image src="/vector.png" alt="vector" width={83} height={27} />
            </td>
            <td className=" text-left">
              {" "}
              <button className="p-3 text-base font-normal">TRY 80.8B</button>
            </td>
            <td className=" text-left">
              <button className="p-3 text-base font-normal">TRY 7.1T</button>
            </td>
            <td className=" text-left">
              <button className="p-3 text-base font-normal">18.7M</button>
            </td>
            <td className=" text-left">
              <button className=" text-[#FFFFFF] rounded-md pt-2 pr-2 pb-2 pl-2 bg-[#0052FF]">
                Trade
              </button>
            </td>
          </tr>
          <tr>
            <td className=" text-left">
              {" "}
              <div className="flex gap-4 items-center">
                <Image
                  src="/bitcoin.png"
                  alt="bitcoin"
                  width={32}
                  height={32}
                />
                <h2 className="text-base font-normal">Bitcoin</h2>
                <h3 className="text-[#11335399] text-sm font-normal ">BTC</h3>
              </div>
            </td>
            <td className=" text-left">TRY 375,552.63</td>
            <td className="text-base font-normal text-[#3ACC8A]  text-left">
              +0.85%
            </td>
            <td className=" text-left">
              {" "}
              <Image src="/vector.png" alt="vector" width={83} height={27} />
            </td>
            <td className=" text-left">
              {" "}
              <button className="p-3 text-base font-normal">TRY 80.8B</button>
            </td>
            <td className=" text-left">
              <button className="p-3 text-base font-normal">TRY 7.1T</button>
            </td>
            <td className=" text-left">
              <button className="p-3 text-base font-normal">18.7M</button>
            </td>
            <td className=" text-left">
              <button className=" text-[#FFFFFF] rounded-md pt-2 pr-2 pb-2 pl-2 bg-[#0052FF]">
                Trade
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="border border-[#ECEFF1] mb-8"></div>
      <div className="flex gap-2 items-center text-center justify-center ">
        <div className="rounded-full w-8 h-8 bg-[#0052FF] flex items-center justify-center text-[#ffffff] text-sm font-semibold text-center">
          1
        </div>
        <div className="rounded-full w-8 h-8 flex items-center justify-center ">
          2
        </div>
        <div className="rounded-full w-8 h-8 flex items-center justify-center">
          3
        </div>
        <div className="rounded-full w-8 h-8 flex items-center justify-center">
          ...
        </div>
        <div className="rounded-full w-8 h-8 flex items-center justify-center">
          172
        </div>
        <div className="rounded-full w-8 h-8 flex items-center justify-center">
          <Image src="/vector1.png" alt="" width={8} height={8} />
        </div>
      </div>
    </>
  );
};

export default Navigation;
