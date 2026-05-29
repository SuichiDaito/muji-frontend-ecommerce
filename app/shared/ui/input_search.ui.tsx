import CustomIcon from "./icon.ui";

export default function InputSearch() {
  return (
    <div className="px-2 bg-gray-100 flex items-center rounded-lg hidden md:flex border border-gray-200">
      <CustomIcon
        src="/icons/search.svg"
        alt="search"
        class="h-5 w-5 "
      ></CustomIcon>
      <input
        className="rounded py-2 px-4 bg-transparent border-none outline-none text-base font-medium"
        placeholder="Search"
      ></input>
      <button className="hover:cursor-pointer mx-0.5 border border-slate-100 rounded-lg px-2 py-1 text-sm font-normal text-white bg-red-800 hover:bg-red-900">
        Search
      </button>
    </div>
  );
}
