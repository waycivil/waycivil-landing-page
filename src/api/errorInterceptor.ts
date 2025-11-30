// src/api/interceptors/errorInterceptor.ts
import { handleApiError } from "@/utils/errorHandler";
import type { AxiosError } from "axios";

export const errorInterceptor = (error: AxiosError) => {
  // Normalizamos el error
  const normalizedError = handleApiError(error);

  // Rechazamos la promesa con el error normalizado
  return Promise.reject(normalizedError);
};
