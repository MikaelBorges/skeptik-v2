import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useGetCategories } from "@/hooks/productsHooks";
import { CommonFilterProps } from "@/types/filterTypes";
import { Loader2 } from "lucide-react";

type Categories =
  | "electronics"
  | "jewelery"
  | "men's clothing"
  | "women's clothing";

type CategoryItem = {
  id: Categories;
  label: Capitalize<Categories>;
};

/* const categories: CategoryItem[] = [
  {
    id: "electronics",
    label: "Electronics",
  },
  {
    id: "jewelery",
    label: "Jewelery",
  },
  {
    id: "men's clothing",
    label: "Men's clothing",
  },
  {
    id: "women's clothing",
    label: "Women's clothing",
  },
]; */

export function CategoriesFilter({ control }: CommonFilterProps) {
  const { data: categoriesData, isLoading } = useGetCategories();

  const categories = categoriesData?.map((category) => ({
    id: category,
    label: category.charAt(0).toUpperCase() + category.slice(1),
  }));

  return (
    <>
      {categoriesData && (
        <FormField
          control={control}
          name="categories"
          render={() => (
            <FormItem className="flex flex-wrap space-y-0 gap-3">
              {categories?.map((item) => (
                <FormField
                  key={item.id}
                  control={control}
                  name="categories"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex space-x-2 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
      )}
      {isLoading && <Loader2 className="animate-spin m-auto" />}
    </>
  );
}
