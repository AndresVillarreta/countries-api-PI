import { GET_COUNTRIES } from "./actions-types";

const initialState = {
  countries: [],
  pagination: 1,
  thisPage: 1,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES: {
      return {
        ...state,
        countries: action.payload,
        pagination: Math.ceil(action.payload.length / 10),
      };
    }
    default:
      return state;
  }
}
