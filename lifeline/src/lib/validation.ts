import { z } from "zod";

export const appointmentSchema = z.object({
  firstName: z.string().trim().min(2).max(80),
  lastName: z.string().trim().min(2).max(80),
  email: z.string().trim().email(),
  phone: z
    .string()
    .trim()
    .regex(/^(?:\+254|0)(?:7|1)\d{8}$/, "Enter a valid Kenyan phone number"),  branch: z.enum(["kahawa-wendani", "membley"]),
  service: z.string().trim().min(2).max(120),
  // HTML date inputs submit YYYY-MM-DD; bound it so arbitrary payloads can't
  // inject unbounded content into the delivered message.
  preferredDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Enter a valid date")
    .optional(),
  message: z.string().trim().max(1000).optional(),
  consent: z.literal(true),
  // Honeypot — must be empty
  company: z.string().max(0).optional(),
});

export type AppointmentInput = z.infer<typeof appointmentSchema>;
