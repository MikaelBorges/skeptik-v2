import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <Image alt="logo" src={logo} priority />
    </Link>
  );
}
