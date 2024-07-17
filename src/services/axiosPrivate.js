import axios from "axios";

const { REACT_APP_API_ENDPOINT } = import.meta.env;
axios.defaults.baseURL = REACT_APP_API_ENDPOINT;

axios.interceptors.request.use(
  async (config) => {
    if (config.headers) {
      config.headers = {
        ...config.headers,
        Authorization: `Token ${config?.token}`,
      };
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const config = error?.config;

    if (error?.response?.status === 401) {
      config.sent = true;

      localStorage.removeItem("token");
      window.location.replace("/");

      return axios(config);
    }

    return Promise.reject(error);
  }
);

export const axiosPrivate = axios;
