import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <header className="pl-10 pr-6 pt-6">
        <div className="flex justify-between">
          <div>
            <h2 className="text-[#AEBAE5] font-normal text-sm">
              In the past 24 hours
            </h2>
            <h1 className="text-lg font-semibold mt-2">
              Market is up <span className="text-[#3ACC8A]">2.29%</span>
            </h1>
          </div>

          <div className="relative ">
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
        <div className="flex  mt-8 w-full">
          <div className="flex-1 border border-[#ECEFF1]">
            <div className="mt-4 ml-6">
              <h1 className="text-base font-semibold">Top gainer (24h)</h1>
            </div>
            <div className="flex justify-between items-center mt-6 mb-4 ml-6 mr-6">
              <div className="flex items-center gap-4">
                <div>
                  <Image
                    src="/polygon.png"
                    width={32}
                    height={32}
                    alt="logoo"
                  />
                </div>
                <div>
                  <h1 className="text-[#050F19] text-base font-normal">
                    Polygon
                  </h1>
                  <h2 className="font-normal text-sm text-[#3ACC8A] mt-1">
                    +30.33%
                  </h2>
                </div>
              </div>
              <div>
                <h1 className="text-[#050F19] text-base font-normal">
                  TRY 17.91
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
          <div className="flex-1 border border-[#ECEFF1]">
            <div className="mt-4 ml-6">
              <h1 className="text-base font-semibold">New listing</h1>
            </div>
            <div className="flex justify-between items-center mt-6 mb-4 ml-6 mr-6">
              <div className="flex items-center gap-4">
                <div>
                  <Image
                    src="/internet.png"
                    width={32}
                    height={32}
                    alt="logoo"
                  />
                </div>
                <div>
                  <h1 className="text-[#050F19] text-base font-normal">
                    Internet Computer
                  </h1>
                  <h2 className="font-normal text-sm text-[#11335399] mt-1">
                    Added May 10
                  </h2>
                </div>
              </div>
              <div>
                <h1 className="text-[#050F19] text-base font-normal">
                  TRY 1,659.11
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
          <div className="flex-1 border border-[#ECEFF1] bg-[#B8C9C8]">
            <div className="flex justify-between  mt-8 ml-6 mr-6 ">
              <div className="mb-4">
                <h1 className="font-semibold text-base max-w-52">
                  Crypto questions, answered
                </h1>
                <h2 className="font-normal text-sm mt-2">
                  Learn with Coinbase
                </h2>
              </div>

              <div>
                <Image src="/learn.png" alt="photo" width={113} height={95} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex-1 border border-[#ECEFF1]">
            <div className="mt-4 ml-6">
              <h1 className="text-base font-semibold">Highest volume (24h)</h1>
            </div>
            <div className="flex justify-between items-center mt-6 mb-4 ml-6 mr-6">
              <div className="flex items-center gap-4">
                <div>
                  <Image
                    src="/bitcoin.png"
                    width={32}
                    height={32}
                    alt="logoo"
                  />
                </div>
                <div>
                  <h1 className="text-[#050F19] text-base font-normal">
                    Bitcoin
                  </h1>
                  <h2 className="font-normal text-sm text-[#11335399] mt-1">
                    TRY 536.94B
                  </h2>
                </div>
              </div>
              <div>
                <h1 className="text-[#050F19] text-base font-normal">
                  TRY 368,262.78
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
          <div className="flex-1 border border-[#ECEFF1]">
            <div className="mt-4 ml-6">
              <h1 className="text-base font-semibold">Most visited (24h)</h1>
            </div>
            <div className="flex justify-between items-center mt-6 mb-4 ml-6 mr-6">
              <div className="flex items-center gap-4">
                <div>
                  <Image
                    src="/numeraire.png"
                    width={32}
                    height={32}
                    alt="logoo"
                  />
                </div>
                <div>
                  <h1 className="text-[#050F19] text-base font-normal">
                    Numeraire
                  </h1>
                  <h2 className="font-normal text-sm text-[#3ACC8A]  mt-1">
                    +4.441.2% <span className=" text-[#11335399]">views</span>
                  </h2>
                </div>
              </div>
              <div>
                <h1 className="text-[#050F19] text-base font-normal">
                  TRY 581.86
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
          <div className="flex-1 border border-[#ECEFF1]">
            <div className="mt-4 ml-6">
              <h1 className="text-base font-semibold">Earn free crypto</h1>
            </div>
            <div className="flex justify-between items-center mt-6 mb-4 ml-6 mr-6">
              <div className="flex items-center gap-4">
                <div>
                  <Image src="/xrp.png" width={32} height={32} alt="logoo" />
                </div>
                <div>
                  <h1 className="text-[#050F19] text-base font-normal">
                    SKALE
                  </h1>
                  <h2 className="font-normal text-sm text-[#11335399] mt-1">
                    Earn $3 in SKL
                  </h2>
                </div>
              </div>
              <div>
                <h1 className="text-[#050F19] text-base font-normal">
                  TRY 10.31
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
        </div>
      </header>
    </>
  );
};

export default Header;
