import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_OMDB_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
      apikey: import.meta.env.VITE_OMDB_API_KEY,
      type: "movie",
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
