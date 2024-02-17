import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { profileImage } from "../images";

export default function HeroSection() {
	return (
		<section className="pt-16 sm:py-16">
			<div className="grid grid-cols-1 sm:grid-cols-12">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
				>
					<div className="hero-title">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
							Hello, I&apos;m{" "}
						</span>
						<br></br>
						<TypeAnimation
							sequence={[
								"Koen",
								1000,
								"Web Developer",
								1000,
								"Mobile Developer",
								1000,
								".NET Developer",
								1000,
							]}
							wrapper="span"
							speed={50}
							repeat={Infinity}
						/>
					</div>
					<p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
						Aspiring Frontend Composer | Crafting Harmony with React | Fueling
						Curiosity with Coffee
					</p>
					<div>
						<Link
							activeClass="active"
							to="contact"
							spy={true}
							smooth={true}
							offset={50}
							duration={1000}
							className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
						>
							Contact Me
						</Link>
						<span className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
							<a
								href="../../resume.pdf"
								download
								className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
							>
								Download CV
							</a>
						</span>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-4 place-self-center mt-4 lg:mt-0"
				>
					<div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
						<img
							src={profileImage}
							alt="hero image"
							className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							width={280}
							height={280}
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
