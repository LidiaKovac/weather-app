import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Time.css";
export const Time = () => {
  const dispatch = useDispatch()
  const {timezone} = useSelector(state => state.weather)
  const [time, setTime] = useState(moment(new Date()).format("HH:mm"))
  useEffect(()=> {
    let now = moment(new Date())
    if(now.isDST()) {
      setTime(moment(new Date()).add(timezone, "seconds").format("HH:mm"))
    } else {
      setTime(moment(new Date()).add(timezone, "seconds").subtract(1, "hour").format("HH:mm"))

    }
    dispatch({type: "SET_TIME", time})
  }, [timezone])
  return <div className="time__wrap">{time}</div>;
};
