import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  company: z.string().max(100).optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().max(20).optional(),
  projectDetails: z.string().min(10, "Please provide more details about your project").max(2000),
});

export type LeadInput = z.infer<typeof leadSchema>;
