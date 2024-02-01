import type { ParamsType, ProductCardType } from "@/types/productTypes";

export const filteredProducts = (
  products: ProductCardType[],
  params: ParamsType
) => {
  const { categories, maxPrice, minPrice, ratings, title, sort } = params;
  const categoriesArray = categories?.split(",");

  if (sort === "asc") products = products.reverse();

  return products
    ?.filter((ad) => (minPrice ? ad.price >= Number(minPrice) : true))
    ?.filter((ad) => (maxPrice ? ad.price <= Number(maxPrice) : true))
    ?.filter((ad) =>
      categories ? categoriesArray?.includes(ad.category) : true
    )
    ?.filter((ad) => (ratings ? ad.rating.rate >= Number(ratings) : true))
    ?.filter((ad) =>
      title ? ad.title.toUpperCase().includes(title.toUpperCase()) : true
    );
};
