'use client';
import { useGlobalContext } from '@/context/GlobalContext';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue, Pagination} from "@nextui-org/react";
import React from "react";
import { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import axios from "axios";
import { useRouter } from 'next/navigation';
import fs from "fs";
import path from "path";

const coins_img = ['usdt', 'btc', 'eth', 'doge', 'sol', 'usdc', 'xrp', 'fdusd', 'vnst', 'pepe', 'hbar', 'sol', 'ada', 'shib', 'xlm', 'bonk', 'sui', 'pnut', 'bnb', 'link', 'wif', 'ltc', 'xtz', 'trx', 'weth', 'weth', 'arb', 'avax', 'weth', 'near', 'floki', 'bome', 'dot', 'om', 'fet', 'wld', 'op', 'bch', 'apt', 'algo', 'ban', 'atom', 'cati', 'ena', 'chz', 'uni', 'crv', 'render', 'wbtc', 'cbbtc', 'act', 'ton', 'fil', 'dogs', 'pol', 'etc', 'rune', 'zrx', 'bsc-usd', 'akt', 'ftm', 'tia', 'goat', 'neiro', 'aave', 'gala', 'ondo', 'wbnb', 'ordi', 'usdt', 'jup', 'sei', 'polyx', '$rif', 'strk', 'not', 'inj', 'icp', 'hmstr', 'theta', 'ray', 'ftn', 'wbtc', 'ape', 'tao', 'ldo', 'ctk', '1inch', 'io', 'ens', 'usde', 'people', 'kas', 'x', 'drift', 'turbo', 'ethfi', 'eigen', 'wavax', 'stx']

const MarketOverview = ()=>{
  const router = useRouter();
  
  const [data, setData] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [cryptoDetails, setCryptoDetails] = useState<any[]>([]);
  const rowsPerPage = 8;

  useEffect(() => {
    const fetchCryptoData = async () => {
      const limit = 20;

      try {
        const res = await fetch("https://api.binance.com/api/v3/ticker/24hr");

        if (!res.ok) {
          console.error(`Error: ${res.statusText}`);
          return;
        }

        const response = await res.json();
        const topCryptos = response
          .sort((a: any, b: any) => parseFloat(b.quoteVolume) - parseFloat(a.quoteVolume))
          .slice(0, limit);

        const cryptoSymbols = topCryptos.map((crypto: any) => crypto.symbol);
        console.log(cryptoSymbols);

        setData(cryptoSymbols); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCryptoData();
  }, []);

  useEffect(() => {
    const fetchCryptoDetails = async () => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const details: any[] = [];

        for (const coin of data.slice(start, end)) {
            const url = "https://api.binance.com/api/v3/klines";
            const params = {
                symbol: coin,
                interval: "1h",
                limit: 2,
            };

            try {
                const response = await axios.get(url, { params });
                if (response.status === 200) {
                    const currentData = response.data.at(-1);
                    const avgPrice = (parseFloat(currentData[2]) + parseFloat(currentData[3])) / 2;
                    const recommendation = parseFloat(currentData[4]) < avgPrice ? "Comprar" : "Vender";

                    const image = coins_img.find((img) => coin.toLowerCase().startsWith(img));
                    console.log(image)  
                    details.push({
                        symbol: coin,
                        current_price: parseFloat(currentData[4]),
                        high_1h: parseFloat(currentData[2]),
                        low_1h: parseFloat(currentData[3]),
                        avg_price: avgPrice,
                        recommendation: recommendation,
                        img: (image ? image : "btc")
                    });
                }
            } catch (error) {
                console.error(`Error fetching details for ${coin}:`, error);
            }
        }

        setCryptoDetails(details);
    };

    if (data.length > 0) fetchCryptoDetails();
}, [page, data]);

  // Handle page changes
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const goToPage = (symbol: string) => {
    router.push('/stock?tvwidgetsymbol='+symbol); // Redirige a la página deseada
  };

    return (
        <Table
        className="bg-[#1e222d] pb-3 border border-[#434651] rounded dark"
        removeWrapper 
        color="warning"
        selectionMode="single" 
        defaultSelectedKeys={[]} 
        aria-label="Example static collection table"
        bottomContent={
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="warning"
                page={page}
                total={3}
                onChange={(page) => setPage(page)}
              />
            </div>
          }
      >
        <TableHeader>
          <TableColumn>Crypto</TableColumn>
          <TableColumn>Precio Actual</TableColumn>
          <TableColumn className='hidden sm:table-cell'>Hight 1H</TableColumn>
          <TableColumn className='hidden sm:table-cell'>Low 1H</TableColumn>
          <TableColumn className='hidden sm:table-cell'>Precio Promedio</TableColumn>
          <TableColumn>Señal</TableColumn>
        </TableHeader>
        <TableBody>
          {cryptoDetails.map((item, index) => (
            <TableRow key={item['symbol']} onClick={()=>goToPage(item['symbol'])}>
                <TableCell><div className='flex flex-row'><Image src={"/crypto_images/"+item['img']+".png"} alt="logo" width={20} height={50}></Image><p className='ml-3'>{item['symbol']}</p></div></TableCell>
                <TableCell>{item['current_price'].toFixed(4)}</TableCell>
                <TableCell className='hidden sm:table-cell'>{item['high_1h'].toFixed(4)}</TableCell>
                <TableCell className='hidden sm:table-cell'>{item['low_1h'].toFixed(4)}</TableCell>
                <TableCell className='hidden sm:table-cell'>{item['avg_price'].toFixed(4)}</TableCell>
                <TableCell><Chip size="sm" variant="flat" color={item['recommendation'] === "Comprar" ? 'success' : 'danger'}>{item['recommendation']}</Chip></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
}
export default MarketOverview;