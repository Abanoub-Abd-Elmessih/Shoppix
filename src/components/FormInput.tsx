/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FormInputProps {
  control: any;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
}

export const FormInput = ({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: FormInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage className="border p-2 rounded-md shadow" />
        </FormItem>
      )}
    />
  );
};
