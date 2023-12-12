import * as Constants from "../Constants/UserContants";
import * as Service from "../Services/UserServices";

export const registerAction = (user) => async (dispatch) => {
  try {
    dispatch({ type: Constants.USER_REGISTER_REQUEST });
    const data = await Service.registerUser(user);
    dispatch({ type: Constants.USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: Constants.USER_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: Constants.USER_REGISTER_FAILURE, payload: error });
  }
};

export const loginAction = (user) => async (dispatch) => {
  try {
    dispatch({ type: Constants.USER_LOGIN_REQUEST });
    const data = await Service.loginUser(user);
    console.log(data);
    dispatch({ type: Constants.USER_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: Constants.USER_LOGIN_FAILURE, payload: error });
  }
};

export const logoutAction = () => async (dispatch) => {
  try {
    dispatch({ type: Constants.USER_LOGOUT_REQUEST });
    const data = await Service.logoutUser();
    dispatch({ type: Constants.USER_LOGOUT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: Constants.USER_LOGOUT_FAILURE, payload: error });
  }
};

export const getUsersAction = () => async (dispatch) => {
  try {
    dispatch({ type: Constants.GET_USERS_REQUEST });
    const data = await Service.getUsers();
    dispatch({ type: Constants.GET_USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: Constants.GET_USERS_FAILURE, payload: error });
  }
};
