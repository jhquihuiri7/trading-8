import {Landing} from "@/components";



export default async function Home() {
  const limit = 20;
  const data = await fetch("https://api.binance.com/api/v3/ticker/24hr").then(async (res) =>{
    const response = await res.json()
    const topCryptos = response
        .sort((a: any, b: any) => parseFloat(b.quoteVolume) - parseFloat(a.quoteVolume))
        .slice(0, limit);

    return topCryptos.map((crypto: any) => crypto.symbol);
  }
    
  );
  
   return (
    <div className="">
      <Landing items={data}></Landing>
    </div>
  );
}
