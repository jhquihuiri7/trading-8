import {Landing} from "@/components";



export default async function Home() {
  const limit = 20;
  const res = await fetch("https://api.binance.com/api/v3/ticker/24hr")
  if (!res.ok) {
    throw new Error("Error al obtener datos de Binance");
  }

  const response = await res.json();

  const topCryptos = response
      .sort((a: any, b: any) => parseFloat(b.quoteVolume) - parseFloat(a.quoteVolume))
      .slice(0, limit);

  const data = topCryptos.map((crypto: any) => crypto.symbol);
  
   return (
    <div>
      <Landing items={data}></Landing>
    </div>
  );
}
