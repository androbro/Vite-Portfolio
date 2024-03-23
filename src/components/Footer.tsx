import { logo } from "../images";

export default function Footer() {
	return (
		<footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white">
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
				className="container p-12 flex justify-between align-items-center"
			>
				<img src={logo} width={50} height={50} />
				<div>
					<p className="text-slate-600 p-5">All rights reserved.</p>
				</div>
				<div></div>
			</div>
		</footer>
	);
}
