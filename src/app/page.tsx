import {Landing} from "@/components";



export default async function Home() {
  const limit = 20;
  let data = [];
  try{

    const res = await fetch("https://api.binance.com/api/v3/ticker/24hr")

    const response = await res.json();

    const topCryptos = response
      .sort((a: any, b: any) => parseFloat(b.quoteVolume) - parseFloat(a.quoteVolume))
      .slice(0, limit);

    data = topCryptos.map((crypto: any) => crypto.symbol);

  }catch(error){
    console.log(error)
  }
  
   return (
    <div>
      <Landing items={data}></Landing>
    </div>
  );
}
