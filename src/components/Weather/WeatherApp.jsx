import { useEffect } from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../../API";
import { Main } from "../Main/Main";
import { Sidebar } from "../Sidebar/Sidebar";
import "./Weather.css";
export const Weather = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchWeather("Genova", "IT")
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
  }, []);
  const loading = useSelector((state) => state.loading.value);
  return loading ? (
    <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{}}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor="#c0efff"
      color="#e15b64"
    />
  ) : (
    <>
      <div className="weather__wrap">
        <Main />
        <Sidebar />
      </div>
    </>
  );
};
