'use client';

import { Suspense } from 'react'; 
import { useSearchParams } from 'next/navigation';
import {Stock_info} from "@/components";

export default function About() {

  const searchParams = useSearchParams();
  const tvwidgetsymbol: string = searchParams.get('tvwidgetsymbol') || "";

    return (
      <div className="w-full flex flex-col items-center mt-10">
        <Suspense fallback={<div>Loading...</div>}>
          <Stock_info stock={tvwidgetsymbol} />
      </Suspense>
      </div>
    );
  }