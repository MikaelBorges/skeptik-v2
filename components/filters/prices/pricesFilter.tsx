import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CommonFilterProps } from "@/types/filterTypes";
import { Slider } from "@/components/ui/slider";

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

type PricesFilterProps = CommonFilterProps & {
  setValue: any;
  defaultMinPrice: string | undefined;
  defaultMaxPrice: string | undefined;
};

export function PricesFilter({
  control,
  setValue,
  defaultMinPrice,
  defaultMaxPrice,
}: PricesFilterProps) {
  const setDefaultValue = (index: number) => {
    if (index) return defaultMaxPrice ? Number(defaultMaxPrice) : 200;
    else return defaultMinPrice ? 100 - Number(defaultMinPrice) : 100;
  };

  return (
    <div className="space-y-1">
      <div className="flex space-x-1">
        {prices.map(({ name, placeholder }, index) => (
          <div key={`${name}-${index}`} className="flex flex-col">
            <FormField
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
            <Slider
              className="p-1 bg-background rounded-md"
              defaultValue={[setDefaultValue(index)]}
              min={index ? 100 : 0}
              max={index ? 200 : 100}
              step={1}
              onValueChange={(valueArray) =>
                setValue(
                  index ? "maxPrice" : "minPrice",
                  String(index ? valueArray[0] : 100 - valueArray[0])
                )
              }
              inverted={index ? false : true}
            />
          </div>
        ))}
      </div>
      {/* <div className="flex">
        <Slider
          className="p-1 bg-background rounded-md w-1/2"
          defaultValue={[defaultMinPrice ? 100 - Number(defaultMinPrice) : 100]}
          max={100}
          step={1}
          onValueChange={(valueArray) =>
            setValue("minPrice", String(100 - valueArray[0]))
          }
          inverted
        />
        <Slider
          className="p-1 bg-background rounded-md w-1/2"
          defaultValue={[defaultMaxPrice ? Number(defaultMaxPrice) : 200]}
          min={100}
          max={200}
          step={1}
          onValueChange={(valueArray) =>
            setValue("maxPrice", String(valueArray[0]))
          }
        />
      </div> */}
    </div>
  );
}
