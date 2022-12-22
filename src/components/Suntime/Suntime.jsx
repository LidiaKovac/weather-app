import moment from "moment";
import { useEffect, useState } from "react";
import "./Suntime.css";
import { WiSunrise, WiSunset } from "react-icons/wi";
export const Suntime = ({ timestamp, type }) => {
  const [time, setTime] = useState("0:00");
  const [timeDiff, setTimeDiff] = useState("0");
  useEffect(() => {
    setTime(convertToString(timestamp));
    calculateDiff(timestamp);
  }, []);
  const convertToString = (ts) => {
    let converted = moment.unix(ts);
    return converted.hour() + ":" + converted.minutes();
  };
  const calculateDiff = (ts) => {
    // need to check sometime that is not in the middle of the night
    let converted = moment.unix(ts);
    let now = moment(new Date());
    console.log(converted, now);
    let diff = now.to(converted);
    setTimeDiff(diff);
  };
  return (
    <div className={`${type}__wrap`}>
      <div className="time__wrap">

        {type === "sunset" ? <WiSunset /> : <WiSunrise />}
        <div className="time__data">
          <h4>{type}</h4>
          {time}
        </div>
      </div>
      <div className="time__difference">{timeDiff}</div>
    </div>
  );
};
