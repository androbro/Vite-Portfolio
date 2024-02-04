import { Link } from "react-router-dom";
import "../styles/ProjectCard.css";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";

export default function NewProjectCard({
	imgUrl,
	title,
	description,
	gitUrl,
	previewUrl,
}: {
	imgUrl: string;
	title: string;
	description: string;
	gitUrl: string;
	previewUrl: string;
}) {
	const backgroundImageStyle = {
		backgroundImage: `url(${imgUrl})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
	};

	console.log(imgUrl);

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
						to={gitUrl}
						className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
					>
						<CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
					</Link>
					<Link
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
