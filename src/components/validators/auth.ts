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
    .regex(/^\d{4}\s?[a-zA-Z]{2}$/, "Invalid zip code")
    .optional(),
  city: z
    .string()
    .min(1, "City is required")
    .max(100, "City can't exceed 100 characters"),
  remark: z.string().max(500, "Remark can't exceed 500 characters").optional(),
  model: z.string().optional(),
  freeStanding: z.string().optional(),
  standardType: z.string().optional(),
  profileColor: z.string().optional(),
  coveringMaterial: z.string().optional(),
  awning: z.string().optional(),
  fabricColor: z.string().optional(),
  leftWallType: z.string().optional(),
  leftWallMaterial: z.string().optional(),
  leftMaterialTransparency: z.string().optional(),
  leftAwning: z.string().optional(),
  leftAwningColor: z.string().optional(),
  leftWedgeMaterial: z.string().optional(),
  rightWallType: z.string().optional(),
  rightWallMaterial: z.string().optional(),
  rightMaterialTransparency: z.string().optional(),
  rightAwning: z.string().optional(),
  rightAwningColor: z.string().optional(),
  rightWedgeMaterial: z.string().optional(),
  frontWallType: z.string().optional(),
  frontLeftWallType: z.string().optional(),
  frontRightWallType: z.string().optional(),
  verticalAwningColor: z.string().optional(),
  frontMaterialTransparency: z.string().optional(),
  frontLeftMaterialTransparency: z.string().optional(),
  frontRightMaterialTransparency: z.string().optional(),
  width: z.string().optional(),
  height: z.string().optional(),
  depth: z.string().optional(),
});
