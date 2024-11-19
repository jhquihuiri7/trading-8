'use client';
import {Landing} from "@/components";
import { useGlobalContext } from '@/context/GlobalContext';
import { useEffect, useState } from 'react';

export default function Home() {
  const { globalData, setGlobalData } = useGlobalContext();
  const [data, setData] = useState<string[]>([]); // Local state for rendering

  useEffect(() => {
    const fetchCryptoData = () => {
      const limit = 20;

      fetch("https://api.binance.com/api/v3/ticker/24hr")
        .then((res) => {
          if (!res.ok) {
            console.error(`Error: ${res.statusText}`);
            return [];
          }
          return res.json();
        })
        .then((response) => {
          const topCryptos = response
            .sort((a: any, b: any) => parseFloat(b.quoteVolume) - parseFloat(a.quoteVolume))
            .slice(0, limit);
          const cryptoSymbols = topCryptos.map((crypto: any) => crypto.symbol);
          console.log(cryptoSymbols); // Correctly logs crypto symbols
          
          setGlobalData(cryptoSymbols); // Update global context
          setData(cryptoSymbols); // Update local state for rendering
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    fetchCryptoData();
  }, [setGlobalData]);

  // Observe changes in globalData
  useEffect(() => {
    console.log(globalData, "from global context");
  }, [globalData]);
  
   return (
    <div>
      <Landing items={data}></Landing>
    </div>
  );
}
