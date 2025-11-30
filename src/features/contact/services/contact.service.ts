import type { AxiosInstance } from "axios";
import type { ContactFormData } from "../types/contact-form.types";
import type { ApiResponse } from "@/types/ApiResponse";

export const createContactService = (api: AxiosInstance) => ({
  async sendEmail(newEmail: ContactFormData): Promise<ApiResponse<null>> {
    const { data } = await api.post<ApiResponse<null>>("/contact/sales", newEmail);
    return data;
  },
});
