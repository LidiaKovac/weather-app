import "./Card.css";
import { WiStrongWind, WiHumidity, WiSprinkle, WiThermometer } from "react-icons/wi";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import { TiEquals } from "react-icons/ti";
import { useEffect, useState } from "react";
export const Card = ({ title, data, unit, prevData }) => {
  const [convertedData, setData] = useState(Number(data));
  const [convertedPrevData, setPrevData] = useState(Number(prevData));
  const [diff, setDiff] = useState(0);

  useEffect(() => {
    // by default, wind speed is in m/s, but we want it in km/h
    // conversion from m/.s to km/h you multiply by 3.6
    if (title === "Wind Speed" && unit === "km/h") {
      setData((Number(data) * 3.6).toFixed(1));
      setPrevData((Number(prevData) * 3.6).toFixed(1));
    } else if (title === "Rain Chance") {
        //rain chance is delivered by api in a format that goes from 0 to 1
      setData(Number(data) * 100);
      setPrevData(Number(prevData) * 100);
    }
    setDiff(Math.abs(convertedData - convertedPrevData).toFixed(1));
  });
  return (
    <div className="card__wrap">
      <div className="card__icon">
        {title === "Wind Speed" ? (
          <WiStrongWind />
        ) : title === "Rain Chance" ? (
          <WiSprinkle />
        ) : title === "Temperature" ? (
          <WiThermometer />
        ) : (
          <WiHumidity/>
        )}
      </div>
      <div className="card__body">
        <div className="card__title">{title}</div>
        <div className="card__data">
          {convertedData} {unit}
        </div>
      </div>
      <div className="card__variation">
        {diff} {unit}{" "}
        {diff < 0 ? (
          <BsArrowDownShort className="down" />
        ) : diff > 0 ? (
          <BsArrowUpShort className="up" />
        ) : (
          <TiEquals className="equal" />
        )}
      </div>
    </div>
  );
};
