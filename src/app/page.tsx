import {Landing} from "@/components";



export default async function Home() {
  const limit = 20;
  let data = [];
  try{

    const res = await fetch("https://api.binance.com/api/v3/ticker/24hr")

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
   return (
    <div>
      <Landing items={data}></Landing>
    </div>
  );
}
