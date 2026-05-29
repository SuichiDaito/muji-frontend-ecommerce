import Image from "next/image";

type IconProps = {
  src: string;
  alt: string;
  class?: string;
};

export default function CustomIcon(icon: IconProps) {
  return (
    <div className="">
      <Image
        src={icon.src}
        alt={icon.alt}
        width={50}
        height={50}
        unoptimized
        className={`object-cover ${icon.class}`}
      ></Image>
    </div>
  );
}
