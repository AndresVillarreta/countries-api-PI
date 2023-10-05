import { GET_COUNTRIES } from "./actions-types";
import axios from "axios";

export function getCountries() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/countries");
      if (!data) {
        console.log("error");
      } else {
        dispatch({
          type: GET_COUNTRIES,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}
