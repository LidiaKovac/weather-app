import moment from "moment";

const initialState = {
    now: moment(new Date()).format("HH:mm")
  };
  
  export const timeReducer = (state = initialState, { type, payload }) => {
    //type, payload => deconstruction of action.type
    switch (type) {
      //note to future self: never use mutating methods! .push is forbidden here :)
      case "SET_TIME":
        console.log(payload);
        return {
          ...state,
          now: payload
        };
      default:
        return state;
    }
  };
  