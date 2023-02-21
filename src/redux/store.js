import { configureStore } from "@reduxjs/toolkit";
import { errorReducer } from "./reducers/error";
import { loadingReducer } from "./reducers/loading";
import { timeReducer } from "./reducers/localTime";
import { locationReducer } from "./reducers/location";
import { weatherReducer } from "./reducers/weather";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    loading: loadingReducer,
    location: locationReducer,
    localTime: timeReducer,
    error: errorReducer
  }, 
  devTools: process.env.REACT_APP_NODE_ENV === 'development'
});
