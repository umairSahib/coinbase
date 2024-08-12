"use client";
import React, { useState, useEffect } from "react";

// Assuming the Payment type is imported from the "./Column" file
import { Payment, columns } from "./Column";
import { DataTable } from "./DataTable";

async function getData(): Promise<Payment[]> {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": "CG-ytyGSPwFUwCXsXgM1pHntBeU",
    },
  };

  // Include vs_currency parameter in the URL
  const vsCurrency = "usd"; // Example currency, you can replace it with the currency you want to use

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vsCurrency}`;

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return empty array or handle the error as needed
  }
}

// The DemoPage component asynchronously fetches and displays data
export default function DemoPage() {
  const [data, setData] = useState<Payment[]>([]); // Initialize data state

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
      console.log(result, "results");
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
