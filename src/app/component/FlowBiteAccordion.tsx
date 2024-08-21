"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion } from "flowbite-react";
import Image from "next/image";
import {
  faThumbsUp,
  faThumbsDown,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const FlowBiteAccordion = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-5">
      <div className="w-full">
        <Accordion alwaysOpen>
          <Accordion.Panel>
            <div className="border border-[#5B616E33]"> </div>
            <Accordion.Title>What is Bitcoin?</Accordion.Title>
            <Accordion.Content>
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
                that was first described in a 2008 whitepaper by an individual
                or group of individuals using the alias
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
                need for any intermediary. Bitcoin is digital money that cannot
                be inflated or manipulated by any individual, company,
                government, or central bank. Bitcoin is recognized as one of the
                initial cryptocurrencies to come into use and has inspired the
                development of thousands of competing projects. There will only
                ever be 21 million BTC. Bitcoin is highly divisible, with its
                smallest unit, i.e. 0.000 000 01 BTC, called a "satoshi" or
                "sat." As bitcoin's value has risen, its easy divisibility has
                become a key attribute.
              </h2>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <div className="border border-[#5B616E33]"> </div>
            <Accordion.Title>How does Bitcoin work?</Accordion.Title>
            <Accordion.Content>
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
                can become part of that network. The process by which new
                bitcoins are entered into circulation involves solving
                computationally difficult puzzles to discover a new block, which
                is added to the blockchain. The individuals who present their
                solution to the puzzle first are compensated with a certain
                number of bitcoins. Finally, anyone, anywhere, with Internet
                access, can receive, send, and hold Bitcoin using the public
                version of their key (i.e., the version of their
                <a
                  className="text-blue-600 underline underline-offset-1 ml-1 mr-1"
                  href=""
                >
                  private key
                </a>{" "}
                that can be freely shared in order to securely receive funds).
              </h2>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <div className="border border-[#5B616E33]"> </div>
            <Accordion.Title>
              What are the potenital use cases for Bitcoin?
            </Accordion.Title>
            <Accordion.Content>
              <h2 className="text-[#5B616E] font-normal mt-8">
                One of Bitcoin's advantages comes from the fact that it was one
                of the initial cryptocurrencies to appear on the market. It has
                managed to create a global community and give birth to a new
                industry of millions of enthusiasts who create and use Bitcoin
                and other cryptocurrencies in their everyday lives. Bitcoin is
                often referred to as digital gold due to its potential for
                long-term utility. It is also used as a decentralized medium of
                exchange, providing for ownership rights as a physical asset or
                as a unit of account.
              </h2>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <div className="border border-[#5B616E33]"> </div>
            <Accordion.Title>What is the history of Bitcoin?</Accordion.Title>
            <Accordion.Content>
              <h2 className="text-[#5B616E] font-normal mt-8">
                Bitcoin was launched in January 2009 by an individual or group
                of individuals using the alias Satoshi Nakamoto. The paper
                introducing Bitcoin wasn't the first idea for digital money
                drawing on the fields of cryptography and computer science—in
                fact, the paper referred to earlier concepts—but it was a
                uniquely elegant solution to the problem of establishing trust
                between different online entities, where people may be hidden
                (like bitcoin's own creator) by pseudonyms, or physically
                located on the other side of the planet. The first block on the
                Bitcoin network, known as the genesis block, was mined by
                Nakamoto, but the first known Bitcoin transaction occurred on
                May 22, 2010, when programmer Laszlo Hanyecz traded 10,000
                Bitcoins for two pizzas. This event is now known as "Bitcoin
                Pizza Day." Over the years, many people have contributed to
                improving the cryptocurrency's software by patching
                vulnerabilities and adding new features. The fact that Bitcoin
                is not controlled by a single person or organization is core to
                its value proposition, and Satoshi's identity has never been
                revealed (and likely never will be).
              </h2>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <div className="border border-[#5B616E33]"> </div>
            <Accordion.Title>How can I buy Bitcoin?</Accordion.Title>
            <Accordion.Content>
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
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <div className="border border-[#5B616E33]"> </div>
            <Accordion.Title>What is Bitcoin mining?</Accordion.Title>
            <Accordion.Content>
              <h2 className="text-[#5B616E] font-normal mt-8">
                Bitcoin is often considered to be a "store of value," the same
                as gold is. New bitcoins are created by "mining" (up to a
                maximum of 21 million coins). Bitcoin mining is the process by
                which thousands of computers worldwide compete to record and
                verify transactions on the network. These specialized computers,
                known as 'mining rigs,' perform the equations required to verify
                and record a new transaction. In the early days, a typical
                desktop PC was powerful enough to participate, allowing pretty
                much anyone curious to try their hand at mining. These days,
                however, the computers required are massive, specialized, and
                often owned by businesses or large numbers of individuals
                pooling their resources. As of October 2021, Cambridge
                University researchers estimate that U.S.-based miners maintain
                the highest percentage of global mining by country.
              </h2>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <div className="border border-[#5B616E33]"> </div>
            <Accordion.Title className="text-3xl font-normal">
              {" "}
              Bitcoin Insights
            </Accordion.Title>
            <Accordion.Content>
              <div className="grid grid-cols-2 gap-10 pt-10 ml-10 mr-10 ">
                <div className="bg-[#F5F8FF] pl-10 pr-10 rounded-3xl pt-10 ">
                  <div>
                    <FontAwesomeIcon
                      icon={faThumbsUp}
                      className="text-blue-600"
                    />
                    <h1 className="text-base font-semibold mt-4">Bulls say</h1>
                    <h2 className="text-sm font-normal text-[#5B616E] mt-2">
                      Published on February 5, 2024
                    </h2>
                    <h2 className="text-sm font-normal mt-2 max-w-lg">
                      Bitcoin, as the original blockchain and cryptocurrency,
                      has achieved an unparalleled level of recognition and
                      trust.
                    </h2>
                    <h2 className="text-sm font-normal mt-2 max-w-lg">
                      The Bitcoin network also saw the introduction of Ordinals
                      NFTs and BRC-20 tokens in 2023. This diversification has
                      ignited community enthusiasm, expanding the scope of what
                      is possible to build on the Bitcoin network.
                    </h2>
                    <h2 className="text-sm font-normal mt-2 max-w-lg mb-8">
                      Finally, Bitcoin has a capped supply of 21 million so
                      growing demand over time could potentially lead to an
                      increase in its value.
                    </h2>
                  </div>
                </div>
                <div className="bg-[#F5F8FF] pl-10 pr-10 rounded-3xl pt-10 ">
                  <div>
                    <FontAwesomeIcon
                      icon={faThumbsDown}
                      className="text-red-700"
                    />
                    <h1 className="text-base font-semibold mt-4">Bears say</h1>
                    <h2 className="text-sm font-normal text-[#5B616E] mt-2">
                      Published on February 5, 2024
                    </h2>
                    <h2 className="text-sm font-normal mt-2 max-w-lg">
                      While Bitcoin pioneered blockchain technology, it now
                      faces challenges from newer digital currencies
                      prioritizing faster and cheaper transactions.
                    </h2>
                    <h2 className="text-sm font-normal mt-2 max-w-lg">
                      Competitors also often boast additional features like
                      smart contracts and decentralized finance (DeFi), which
                      Bitcoin lacks natively.
                    </h2>
                    <h2 className="text-sm font-normal mt-2 max-w-lg mb-8">
                      Finally, critics argue that Bitcoin’s economic model,
                      particularly its fixed supply cap, is unsustainable. Since
                      Bitcoin’s block rewards will continue to halve over time,
                      miners will have less incentive to secure the network.
                    </h2>
                  </div>
                </div>
              </div>
              <div className="mt-8 ml-10 mr-10 mb-10 ">
                <h2 className="text-sm font-normal mt-2 w-full">
                  Information is provided for informational purposes only and is
                  not investment advice. This is not a recommendation to buy or
                  sell a particular digital asset or to employ a particular
                  investment strategy. Coinbase makes no representation on the
                  accuracy, suitability, or validity of any information provided
                  or for a particular asset.
                </h2>
              </div>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <div className="border border-[#5B616E33]">
              <Accordion.Title className="text-3xl font-normal">
                {" "}
                Market
              </Accordion.Title>
              <Accordion.Content>
                <div className="border border-[#5B616E33]"> </div>
                <div>
                  <h1 className="text-lg font-semibold mt-4">Market stats</h1>
                </div>
                <div className="grid grid-cols-3 mb-8">
                  <div>
                    <div className="mt-5">
                      <div className="flex gap-2 items-center">
                        <h2 className="text-[#5B616E] font-semibold text-sm">
                          Market cap
                        </h2>
                        <FontAwesomeIcon
                          icon={faCircleExclamation}
                          className="text-sm text-[#5B616E]"
                        />
                      </div>
                      <h2 className="text-base font-normal mt-1">PKR 327.2T</h2>
                    </div>
                    <div className="mt-10">
                      <div className="flex gap-2 items-center">
                        <h2 className="text-[#5B616E] font-semibold text-sm">
                          TYPICAL HOLD TIME
                        </h2>
                        <FontAwesomeIcon
                          icon={faCircleExclamation}
                          className="text-sm text-[#5B616E]"
                        />
                      </div>
                      <h2 className="text-base font-normal mt-1">100 days</h2>
                    </div>
                  </div>
                  <div>
                    <div className="mt-5">
                      <div className="flex gap-2 items-center">
                        <h2 className="text-[#5B616E] font-semibold text-sm">
                          VOLUME (24H)
                        </h2>
                        <FontAwesomeIcon
                          icon={faCircleExclamation}
                          className="text-sm text-[#5B616E]"
                        />
                      </div>
                      <h2 className="text-base font-normal mt-1">PKR 7.5T</h2>
                    </div>
                    <div className="mt-10">
                      <div className="flex gap-2 items-center">
                        <h2 className="text-[#5B616E] font-semibold text-sm">
                          Popularity
                        </h2>
                        <FontAwesomeIcon
                          icon={faCircleExclamation}
                          className="text-sm text-[#5B616E]"
                        />
                      </div>
                      <h2 className="text-base font-normal mt-1">#1</h2>
                    </div>
                  </div>
                  <div>
                    <div className="mt-5">
                      <div className="flex gap-2 items-center">
                        <h2 className="text-[#5B616E] font-semibold text-sm">
                          Circulating supply
                        </h2>
                        <FontAwesomeIcon
                          icon={faCircleExclamation}
                          className="text-sm text-[#5B616E]"
                        />
                      </div>
                      <h2 className="text-base font-normal mt-1">19.7M BTC</h2>
                    </div>
                    <div className="mt-10">
                      <div className="flex gap-2 items-center">
                        <h2 className="text-[#5B616E] font-semibold text-sm">
                          All time high
                        </h2>
                        <FontAwesomeIcon
                          icon={faCircleExclamation}
                          className="text-sm text-[#5B616E]"
                        />
                      </div>
                      <h2 className="text-base font-normal mt-1">PKR 20.5M</h2>
                    </div>
                  </div>
                </div>
                <div className="border border-[#5B616E33]"> </div>
                <div>
                  <h1 className="text-lg font-semibold mt-4">
                    Market performance
                  </h1>
                </div>
                <div className="grid grid-cols-3 mb-8">
                  <div>
                    <div className="mt-5">
                      <div className="flex gap-2 items-center">
                        <h2 className="text-[#5B616E] font-semibold text-sm">
                          Price change (1h)
                        </h2>
                        <FontAwesomeIcon
                          icon={faCircleExclamation}
                          className="text-sm text-[#5B616E]"
                        />
                      </div>
                      <h2 className="text-base font-normal mt-1 text-green-400">
                        +0.43%
                      </h2>
                    </div>
                    <div className="mt-10">
                      <div className="flex gap-2 items-center">
                        <h2 className="text-[#5B616E] font-semibold text-sm">
                          Price change (2w)
                        </h2>
                        <FontAwesomeIcon
                          icon={faCircleExclamation}
                          className="text-sm text-[#5B616E]"
                        />
                      </div>
                      <h2 className="text-base font-normal mt-1 text-green-400">
                        +4.7%
                      </h2>
                    </div>
                  </div>
                  <div>
                    <div className="mt-5">
                      <div className="flex gap-2 items-center">
                        <h2 className="text-[#5B616E] font-semibold text-sm">
                          Price change (1d)
                        </h2>
                        <FontAwesomeIcon
                          icon={faCircleExclamation}
                          className="text-sm text-[#5B616E]"
                        />
                      </div>
                      <h2 className="text-base font-normal mt-1 text-red-400">
                        -2.21%
                      </h2>
                    </div>
                    <div className="mt-10">
                      <div className="flex gap-2 items-center">
                        <h2 className="text-[#5B616E] font-semibold text-sm">
                          Price change (1m)
                        </h2>
                        <FontAwesomeIcon
                          icon={faCircleExclamation}
                          className="text-sm text-[#5B616E]"
                        />
                      </div>
                      <h2 className="text-base font-normal mt-1 text-red-400">
                        -10.99%
                      </h2>
                    </div>
                  </div>
                  <div>
                    <div className="mt-5">
                      <div className="flex gap-2 items-center">
                        <h2 className="text-[#5B616E] font-semibold text-sm">
                          Price change (1w)
                        </h2>
                        <FontAwesomeIcon
                          icon={faCircleExclamation}
                          className="text-sm text-[#5B616E]"
                        />
                      </div>
                      <h2 className="text-base font-normal mt-1 text-red-400">
                        -1.85%
                      </h2>
                    </div>
                    <div className="mt-10">
                      <div className="flex gap-2 items-center">
                        <h2 className="text-[#5B616E] font-semibold text-sm">
                          Price change (1y)
                        </h2>
                        <FontAwesomeIcon
                          icon={faCircleExclamation}
                          className="text-sm text-[#5B616E]"
                        />
                      </div>
                      <h2 className="text-base font-normal mt-1 text-green-400">
                        +125.9%
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="border border-[#5B616E33]"> </div>
                <div>
                  <h1 className="text-lg font-semibold mt-4">
                    Market benchmarks
                  </h1>
                </div>
                <div className="grid grid-cols-3 mb-8">
                  <div>
                    <div className="mt-5">
                      <div className="flex gap-2 items-center">
                        <h2 className="text-[#5B616E] font-semibold text-sm">
                          Performance (1Y)
                        </h2>
                        <FontAwesomeIcon
                          icon={faCircleExclamation}
                          className="text-sm text-[#5B616E]"
                        />
                      </div>
                      <h2 className="text-base font-normal mt-1 text-green-400">
                        +128.5%
                      </h2>
                    </div>
                  </div>
                  <div>
                    <div className="mt-5">
                      <div className="flex gap-2 items-center">
                        <h2 className="text-[#5B616E] font-semibold text-sm">
                          Vs. Market (1Y)
                        </h2>
                        <FontAwesomeIcon
                          icon={faCircleExclamation}
                          className="text-sm text-[#5B616E]"
                        />
                      </div>
                      <h2 className="text-base font-normal mt-1 text-green-400">
                        +15.01%
                      </h2>
                    </div>
                  </div>
                  <div>
                    <div className="mt-5">
                      <div className="flex gap-2 items-center">
                        <h2 className="text-[#5B616E] font-semibold text-sm">
                          Vs. ETH (1Y)
                        </h2>
                        <FontAwesomeIcon
                          icon={faCircleExclamation}
                          className="text-sm text-[#5B616E]"
                        />
                      </div>
                      <h2 className="text-base font-normal mt-1 text-green-400">
                        +46.34%
                      </h2>
                    </div>
                  </div>
                </div>
              </Accordion.Content>
            </div>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-3xl font-normal">
              {" "}
              Related Assets
            </Accordion.Title>
            <Accordion.Content>
              <div className="border border-[#5B616E33]"> </div>
              <div>
                <h1 className="text-lg font-semibold mt-4">
                  Discover conversions
                </h1>
              </div>

              <div className="mt-5">
                <h2 className="text-base font-normal mt-1">
                  A selection of conversions from different assets to top
                  cryptocurrencies.
                </h2>
              </div>
              <div className="grid grid-cols-4 mt-6">
                <div>
                  <div className="flex gap-2">
                    <Image
                      src="https://dynamic-assets.coinbase.com/a166208ffbea478e28ca53350e88e6ec08f8fa56a4b07310b3be981d96d51e8e78a446acc29eca743d9edde684581ebe4539ab9ecefc2495ac5cac8eaa3abeaf/asset_icons/39625933ff3514f53247f2988292a3a9662ae0b070f4cf40aeee518a14e75846.png"
                      alt="image"
                      unoptimized
                      width={25}
                      height={25}
                    />

                    <h1 className="text-base font-normal "> KSM-MEME</h1>
                  </div>
                </div>
                <div>
                  {" "}
                  <div className="flex gap-2">
                    <Image
                      src="https://coin-images.coingecko.com/coins/images/1167/large/VET_Token_Icon.png?1710013505"
                      alt="image"
                      width={25}
                      height={25}
                    />
                    <h1 className="text-base font-normal "> RONIN - KCS</h1>
                  </div>
                </div>
                <div>
                  <div>
                    {" "}
                    <div className="flex gap-2">
                      <Image
                        src="https://dynamic-assets.coinbase.com/60f6324353136b6abb4b00c5dde894888622d875f8949c832f24fb245468a7cd18cd281e7278e9d5dba7629a9f25fe11d87ed728bd180f52188431318f980844/asset_icons/eb96f3195eadea4f1e3c9fa4cd05854f2b96a91f2bbc6025fcdf4e44615aec6d.png"
                        alt="image"
                        unoptimized
                        width={25}
                        height={25}
                      />
                      <h1 className="text-base font-normal "> KAVA - CRV</h1>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex gap-2">
                    <Image
                      src="https://dynamic-assets.coinbase.com/5809bc9e538e9b9b2b2c2f75b38246d167de2c1548fae4a7fb5dbfdd55d3ec8f00bb7ea5b2943d0bf68573687bbf41f8b35aeda17775a76e9d320692ec150bd0/asset_icons/90884408f5b819053da3ae04fa04fe29f7b1c95b17d29b748b3b7681bbe4c759.png"
                      alt="image"
                      unoptimized
                      width={25}
                      height={25}
                    />
                    <h1 className="text-base font-normal ">OSMO - WSTETH</h1>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <h2>
                  A selection of conversions for different assets and
                  currencies.
                </h2>
              </div>
              <div className="grid grid-cols-4 mt-10">
                <div>
                  <div className="flex gap-4  hover:text-blue-500 cursor-pointer">
                    <Image
                      src="https://dynamic-assets.coinbase.com/379fbd483545e7160260356c4a750e617be3734a12687629d4c5efd045a237d7985c434394fc59bf906b6227772cff6975edcc4e87c202c24fa3d48df68f29bd/asset_icons/8103b1436a31a4ee8fb562db86a5a2510e6dc2c25d172e6f9a82b36e15965574.png"
                      alt="image"
                      unoptimized
                      width={20}
                      height={20}
                    />
                    <div>
                      <h1 className="text-base font-normal">VET - XDR</h1>
                      <h2>vechain - Special Drawing Rights</h2>
                    </div>
                  </div>
                  <div className="flex gap-4  hover:text-blue-500 cursor-pointer mt-8">
                    <Image
                      src="https://dynamic-assets.coinbase.com/60f6324353136b6abb4b00c5dde894888622d875f8949c832f24fb245468a7cd18cd281e7278e9d5dba7629a9f25fe11d87ed728bd180f52188431318f980844/asset_icons/eb96f3195eadea4f1e3c9fa4cd05854f2b96a91f2bbc6025fcdf4e44615aec6d.png"
                      alt="image"
                      unoptimized
                      width={20}
                      height={20}
                    />
                    <div>
                      <h1 className="text-base font-normal">KAVA - MVR</h1>
                      <h2>Kava - Maldivian Rufiyaa</h2>
                    </div>
                  </div>
                  <div className="flex gap-4  hover:text-blue-500 cursor-pointer mt-8">
                    <Image
                      src="https://coin-images.coingecko.com/coins/images/12817/large/filecoin.png?1696512609"
                      alt="image"
                      unoptimized
                      width={20}
                      height={20}
                    />
                    <div>
                      <h1 className="text-base font-normal">FIL - MKD</h1>
                      <h2>Filecoin - Macedonian Denar</h2>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex gap-4  hover:text-blue-500 cursor-pointer">
                    <Image
                      src="https://dynamic-assets.coinbase.com/f34603bbe11aecd853d794a3e650bba5e004fca33f98599b5bd2b7b9c8cdd0640e9dbb0c42d4f8d2bffb2fbb61eaa635855161e32b7b268b69452718f95b78ed/asset_icons/8787e2edc6b7256d1d323cd32be24f8cf36a2dbb889c4318375d07635270e48b.png"
                      alt="image"
                      unoptimized
                      width={30}
                      height={10}
                    />
                    <div>
                      <h1 className="text-base font-normal">DESO - EGP</h1>
                      <h2>Decentralized Social - Egyptian Pound</h2>
                    </div>
                  </div>
                  <div className="flex gap-4  hover:text-blue-500 cursor-pointer mt-8">
                    <Image
                      src="https://coin-images.coingecko.com/coins/images/2/large/litecoin.png?1696501400"
                      alt="image"
                      unoptimized
                      width={30}
                      height={10}
                    />
                    <div>
                      <h1 className="text-base font-normal">LTC - ZMW</h1>
                      <h2>Litecoin - Zambian Kwacha</h2>
                    </div>
                  </div>

                  <div className="flex gap-4  hover:text-blue-500 cursor-pointer mt-8">
                    <Image
                      src="https://coin-images.coingecko.com/coins/images/34753/large/Ezeth_logo_circle.png?1713496404"
                      alt="image"
                      unoptimized
                      width={30}
                      height={10}
                    />
                    <div>
                      <h1 className="text-base font-normal">ZEC - DKK</h1>
                      <h2>Zcash - Danish Krone</h2>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex gap-4  hover:text-blue-500 cursor-pointer">
                    <Image
                      src="https://coin-images.coingecko.com/coins/images/976/large/Tezos-logo.png?1696502091"
                      alt="image"
                      unoptimized
                      width={20}
                      height={20}
                    />
                    <div>
                      <h1 className="text-base font-normal">XTZ - AOA</h1>
                      <h2>Tezos - Angolan Kwanza</h2>
                    </div>
                  </div>
                  <div className="flex gap-4  hover:text-blue-500 cursor-pointer mt-8">
                    <Image
                      src="https://dynamic-assets.coinbase.com/7cf424dd1577f5714e5b7014df1282ce991969259f45ecc71eaf101409987da32cbbb82cbc4523931ec1ab6a479dc1d68c8685b3c849ceee06171b8d6567ce0b/asset_icons/25635a5344506c87c07f3228a50673d6bb3166adfdf0f9983b36258704c31cea.png"
                      alt="image"
                      unoptimized
                      width={20}
                      height={20}
                    />
                    <div>
                      <h1 className="text-base font-normal">QI - KHR</h1>
                      <h2>BENQI - Cambodian Riel</h2>
                    </div>
                  </div>
                  <div className="flex gap-4  hover:text-blue-500 cursor-pointer mt-8">
                    <Image
                      src="https://coin-images.coingecko.com/coins/images/4128/large/solana.png?1718769756"
                      alt="image"
                      unoptimized
                      width={20}
                      height={20}
                    />
                    <div>
                      <h1 className="text-base font-normal">SOL - BYN</h1>
                      <h2>Solana - Belarusian Ruble</h2>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex gap-4  hover:text-blue-500 cursor-pointer">
                    <Image
                      src="https://coin-images.coingecko.com/coins/images/26455/large/aptos_round.png?1696525528"
                      alt="image"
                      unoptimized
                      width={20}
                      height={20}
                    />
                    <div>
                      <h1 className="text-base font-normal">APT - GGP</h1>
                      <h2>Aptos - Guernsey Pound</h2>
                    </div>
                  </div>
                  <div className="flex gap-4  hover:text-blue-500 cursor-pointer mt-8">
                    <Image
                      src="https://dynamic-assets.coinbase.com/933e53f993bf7a42a4d83b7070535d9c617a3dc304d8f82e7f5128eebe8f933b897a094d7df2e017962755201c09a74d5e2ceecf38925003133fc8d47f3d81bb/asset_icons/f6e3ede68a77c9496c758218dc8444d7c29cb36ef22d2bfa92bd235ac4a501b8.png"
                      alt="image"
                      unoptimized
                      width={20}
                      height={20}
                    />
                    <div>
                      <h1 className="text-base font-normal">ROSE - BBD</h1>
                      <h2>Oasis Network - Barbadian Dollar</h2>
                    </div>
                  </div>
                  <div className="flex gap-4  hover:text-blue-500 cursor-pointer mt-8">
                    <Image
                      src="https://coin-images.coingecko.com/coins/images/5/large/dogecoin.png?1696501409"
                      alt="image"
                      unoptimized
                      width={20}
                      height={20}
                    />
                    <div>
                      <h1 className="text-base font-normal">DOGE - ILS</h1>
                      <h2>Dogecoin - Israeli New Sheqel</h2>
                    </div>
                  </div>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  );
};

export default FlowBiteAccordion;
