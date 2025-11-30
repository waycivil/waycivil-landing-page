export interface ApiErrorResponse {
  success: false;
  message: string;
  statusCode: number;
  errorCode: string;
  timestamp: string;
}
