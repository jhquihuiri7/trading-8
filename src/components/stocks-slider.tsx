'use client';
import dynamic from "next/dynamic";
const SymbolOverviewNoSSR = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.SymbolOverview),
  {
    ssr: false,
  }
);

import React, { Component } from 'react'
import './slider.css'
import { SingleTicker, CopyrightStyles } from "react-ts-tradingview-widgets";

const styles: CopyrightStyles = {
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

const Slider: React.FC<{ items: string[], rev: boolean, key_value:string }> = ({items, rev, key_value})=>{
    return (
        <>
            <div className="sliderWrapper">
                <div key={key_value} className={rev ? "slider" : "slider-rev"}>
                    {items.map((item, index) => (
                        <div className="mx-10"><SingleTicker colorTheme="dark" copyrightStyles={styles} locale="es" largeChartUrl=""></SingleTicker></div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Slider;