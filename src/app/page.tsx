import {Landing} from "@/components";

export default function Home() {

  const items = [
    'S&P 500: 3372.2 +0.38%',
    'NASDAQ: 12000.5 -0.15%',
    'Dow Jones: 29000.8 +0.45%',
    'FTSE 100: 7300.0 +0.22%',
    'DAX: 15500.1 -0.12%',
  ];

  return (
    <div className="">
      <Landing></Landing>
    </div>
  );
}
