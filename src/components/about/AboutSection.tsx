import { useTransition, useState, useEffect } from "react";
import TabButton from "../TabButton";
import aboutImage from "../../images/about-image.png";
import "./Skills.css";

export default function AboutSection() {
	const [tab, setTab] = useState("education");
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [_, startTransition] = useTransition();

	const handleTabChange = (id: string) => {
		startTransition(() => {
			setTab(id);
		});
	};

	//animations
	useEffect(() => {
		const scrollers = document.querySelectorAll(".scroller");

		// If a user hasn't opted in for recuded motion, then we add the animation
		if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			addAnimation();
		}

		function addAnimation() {
			scrollers.forEach((scroller) => {
				scroller.setAttribute("data-animated", "true");

				const scrollerInner = scroller.querySelector(".scroller__inner");
				const scrollerContent = Array.from(scrollerInner!.children);

				scrollerContent.forEach((item) => {
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					const duplicatedItem: any = item.cloneNode(true);
					duplicatedItem.setAttribute("aria-hidden", true);
					scrollerInner!.appendChild(duplicatedItem);
				});
			});
		}
	}, []);

	return (
		<div className="text-white">
			<section id="about">
				<div className="md:grid md:grid-cols-2 gap-8 items-center py-2 px-4 sm:py-16 xl:gap-16 xl:px-16">
					<img className="fade-in" src={aboutImage} width={500} height={500} />
					<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
						<h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
						<p className="text-base lg:text-lg">
							I am a passionate full-stack developer with expertise in React,
							.NET, and Angular. My journey in the world of technology has been
							driven by a relentless desire to craft seamless digital
							experiences. With a skill set that includes React and Angular for
							creating dynamic user interfaces and .NET for robust backend
							solutions, I am dedicated to pushing the boundaries of what's
							possible in the digital realm. I thrive on challenges,
							continuously expanding my knowledge, and collaborating with fellow
							enthusiasts to build remarkable applications. Let's turn ideas
							into reality, one line of code at a time.
						</p>
						<div className="flex flex-row justify-start mt-8">
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
							<TabButton
								selectTab={() => handleTabChange("events")}
								active={tab === "events"}
							>
								{" "}
								Events{" "}
							</TabButton>
						</div>
						<div className="mt-4">
							{TAB_DATA.find((t) => t.id === tab)?.content}
						</div>
					</div>
				</div>
			</section>
			<section className="flex justify-center items-center" id="skills">
				<div className="flex flex-col justify-center items-center">
					<h2 className="text-4xl font-bold mb-8">Skills</h2>
					<div>
						<div className="scroller" data-speed="medium">
							<ul className="scroller__inner">
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-react-original"></i>
									<p className="icon-text text-sm">ReactJs</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-storybook-plain"></i>
									<p className="icon-text text-sm">Storybook</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-react-original"></i>
									<p className="icon-text text-sm">Native</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-nextjs-plain"></i>
									<p className="icon-text text-sm">NextJs</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-vitejs-plain"></i>
									<p className="icon-text text-sm">ViteJs</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-vitest-plain"></i>
									<p className="icon-text text-sm">Vitest</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-javascript-plain"></i>
									<p className="icon-text text-sm">JavaScript</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-git-plain"></i>
									<p className="icon-text text-sm">Git</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-redux-plain"></i>
									<p className="icon-text text-sm">Redux</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-html5-plain"></i>
									<p className="icon-text text-sm">HTML</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-openapi-plain"></i>
									<p className="icon-text text-sm">OpenApi</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-typescript-plain"></i>
									<p className="icon-text text-sm">TypeScript</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-vscode-plain"></i>
									<p className="icon-text text-sm">VS Code</p>
								</li>
							</ul>
						</div>
						<div className="scroller" data-speed="slow" data-direction="right">
							<ul className="scroller__inner">
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-jest-plain"></i>
									<p className="icon-text text-sm">Jest</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-vercel-original"></i>
									<p className="icon-text text-sm">Vercel</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-tailwindcss-original"></i>
									<p className="icon-text text-sm">Tailwind</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-jira-plain"></i>
									<p className="icon-text text-sm">Jira</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-angularjs-plain"></i>
									<p className="icon-text text-sm">Angular</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-css3-plain"></i>
									<p className="icon-text text-sm">CSS</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-csharp-plain"></i>
									<p className="icon-text text-sm">C#</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-dot-net-plain"></i>
									<p className="icon-text text-sm">.NET</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-dotnetcore-plain"></i>
									<p className="icon-text text-sm">.NET Core</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-confluence-plain"></i>
									<p className="icon-text text-sm">Confluence</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-bamboo-plain"></i>
									<p className="icon-text text-sm">Bamboo</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-bitbucket-plain"></i>
									<p className="icon-text text-sm">Bitbucket</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-jira-plain"></i>
									<p className="icon-text text-sm">JIRA</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-azuresqldatabase-plain"></i>
									<p className="icon-text text-sm">SQL</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-github-plain"></i>
									<p className="icon-text text-sm">GitHub</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-sentry-plain"></i>
									<p className="icon-text text-sm">Sentry</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-android-plain"></i>
									<p className="icon-text text-sm">Android</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-gitlab-plain"></i>
									<p className="icon-text text-sm">GitLab</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-ngrx-plain"></i>
									<p className="icon-text text-sm">NgRx</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-nodejs-plain-wordmark"></i>
									<p className="icon-text text-sm">NodeJs</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-eslint-plain"></i>
									<p className="icon-text text-sm">EsLint</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-webflow-original"></i>
									<p className="icon-text text-sm">WebFlow</p>
								</li>
								{/* 🟡Entityframework */}
							</ul>
						</div>
						<div className="scroller" data-speed="medium">
							<ul className="tag-list scroller__inner">
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-docker-plain"></i>
									<p className="icon-text text-sm">Docker</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-wordpress-plain"></i>
									<p className="icon-text text-sm">WordPress</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-mongodb-plain"></i>
									<p className="icon-text text-sm">MongoDB</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-azure-plain"></i>
									<p className="icon-text text-sm">Microsoft Azure</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-bootstrap-plain"></i>
									<p className="icon-text text-sm">Bootstrap</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-androidstudio-plain"></i>
									<p className="icon-text text-sm">Studio</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-azuredevops-plain"></i>
									<p className="icon-text text-sm">Azure Devops</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-blazor-plain"></i>
									<p className="icon-text text-sm">Blazor</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-electron-original"></i>
									<p className="icon-text text-sm">Electron</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-express-original"></i>
									<p className="icon-text text-sm">Express</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-firebase-plain"></i>
									<p className="icon-text text-sm">Firebase</p>
								</li>
								<li className="flex flex-col justify-center items-center">
									<i className="devicon-rider-plaindevicon-rider-plain"></i>
									<p className="icon-text text-sm">Rider</p>
								</li>

								{/* <li>Octopus Deploy</li>
						<li>TeamCity</li>*/}
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

const TAB_DATA = [
	{
		title: "Events",
		id: "events",
		content: (
			<div>
				<ul className="grid grid-cols-2 list-disc pl-2">
					<li>CloudBrew 2022</li>
					<li>.NET Conference 2023</li>
					<li>BeJs React Paris 2024</li>
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
