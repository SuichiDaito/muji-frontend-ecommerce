import Link from "next/link";
import { IMAGES } from "@/app/constants/images";
import CustomIcon from "../ui/icon.ui";
import InputSearch from "../ui/input_search.ui";
import LinkPage from "../ui/link.ui";

export default function Header() {
  return (
    <div className="px-2 py-4 mb-1 mt-0 bg-white border-b border-gray-200 shadow-[0_1px_3px_0_rgba(0,0,0,0.2)] sticky top-0">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-10">
          <div className="relative">
            <Link href={"/"} className="">
              <CustomIcon src={IMAGES.logo} alt="logo"></CustomIcon>
            </Link>
          </div>
          <nav className="gap-10 text-lg font-medium hidden md:flex ">
            <LinkPage url="/auth/login" name="Login" class="h-full"></LinkPage>
            <LinkPage url="/" name="Product"></LinkPage>
          </nav>
          <div className="md:hidden">
            <CustomIcon src={IMAGES.menu} alt="menu"></CustomIcon>
          </div>
          <InputSearch></InputSearch>
        </div>
      </div>
    </div>
  );
}
