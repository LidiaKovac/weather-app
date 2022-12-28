import { useSelector } from "react-redux";
import { Card } from "../Card/Card";
import { Navbar } from "../Navbar/Navbar";
import { Stats } from "../Stats/Stats";
import "./Main.css";
export const Main = () => {
  const { id, description } = useSelector((state) => state.weather.days[1].weather[0]);
  const { sunrise, sunset, days } = useSelector((state) => state.weather);
  const { main, wind, pop } = useSelector((state) => state.weather.days[1]);
  const { main: prevMain, wind: prevWind, pop: prevPop } = useSelector((state) => state.weather.days[0]);

  return (
    <main>
      <div className="main__cards">
        <Card title="Wind Speed" data={wind.speed} prevData={prevWind.speed} unit={"km/h"} />
        <Card title="Rain Chance" data={pop} prevData={prevPop} unit={"%"} />
        <Card title="Temperature" data={main.temp} prevData={prevMain.temp} unit={"° C"} />
        <Card title="Humidity" data={main.humidity} prevData={prevMain.humidity} unit={"%"} />
      </div>
      <Stats days={days} />
    </main>
  );
};
