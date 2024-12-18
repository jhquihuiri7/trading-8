'use client';
import { useEffect, useState} from 'react';
import React from "react";
import { TechnicalAnalysis } from "react-ts-tradingview-widgets";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue} from "@nextui-org/react";
import {MarketOverview} from "@/components";
import ChartStyle from "./utils";



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
            <div className="w-[90%] h-[500px] mb-10">
                <AdvancedRealTimeChart theme="dark" autosize symbol={stock} copyrightStyles={ChartStyle}></AdvancedRealTimeChart>
            </div>
            <div className="flex flex-col sm:flex-row justify-between w-[90%]">
                <div className="w-full sm:w-[68%]">
                    <h1 className='text-gray-400 text-2xl mb-4'>Mejores crypto</h1>
                    <div className='h-[500px] flex flex-col gap-3 text-white'>
                        <MarketOverview></MarketOverview>
                    </div>
                </div>
                <div className="w-full sm:w-[28%]">
                    <h1 className='text-gray-400 text-2xl mb-4'>Intención de mercado</h1>
                    <div className='h-[429px] bg-[#131722]'>
                        <TechnicalAnalysis colorTheme={"dark"} locale= {"es"} height="100%" width="100%" symbol={stock} copyrightStyles={ChartStyle}></TechnicalAnalysis>
                    </div>  
                </div>
            </div>
        </>
    )
}
export default Stock_info;