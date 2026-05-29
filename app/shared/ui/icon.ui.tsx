import Image from "next/image";

type IconProps = {
    src: string,
    alt: string 
}

export default function CustomIcon(icon: IconProps) {
    return (
        <div className="w-8 h-8">
   <Image src={icon.src} alt={icon.alt} width={50} height={50} unoptimized className="object-cover"></Image>
        </div>
          
    )
};