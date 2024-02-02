import Image from "next/image";

type CardImageProps = {
  imageUrl: string;
  imageAlt: string;
};

export function CardImage({ imageUrl, imageAlt }: CardImageProps) {
  return (
    <figure className="w-1/3 p-4 flex items-center bg-white">
      <Image
        className="object-contain h-full w-full"
        src={imageUrl}
        alt={imageAlt}
        width={100}
        height={100}
        priority
      />
    </figure>
  );
}
