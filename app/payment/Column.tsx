"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import dayjs from "utils/DateUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

// This type is used to define the shape of our data. e.g we want our id to be string and status none other than these four options
export type Payment = {
  name: string;
  symbol: string;
  price: number;
  change: number;
  price_change_24h: number;
  current_price: number;
  market_cap: number;
  high_24h: number;
  total_volume: number;
  image: string;
  // status: "pending" | "processing" | "success" | "failed";
};
const formattedDate = dayjs().format("YYYY-MM-DD");
console.log("🚀 ~ formattedDate:", formattedDate);
export const columns: ColumnDef<Payment>[] = [
  //we can set normal fields like this

  {
    id: "name",
    accessorKey: "name",
    header: () => (
      <div className="text-[#113353] text-sm font-normal">Name</div>
    ),
    cell: ({
      row: {
        original: { name, symbol, image },
      },
    }) => (
      <div className="flex items-center gap-2">
        <div>
          <Image src={image} alt="photo" width={32} height={32} />
        </div>
        <span className="text-base font-normal text-[#050F19]">{name}</span>{" "}
        <span className="text-[#11335399] text-sm font-normal">
          {" "}
          {symbol.toUpperCase()}
        </span>
      </div>
    ),
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

  // {
  //   accessorKey: "ath_change_percentage",
  //   header: "Ath_Change_Percentage ",
  //   cell: ({
  //     row: {
  //       original: { ath_change_percentage },
  //     },
  //   }) => (
  //     <div className="flex justify-center">
  //       <div className="text-[#DF5F67] text-base font-normal ">
  //         {ath_change_percentage}
  //       </div>
  //     </div>
  //   ),
  // },
  {
    id: "Price",
    accessorKey: "current_price",
    header: () => (
      <div className="text-[#113353] text-sm font-normal">Price</div>
    ),
    cell: ({
      row: {
        original: { current_price },
      },
    }) => <div className="text-base font-normal">{current_price}</div>,
  },
  {
    id: "price_change_24h",
    accessorKey: "price_change_24h",
    header: () => (
      <div className="text-[#113353] text-sm font-normal">Change</div>
    ),
    cell: ({
      row: {
        original: { price_change_24h },
      },
    }) => (
      <div
        className={
          price_change_24h < 0
            ? "text-[#DF5F67]"
            : "text-[#3ACC8A] text-base font-normal "
        }
      >
        {price_change_24h}
      </div>
    ),
  },

  {
    id: "high_24h",
    accessorKey: "high_24h",
    header: () => (
      <div className="text-[#113353] text-sm font-normal">Volume(24h)</div>
    ),
    cell: ({
      row: {
        original: { high_24h },
      },
    }) => <div className="text-base font-normal">{high_24h}</div>,
  },
  {
    id: "market_cap",
    accessorKey: "market_cap",
    header: () => (
      <div className="text-[#113353] text-sm font-normal">Market cap</div>
    ),
    cell: ({
      row: {
        original: { market_cap },
      },
    }) => <div className="text-base font-normal">{market_cap}</div>,
  },
  {
    id: "total_volume",
    accessorKey: "total_volume",
    header: () => (
      <div className="text-[#113353] text-sm font-normal">Supply</div>
    ),
    cell: ({
      row: {
        original: { total_volume },
      },
    }) => <div className="text-base font-normal">{total_volume}</div>,
  },
  {
    id: "last_updated",
    accessorKey: "last_updated",
    header: () => (
      <div className="text-[#113353] text-sm font-normal">Update</div>
    ),
    cell: () => (
      <div className="flex justify-start">
        <div className="text-base font-normal ">
          {dayjs().format("YYYY-MM-DD")}
        </div>
      </div>
    ),
  },
];
// import { ColumnDef } from "@tanstack/react-table";
// Update the path to your types file
// ({ getValue }) => dayjs(getValue()).format("YYYY-MM-DD")
