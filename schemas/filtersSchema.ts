import * as z from "zod";

export const filtersSchema = z.object({
  title: z.string().max(30, {
    message: "Maximum 30 caractères.",
  }),
  ratings: z
    .enum(["1", "2", "3", "4", "5"])
    .nullable()
    .refine(
      (value) => value === null || ["1", "2", "3", "4", "5"].includes(value)
    ),
  minPrice: z.string(),
  maxPrice: z.string(),
  sort: z
    .enum(["asc", "desc"])
    .refine((value) => ["asc", "desc"].includes(value)),
  categories: z.array(z.string()),
});
