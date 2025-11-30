// src/utils/handleApiError.ts
import axios, { AxiosError } from "axios";
import type { NormalizedError } from "@/types/NormalizedError";
import type { ApiErrorResponse } from "@/types/ApiErrorResponse";

export function handleApiError(error: unknown): NormalizedError {
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    const axiosError = error as AxiosError<ApiErrorResponse>;

    // ✅ Caso 1: El backend respondió (status >= 400)
    if (axiosError.response) {
      const data = axiosError.response.data;

      // Si viene en formato esperado del backend
      if (data?.success === false) {
        return {
          success: false,
          message: data.message ?? "Error desconocido en la API",
          statusCode: data.statusCode ?? axiosError.response.status ?? 500,
          errorCode: data.errorCode ?? "UnknownError",
          timestamp: data.timestamp ?? new Date().toISOString(),
        };
      }

      // ⚠️ Si la respuesta no coincide con el formato esperado
      return {
        success: false,
        message:
          axiosError.response.statusText || "Error inesperado del servidor",
        statusCode: axiosError.response.status,
        errorCode: "UnexpectedResponseFormat",
        timestamp: new Date().toISOString(),
      };
    }

    // 🚫 Caso 2: No hubo respuesta del servidor (network error)
    if (axiosError.request) {
      return {
        success: false,
        message:
          "No se pudo conectar con el servidor. Verifica tu conexión a internet.",
        statusCode: 500,
        errorCode: "NetworkError",
        timestamp: new Date().toISOString(),
      };
    }
  }

  // ❌ Caso 3: Error desconocido (no Axios)
  return {
    success: false,
    message: (error as Error)?.message || "Error desconocido",
    statusCode: 500,
    errorCode: "UnknownError",
    timestamp: new Date().toISOString(),
  };
}
