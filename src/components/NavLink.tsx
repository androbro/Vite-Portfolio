import { Link } from "react-router-dom";

export default function NavLink({ href, title }:{ href:string, title:string })  {
  return (
    <Link
      to={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
}
