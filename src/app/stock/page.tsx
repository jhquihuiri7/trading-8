'use client';

import { Suspense } from 'react'; 
import { useSearchParams } from 'next/navigation';
import {Stock_info} from "@/components";

function AboutContent(){
  const searchParams = useSearchParams();
  const tvwidgetsymbol: string = searchParams.get('tvwidgetsymbol') || "";
  return (
          <div className="w-full flex flex-col items-center mt-10">
            <Stock_info stock={tvwidgetsymbol}/>
          </div>
  )
}

export default function About() {

    return (
      <Suspense fallback={<div>Loading...</div>}>
          <AboutContent/>
      </Suspense>
    );
  }