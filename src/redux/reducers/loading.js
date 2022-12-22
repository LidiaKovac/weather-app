const initialState = {
  value: true,
};

export const loadingReducer = (state = initialState, { type, payload }) => {
  
  //type, payload => deconstruction of action.type
  switch (type) {
    //note to future self: never use mutating methods! .push is forbidden here :)
    case "SET_LOADING":
      console.log(payload);
      return {
        ...state,
        value: payload,
      };
    default:
      return state;
  }
};
