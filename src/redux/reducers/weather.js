const initialState = {
  days: [
    {
      clouds: {
        all: 0,
      },

      main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        sea_level: 0,
        temp_kf: 0,
      },
      pop: 0,
      sys: {
        pod: "",
      },
      visibility: 0,
      weather: [
        {
          description: "",
          icon: "",
          id: 0,
          main: "",
        },
      ],
      wind: {
        speed: 0,
        deg: 0,
        gust: 0,
      },
    },
  ],
  sunrise: 0,
  sunset: 0
};

export const weatherReducer = (state = initialState, { type, payload }) => {
  //type, payload => deconstruction of action.type
  switch (type) {
    //note to future self: never use mutating methods! .push is forbidden here :)
    case "SET_WEATHER_DATA":
      return {
        ...state,
        days: payload.list,
        sunrise: payload.city.sunrise,
        sunset: payload.city.sunset
        
      };

    default:
      return state;
  }
};
