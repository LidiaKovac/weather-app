import "./Icon.css";
import {
  WiStormShowers,
  WiSprinkle,
  WiRain,
  WiSnow,
  WiRainWind,
  WiSnowWind,
  WiFog,
  WiDaySunny,
  WiCloudy,
} from "react-icons/wi";

export const Icon = ({ status }) => {
  
    /* id is the status code of the weather, check this for more details: 
        https://openweathermap.org/weather-conditions
    */
  
  return (
    
      <div className="icon__wrap">
        {status < 300 ? (
          <WiStormShowers />
        ) : status >= 300 && status < 400 ? (
          <WiSprinkle />
        ) : status >= 400 && status <= 504 ? (
          <WiRain />
        ) : status === 511 ? (
          <WiSnow />
        ) : status > 511 && status < 600 ? (
          <WiRainWind />
        ) : status >= 600 && status < 700 ? (
          <WiSnowWind />
        ) : status >= 700 && status < 800 ? (
          <WiFog />
        ) : status === 800 ? (
          <WiDaySunny />
        ) : (
          <WiCloudy />
        )}
      </div>
    
  );
};
