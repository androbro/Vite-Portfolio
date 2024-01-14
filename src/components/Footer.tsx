import { logo } from "../images";

export default function Footer() {
	return (
		<footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
			<div className="container p-12 flex justify-between">
				<img src={logo} width={50} height={50} />
				<p className="text-slate-600">All rights reserved.</p>
			</div>
		</footer>
	);
}
