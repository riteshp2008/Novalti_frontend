import axios from "axios";

export const helper = () => {
  axios
    .get("https://www.universal-tutorial.com/api/getaccesstoken", {
      headers: {
        Accept: "application/json",
        "api-token":
          "45MpT_kGyc4ZxXxe981AEpWbZQJE2oiSDXt8z_ilhi_UG8HG-OciFYU_8YR1lJ5JdUg",
        "user-email": "alencolins@gmail.com",
      },
    })
    .then((response) => {
      localStorage.setItem("token", response.data && response.data?.auth_token);
      console.log(response.data && response.data?.auth_token);
    })
    .catch((error) => {
      console.log(error);
    });
};
