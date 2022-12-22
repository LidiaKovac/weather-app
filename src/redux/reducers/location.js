const initialState = {
  city: "Genoa",
  country: "IT",
  lat: 44.4073,
  lon: 8.9339,
};

export const locationReducer = (state = initialState, { type, payload }) => {
  //type, payload => deconstruction of action.type
  switch (type) {
    //note to future self: never use mutating methods! .push is forbidden here :)
    case "SET_LOCATION":
      console.log(payload);
      return {
        ...state,
        lat: payload.coords.lat,
        lon: payload.coords.lon,
        city: payload.name,
        country: payload.country,
      };
    default:
      return state;
  }
};
