type FiltersType = {
  title?: string;
  minPrice?: string;
  maxPrice?: string;
  categories?: string[];
  ratings?: string | null;
  sort?: string;
};

export const nonEmptyValues = (values: FiltersType) =>
  Object.fromEntries(
    Object.entries(values).filter(
      ([, value]) => value !== "" && value !== null && value.length
    )
  );
