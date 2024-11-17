'use client';
import { useEffect, useState } from 'react';
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";
import { CryptoCoinsHeatmap } from "react-ts-tradingview-widgets";
import { AdvancedRealTimeChart, CopyrightStyles } from "react-ts-tradingview-widgets";
import ChartStyle from "./utils";

const style: CopyrightStyles = {
    parent: {
      display: "none"
    },
    link: {
      display: "none"
    },
    span: {
      display: "none"
    },
  };


const Stock_info : React.FC<{ stock:string }> = ({stock})=> {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
      }, []);
    if (!isClient) {
        return null;
    }
    return (
        <>
            <div className="flex flex-row justify-between w-[90%]">
                <div className="w-[68%] rounded-xl border border-green-100 p-5">
                    <h1 className='text-gray-400 text-2xl mb-4'>Titulo 1</h1>
                    <div className='h-[500px]'>
                        <CryptoCurrencyMarket colorTheme="dark" width="100%" height="100%" copyrightStyles={style}></CryptoCurrencyMarket>
                    </div>
                </div>
                <div className="w-[28%] rounded-xl border border-green-100 p-5">
                    <h1 className='text-gray-400 text-2xl mb-4'>Titulo 1</h1>
                    <div className='h-[500px]'>
                        <CryptoCoinsHeatmap colorTheme="dark" symbolUrl="http://localhost:3000/stock" height="100%" width="100%" copyrightStyles={style}></CryptoCoinsHeatmap>
                    </div>  
                </div>
            </div>
            <div className="w-[90%] h-[500px] mt-10">
                <AdvancedRealTimeChart theme="dark" autosize symbol={stock} copyrightStyles={style}></AdvancedRealTimeChart>
            </div>
        </>
    )
}
export default Stock_info;