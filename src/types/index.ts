import { z } from "zod";

export type HomePlanType = z.infer<typeof homePlanSchema>;

export const homePlanSchema = z.object({
  homePlanId: z.number(),
  name: z.string(),
  numBeds: z.number(),
  numBaths: z.number(),
  sqft: z.number(),
  tags: z.array(z.string()),
  description: z.string(),
  image: z.string(),
});

export const getHomePlansResponseSchema = z.array(homePlanSchema);

export type LotType = z.infer<typeof lotSchema>;

export const lotSchema = z.object({
  lotId: z.number(),
  address: z.string(),
  acres: z.number(),
  description: z.string(),
  image: z.string(),
});

export const getLotsResponseSchema = z.array(lotSchema);

export type CombinationType = z.infer<typeof combinationSchema>;

export const combinationSchema = z.object({
  homePlanId: z.number(),
  lotId: z.number(),
});

export const getCombinationsResponseSchema = z.array(combinationSchema);
