import { useState, useRef } from "react";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import NewProjectCard from "./NewProjectCard";

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
						<NewProjectCard
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
	);
}

const projectsData = [
	{
		id: 1,
		title: "React Portfolio Website",
		description:
			"My official portfolio website built with Vite and TailwindCSS.",
		imgName: "1",
		tag: ["All", "Personal"],
		gitUrl: "https://github.com/androbro/Vite-Portfolio",
		previewUrl: "https://www.devulderk.com/",
	},
	{
		id: 2,
		title: "Zonder Honger Naar Bed",
		description: "website for a non-profit organization in Belgium.",
		imgName: "2",
		tag: ["All", "Personal"],
		gitUrl: "/",
		previewUrl: "https://zonderhongernaarbedaalst.be/home",
	},
	{
		id: 3,
		title: "E-commerce Application",
		description: "Project 3 description",
		imgName: "3",
		tag: ["All", "Commercial"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 4,
		title: "Food Ordering Application",
		description: "Project 4 description",
		imgName: "4",
		tag: ["All", "Commercial"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 5,
		title: "React Firebase Template",
		description: "Authentication and CRUD operations",
		imgName: "5",
		tag: ["All", "Commercial"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 6,
		title: "Full-stack Roadmap",
		description: "Project 5 description",
		imgName: "6",
		tag: ["All", "Commercial"],
		gitUrl: "/",
		previewUrl: "/",
	},
];
