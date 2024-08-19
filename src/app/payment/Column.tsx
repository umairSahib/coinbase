"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import dayjs from "utils/DateUtils";

export type Payment = {
  name: string;
  symbol: string;
  price: number;
  change: number;
  price_change_percentage_24h: number;
  current_price: number;
  market_cap: number;
  high_24h: number;
  total_volume: number;
  image: string;
  low_24h: number;
};
const formattedDate = dayjs().format("YYYY-MM-DD");

export const columns: ColumnDef<Payment>[] = [
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
        <span className="text-base font-normal text-[#050F19] whitespace-pre">
          {name}
        </span>
        <span className="text-[#11335399] text-sm font-normal">
          {symbol.toUpperCase()}
        </span>
      </div>
    ),
  },

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
    }) => (
      <div className="text-base font-normal">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(current_price)}
      </div>
    ),
  },
  {
    id: "price_change_24h",
    accessorKey: "price_change_24h",
    header: () => (
      <div className="text-[#113353] text-sm font-normal">Change</div>
    ),
    cell: ({
      row: {
        original: { price_change_percentage_24h },
      },
    }) => (
      <div
        className={
          price_change_percentage_24h < 0
            ? "text-[#DF5F67] text-base font-normal"
            : "text-[#3ACC8A] text-base font-normal "
        }
      >
        {price_change_percentage_24h.toFixed(2)}%
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
    }) => (
      <div className="text-base font-normal">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(market_cap)}
      </div>
    ),
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
    }) => (
      <div className="text-base font-normal">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(total_volume)}
      </div>
    ),
  },
  {
    id: "last_updated",
    accessorKey: "last_updated",
    header: () => (
      <div className="text-[#113353] text-sm font-normal">Update</div>
    ),
    cell: () => (
      <div className="flex justify-start">
        <div className="text-base font-normal whitespace-pre">
          {dayjs().format("YYYY-MM-DD")}
        </div>
      </div>
    ),
  },
];

// ({ getValue }) => dayjs(getValue()).format("YYYY-MM-DD")
