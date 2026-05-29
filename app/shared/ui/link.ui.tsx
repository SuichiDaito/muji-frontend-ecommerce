import Link from "next/link";

type LinkProps = {
  class?: string;
  url: string;
  name: string;
};

export default function LinkPage(link: LinkProps) {
  return (
    <Link
      href={link.url}
      className={`hover:text-red-900 text-xl font-semibold ${link.class}`}
    >
      {link.name}
    </Link>
  );
}
