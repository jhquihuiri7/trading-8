'use client';
import { useGlobalContext } from '@/context/GlobalContext';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue, Pagination} from "@nextui-org/react";
import React from "react";
import { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';



const MarketOverview = ()=>{

    const [data, setData] = useState<string[]>([]); // State to hold all crypto symbols
  const [page, setPage] = useState(1); // State to manage pagination
  const rowsPerPage = 10; // Number of rows per page

  // Fetch crypto data from the Binance API
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
        console.log(cryptoSymbols); // Log fetched symbols for debugging

        setData(cryptoSymbols); // Update state with fetched symbols
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCryptoData();
  }, []);

  // Memoized items for the current page
  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return data.slice(start, end);
  }, [page, data]);

  // Handle page changes
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

    return (
        <Table
        className="dark" 
        color="default"
        selectionMode="single" 
        defaultSelectedKeys={["BTCUSDT"]} 
        aria-label="Example static collection table"
        bottomContent={
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="secondary"
                page={page}
                total={2}
                onChange={(page) => setPage(page)}
              />
            </div>
          }
      >
        <TableHeader>
          <TableColumn>Crypto</TableColumn>
          <TableColumn>Precio Actual</TableColumn>
          <TableColumn>Hight 1H</TableColumn>
          <TableColumn>Low 1H</TableColumn>
          <TableColumn>Precio Promedio</TableColumn>
          <TableColumn>Señal</TableColumn>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={item}>
                <TableCell><div className='flex flex-row'><Image src="/logo.png" alt="logo" width={20} height={50}></Image><p className='ml-3'>{item}</p></div></TableCell>
                <TableCell>item</TableCell>
                <TableCell>item</TableCell>
                <TableCell>item</TableCell>
                <TableCell>item</TableCell>
                <TableCell>item</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
}
export default MarketOverview;