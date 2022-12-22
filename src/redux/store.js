import { configureStore } from "@reduxjs/toolkit";
import { loadingReducer } from "./reducers/loading";
import { locationReducer } from "./reducers/location";
import { weatherReducer } from "./reducers/weather";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    loading: loadingReducer,
    location: locationReducer,
  },
});
