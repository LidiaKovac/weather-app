import moment from "moment";
import { useState } from "react";
import "./FullDate.css";
export const FullDate = () => {
  const [date, setDate] = useState(moment(new Date()));
  return (
    <>
    <div className="date date--lg">
      <div className="date__month">{date.format("MMMM YYYY")}</div>
      <div className="date__full">{date.format("dddd, MMM DD, YYYY")}</div>
    </div>
    <div className="date date--md">
      <div className="date__month">{date.format("MM/YY")}</div>
      <div className="date__full">{date.format("ddd, DD/MM/YY")}</div>
    </div>
    <div className="date date--xs">
      <div className="date__month">{date.format("MM/YY")}</div>
      <div className="date__full">{date.format("DD/MM/YY")}</div>
    </div>
    </>
  );
};
