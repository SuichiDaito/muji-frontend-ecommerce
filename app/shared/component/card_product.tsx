import Image from "next/image";
// type Products = {
//   id: number;
//   name: string;
//   image: string;
// };

export default function CardProduct() {
  return (
    <div className="rounded shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)]">
      <Image
        src="/images/product1.svg"
        width={100}
        height={50}
        alt="product"
        className="object-contain"
      ></Image>
      <div className="container px-2 py-16">
        <h4>
          <b>Product 1</b>
        </h4>
      </div>
    </div>
  );
}
