// src/api/axiosInstance.ts
import axios from "axios";
import { errorInterceptor } from "./errorInterceptor";
/* import { setupInterceptors } from "./interceptors"; */

const axiosInstance = axios.create({
  baseURL: import.meta.env.PUBLIC_BACKEND_URL,
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.response.use(
  (response) => response, // éxito normal
  errorInterceptor // errores globales
);

export default axiosInstance;
