import "./Card.css";
import { WiStrongWind, WiHumidity, WiSprinkle, WiBarometer } from "react-icons/wi";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import { TiEquals } from "react-icons/ti";
import { useEffect, useState } from "react";
export const Card = ({ title, data, unit, prevData }) => {
  const [convertedData, setData] = useState(data);
  const [convertedPrevData, setPrevData] = useState(prevData);
  const [diff, setDiff] = useState(0);

  useEffect(() => {
    // by default, wind speed is in m/s, but we want it in km/h
    // conversion from m/.s to km/h you multiply by 3.6
    if (title === "Wind Speed" && unit === "km/h") {
      setData(data * 3, 6);
      setPrevData(prevData * 3, 6);
    } else if (title === "Rain Chance") {
      setData(data * 10);
      setPrevData(prevData * 10);
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
        ) : title === "Pressure" ? (
          <WiBarometer />
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
