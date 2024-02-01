import { Logo } from "@/components/logo/logo";
import { Menu } from "@/components/menu/menu";

export function Header() {
  return (
    <header className="z-10 p-4 sticky top-0 bg-secondary flex justify-between">
      <Logo />
      <Menu />
    </header>
  );
}
