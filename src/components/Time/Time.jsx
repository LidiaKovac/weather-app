import moment from "moment"
import { useState } from "react"
import "./Time.css"
export const Time = () => { 
  const [time, setTime] = useState(moment(new Date()).format("HH:mm"))

    return (
    <div className="time__wrap">
        {time}
    </div>
) }