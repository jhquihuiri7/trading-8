'use client';
import {Slider} from "@/components";
import Image from 'next/image';


const Landing: React.FC<{ items: string[]}> = ({items})=> {
    return (
        <div className="flex flex-col items-center h-screen justify-around">
            <Slider items={items.slice(0,items.length/2)} rev={false} key_value={"s-1"}/>  
            <Slider items={items.slice(items.length/2+1,items.length)} rev={true} key_value={"s-2"}/>
            <div className="flex flex-col items-center mb-10">
                <div className="flex flex-row">
                    <h1 className="text-white text-7xl sm:text-8xl sm:font-bold mr-4">Trading </h1>
                    <Image src="/logo.png" alt="logo" width={100} height={50}></Image>
                </div>
                <h2 className="text-white sm:text-3xl">Empieza ahora!</h2>
            </div>
        </div>
    )
}

export default Landing;