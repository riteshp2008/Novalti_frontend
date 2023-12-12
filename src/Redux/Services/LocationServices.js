import axios from "axios";

export const getCountries = async () => {
  const { data } = await axios.get(
    "https://www.universal-tutorial.com/api/countries/",
    {
      headers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJhbGVuY29saW5zQGdtYWlsLmNvbSIsImFwaV90b2tlbiI6IjQ1TXBUX2tHeWM0WnhYeGU5ODFBRXBXYlpRSkUyb2lTRFh0OHpfaWxoaV9VRzhIRy1PY2lGWVVfOFlSMWxKNUpkVWcifSwiZXhwIjoxNzAyMzc4MzE4fQ.WFgy1w_qNlu5D9p-yB5xTxyKkv1WM90oCAeaxX13kb8",
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
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJhbGVuY29saW5zQGdtYWlsLmNvbSIsImFwaV90b2tlbiI6IjQ1TXBUX2tHeWM0WnhYeGU5ODFBRXBXYlpRSkUyb2lTRFh0OHpfaWxoaV9VRzhIRy1PY2lGWVVfOFlSMWxKNUpkVWcifSwiZXhwIjoxNzAyMzc4MzE4fQ.WFgy1w_qNlu5D9p-yB5xTxyKkv1WM90oCAeaxX13kb8",
        Accept: "application/json",
      },
    }
  );
  return data;
};
