import { useTransition, useState } from "react";
import TabButton from "./TabButton";
import aboutImage from "../images/about-image.png";

export default function AboutSection() {
	const [tab, setTab] = useState("skills");
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [_, startTransition] = useTransition();

	const handleTabChange = (id: string) => {
		startTransition(() => {
			setTab(id);
		});
	};

	return (
		<section className="text-white" id="about">
			<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
				<img src={aboutImage} width={500} height={500} />
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
					<p className="text-base lg:text-lg">
						I am a passionate full-stack developer with expertise in React,
						.NET, and Angular. My journey in the world of technology has been
						driven by a relentless desire to craft seamless digital experiences.
						With a skill set that includes React and Angular for creating
						dynamic user interfaces and .NET for robust backend solutions, I am
						dedicated to pushing the boundaries of what's possible in the
						digital realm. I thrive on challenges, continuously expanding my
						knowledge, and collaborating with fellow enthusiasts to build
						remarkable applications. Let's turn ideas into reality, one line of
						code at a time.
					</p>
					<div className="flex flex-row justify-start mt-8">
						<TabButton
							selectTab={() => handleTabChange("skills")}
							active={tab === "skills"}
						>
							{" "}
							Skills{" "}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("education")}
							active={tab === "education"}
						>
							{" "}
							Education{" "}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("certifications")}
							active={tab === "certifications"}
						>
							{" "}
							Certifications{" "}
						</TabButton>
					</div>
					<div className="mt-4">
						{TAB_DATA.find((t) => t.id === tab)?.content}
					</div>
				</div>
			</div>
		</section>
	);
}

const TAB_DATA = [
	{
		title: "Skills",
		id: "skills",
		content: (
			<div>
				<ul className="grid grid-cols-2 list-disc pl-2">
					<li>🟢React Native</li>
					<li>🟢HTML5</li>
					<li>🟢Git</li>
					<li>🟢Scrum</li>
					<li>🟡React.js</li>
					<li>🟡Angular</li>
					<li>🟡JavaScript</li>
					<li>🟡Redux</li>
					<li>🟡CSS</li>
					<li>🟡C#</li>
					<li>🟡.NET</li>
					<li>🟡.NET Core</li>
					<li>🟡ASP.NET MVC</li>
					<li>🟡ASP.NET</li>
					<li>🟡ASP.NET Razor</li>
					<li>🟡Confluence</li>
					<li>🟡Atlassian Bamboo</li>
					<li>🟡Bitbucket</li>
					<li>🟡JIRA</li>
					<li>🟡SQL</li>
					<li>🟡GitHub</li>
					<li>🟡WebAPI</li>
					<li>🟡Entityframework</li>
					<li>🔴Octopus Deploy</li>
					<li>🔴TeamCity</li>
					<li>🔴Docker</li>
					<li>🔴MongoDB</li>
					<li>🔴Microsoft Azure</li>
					<li>🔴Bootstrap</li>
				</ul>
			</div>
		),
	},
	{
		title: "Education",
		id: "education",
		content: (
			<ul className="list-disc pl-2">
				<li>Multimedia .NET - 1 year of digital crafting</li>
				<li>U2U Mastering Angular - 3-day code sprint</li>
				<li>U2U React - 3 days of component-composing</li>
				<li>Self-study - 24/7, absorbing knowledge like a sponge!</li>
			</ul>
		),
	},
	{
		title: "Certifications",
		id: "certifications",
		content: (
			<ul className="list-disc pl-2">
				<li>Multimedi .Net Certification</li>
				<li>U2U Mastering Angular</li>
				<li>U2U React</li>
				<li>Azure AZ204 (64%)</li>
			</ul>
		),
	},
];
