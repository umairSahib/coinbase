import React from "react";
import Navbar from "./Navbar";
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
  faChevronDown,
  faFileZipper,
  faGlobe,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";

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
      <div className="mt-10 ml-10 mr-10 pb-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-normal">About Bitcoin</h1>
          </div>
          <div>
            <button className="bg-[#EEF0F3] w-10 h-10 text-base font-normal rounded-full">
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
          </div>
        </div>
      </div>
      <div className=" border border-[#5B616E33]">
        <div className=" mt-10 ml-10 mr-10 mb-10">
          <h2 className=" text-base font-normal text-[#5B616E] ">
            The world’s first cryptocurrency, Bitcoin is stored and exchanged
            securely on the internet through a digital ledger known as a
            blockchain. Bitcoins are divisible into smaller units known as
            satoshis — each satoshi is worth 0.00000001 bitcoin.
          </h2>
          <h1 className="text-lg font-semibold pt-8">Resources</h1>
          <div className="flex items-center gap-4 mt-6 ">
            <button className="flex items-center gap-2 bg-[#EEF0F3] pr-5 text-sm  font-semibold pl-5 pt-2 pb-2 rounded-full">
              <FontAwesomeIcon icon={faFileZipper} className="text-sm " />
              Whitepaper
            </button>
            <button className="flex items-center gap-2 bg-[#EEF0F3] text-sm  font-semibold pr-5 pl-5 pt-2 pb-2 rounded-full">
              <FontAwesomeIcon icon={faGlobe} className="text-sm " />
              Official website
            </button>
          </div>
        </div>
        <div className="border border-[#5B616E33]">
          <div className="mt-10 ml-10 mr-10 mb-8">
            <h1 className="text-base font-semibold">What is Bitcoin?</h1>
            <h2 className="text-[#5B616E] font-normal mt-8">
              <a
                className="text-blue-600 underline underline-offset-1 mr-1"
                href=""
              >
                Bitcoin{" "}
              </a>
              (BTC) is a decentralized
              <a
                className="text-blue-600 underline underline-offset-1 ml-1 mr-1"
                href=""
              >
                cryptocurrency
              </a>{" "}
              that was first described in a 2008 whitepaper by an individual or
              group of individuals using the alias
              <a
                className="text-blue-600 underline underline-offset-1 ml-1 mr-1"
                href=""
              >
                Satoshi Nakamoto
              </a>{" "}
              . Officially launched in January 2009, Bitcoin is a{" "}
              <a
                className="text-blue-600 underline underline-offset-1 ml-1 mr-1"
                href=""
              >
                peer-to-peer
              </a>
              online currency that allows transactions to happen directly
              between equal and independent network participants without the
              need for any intermediary. Bitcoin is digital money that cannot be
              inflated or manipulated by any individual, company, government, or
              central bank. Bitcoin is recognized as one of the initial
              cryptocurrencies to come into use and has inspired the development
              of thousands of competing projects. There will only ever be 21
              million BTC. Bitcoin is highly divisible, with its smallest unit,
              i.e. 0.000 000 01 BTC, called a "satoshi" or "sat." As bitcoin's
              value has risen, its easy divisibility has become a key attribute.
            </h2>
          </div>
        </div>
        <div className="border border-[#5B616E33]">
          <div className="mt-10 ml-10 mr-10 mb-8">
            <h1 className="text-base font-semibold">How does Bitcoin work?</h1>
            <h2 className="text-[#5B616E] font-normal mt-8">
              Bitcoin's key innovation was the
              <a
                className="text-blue-600 underline underline-offset-1 ml-1 mr-1"
                href=""
              >
                blockchain
              </a>{" "}
              — a piece of software that acts like a ledger, logging every
              transaction ever made using Bitcoin. Unlike a bank's ledger, the
              Bitcoin blockchain is
              <a
                className="text-blue-600 underline underline-offset-1 ml-1 mr-1"
                href=""
              >
                distributed
              </a>{" "}
              and verified across a network of computers, meaning that no
              company, country, or third party is in control of it, and anyone
              can become part of that network. The process by which new bitcoins
              are entered into circulation involves solving computationally
              difficult puzzles to discover a new block, which is added to the
              blockchain. The individuals who present their solution to the
              puzzle first are compensated with a certain number of bitcoins.
              Finally, anyone, anywhere, with Internet access, can receive,
              send, and hold Bitcoin using the public version of their key
              (i.e., the version of their
              <a
                className="text-blue-600 underline underline-offset-1 ml-1 mr-1"
                href=""
              >
                private key
              </a>{" "}
              that can be freely shared in order to securely receive funds).
            </h2>
          </div>
        </div>
        <div className="border border-[#5B616E33]">
          <div className="mt-10 ml-10 mr-10 mb-8">
            <h1 className="text-base font-semibold">
              What are the potenital use cases for Bitcoin?
            </h1>
            <h2 className="text-[#5B616E] font-normal mt-8">
              One of Bitcoin's advantages comes from the fact that it was one of
              the initial cryptocurrencies to appear on the market. It has
              managed to create a global community and give birth to a new
              industry of millions of enthusiasts who create and use Bitcoin and
              other cryptocurrencies in their everyday lives. Bitcoin is often
              referred to as digital gold due to its potential for long-term
              utility. It is also used as a decentralized medium of exchange,
              providing for ownership rights as a physical asset or as a unit of
              account.
            </h2>
          </div>
        </div>
        <div className="border border-[#5B616E33]">
          <div className="mt-10 ml-10 mr-10 mb-8">
            <h1 className="text-base font-semibold">
              What is the history of Bitcoin?
            </h1>
            <h2 className="text-[#5B616E] font-normal mt-8">
              Bitcoin was launched in January 2009 by an individual or group of
              individuals using the alias Satoshi Nakamoto. The paper
              introducing Bitcoin wasn't the first idea for digital money
              drawing on the fields of cryptography and computer science—in
              fact, the paper referred to earlier concepts—but it was a uniquely
              elegant solution to the problem of establishing trust between
              different online entities, where people may be hidden (like
              bitcoin's own creator) by pseudonyms, or physically located on the
              other side of the planet. The first block on the Bitcoin network,
              known as the genesis block, was mined by Nakamoto, but the first
              known Bitcoin transaction occurred on May 22, 2010, when
              programmer Laszlo Hanyecz traded 10,000 Bitcoins for two pizzas.
              This event is now known as "Bitcoin Pizza Day." Over the years,
              many people have contributed to improving the cryptocurrency's
              software by patching vulnerabilities and adding new features. The
              fact that Bitcoin is not controlled by a single person or
              organization is core to its value proposition, and Satoshi's
              identity has never been revealed (and likely never will be).
            </h2>
          </div>
        </div>
        <div className="border border-[#5B616E33]">
          <div className="mt-10 ml-10 mr-10 mb-8">
            <h1 className="text-base font-semibold">How can I buy Bitcoin?</h1>
            <h2 className="text-[#5B616E] font-normal mt-8">
              You can create an account on Coinbase or an increasing number of
              other reputable financial technology companies to buy, send, and
              receive Bitcoin. Bitcoin is also increasingly accessible via
              traditional financial portfolios; for example, in October 2021,
              the first Bitcoin futures-based ETF was approved, and in January
              2024, the first spot Bitcoin ETFs were approved. (ETFs are a
              popular way for investors to gain exposure to an asset like gold
              or tech stocks, and now Bitcoin.)
            </h2>
          </div>
        </div>
        <div className="border border-[#5B616E33]">
          <div className="mt-10 ml-10 mr-10 mb-8">
            <h1 className="text-base font-semibold">What is Bitcoin mining?</h1>
            <h2 className="text-[#5B616E] font-normal mt-8">
              Bitcoin is often considered to be a "store of value," the same as
              gold is. New bitcoins are created by "mining" (up to a maximum of
              21 million coins). Bitcoin mining is the process by which
              thousands of computers worldwide compete to record and verify
              transactions on the network. These specialized computers, known as
              'mining rigs,' perform the equations required to verify and record
              a new transaction. In the early days, a typical desktop PC was
              powerful enough to participate, allowing pretty much anyone
              curious to try their hand at mining. These days, however, the
              computers required are massive, specialized, and often owned by
              businesses or large numbers of individuals pooling their
              resources. As of October 2021, Cambridge University researchers
              estimate that U.S.-based miners maintain the highest percentage of
              global mining by country.
            </h2>
          </div>
        </div>
      </div>
      <div className="border border-[#5B616E33]">
        <div className="text-3xl font-normal mt-8 ml-10 mb-8">
          Bitcoin Insights
        </div>
      </div>
      {/* <div className="grid grid-cols-2">
        <div className="bg-[#F5F8FF]">
          <FontAwesomeIcon icon={faThumbsUp} />
        </div>
        <div className="bg-[#F5F8FF]">
          <FontAwesomeIcon icon={faThumbsDown} />
        </div>
      </div> */}
      <div className="border border-[#5B616E33]">
        <div className="grid grid-cols-2 gap-10 pt-10 ml-10 mr-10 ">
          <div className="bg-[#F5F8FF] pl-10 rounded-xl pt-10 pb-20">
            First Section
            <div>
              <FontAwesomeIcon icon={faThumbsUp} />
            </div>
          </div>
          <div className="bg-[#F5F8FF] pr-10 rounded-xl pt-10 pb-20">
            <div>
              <FontAwesomeIcon icon={faThumbsDown} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinDetails;
