import Image from "next/image";

type ImageProps = {
    src: string,
    alt: string 
}

export default function CustomImage(img: ImageProps) {
    return (
        <div className="w-12 h-12">
             <Image src={img.src} alt={img.alt} fill unoptimized className="object-contain"></Image>
        </div>
    )
};