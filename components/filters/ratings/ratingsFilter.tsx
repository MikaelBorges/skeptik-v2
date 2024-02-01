import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CommonFilterProps, FilterValues } from "@/types/filterTypes";
import { UseFormWatch } from "react-hook-form";
import { FaRegStar, FaStar } from "react-icons/fa";

export type RatingFilterProps = CommonFilterProps & {
  watch: UseFormWatch<FilterValues>;
  stars: number;
};

export function RatingsFilter({ stars, control, watch }: RatingFilterProps) {
  const ratings = Number(watch("ratings"));

  return (
    <FormField
      control={control}
      name="ratings"
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <RadioGroup
              key={Date.now()} // TRICK : Pour forcer le reset d'un radio coché
              onValueChange={field.onChange}
              defaultValue={field.value as string}
              className="flex gap-1"
            >
              {Array.from({ length: stars }, (_, index) => (
                <FormItem key={index}>
                  <FormControl className="hidden">
                    <RadioGroupItem value={String(index + 1)} />
                  </FormControl>
                  <FormLabel className="text-xl cursor-pointer">
                    {ratings > index ? (
                      <FaStar className="text-yellow-400" />
                    ) : (
                      <FaRegStar />
                    )}
                  </FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
