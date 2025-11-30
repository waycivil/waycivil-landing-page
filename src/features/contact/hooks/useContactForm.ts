import { useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "@/api/axiosInstance";
import { createContactService } from "../services/contact.service";
import type { ContactFormData } from "../types/contact-form.types";

const contactService = createContactService(axiosInstance);

export const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const submitContact = async (data: ContactFormData) => {
    setIsLoading(true);

    try {
      const response = await contactService.sendEmail(data);
      console.log(response);
      

      if (response.statusCode !== 200) {
        throw new Error(response.message || "Failed to send message");
      }

      toast.success("Message sent successfully!");
      return { success: true };
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to send message";
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    submitContact,
    isLoading,
  };
};
