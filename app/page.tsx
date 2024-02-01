import { Filters } from "@/components/filters/filters";
import { ProductList } from "@/components/productList/productList";

export default function RootPage() {
  return (
    <main className="space-y-4 flex flex-col items-center p-4">
      <Filters />
      <ProductList />
    </main>
  );
}
