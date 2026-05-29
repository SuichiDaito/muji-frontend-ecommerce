import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/app/constants/images";
import CustomImage from "../ui/image.ui";
import CustomIcon from "../ui/icon.ui";

const Header = () => {
  return (
    <div className="px-2 py-4 mb-2">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-10">
          <div className="relative">
            <Link href={"/"} className="">
              <CustomImage src={IMAGES.logo} alt="logo"></CustomImage>
            </Link>
          </div>
          <nav className="flex flex-wrap gap-10 text-lg font-medium hidden md:flex ">
            <Link className="hover:text-green-500" href="/auth/login">
              login
            </Link>
            <Link className="hover:text-green-500" href="/product">
              Product
            </Link>
          </nav>
          <div>
            <CustomIcon src={IMAGES.menu} alt="menu"></CustomIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
