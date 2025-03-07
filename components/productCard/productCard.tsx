"use client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
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
  const { title, price: rawPrice, image, category, rating } = product;
  const price = numeral(rawPrice).format("0,0.00");
  const rate = numeral(rating.rate).format("0,0.00");
  const [favorite, setFavorite] = useState<boolean>(false);

  return (
    <Card
      className={cn("bg-secondary flex overflow-hidden h-40", className)}
      {...props}
    >
      {image && <CardImage imageUrl={image} imageAlt={title} />}
      <CardContent
        className={`p-0 flex flex-col justify-between ${
          image ? "w-2/3" : "w-full"
        }`}
      >
        <CardHeader className="p-4 pb-0 flex-row justify-between gap-3 space-y-0">
          <Badge className="truncate h-fit inline">{category}</Badge>
          {/* <Button
            variant="secondary"
            className="rounded-full p-0 h-fit"
            onClick={() => setFavorite(!favorite)}
          >
            {favorite ? (
              <FaHeart className="h-5 w-5 text-red-500" />
            ) : (
              <FaRegHeart className="h-5 w-5 text-red-500" />
            )}
          </Button> */}
        </CardHeader>
        {/* <CardDescription className="text-xs px-4">Paris</CardDescription> */}
        <CardTitle className="break-words text-md line-clamp-2 px-4">
          {title}
        </CardTitle>

        <CardFooter className="p-4 pt-0 flex justify-between text-sm">
          {/* <span className="flex items-center">
            {rate}
            <FaStar className="text-yellow-400 ml-1 inline" />
          </span> */}
          {`${price} €`}
        </CardFooter>
      </CardContent>
    </Card>
  );
}
