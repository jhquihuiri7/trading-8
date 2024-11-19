import type { Metadata } from "next";
import localFont from "next/font/local";
import { GlobalProvider } from '../context/GlobalContext';
import "./globals.css";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Trading 8",
  description: "Consulta en tiempo real los datos más actualizados sobre criptomonedas. Visualiza precios, gráficos y tendencias de criptos como Bitcoin, Ethereum y más. Mantente informado sobre el mercado de criptomonedas de forma fácil y rápida.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`+'bg-[#120f23]'}
      >
        <GlobalProvider>
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
