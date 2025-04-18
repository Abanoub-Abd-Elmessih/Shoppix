"use server";
import axios from "axios";
import { SignUpSchema } from "@/schemas/signupSchema";
import { cookies } from "next/headers";

export async function signUpFunction(data: SignUpSchema) {
  try {
    const response = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/auth/signup",
      data
    );

    if (response.data.message === "success") {
      const token = response.data.token;

      (await cookies()).set({
        name: "token",
        value: token,
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
        domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
      });

      return token;
    }

    throw new Error("Unexpected response");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message || "Failed to sign up. Please try again.";
      throw new Error(message);
    }
    throw new Error("An unexpected error occurred.");
  }
}
