import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CommonFilterProps } from "@/types/filterTypes";

type Prices = "minPrice" | "maxPrice";

type PriceItem = {
  name: Prices;
  placeholder: string;
};

const prices: PriceItem[] = [
  {
    name: "minPrice",
    placeholder: "Prix min",
  },
  {
    name: "maxPrice",
    placeholder: "Prix max",
  },
];

export function PricesFilter({ control }: CommonFilterProps) {
  return (
    <div className="w-5/12 space-y-1">
      {prices.map(({ name, placeholder }, index) => (
        <FormField
          key={`${name}-${index}`}
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="number"
                  min={0}
                  placeholder={placeholder}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
    </div>
  );
}
