"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import dayjs from "utils/DateUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

// This type is used to define the shape of our data. e.g we want our id to be string and status none other than these four options
export type Payment = {
  name: string;
  symbol: number;
  price: number;
  change: number;
  pricechart: number;
  volume24h: number;
  Marketcap: number;
  supply: number;
  trade: number;
  image: string;
  // status: "pending" | "processing" | "success" | "failed";
};
const formattedDate = dayjs().format("YYYY-MM-DD");
console.log("🚀 ~ formattedDate:", formattedDate);
export const columns: ColumnDef<Payment>[] = [
  //we can set normal fields like this

  {
    cell: ({
      row: {
        original: { name, symbol, image },
      },
    }) => (
      <div className="flex items-center gap-2">
        <div>
          <Image src={image} alt="photo" width={32} height={32} />
        </div>
        <span className="text-base font-normal text-[#050F19]"> {name}</span>{" "}
        <span className="text-[#11335399] text-sm font-normal">
          {" "}
          {symbol.toUpperCase()}
        </span>
      </div>
    ),
    header: "Name",
  },
  // {
  //   accessorKey: "name",
  //   header: "Name",
  // },
  // {
  //   accessorKey: "symbol",
  //   header: "Symbol",
  // },
  // {
  //   accessorKey: "image",
  //   header: "Image",
  //   cell: ({ getValue }) => (
  //     <div className="flex items-center justify-center">
  //       <Image src={getValue()} alt="photo" width={30} height={30} />
  //     </div>
  //   ),
  // },

  {
    accessorKey: "ath",
    header: "ath",
  },
  {
    accessorKey: "price_change_24h",
    header: "price_change_24h",
  },
  {
    accessorKey: "low_24h",
    header: "low_24h",
  },
  {
    accessorKey: "market_cap",
    header: "Market_cap",
  },
  {
    accessorKey: "current_price",
    header: "current_price",
  },
  {
    accessorKey: "last_updated",
    header: "last_updated",
    cell: ({ getValue }) => dayjs(getValue()).format("YYYY-MM-DD"),
  },
];
// import { ColumnDef } from "@tanstack/react-table";
// Update the path to your types file
