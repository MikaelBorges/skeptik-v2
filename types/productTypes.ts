export type ProductCardType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type ParamsType = {
  title?: string;
  minPrice?: string;
  maxPrice?: string;
  categories?: string;
  ratings?: string | null;
  sort?: string;
};
