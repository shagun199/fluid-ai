import axiosInstance from "../interceptors/axiosInterceptor";

export const fetchMovies = async (title) => {
  return await axiosInstance.get("/", {
    params: { s: title },
  });
  return;
};

export const fetchMovie = async (id) => {
  return await axiosInstance.get("/", {
    params: { i: id },
  });
};
