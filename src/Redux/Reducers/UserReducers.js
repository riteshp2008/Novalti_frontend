import * as UserConstants from "../Constants/UserContants";

export const registerReducer = (state = {user: []}, action) => {
  switch (action.type) {
    case UserConstants.USER_REGISTER_REQUEST:
      return {
        loading: true,
      };

    case UserConstants.USER_REGISTER_SUCCESS:
      return {
        loading: false,
        success: true,
        user: action.payload,
      };

    case UserConstants.USER_REGISTER_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const loginReducer = (state = {user: []}, action) => {
  switch (action.type) {
    case UserConstants.USER_LOGIN_REQUEST:
      return {
        loading: true,
      };

    case UserConstants.USER_LOGIN_SUCCESS:
      return {
        loading: false,
        success: true,
        user: action.payload,
      };

    case UserConstants.USER_LOGIN_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const logoutReducer = (state = {}, action) => {
  switch (action.type) {
    case UserConstants.USER_LOGOUT_REQUEST:
      return {
        loading: true,
      };

    case UserConstants.USER_LOGOUT_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case UserConstants.USER_LOGOUT_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const getUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case UserConstants.GET_USERS_REQUEST:
      return {
        loading: true,
        users: [],
      };

    case UserConstants.GET_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
      };

    case UserConstants.GET_USERS_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
