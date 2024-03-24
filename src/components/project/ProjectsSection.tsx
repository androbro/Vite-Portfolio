import { useState, useRef } from "react";
import ProjectTag from "../ProjectTag";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import "./Line.css";

export default function ProjectsSection() {
	const [tag, setTag] = useState("All");
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const handleTagChange = (newTag: string) => {
		setTag(newTag);
	};

	const filteredProjects = projectsData.filter((project) =>
		project.tag.includes(tag)
	);

	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};

	return (
		<>
			<div>
				<div className="loader">test</div>
			</div>
			<section id="projects">
				<h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
					My Projects
				</h2>
				<div className="text-white flex flex-row justify-center items-center gap-2 py-6">
					<ProjectTag
						onClick={handleTagChange}
						name="All"
						isSelected={tag === "All"}
					/>
					<ProjectTag
						onClick={handleTagChange}
						name="Personal"
						isSelected={tag === "Personal"}
					/>
					<ProjectTag
						onClick={handleTagChange}
						name="Commercial"
						isSelected={tag === "Commercial"}
					/>
				</div>
				<ul ref={ref} className="grid md:grid-cols-3 gap-12 md:gap-8">
					{filteredProjects.map((project, index) => (
						<motion.li
							key={index}
							variants={cardVariants}
							initial="initial"
							animate={isInView ? "animate" : "initial"}
							transition={{ duration: 0.3, delay: index * 0.4 }}
						>
							<ProjectCard
								key={project.id}
								title={project.title}
								description={project.description}
								imgName={project.imgName}
								gitUrl={project.gitUrl}
								previewUrl={project.previewUrl}
							/>
						</motion.li>
					))}
				</ul>
			</section>
		</>
	);
}

const projectsData = [
	{
		id: 1,
		title: "React Portfolio Website",
		description:
			"My official portfolio website built with Vite and TailwindCSS.",
		imgName: "proj1",
		tag: ["All", "Personal"],
		gitUrl: "https://github.com/androbro/Vite-Portfolio",
		previewUrl: "https://www.devulderk.com/",
	},
	{
		id: 2,
		title: "Zonder Honger Naar Bed",
		description: "website for a non-profit organization in Belgium.",
		imgName: "proj2",
		tag: ["All", "Personal"],
		gitUrl: "/",
		previewUrl: "/",
	},
];
