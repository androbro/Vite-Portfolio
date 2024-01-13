import { Link } from "react-router-dom";

export default function MenuOverlay(links: Array<{ title: string; path: string }>) {
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
