import axiosInstance from "../interceptors/axiosInterceptor";

export const fetchMovies = async (params) => {
  return await axiosInstance.get("/", {
    params: { ...params },
  });
  return;
};

export const fetchMovie = async (id) => {
  return await axiosInstance.get("/", {
    params: { i: id },
  });
};
