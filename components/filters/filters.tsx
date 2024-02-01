"use client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useGetProducts } from "@/hooks/productsHooks";
import { nonEmptyValues } from "@/lib/formUtils";
import { filtersSchema } from "@/schemas/filtersSchema";
import { FilterValues } from "@/types/filterTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CategoriesFilter } from "./categories/categoriesFilter";
import { PricesFilter } from "./prices/pricesFilter";
import { RatingsFilter } from "./ratings/ratingsFilter";
import { SortFilter } from "./sort/sortFilter";
import { TitleFilter } from "./title/titleFilter";

export function Filters() {
  const { isLoading } = useGetProducts();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams);

  const form = useForm<FilterValues>({
    resolver: zodResolver(filtersSchema),
    defaultValues: {
      title: params.title ? params.title : "",
      ratings: params.ratings
        ? (params.ratings as "1" | "2" | "3" | "4" | "5")
        : null,
      minPrice: params.minPrice ? params.minPrice : "",
      maxPrice: params.maxPrice ? params.maxPrice : "",
      sort: params.sort ? (params.sort as "asc" | "desc") : "desc",
      categories: params.categories ? params.categories.split(",") : [],
    },
  });

  const onSubmit = (values: z.infer<typeof filtersSchema>) => {
    const usefulValues = nonEmptyValues(values);
    const urlSearchParams = new URLSearchParams(
      usefulValues as Record<string, string>
    ).toString();
    router.push(`${pathname}${urlSearchParams ? `?${urlSearchParams}` : ""}`, {
      scroll: false,
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 rounded-md border p-4 bg-secondary text-right"
      >
        <TitleFilter control={form.control} />
        <div className="flex space-x-2">
          <div className="flex flex-col justify-between w-7/12">
            <RatingsFilter
              stars={5}
              control={form.control}
              watch={form.watch}
            />
            <SortFilter control={form.control} />
          </div>
          <PricesFilter control={form.control} />
        </div>
        <CategoriesFilter control={form.control} />
        <div className="space-x-2">
          <Button disabled={isLoading} type="submit">
            Rechercher
          </Button>
          <Button
            disabled={isLoading}
            onClick={(
              event: React.MouseEvent<HTMLButtonElement, MouseEvent>
            ) => {
              event.preventDefault();
              router.replace("/", {
                scroll: false,
              });
              form.reset();
            }}
          >
            Tout effacer
          </Button>
        </div>
      </form>
    </Form>
  );
}
