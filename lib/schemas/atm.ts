import { z } from "zod";

export const ATMSchema = z.object({
  pin: z.number().min(1000).max(9999),
  withdrawAmount: z.number().min(1),
  depositAmount: z.number().min(1),
});

export type IATMSchemaType = z.infer<typeof ATMSchema>;
