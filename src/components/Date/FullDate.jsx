import moment from "moment";
import { useState } from "react";
import "./FullDate.css";
export const FullDate = () => {
  const [date, setDate] = useState(moment(new Date()));
  return (
    <div className="date">
      <div className="date__month">{date.format("MMMM YYYY")}</div>
      <div className="date__full">{date.format("dddd, MMM DD, YYYY")}</div>
    </div>
  );
};
