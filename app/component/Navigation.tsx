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

      <table className="table ml-10  mt-4">
        <thead className="">
          <tr className="">
            <th className="text-sm font-normal w-3/12  text-left">Name</th>
            <th className="text-sm font-normal w-1/12  text-center">Price</th>
            <th className="text-sm font-normal w-1/12  text-center">Change</th>
            <th className="text-sm font-normal w-1/12  text-left">
              price chart
            </th>
            <th className="text-sm font-normal w-1/12  text-center">
              Volume(24h)
            </th>
            <th className="text-sm font-normal w-1/12  text-center">
              Market cap
            </th>
            <th className="text-sm font-normal w-1/12  text-center">Supply</th>
            <th className="text-sm font-normal w-1/12  text-center">Trade</th>
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
            <td className=" text-center">TRY 375,552.63</td>
            <td className="text-base font-normal text-[#3ACC8A]  text-center">
              +0.85%
            </td>
            <td className=" text-center">
              {" "}
              <Image src="/vector.png" alt="vector" width={83} height={27} />
            </td>
            <td className=" text-center">
              {" "}
              <button className="p-3 text-base font-normal">TRY 80.8B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">TRY 7.1T</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">18.7M</button>
            </td>
            <td className=" text-center">
              <button className="text-center text-[#FFFFFF] rounded-md pt-2 pr-2 pb-2 pl-2 bg-[#0052FF]">
                Trade
              </button>
            </td>
          </tr>
          <tr>
            <td className=" text-left">
              {" "}
              <div className="flex gap-4 items-center">
                <Image
                  src="/ethereum.png"
                  alt="bitcoin"
                  width={32}
                  height={32}
                />
                <h2 className="text-base font-normal">Etherium</h2>
                <h3 className="text-[#11335399] text-sm font-normal ">ETH</h3>
              </div>
            </td>
            <td className=" text-center">TRY 29,134.20</td>
            <td className="text-base font-normal text-[#3ACC8A]  text-center">
              +1.03%
            </td>
            <td className=" text-center">
              {" "}
              <Image src="/vector.png" alt="vector" width={83} height={27} />
            </td>
            <td className=" text-center">
              {" "}
              <button className="p-3 text-base font-normal">TRY 3.4T</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">TRY 7.1T</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">115.9M</button>
            </td>
            <td className=" text-center">
              <button className="text-center text-[#FFFFFF] rounded-md pt-2 pr-2 pb-2 pl-2 bg-[#0052FF]">
                Trade
              </button>
            </td>
          </tr>
          <tr>
            <td className=" text-left">
              {" "}
              <div className="flex gap-4 items-center">
                <Image
                  src="/etherium2.png"
                  alt="bitcoin"
                  width={32}
                  height={32}
                />
                <h2 className="text-base font-normal">Etherium 2</h2>
                <h3 className="text-[#11335399] text-sm font-normal ">ETH2</h3>
              </div>
            </td>
            <td className=" text-center">TRY 29,134.2</td>
            <td className="text-base font-normal text-[#3ACC8A]  text-center">
              +1.03%
            </td>
            <td className=" text-center">
              {" "}
              <Image src="/vector.png" alt="vector" width={83} height={27} />
            </td>
            <td className=" text-center">
              {" "}
              <button className="p-3 text-base font-normal">TRY 3.4T</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">TRY 7.1T</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">115.9M</button>
            </td>
            <td className=" text-center"></td>
          </tr>
          <tr>
            <td className=" text-left">
              {" "}
              <div className="flex gap-4 items-center">
                <Image
                  src="/etherium2.png"
                  alt="bitcoin"
                  width={32}
                  height={32}
                />
                <h2 className="text-base font-normal">Binance Coin</h2>
                <h3 className="text-[#11335399] text-sm font-normal ">BNB</h3>
              </div>
            </td>
            <td className=" text-center">TRY 4,470.29</td>
            <td className="text-base font-normal text-[#DF5F67]  text-center">
              -10.45%
            </td>
            <td className=" text-center">
              {" "}
              <Image src="/chart1.png" alt="vector" width={83} height={27} />
            </td>
            <td className=" text-center">
              {" "}
              <button className="p-3 text-base font-normal">TRY 5.6B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">TRY 685.1B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">153.7M</button>
            </td>
            <td className=" text-center"></td>
          </tr>
          <tr>
            <td className=" text-left">
              {" "}
              <div className="flex gap-4 items-center">
                <Image
                  src="/cardano.png"
                  alt="bitcoin"
                  width={32}
                  height={32}
                />
                <h2 className="text-base font-normal">Cardano</h2>
                <h3 className="text-[#11335399] text-sm font-normal ">ADA</h3>
              </div>
            </td>
            <td className=" text-center">TRY 17.97</td>
            <td className="text-base font-normal text-[#DF5F67]  text-center">
              -9.23%
            </td>
            <td className=" text-center">
              {" "}
              <Image src="/chart2.png" alt="vector" width={83} height={27} />
            </td>
            <td className=" text-center">
              {" "}
              <button className="p-3 text-base font-normal">TRY 12.9B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">TRY 572.9B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">31.9B</button>
            </td>
            <td className=" text-center">
              <button className="text-center text-[#FFFFFF] rounded-md pt-2 pr-2 pb-2 pl-2 bg-[#0052FF]">
                Trade
              </button>
            </td>
          </tr>
          <tr>
            <td className=" text-left">
              {" "}
              <div className="flex gap-4 items-center">
                <Image
                  src="/dogecoin.png"
                  alt="bitcoin"
                  width={32}
                  height={32}
                />
                <h2 className="text-base font-normal">Dogecoin</h2>
                <h3 className="text-[#11335399] text-sm font-normal ">DOGE</h3>
              </div>
            </td>
            <td className=" text-center">TRY 4.22</td>
            <td className="text-base font-normal text-[#DF5F67]  text-center">
              -8.87%
            </td>
            <td className=" text-center">
              {" "}
              <Image src="/chart3.png" alt="vector" width={83} height={27} />
            </td>
            <td className=" text-center">
              {" "}
              <button className="p-3 text-base font-normal">TRY 10.8B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">TRY 545.9B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">129.6B</button>
            </td>
            <td className=" text-center"></td>
          </tr>
          <tr>
            <td className=" text-left">
              {" "}
              <div className="flex gap-4 items-center">
                <Image src="/tether.png" alt="bitcoin" width={32} height={32} />
                <h2 className="text-base font-normal">Tether</h2>
                <h3 className="text-[#11335399] text-sm font-normal ">USDT</h3>
              </div>
            </td>
            <td className=" text-center">TRY 8.36</td>
            <td className="text-base font-normal text-[#3ACC8A]  text-center">
              +0.34%
            </td>
            <td className=" text-center">
              {" "}
              <Image src="/vector.png" alt="vector" width={83} height={27} />
            </td>
            <td className=" text-center">
              {" "}
              <button className="p-3 text-base font-normal">TRY 195.0B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">TRY 486.3B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">58.2B</button>
            </td>
            <td className=" text-center">
              <button className="text-center text-[#FFFFFF] rounded-md pt-2 pr-2 pb-2 pl-2 bg-[#0052FF]">
                Trade
              </button>
            </td>
          </tr>
          <tr>
            <td className=" text-left">
              {" "}
              <div className="flex gap-4 items-center">
                <Image src="/xrp.png" alt="bitcoin" width={32} height={32} />
                <h2 className="text-base font-normal">XRP</h2>
                <h3 className="text-[#11335399] text-sm font-normal ">XRP</h3>
              </div>
            </td>
            <td className=" text-center">TRY 12.72</td>
            <td className="text-base font-normal text-[#3ACC8A]  text-center">
              +5.17%
            </td>
            <td className=" text-center">
              {" "}
              <Image src="/vector.png" alt="vector" width={83} height={27} />
            </td>
            <td className=" text-center">
              {" "}
              <button className="p-3 text-base font-normal">TRY 14.2B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">TRY 445.8B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">35.1B</button>
            </td>
            <td className=" text-center">
              <button className="text-center text-[#FFFFFF] font-semibold rounded-md pt-2 pr-2 pb-2 pl-2 bg-[#0052FF]">
                Trade
              </button>
            </td>
          </tr>
          <tr>
            <td className=" text-left">
              {" "}
              <div className="flex gap-4 items-center">
                <Image
                  src="/polkadot.png"
                  alt="bitcoin"
                  width={32}
                  height={32}
                />
                <h2 className="text-base font-normal">Polkadot</h2>
                <h3 className="text-[#11335399] text-sm font-normal ">DOT</h3>
              </div>
            </td>
            <td className=" text-center">TRY 335.28</td>
            <td className="text-base font-normal text-[#3ACC8A]  text-center">
              +3.20%
            </td>
            <td className=" text-center">
              {" "}
              <Image src="/vector.png" alt="vector" width={83} height={27} />
            </td>
            <td className=" text-center">
              {" "}
              <button className="p-3 text-base font-normal">TRY 5.5B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">TRY 314.7B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">938.2M</button>
            </td>
            <td className=" text-center"></td>
          </tr>
          <tr>
            <td className=" text-left">
              {" "}
              <div className="flex gap-4 items-center">
                <Image
                  src="/internet.png"
                  alt="bitcoin"
                  width={32}
                  height={32}
                />
                <h2 className="text-base font-normal">Internet Computer</h2>
                <h3 className="text-[#11335399] text-sm font-normal ">ICT</h3>
              </div>
            </td>
            <td className=" text-center">TRY 1,756.00</td>
            <td className="text-base font-normal text-[#DF5F67]  text-center">
              -8.87%
            </td>
            <td className=" text-center">
              {" "}
              <Image src="/chart1.png" alt="vector" width={83} height={27} />
            </td>
            <td className=" text-center">
              {" "}
              <button className="p-3 text-base font-normal">TRY 403.8B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">TRY 218.6B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">123.9M</button>
            </td>
            <td className=" text-center">
              <button className="text-center text-[#FFFFFF] rounded-md pt-2 pr-2 pb-2 pl-2 bg-[#0052FF]">
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
            <td className=" text-center">TRY 375,552.63</td>
            <td className="text-base font-normal text-[#3ACC8A]  text-center">
              +0.85%
            </td>
            <td className=" text-center">
              {" "}
              <Image src="/vector.png" alt="vector" width={83} height={27} />
            </td>
            <td className=" text-center">
              {" "}
              <button className="p-3 text-base font-normal">TRY 80.8B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">TRY 7.1T</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">18.7M</button>
            </td>
            <td className=" text-center">
              <button className="text-center text-[#FFFFFF] rounded-md pt-2 pr-2 pb-2 pl-2 bg-[#0052FF]">
                Trade
              </button>
            </td>
          </tr>
          <tr>
            <td className=" text-left">
              {" "}
              <div className="flex gap-4 items-center">
                <Image
                  src="/ethereum.png"
                  alt="bitcoin"
                  width={32}
                  height={32}
                />
                <h2 className="text-base font-normal">Etherium</h2>
                <h3 className="text-[#11335399] text-sm font-normal ">ETH</h3>
              </div>
            </td>
            <td className=" text-center">TRY 29,134.20</td>
            <td className="text-base font-normal text-[#3ACC8A]  text-center">
              +1.03%
            </td>
            <td className=" text-center">
              {" "}
              <Image src="/vector.png" alt="vector" width={83} height={27} />
            </td>
            <td className=" text-center">
              {" "}
              <button className="p-3 text-base font-normal">TRY 3.4T</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">TRY 7.1T</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">115.9M</button>
            </td>
            <td className=" text-center">
              <button className="text-center text-[#FFFFFF] rounded-md pt-2 pr-2 pb-2 pl-2 bg-[#0052FF]">
                Trade
              </button>
            </td>
          </tr>
          <tr>
            <td className=" text-left">
              {" "}
              <div className="flex gap-4 items-center">
                <Image
                  src="/etherium2.png"
                  alt="bitcoin"
                  width={32}
                  height={32}
                />
                <h2 className="text-base font-normal">Etherium 2</h2>
                <h3 className="text-[#11335399] text-sm font-normal ">ETH2</h3>
              </div>
            </td>
            <td className=" text-center">TRY 29,134.2</td>
            <td className="text-base font-normal text-[#3ACC8A]  text-center">
              +1.03%
            </td>
            <td className=" text-center">
              {" "}
              <Image src="/vector.png" alt="vector" width={83} height={27} />
            </td>
            <td className=" text-center">
              {" "}
              <button className="p-3 text-base font-normal">TRY 3.4T</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">TRY 7.1T</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">115.9M</button>
            </td>
            <td className=" text-center"></td>
          </tr>
          <tr>
            <td className=" text-left">
              {" "}
              <div className="flex gap-4 items-center">
                <Image
                  src="/etherium2.png"
                  alt="bitcoin"
                  width={32}
                  height={32}
                />
                <h2 className="text-base font-normal">Binance Coin</h2>
                <h3 className="text-[#11335399] text-sm font-normal ">BNB</h3>
              </div>
            </td>
            <td className=" text-center">TRY 4,470.29</td>
            <td className="text-base font-normal text-[#DF5F67]  text-center">
              -10.45%
            </td>
            <td className=" text-center">
              {" "}
              <Image src="/chart1.png" alt="vector" width={83} height={27} />
            </td>
            <td className=" text-center">
              {" "}
              <button className="p-3 text-base font-normal">TRY 5.6B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">TRY 685.1B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">153.7M</button>
            </td>
            <td className=" text-center"></td>
          </tr>
          <tr>
            <td className=" text-left">
              {" "}
              <div className="flex gap-4 items-center">
                <Image
                  src="/cardano.png"
                  alt="bitcoin"
                  width={32}
                  height={32}
                />
                <h2 className="text-base font-normal">Cardano</h2>
                <h3 className="text-[#11335399] text-sm font-normal ">ADA</h3>
              </div>
            </td>
            <td className=" text-center">TRY 17.97</td>
            <td className="text-base font-normal text-[#DF5F67]  text-center">
              -9.23%
            </td>
            <td className=" text-center">
              {" "}
              <Image src="/chart2.png" alt="vector" width={83} height={27} />
            </td>
            <td className=" text-center">
              {" "}
              <button className="p-3 text-base font-normal">TRY 12.9B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">TRY 572.9B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">31.9B</button>
            </td>
            <td className=" text-center">
              <button className="text-center text-[#FFFFFF] rounded-md pt-2 pr-2 pb-2 pl-2 bg-[#0052FF]">
                Trade
              </button>
            </td>
          </tr>
          <tr>
            <td className=" text-left">
              {" "}
              <div className="flex gap-4 items-center">
                <Image
                  src="/dogecoin.png"
                  alt="bitcoin"
                  width={32}
                  height={32}
                />
                <h2 className="text-base font-normal">Dogecoin</h2>
                <h3 className="text-[#11335399] text-sm font-normal ">DOGE</h3>
              </div>
            </td>
            <td className=" text-center">TRY 4.22</td>
            <td className="text-base font-normal text-[#DF5F67]  text-center">
              -8.87%
            </td>
            <td className=" text-center">
              {" "}
              <Image src="/chart3.png" alt="vector" width={83} height={27} />
            </td>
            <td className=" text-center">
              {" "}
              <button className="p-3 text-base font-normal">TRY 10.8B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">TRY 545.9B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">129.6B</button>
            </td>
            <td className=" text-center"></td>
          </tr>
          <tr>
            <td className=" text-left">
              {" "}
              <div className="flex gap-4 items-center">
                <Image src="/tether.png" alt="bitcoin" width={32} height={32} />
                <h2 className="text-base font-normal">Tether</h2>
                <h3 className="text-[#11335399] text-sm font-normal ">USDT</h3>
              </div>
            </td>
            <td className=" text-center">TRY 8.36</td>
            <td className="text-base font-normal text-[#3ACC8A]  text-center">
              +0.34%
            </td>
            <td className=" text-center">
              {" "}
              <Image src="/vector.png" alt="vector" width={83} height={27} />
            </td>
            <td className=" text-center">
              {" "}
              <button className="p-3 text-base font-normal">TRY 195.0B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">TRY 486.3B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">58.2B</button>
            </td>
            <td className=" text-center">
              <button className="text-center text-[#FFFFFF] rounded-md pt-2 pr-2 pb-2 pl-2 bg-[#0052FF]">
                Trade
              </button>
            </td>
          </tr>
          <tr>
            <td className=" text-left">
              {" "}
              <div className="flex gap-4 items-center">
                <Image src="/xrp.png" alt="bitcoin" width={32} height={32} />
                <h2 className="text-base font-normal">XRP</h2>
                <h3 className="text-[#11335399] text-sm font-normal ">XRP</h3>
              </div>
            </td>
            <td className=" text-center">TRY 12.72</td>
            <td className="text-base font-normal text-[#3ACC8A]  text-center">
              +5.17%
            </td>
            <td className=" text-center">
              {" "}
              <Image src="/vector.png" alt="vector" width={83} height={27} />
            </td>
            <td className=" text-center">
              {" "}
              <button className="p-3 text-base font-normal">TRY 14.2B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">TRY 445.8B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">35.1B</button>
            </td>
            <td className=" text-center">
              <button className="text-center text-[#FFFFFF] font-semibold rounded-md pt-2 pr-2 pb-2 pl-2 bg-[#0052FF]">
                Trade
              </button>
            </td>
          </tr>
          <tr>
            <td className=" text-left">
              {" "}
              <div className="flex gap-4 items-center">
                <Image
                  src="/polkadot.png"
                  alt="bitcoin"
                  width={32}
                  height={32}
                />
                <h2 className="text-base font-normal">Polkadot</h2>
                <h3 className="text-[#11335399] text-sm font-normal ">DOT</h3>
              </div>
            </td>
            <td className=" text-center">TRY 335.28</td>
            <td className="text-base font-normal text-[#3ACC8A]  text-center">
              +3.20%
            </td>
            <td className=" text-center">
              {" "}
              <Image src="/vector.png" alt="vector" width={83} height={27} />
            </td>
            <td className=" text-center">
              {" "}
              <button className="p-3 text-base font-normal">TRY 5.5B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">TRY 314.7B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">938.2M</button>
            </td>
            <td className=" text-center"></td>
          </tr>
          <tr>
            <td className=" text-left">
              {" "}
              <div className="flex gap-4 items-center">
                <Image
                  src="/internet.png"
                  alt="bitcoin"
                  width={32}
                  height={32}
                />
                <h2 className="text-base font-normal">Internet Computer</h2>
                <h3 className="text-[#11335399] text-sm font-normal ">ICT</h3>
              </div>
            </td>
            <td className=" text-center">TRY 1,756.00</td>
            <td className="text-base font-normal text-[#DF5F67]  text-center">
              -8.87%
            </td>
            <td className=" text-center">
              {" "}
              <Image src="/chart1.png" alt="vector" width={83} height={27} />
            </td>
            <td className=" text-center">
              {" "}
              <button className="p-3 text-base font-normal">TRY 403.8B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">TRY 218.6B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">123.9M</button>
            </td>
            <td className=" text-center">
              <button className="text-center text-[#FFFFFF] rounded-md pt-2 pr-2 pb-2 pl-2 bg-[#0052FF]">
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
            <td className=" text-center">TRY 375,552.63</td>
            <td className="text-base font-normal text-[#3ACC8A]  text-center">
              +0.85%
            </td>
            <td className=" text-center">
              {" "}
              <Image src="/vector.png" alt="vector" width={83} height={27} />
            </td>
            <td className=" text-center">
              {" "}
              <button className="p-3 text-base font-normal">TRY 80.8B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">TRY 7.1T</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">18.7M</button>
            </td>
            <td className=" text-center">
              <button className="text-center text-[#FFFFFF] rounded-md pt-2 pr-2 pb-2 pl-2 bg-[#0052FF]">
                Trade
              </button>
            </td>
          </tr>
          <tr>
            <td className=" text-left">
              {" "}
              <div className="flex gap-4 items-center">
                <Image
                  src="/ethereum.png"
                  alt="bitcoin"
                  width={32}
                  height={32}
                />
                <h2 className="text-base font-normal">Etherium</h2>
                <h3 className="text-[#11335399] text-sm font-normal ">ETH</h3>
              </div>
            </td>
            <td className=" text-center">TRY 29,134.20</td>
            <td className="text-base font-normal text-[#3ACC8A]  text-center">
              +1.03%
            </td>
            <td className=" text-center">
              {" "}
              <Image src="/vector.png" alt="vector" width={83} height={27} />
            </td>
            <td className=" text-center">
              {" "}
              <button className="p-3 text-base font-normal">TRY 3.4T</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">TRY 7.1T</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">115.9M</button>
            </td>
            <td className=" text-center">
              <button className="text-center text-[#FFFFFF] rounded-md pt-2 pr-2 pb-2 pl-2 bg-[#0052FF]">
                Trade
              </button>
            </td>
          </tr>
          <tr>
            <td className=" text-left">
              {" "}
              <div className="flex gap-4 items-center">
                <Image
                  src="/etherium2.png"
                  alt="bitcoin"
                  width={32}
                  height={32}
                />
                <h2 className="text-base font-normal">Etherium 2</h2>
                <h3 className="text-[#11335399] text-sm font-normal ">ETH2</h3>
              </div>
            </td>
            <td className=" text-center">TRY 29,134.2</td>
            <td className="text-base font-normal text-[#3ACC8A]  text-center">
              +1.03%
            </td>
            <td className=" text-center">
              {" "}
              <Image src="/vector.png" alt="vector" width={83} height={27} />
            </td>
            <td className=" text-center">
              {" "}
              <button className="p-3 text-base font-normal">TRY 3.4T</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">TRY 7.1T</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">115.9M</button>
            </td>
            <td className=" text-center"></td>
          </tr>
          <tr>
            <td className=" text-left">
              {" "}
              <div className="flex gap-4 items-center">
                <Image
                  src="/etherium2.png"
                  alt="bitcoin"
                  width={32}
                  height={32}
                />
                <h2 className="text-base font-normal">Binance Coin</h2>
                <h3 className="text-[#11335399] text-sm font-normal ">BNB</h3>
              </div>
            </td>
            <td className=" text-center">TRY 4,470.29</td>
            <td className="text-base font-normal text-[#DF5F67]  text-center">
              -10.45%
            </td>
            <td className=" text-center">
              {" "}
              <Image src="/chart1.png" alt="vector" width={83} height={27} />
            </td>
            <td className=" text-center">
              {" "}
              <button className="p-3 text-base font-normal">TRY 5.6B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">TRY 685.1B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">153.7M</button>
            </td>
            <td className=" text-center"></td>
          </tr>
          <tr>
            <td className=" text-left">
              {" "}
              <div className="flex gap-4 items-center">
                <Image
                  src="/cardano.png"
                  alt="bitcoin"
                  width={32}
                  height={32}
                />
                <h2 className="text-base font-normal">Cardano</h2>
                <h3 className="text-[#11335399] text-sm font-normal ">ADA</h3>
              </div>
            </td>
            <td className=" text-center">TRY 17.97</td>
            <td className="text-base font-normal text-[#DF5F67]  text-center">
              -9.23%
            </td>
            <td className=" text-center">
              {" "}
              <Image src="/chart2.png" alt="vector" width={83} height={27} />
            </td>
            <td className=" text-center">
              {" "}
              <button className="p-3 text-base font-normal">TRY 12.9B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">TRY 572.9B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">31.9B</button>
            </td>
            <td className=" text-center">
              <button className="text-center text-[#FFFFFF] rounded-md pt-2 pr-2 pb-2 pl-2 bg-[#0052FF]">
                Trade
              </button>
            </td>
          </tr>
          <tr>
            <td className=" text-left">
              {" "}
              <div className="flex gap-4 items-center">
                <Image
                  src="/dogecoin.png"
                  alt="bitcoin"
                  width={32}
                  height={32}
                />
                <h2 className="text-base font-normal">Dogecoin</h2>
                <h3 className="text-[#11335399] text-sm font-normal ">DOGE</h3>
              </div>
            </td>
            <td className=" text-center">TRY 4.22</td>
            <td className="text-base font-normal text-[#DF5F67]  text-center">
              -8.87%
            </td>
            <td className=" text-center">
              {" "}
              <Image src="/chart3.png" alt="vector" width={83} height={27} />
            </td>
            <td className=" text-center">
              {" "}
              <button className="p-3 text-base font-normal">TRY 10.8B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">TRY 545.9B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">129.6B</button>
            </td>
            <td className=" text-center"></td>
          </tr>
          <tr>
            <td className=" text-left">
              {" "}
              <div className="flex gap-4 items-center">
                <Image src="/tether.png" alt="bitcoin" width={32} height={32} />
                <h2 className="text-base font-normal">Tether</h2>
                <h3 className="text-[#11335399] text-sm font-normal ">USDT</h3>
              </div>
            </td>
            <td className=" text-center">TRY 8.36</td>
            <td className="text-base font-normal text-[#3ACC8A]  text-center">
              +0.34%
            </td>
            <td className=" text-center">
              {" "}
              <Image src="/vector.png" alt="vector" width={83} height={27} />
            </td>
            <td className=" text-center">
              {" "}
              <button className="p-3 text-base font-normal">TRY 195.0B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">TRY 486.3B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">58.2B</button>
            </td>
            <td className=" text-center">
              <button className="text-center text-[#FFFFFF] rounded-md pt-2 pr-2 pb-2 pl-2 bg-[#0052FF]">
                Trade
              </button>
            </td>
          </tr>
          <tr>
            <td className=" text-left">
              {" "}
              <div className="flex gap-4 items-center">
                <Image src="/xrp.png" alt="bitcoin" width={32} height={32} />
                <h2 className="text-base font-normal">XRP</h2>
                <h3 className="text-[#11335399] text-sm font-normal ">XRP</h3>
              </div>
            </td>
            <td className=" text-center">TRY 12.72</td>
            <td className="text-base font-normal text-[#3ACC8A]  text-center">
              +5.17%
            </td>
            <td className=" text-center">
              {" "}
              <Image src="/vector.png" alt="vector" width={83} height={27} />
            </td>
            <td className=" text-center">
              {" "}
              <button className="p-3 text-base font-normal">TRY 14.2B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">TRY 445.8B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">35.1B</button>
            </td>
            <td className=" text-center">
              <button className="text-center text-[#FFFFFF] font-semibold rounded-md pt-2 pr-2 pb-2 pl-2 bg-[#0052FF]">
                Trade
              </button>
            </td>
          </tr>
          <tr>
            <td className=" text-left">
              {" "}
              <div className="flex gap-4 items-center">
                <Image
                  src="/polkadot.png"
                  alt="bitcoin"
                  width={32}
                  height={32}
                />
                <h2 className="text-base font-normal">Polkadot</h2>
                <h3 className="text-[#11335399] text-sm font-normal ">DOT</h3>
              </div>
            </td>
            <td className=" text-center">TRY 335.28</td>
            <td className="text-base font-normal text-[#3ACC8A]  text-center">
              +3.20%
            </td>
            <td className=" text-center">
              {" "}
              <Image src="/vector.png" alt="vector" width={83} height={27} />
            </td>
            <td className=" text-center">
              {" "}
              <button className="p-3 text-base font-normal">TRY 5.5B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">TRY 314.7B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">938.2M</button>
            </td>
            <td className=" text-center"></td>
          </tr>
          <tr>
            <td className=" text-left">
              {" "}
              <div className="flex gap-4 items-center">
                <Image
                  src="/internet.png"
                  alt="bitcoin"
                  width={32}
                  height={32}
                />
                <h2 className="text-base font-normal">Internet Computer</h2>
                <h3 className="text-[#11335399] text-sm font-normal ">ICT</h3>
              </div>
            </td>
            <td className=" text-center">TRY 1,756.00</td>
            <td className="text-base font-normal text-[#DF5F67]  text-center">
              -8.87%
            </td>
            <td className=" text-center">
              {" "}
              <Image src="/chart1.png" alt="vector" width={83} height={27} />
            </td>
            <td className=" text-center">
              {" "}
              <button className="p-3 text-base font-normal">TRY 403.8B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">TRY 218.6B</button>
            </td>
            <td className=" text-center">
              <button className="p-3 text-base font-normal">123.9M</button>
            </td>
            <td className=" text-center">
              <button className="text-center text-[#FFFFFF] rounded-md pt-2 pr-2 pb-2 pl-2 bg-[#0052FF]">
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
