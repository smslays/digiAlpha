import axios from "axios";

const API_URL = "https://reqres.in/api/";

export const register = (firstName, lastName, email, password) => {
  return axios.post(API_URL + "register", {
    email,
    password,
    firstName,
    lastName,
  });
};

export const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};
