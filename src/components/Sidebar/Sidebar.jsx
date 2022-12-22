import { useSelector } from "react-redux";
import { Icon } from "../Icon/Icon";
import { Location } from "../Location/Location";
import { Suntime } from "../Suntime/Suntime";
import { Time } from "../Time/Time";
import "./Sidebar.css";
export const Sidebar = () => {
  const { city, country } = useSelector((state) => state.location);
  const { id, main, description } = useSelector((state) => state.weather.days[0].weather[0]);
  const { sunrise, sunset } = useSelector((state) => state.weather);
  const temperature = useSelector((state) => state.weather.days[0].main.temp);

  return (
    <div className="sidebar__wrap">
      <div className="sidebar__location">
        <Location city={city} country={country} />
        <Time />
      </div>

      <Icon status={id} />
      <div className="sidebar__weather">
        <div className="temperature">{temperature}° C</div>
        <div className="weather__description">{description}</div>
      </div>
      <h3>Sunrise & Sunset</h3>
      <div className="suntimes__wrap">
        <Suntime type="sunrise" timestamp={sunrise} />
        <Suntime type="sunset" timestamp={sunset} />
      </div>
    </div>
  );
};
