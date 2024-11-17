'use client';
import {Slider} from "@/components";

const items = [
    'CRYPTO:BTCUSD',
    'CRYPTO:ETHUSD',
    'CRYPTO:SOLUSD',
    'CRYPTO:DOGEUSD',
    'CRYPTO:ADAUSD',
  ];


const Landing = ()=> {
    return (
        <div className="flex flex-col items-center h-screen justify-around">
            <Slider items={items} rev={false} key_value={"s-1"}/>  
            <Slider items={items} rev={true} key_value={"s-2"}/>
            <div className="flex flex-col items-center mb-10">
                <h1 className="text-white text-7xl sm:text-8xl sm:font-bold">Trading <span className="text-[#22ab94] text-8xl sm:text-9xl">8</span></h1>
                <h2 className="text-white sm:text-3xl">Empieza ahora!</h2>
            </div>
        </div>
    )
}

export default Landing;