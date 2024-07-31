import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(3, "Name is required")
    .max(100, "Name can't exceed 100 characters"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number")
    .optional(),
  address: z
    .string()
    .min(1, "Address is required")
    .max(200, "Address can't exceed 200 characters"),
  zipCode: z
    .string()
    .regex(/^\d{5}(-\d{4})?$/, "Invalid zip code")
    .optional(),
  city: z
    .string()
    .min(1, "City is required")
    .max(100, "City can't exceed 100 characters"),
  remark: z.string().max(500, "Remark can't exceed 500 characters").optional(),
});
