import { Link } from "react-router-dom";
import { Route } from "../types/Entities";

export default function MenuOverlay({ links }: { links: Route[] }) {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
}
