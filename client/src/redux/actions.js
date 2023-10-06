import {
  GET_COUNTRIES,
  FILTER_BY_REGION,
  SORT_COUNTRIES,
  GET_PAGINATION,
} from "./actions-types";
import axios from "axios";

export function getCountries() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/countries");
      if (!data) {
        console.log("error");
      } else {
        return dispatch({
          type: GET_COUNTRIES,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function getPage(opA, opB) {
  return {
    type: GET_PAGINATION,
    payload: [opA, opB],
  };
}

export function filterRegion(region) {
  return {
    type: FILTER_BY_REGION,
    payload: region,
  };
}

export function sortCountries(country) {
  return {
    type: SORT_COUNTRIES,
    payload: country,
  };
}
