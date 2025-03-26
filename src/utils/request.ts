import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const API_BASE_URL = import.meta.env.DEV
  ? import.meta.env.VITE_BASE_API
  : `${window.location.origin}/api`;

const request = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000,
});

// **Request Interceptor**
request.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = Cookies.get("access_token");
    if (token && config.headers) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// **Response Interceptor**
request.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error) => {
    try {
      const errorResponse = JSON.parse(error.request.response);
      if (errorResponse.statusCode !== 401) {
        toast.error(errorResponse.message || errorResponse.error.message, {
          position: "top-right",
          autoClose: 5000,
        });
      }
    } catch (err) {
      toast.error("An unexpected error occurred", {
        position: "top-right",
        autoClose: 5000,
      });
    }
    return Promise.reject(error);
  }
);

export default request;
