import "./App.css";
import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/project/ProjectsSection";

function App() {
	return (
		<>
			<main
				style={{ padding: "1em" }}
				// style={{ overflow: "auto", padding: "1em" }}
				className="flex min-h-screen flex-col bg-[#121212] max-w-[100vw]"
			>
				<Navbar />
				<div className="container mt-24 mx-auto px-12 py-4 sm:px-6">
					<HeroSection />
					<AchievementsSection />
					<AboutSection />
					<ProjectsSection />
					<EmailSection />
					<Footer />
				</div>
			</main>
		</>
	);
}

export default App;
