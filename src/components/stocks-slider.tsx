import './slider.css'
import { SingleTicker, CopyrightStyles } from "react-ts-tradingview-widgets";

const styles: CopyrightStyles = {
    parent: {
      display: "none"
    },
    link: {
      display: "none"
    },
    span: {
      display: "none"
    },
  };

const Slider: React.FC<{ items: string[], rev: boolean, key_value:string }> = ({items, rev, key_value})=>{
    return (
        <>
            <div className="sliderWrapper">
                <div key={key_value} className={rev ? "slider" : "slider-rev"}>
                    {items.map((item, index) => (
                        <div key={index+key_value} className="mx-10"><SingleTicker symbol={item} colorTheme="dark" copyrightStyles={styles} locale="es" largeChartUrl="https://trading-8.onrender.com/stock"></SingleTicker></div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Slider;