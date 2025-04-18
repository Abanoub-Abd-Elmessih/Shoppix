"use server";
import axios from "axios";
import { SignUpSchema } from "@/schemas/signupSchema";
import { cookies } from "next/headers";

export async function signUpFunction(data: SignUpSchema) {
  try {
    const response = await axios.post(
      `https://ecommerce.routemisr.com/api/v1/auth/signup`,
      data
    );

    const responseData = response.data;

    if (response.status === 409) {
      throw new Error("Email is already registered.");
    }

    if (responseData.token) {
      const cookieStore = await cookies();
      cookieStore.set("token", responseData.token, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });
    }

    return responseData;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw error;
  }
}
