import moment from "moment";
import { useEffect, useState } from "react";
import "./Suntime.css";
import { WiSunrise, WiSunset } from "react-icons/wi";
import { useSelector } from "react-redux";
export const Suntime = ({ timestamp, type }) => {
  const [time, setTime] = useState("0:00");
  const [timeDiff, setTimeDiff] = useState("0");
  const { timezone } = useSelector((state) => state.weather);
  const { now } = useSelector((state) => state.localTime)
  useEffect(() => {
    setTime(convertToString(timestamp));
    calculateDiff(timestamp);

  }, [timestamp]);
  const convertToString = (ts) => {
    let converted = moment.unix(ts)
    converted.add(timezone, "seconds")
    return converted.format("HH:mm");
  };
  const calculateDiff = (ts) => {
    // need to check sometime that is not in the middle of the night
    let converted = moment.unix(ts);
    converted.add(timezone, "seconds")
    let nowDate = moment(new Date()).add(timezone, "seconds")
    let diff = nowDate.to(converted);
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
