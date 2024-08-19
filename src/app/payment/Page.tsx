"use client";
import React, { useState, useEffect } from "react";
import { Payment, columns } from "./Column";
import { DataTable } from "./DataTable";
import Navigation from "../component/Navigation";

async function getData(): Promise<Payment[]> {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": "CG-ytyGSPwFUwCXsXgM1pHntBeU",
    },
  };

  const vsCurrency = "usd";

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vsCurrency}`;

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("🚀 ~ getData ~ data:", data);

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default function DemoPage() {
  const [data, setData] = useState<Payment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);

      console.log(result, "results");
    };

    fetchData();
  }, []);
  function handleFilterData(val: string) {
    if (val === "Gainers") {
      const gainers = data.filter((obj) => obj.price_change_percentage_24h > 0);
      console.log("🚀 ~ tradAble ~ tradAble:", gainers);
      setData(gainers);
    }

    // if (val === "Losers") {
    //   const losers = data.filter((obj) => obj.);

    //   setData(losers);
    // }
  }
  return (
    <>
      <Navigation handleFilterData={handleFilterData} />
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
