import { Link } from "react-router-dom";
import { logo } from "../images";

export default function Navbar() {
	// const [navbarOpen, setNavbarOpen] = useState(false);

	return (
		<nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
			<div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
				<Link
					to={"/"}
					className="text-2xl md:text-5xl text-white font-semibold"
				>
					<img src={logo} width={50} height={50} />
				</Link>
				{/* <div className="mobile-menu block md:hidden">
					{!navbarOpen ? (
						<button
							onClick={() => setNavbarOpen(true)}
							className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
						>
							<Bars3Icon className="h-5 w-5" />
						</button>
					) : (
						<button
							onClick={() => setNavbarOpen(false)}
							className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
						>
							<XMarkIcon className="h-5 w-5" />
						</button>
					)}
				</div>
				<div className="menu hidden md:block md:w-auto" id="navbar">
					<ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
						{navLinks.map((link, index) => (
							<li key={index}>
								<Link to={link.path} title={link.title} />
							</li>
						))}
					</ul>
				</div> */}
			</div>
			{/* {navbarOpen ? <MenuOverlay links={navLinks} /> : null} */}
		</nav>
	);
}

// const navLinks: Route[] = [
// 	{
// 		title: "About",
// 		path: "#about",
// 	},
// 	{
// 		title: "Projects",
// 		path: "#projects",
// 	},
// 	{
// 		title: "Contact",
// 		path: "#contact",
// 	},
// ];
