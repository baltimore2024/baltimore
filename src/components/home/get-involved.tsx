"use client";

import {
	Allocate,
	Enroll,
	Informed,
	Partner,
	Support,
	Volunteer,
} from "@/lib/icons";
import Image from "next/image";

export function GetInvolvedComponent() {
	const width = "25";
	const height = "25";
	const involvementOptions = [
		{
			icon: <Volunteer width={width} height={height} />,
			title: "Become a Volunteer",
			description:
				"Join our dedicated team of volunteers and make a real difference in your community. Your time and skills can help us create lasting change.",
		},
		{
			icon: <Enroll width={width} height={height} />,
			title: "Enroll in Our Programs",
			description:
				"Enhance your skills and knowledge through our educational programs. Our courses are designed to empower you for personal and professional growth.",
		},
		{
			icon: <Support width={width} height={height} />,
			title: "Support Our Mission",
			description:
				"Your donations enable us to expand our reach and impact. Every contribution, no matter the size, helps us continue our vital work in the community.",
		},
		{
			icon: <Partner width={width} height={height} />,
			title: "Partner with Us",
			description: `We're always looking to collaborate with organizations that share our vision. Together, we can create a greater impact and drive meaningful change.`,
		},
		{
			icon: <Informed width={width} height={height} />,
			title: "Stay Informed",
			description:
				"Follow us on social media, subscribe to our newsletter, and attend our events to stay updated on our initiatives, success stories, and upcoming opportunities.",
		},
		{
			icon: <Allocate width={width} height={height} />,
			title: "Advocate for Change",
			description:
				"Use your voice to promote and support our cause. Share our message with your network and help us create awareness for positive change in our community.",
		},
	];

	return (
		<section className="bg-white pb-[50px]">
			<div className="mx-auto md:container">
				<div className="flex flex-col-reverse items-center justify-between gap-20 md:flex-row">
					<div className="grid grid-cols-1 gap-8 px-[20px] md:w-[50%] md:grid-cols-2">
						{involvementOptions.map((option, index) => (
							<div key={index} className="grid">
								<div className="">{option.icon}</div>
								<h3 className="mb-2 text-xl font-semibold">
									{option.title}
								</h3>
								<p className="text-base font-normal text-gray-600">
									{option.description}
								</p>
							</div>
						))}
					</div>
					<div className="px-[20px] md:w-[50%]">
						<Image
							width={"1000"}
							height={"1000"}
							src="/images/home/student-testimonial.png"
							alt=""
							className="h-[400px] rounded-lg object-cover md:w-[100%]"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
