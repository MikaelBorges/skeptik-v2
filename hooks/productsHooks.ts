import { getCategories, getProducts } from "@/api/productsApi";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export const useGetProducts = (limit = 20) => {
  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams);

  return useQuery({
    queryFn: () => getProducts(params, limit),
    queryKey: ["products", params, limit],
  });
};

/*=====================*/

export const useGetCategories = () =>
  useQuery({
    queryFn: () => getCategories(),
    queryKey: ["categories"],
  });
