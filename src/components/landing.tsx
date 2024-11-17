'use client';
import {Slider} from "@/components";
import React from 'react';
import { gsap } from 'gsap';

const items = [
    'S&P 500: 3372.2 +0.38%',
    'NASDAQ: 12000.5 -0.15%',
    'Dow Jones: 29000.8 +0.45%',
    'FTSE 100: 7300.0 +0.22%',
    'DAX: 15500.1 -0.12%',
  ];


const Landing = ()=> {
    return (
        <div className="flex flex-col items-center h-screen justify-around">
            <Slider items={items} rev={false} key_value={"s-1"}/>  
            <Slider items={items} rev={true} key_value={"s-2"}/>
            <div className="flex flex-col items-center mb-10">
                <h1 className="text-white text-8xl font-bold">Trading <span className="text-[#22ab94] text-9xl">8</span></h1>
                <h2 className="text-white text-4xl">Empieza ahora!</h2>
            </div>
        </div>
    )
}

export default Landing;