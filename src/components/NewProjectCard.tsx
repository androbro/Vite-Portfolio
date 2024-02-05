import { Link } from "react-router-dom";
import "../styles/ProjectCard.css";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { proj1 } from "../images";

export default function NewProjectCard({
	imgName,
	title,
	description,
	gitUrl,
	previewUrl,
}: {
	imgName: string;
	title: string;
	description: string;
	gitUrl: string;
	previewUrl: string;
}) {
	const [responsiveImgUrl, setResponsiveImgUrl] = useState(imgName);

	useEffect(() => {
		function handleResize() {
			let suffix = "";
			if (window.innerWidth <= 640) {
				suffix = "-sm";
			} else if (window.innerWidth <= 1024) {
				suffix = "-md";
			} else if (window.innerWidth <= 1280) {
				suffix = "-lg";
			} else if (window.innerWidth <= 1536) {
				suffix = "-xl";
			} else {
				suffix = "-xxl";
			}
			setResponsiveImgUrl(imgName + suffix);
		}

		window.addEventListener("resize", handleResize);
		handleResize(); // call the function initially to set the image URL

		// cleanup function
		return () => window.removeEventListener("resize", handleResize);
	}, [imgName]);

	const backgroundImageStyle = {
		// backgroundImage: `url(/src/images/projects/${imgName}/${responsiveImgUrl}.png)`,
		backgroundImage: `url(${proj1})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
	};

	console.log(responsiveImgUrl);

	return (
		<div className="card">
			<b style={backgroundImageStyle}></b>
			<div className="content">
				<p className="title">
					{title}
					<br />
					<span>{description}</span>
				</p>
				<ul className="sci">
					<Link
						hidden={gitUrl === "/"}
						to={gitUrl}
						className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
					>
						<CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
					</Link>
					<Link
						hidden={previewUrl === "/"}
						to={previewUrl}
						className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
					>
						<EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
					</Link>
				</ul>
			</div>
		</div>
	);
}
