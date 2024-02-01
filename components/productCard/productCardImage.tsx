import Image from "next/image";

export function CardImage({ imageUrl }: any) {
  return (
    <figure className="w-1/3 p-4 flex items-center bg-white">
      <Image
        className="object-contain h-full w-full"
        src={imageUrl}
        alt=""
        width={100}
        height={100}
        priority
      />
    </figure>
  );
}
