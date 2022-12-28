import { useSelector } from "react-redux";
import { Card } from "../Card/Card";
import { Navbar } from "../Navbar/Navbar";
import "./Main.css";
export const Main = () => {
  const { id, description } = useSelector((state) => state.weather.days[1].weather[0]);
  const { sunrise, sunset } = useSelector((state) => state.weather);
  const { main, wind, pop } = useSelector((state) => state.weather.days[1]);
  const { main: prevMain, wind: prevWind, pop:prevPop } = useSelector((state) => state.weather.days[0]);
  
  return (
    <main>
      <Navbar />
      <div className="main__cards">
        <Card title="Wind Speed" data={wind.speed} prevData={prevWind.speed} unit={"km/h"} />
        <Card title="Rain Chance" data={pop} prevData={prevPop} unit={"%"} />
        <Card title="Pressure" data={main.pressure} prevData={prevMain.pressure} unit={"hpa"} />
        <Card title="Humidity" data={main.humidity} prevData={prevMain.humidity} unit={"%"} />
      </div>
    </main>
  );
};
