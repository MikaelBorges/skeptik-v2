import { API_URL } from "@/constants/endPoints";
import { filteredProducts } from "@/lib/filterUtils";
import type { ParamsType, ProductCardType } from "@/types/productTypes";

export const getProducts = async (
  params: ParamsType,
  limit: number
): Promise<ProductCardType[]> => {
  const response = await fetch(`${API_URL}/products?limit=${limit}`);
  if (!response.ok)
    throw new Error("Erreur lors de la récupération des produits");
  const products = await response.json();
  if (params) return filteredProducts(products, params);
  else return products;
};

export const getFakeProducts = async (
  params: ParamsType,
  limit: number
): Promise<ProductCardType[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2 * 1000));
  const fakeProducts = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
  ];
  if (params) return filteredProducts(fakeProducts, params);
  else return fakeProducts;
};

/*=====================*/

type Categories =
  | "electronics"
  | "jewelery"
  | "men's clothing"
  | "women's clothing";

export const getCategories = async (): Promise<Categories[]> => {
  const response = await fetch(`${API_URL}/products/categories`);
  if (!response.ok)
    throw new Error("Erreur lors de la récupération des catégories");
  const categories = await response.json();
  return categories;
};

export const getFakeCategories = async (): Promise<Categories[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return ["electronics", "jewelery", "men's clothing", "women's clothing"];
};
