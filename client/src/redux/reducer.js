import {
  GET_COUNTRIES,
  FILTER_BY_REGION,
  SORT_COUNTRIES,
  GET_PAGINATION,
  SEARCH,
} from "./actions-types";

const initialState = {
  countries: [],
  pagination: 1,
  pages: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES: {
      return {
        ...state,
        countries: action.payload,
        pagination: Math.ceil(action.payload.length / 10),
        pages: action.payload,
      };
    }
    case FILTER_BY_REGION: {
      return {
        ...state,
        pages: [...state.countries].filter((country) => {
          if (action.payload === "all") return state.countries;
          if (action.payload === "Africa") return country.region === "Africa";
          if (action.payload === "Asia") return country.region === "Asia";
          if (action.payload === "Europe") return country.region === "Europe";
          if (action.payload === "Americas")
            return country.region === "Americas";
          if (action.payload === "Americas")
            return country.region === "Americas";
          if (action.payload === "Oceania") return country.region === "Oceania";
        }),
        pagination: Math.ceil(state.pages.length / 10),
      };
    }
    case SORT_COUNTRIES: {
      return {
        ...state,
        pages: [...state.pages].sort((a, b) => {
          if (action.payload === "asc") return a.name.localeCompare(b.name);
          if (action.payload === "desc") return b.name.localeCompare(a.name);
          if (action.payload === "alpha") return a.id.localeCompare(b.id);
          if (action.payload === "Poblation")
            return a.population - b.population;
        }),
      };
    }
    case GET_PAGINATION: {
      return {
        ...state,
        pages: [...state.countries].slice(action.payload[0], action.payload[1]),
      };
    }

    case SEARCH: {
      return {
        ...state,
        pages: action.payload,
      };
    }

    default:
      return state;
  }
}
