import Axios from "axios";

export const api = Axios.create({
  // baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
  },
});
