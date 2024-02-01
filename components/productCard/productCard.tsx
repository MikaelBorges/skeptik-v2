"use client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "@/config/numeralConfig";
import { cn } from "@/lib/utils";
import { ProductCardType } from "@/types/productTypes";
import numeral from "numeral";
import { useState } from "react";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { Button } from "../ui/button";
import { CardImage } from "./productCardImage";

type CardProps = React.ComponentProps<typeof Card>;

type ProductCardProps = {
  product: ProductCardType;
} & CardProps;

export function ProductCard({
  product,
  className,
  ...props
}: ProductCardProps) {
  const { title, price: dirtyPrice, image, category, rating } = product;
  const price = numeral(dirtyPrice).format("0,0.00");
  const { rate } = rating;
  const cleanRate = numeral(rate).format("0,0.00");
  const [checkedFavorite, setCheckedFavorite] = useState<boolean>(false);

  return (
    <Card
      className={cn("bg-secondary flex overflow-hidden h-36", className)}
      {...props}
    >
      <CardImage imageUrl={image} />
      <CardContent className="p-0 w-2/3 flex flex-col justify-between">
        <CardHeader className="p-4 pb-0 flex-row justify-between gap-3 space-y-0">
          <Badge className="truncate h-fit">{category}</Badge>
          <Button
            variant="secondary"
            className="rounded-full p-0 h-fit"
            onClick={() => setCheckedFavorite(!checkedFavorite)}
          >
            {checkedFavorite ? (
              <FaHeart className="h-5 w-5 text-red-500" />
            ) : (
              <FaRegHeart className="h-5 w-5 text-red-500" />
            )}
          </Button>
        </CardHeader>
        <CardTitle className="break-words text-md line-clamp-2 px-4">
          {title}
        </CardTitle>
        <CardFooter className="p-4 pt-0 flex justify-between text-sm">
          <span className="flex items-center">
            {cleanRate}
            <FaStar className="text-yellow-400 ml-1 inline" />
          </span>
          {`${price} €`}
        </CardFooter>
      </CardContent>
    </Card>
  );
}
