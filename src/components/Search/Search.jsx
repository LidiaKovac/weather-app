import "./Search.css";
import {RiSearch2Line} from "react-icons/ri"
import { useDispatch } from "react-redux";
import { fetchWeather } from "../../API";
export const Search = () => {
  const dispatch = useDispatch()
  const handleSearch = (ev) => {
    if(ev.key === "Enter") {
      console.log(ev.target.value);
      dispatch({ type: "SET_LOADING", payload: true });
      fetchWeather(ev.target.value, "")
      .then((fetchedData) => {
        dispatch({ type: "SET_WEATHER_DATA", payload: fetchedData });
        dispatch({
          type: "SET_LOCATION",
          payload: { name: fetchedData.city.name, country: fetchedData.city.country, coords: fetchedData.city.coord },
        });
      })
      .finally(() => {
        dispatch({ type: "SET_LOADING", payload: false });
      });

    }
  }
  return <div className="search__input-wrap">
    <RiSearch2Line/>
    <input type="text" onKeyUp={handleSearch} placeholder="Search location here" />
  </div>;
};
