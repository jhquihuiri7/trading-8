'use client';

import { useSearchParams } from 'next/navigation';
import {Stock_info} from "@/components";

export default function About() {

  const searchParams = useSearchParams();
  const tvwidgetsymbol: string = searchParams.get('tvwidgetsymbol') || "";

    return (
      <div className="w-full flex flex-col items-center mt-10">
        <Stock_info stock={tvwidgetsymbol}></Stock_info>
      </div>
    );
  }