import axios from "axios";

let url = process.env.REACT_APP_URL || "http://localhost:5000/";
console.log(url);

export const registerUser = async (user) => {
  try {
    const { data } = await axios.post(`${url}api/users/register`, user);
    localStorage.setItem("user", JSON.stringify(data));
    return data;
  } catch (error) {
    console.log(error.response.data);
  }
};


export const loginUser = async (user) => {
try {
  const { data } = await axios.post(`${url}api/users/login`, user);
  localStorage.setItem("user", JSON.stringify(data));
  return data;
} catch (error) {
  console.log(error.response.data);
}
};

export const getUsers = async () => {
  const { data } = await axios.get(`${url}api/users`, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
    },
  });
  return data;
};

export const logoutUser = async () => {
  localStorage.clear();
  return true;
};
