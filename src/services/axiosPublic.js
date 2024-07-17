import axios from "axios";

const { REACT_APP_API_ENDPOINT } = import.meta.env;

export const axiosPublic = axios.create({
  baseURL: REACT_APP_API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});
