'use client';

import { Suspense } from 'react'; 
import { useSearchParams } from 'next/navigation';
import {Stock_info} from "@/components";
import Image from 'next/image';
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";

function AboutContent(){
  const searchParams = useSearchParams();
  const tvwidgetsymbol: string = searchParams.get('tvwidgetsymbol') || "";
  return (
          <NextUIProvider>
            <div className="w-full flex flex-col items-center mt-10">
            <div className="flex flex-row justify-start w-full px-10 items-end mb-5">
                    <Image src="/logo.png" alt="logo" width={50} height={50}></Image>
                    <h4 className='text-white text-2xl px-5'><span>{tvwidgetsymbol.split(":")[1]}</span></h4>
            </div>
            <Stock_info stock={tvwidgetsymbol}/>
          </div>
          </NextUIProvider>
  )
}

export default function About() {

    return (
      <Suspense fallback={<div>Loading...</div>}>
          <AboutContent/>
      </Suspense>
    );
  }