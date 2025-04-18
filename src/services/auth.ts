import axios from "axios";
import { SignUpSchema } from "@/schemas/signupSchema";

export async function signUpFunction(data: SignUpSchema) {
  try {
    const response = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/auth/signup",
      data
    );

    if (response.data.message === "success") {
      const token = response.data.token;
      localStorage.setItem("token", token);
      return { success: true };
    }

    throw new Error("Unexpected response");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message || "Failed to sign up. Please try again.";
      throw new Error(message);
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
}
