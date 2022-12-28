import moment from "moment/moment";
import { useEffect, useState } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Time } from "../Time/Time";
import "./Stats.css";
export const Stats = ({ days }) => {
  const [weatherData, setWeatherData] = useState([]);
  useEffect(() => {
    let final = [];
    let current = moment(new Date()).format("DD/MM"); //starts at today
    let currentTime = moment(new Date()).format("HH");
    days.forEach((day) => {
      let date = moment.unix(day.dt).format("DD/MM");
      let time = moment.unix(day.dt).format("HH");
      console.log(time, currentTime);
      if (current !== date && (time <= currentTime - 2 || time >= currentTime + 2 || time === currentTime)) {
        final.push({ day: date, temp: day.main.temp });
        current = date;
      }
    });
    setWeatherData(final);
  }, [days]);
  return (
    <div className="stats__wrap">
      <div className="stats__title">
        Temperatures around <Time /> in the next 5 days...
      </div>
      <ResponsiveContainer width={"100%"} height={270}>
        <AreaChart data={weatherData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="rgb(6, 188, 193)" stopOpacity={0.8} />
              <stop offset="95%" stopColor="rgb(6, 188, 193)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="temp" strokeWidth={"5px"} stroke="rgb(6, 188, 193)" fillOpacity={1} fill="url(#colorTemp)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
