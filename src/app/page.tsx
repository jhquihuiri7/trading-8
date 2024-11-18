import {Landing} from "@/components";


export const config = {
  runtime: 'edge',  
  regions: ['hnd1'],
};

export default async function Home() {
  const limit = 20;
  let data = [];
  
  try{

    const res = await fetch("https://api.binance.com/api/v3/ticker/24hr")
    console.log(res.status)
    console.log(res.statusText)
    const response = await res.json();
    console.log(response)
    const topCryptos = response
      .sort((a: any, b: any) => parseFloat(b.quoteVolume) - parseFloat(a.quoteVolume))
      .slice(0, limit);
    console.log(topCryptos)
    data = topCryptos.map((crypto: any) => crypto.symbol);
    console.log(data)
  }catch(error){
    console.log(error)
  }
  console.log(data)
  console.log(process.env.VERCEL_REGION)
   return (
    <div>
      <Landing items={data}></Landing>
    </div>
  );
}
