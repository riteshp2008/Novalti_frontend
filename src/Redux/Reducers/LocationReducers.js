import * as LocationConstants from "../Constants/LocationConstants";

export const getCountriesReducer = (state = { countries: [] }, action) => {
  switch (action.type) {
    case LocationConstants.GET_COUNTRIES_REQUEST:
      return {
        loading: true,
        countries: [],
      };

    case LocationConstants.GET_COUNTRIES_SUCCESS:
      return {
        loading: false,
        countries: action.payload,
      };

    case LocationConstants.GET_COUNTRIES_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const getStatesReducer = (state = { states: [] }, action) => {
  switch (action.type) {
    case LocationConstants.GET_STATES_REQUEST:
      return {
        loading: true,
        states: [],
      };

    case LocationConstants.GET_STATES_SUCCESS:
      return {
        loading: false,
        states: action.payload,
      };

    case LocationConstants.GET_STATES_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
