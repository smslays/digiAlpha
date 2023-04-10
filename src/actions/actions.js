// actions.js

import axios from "axios";

// Action types
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

// Action creators
export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      user,
    },
  };
};

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: {
      error,
    },
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const registerRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

export const registerSuccess = (user) => {
  return {
    type: REGISTER_SUCCESS,
    payload: {
      user,
    },
  };
};

export const registerFailure = (error) => {
  return {
    type: REGISTER_FAILURE,
    payload: {
      error,
    },
  };
};

export const loginUser = (email, password) => {
  return (dispatch) => {
    dispatch(loginRequest());

    return axios
      .post("https://reqres.in/api/login", { email, password })
      .then((response) => {
        dispatch(loginSuccess(response.data));
      })
      .catch((error) => {
        dispatch(loginFailure(error.message));
      });
  };
};

export const registerUser = (firstName, lastName, email, password) => {
  return (dispatch) => {
    dispatch(registerRequest());

    return axios
      .post("https://reqres.in/api/register", {
        firstName,
        lastName,
        email,
        password,
      })
      .then((response) => {
        dispatch(registerSuccess(response.data));
      })
      .catch((error) => {
        dispatch(registerFailure(error.message));
      });
  };
};
