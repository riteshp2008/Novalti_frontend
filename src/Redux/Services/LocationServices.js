import axios from "axios";

const token = localStorage.getItem("token")

console.log(token)

export const getCountries = async () => {
  const { data } = await axios.get(
    "https://www.universal-tutorial.com/api/countries/",
    {
      headers: {
        Authorization:
          "Bearer " +
          token,
        Accept: "application/json",
      },
    }
  );
  return data;
};

export const getStates = async (country) => {
  const { data } = await axios.get(
    `https://www.universal-tutorial.com/api/states/${country}`,
    {
      headers: {
        Authorization:
          "Bearer " +
          token,
        Accept: "application/json",
      },
    }
  );
  return data;
};
