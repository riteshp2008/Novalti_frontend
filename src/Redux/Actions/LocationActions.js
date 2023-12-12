import * as LocationConstants from "../Constants/LocationConstants";
import * as LocationService from "../Services/LocationServices";

export const getCountriesAction = () => async (dispatch) => {
  try {
    dispatch({ type: LocationConstants.GET_COUNTRIES_REQUEST });
    const data = await LocationService.getCountries();
    dispatch({ type: LocationConstants.GET_COUNTRIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: LocationConstants.GET_COUNTRIES_FAILURE,
      payload: error,
    });
  }
};

export const getStatesAction = (country) => async (dispatch) => {
  try {
    dispatch({ type: LocationConstants.GET_STATES_REQUEST });
    const data = await LocationService.getStates(country);
    dispatch({ type: LocationConstants.GET_STATES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: LocationConstants.GET_STATES_FAILURE,
      payload: error,
    });
  }
};
