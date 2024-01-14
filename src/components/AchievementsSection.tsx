import CountUp from "react-countup";

export default function AchievementsSection() {
	return (
		<div className="py-2 px-4 sm:py-16 xl:gap-16 xl:px-16">
			<div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
				{achievementsList.map((achievement, index) => (
					<div
						key={index}
						className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
					>
						<h2 className="text-white text-4xl font-bold flex flex-row">
							{achievement.prefix}
							<CountUp
								end={parseInt(achievement.value.replace(/,/g, ""), 10)}
								duration={2.75}
								separator=","
								className="text-white text-4xl font-bold"
							/>
							{achievement.postfix}
						</h2>
						<p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
					</div>
				))}
			</div>
		</div>
	);
}

const achievementsList = [
	{
		metric: "Projects",
		value: "12",
		postfix: "+-",
	},
	{
		metric: "Courses/Events attended",
		value: "5",
	},
	{
		prefix: "∼",
		metric: "Years",
		//todo: make this dynamic
		value: "3",
	},
];
