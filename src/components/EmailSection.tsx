import { useState } from "react";
import GithubIcon from "../images/icons/github-icon.svg";
import LinkedinIcon from "../images/icons/linkedin-icon.svg";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
//https://www.npmjs.com/package/@emailjs/browser

export default function EmailSection() {
	const [emailSubmitted, setEmailSubmitted] = useState(false);
	const [formValues, setFormValues] = useState({
		name: "",
		subject: "",
		message: "",
	});
	const serviceId = "service_0sh9p0f";
	const templateId = "template_ivof8u9";
	const publicKey = "3E8JAZop3iqj6iyHO";

	//todo: fix any
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		emailjs
			.send(serviceId, templateId, formValues, {
				publicKey: publicKey,
			})
			.then(
				() => {
					setEmailSubmitted(true);
					//after 3 seconds, reset the form
					setTimeout(() => {
						setFormValues({
							name: "",
							subject: "",
							message: "",
						});
						setEmailSubmitted(false);
					}, 3000);
				},
				() => {
					setEmailSubmitted(false);
				}
			);
	};

	return (
		<section id="contact" className="grid md:grid-cols-2 py-24 gap-4 relative">
			<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
			<div className="">
				<h5 className="text-xl font-bold text-white my-2">
					Let&apos;s Connect
				</h5>
				<p className="text-[#ADB7BE] mb-4 max-w-md">
					{" "}
					My inbox is always open. Whether you have a question or just want to
					say hi, I&apos;ll try my best to get back to you!
				</p>
				<div className="socials flex flex-row gap-2">
					<Link to="https://github.com/androbro">
						<img src={GithubIcon} alt="Github Icon" />
					</Link>
					<Link to="https://www.linkedin.com/in/koendevulder/">
						<img src={LinkedinIcon} alt="Linkedin Icon" />
					</Link>
				</div>
			</div>
			<div>
				{emailSubmitted ? (
					<p className="text-green-500 text-sm mt-2">
						Email sent successfully!
					</p>
				) : (
					<form className="flex flex-col" id="form" onSubmit={handleSubmit}>
						<div className="mb-6">
							<label
								htmlFor="email"
								id="email-label"
								className="text-white block mb-2 text-sm font-medium"
							>
								Your email
							</label>
							<input
								name="email"
								type="name"
								id="name"
								required
								className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
								placeholder="wizard@hogwarts.com"
								value={formValues.name}
								onChange={(e) =>
									setFormValues({ ...formValues, name: e.target.value })
								}
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="subject"
								id="subject-label"
								className="text-white block text-sm mb-2 font-medium"
							>
								Subject
							</label>
							<input
								name="subject"
								type="text"
								id="subject"
								required
								className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
								placeholder="Just saying hi"
								value={formValues.subject}
								onChange={(e) =>
									setFormValues({ ...formValues, subject: e.target.value })
								}
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="message"
								id="message-label"
								className="text-white block text-sm mb-2 font-medium"
							>
								Message
							</label>
							<textarea
								name="message"
								id="message"
								className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
								placeholder="Let's talk about..."
								value={formValues.message}
								onChange={(e) =>
									setFormValues({ ...formValues, message: e.target.value })
								}
							/>
						</div>
						<button
							type="submit"
							id="submit"
							className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
						>
							Send Message
						</button>
					</form>
				)}
			</div>
		</section>
	);
}
