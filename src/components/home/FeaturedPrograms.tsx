import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function FeaturedPrograms() {
	return (
		<div className="container mx-auto bg-background py-16">
			<h2 className="mb-8 text-center text-3xl font-bold">
				{`Featured Programs`}
			</h2>
			<p className="mx-auto w-[80%] text-center text-[#6B7280]">
				At the Black Economic Improvement Corporation (BEIC), we are
				proud to offer a variety of programs designed to uplift and
				empower our community. Our initiatives focus on education,
				economic development, and community improvement, ensuring a
				holistic approach to building a brighter future. Here are some
				of our featured programs
			</p>
			<div className="mt-[30px]">
				<div className="relative overflow-hidden py-10">
					<Image
						src="/images/home/bg-stable.png"
						width={"1000"}
						height={"1000"}
						className="absolute inset-0 z-0 h-full w-full"
						alt=""
					/>
					<div className="relative z-10 mx-auto p-8 text-start text-white">
						<h3 className="mb-4 w-full text-4xl font-extrabold md:w-[50%]">
							{`Universal Vocational Institute of America
							(UVIA)`}
						</h3>
						<p className="mb-6 max-w-3xl">
							{`At the Black Economic Improvement Corporation (BEIC), we are proud to offer a variety of programs designed to uplift and empower our community. Our initiatives focus on education, economic development, and community improvement, ensuring a holistic approach to building a brighter future. Here are some of our featured programs.`}
						</p>
						<Button
							variant="outline"
							className="border-white bg-transparent text-white"
						>
							Read more
						</Button>
					</div>
				</div>
				<div className="relative h-[400px] text-white">
					<video
						autoPlay
						loop
						muted
						playsInline
						className={`absolute inset-0 h-[400px] w-full object-cover transition-opacity duration-1000`}
					>
						<source
							src="/videos/feat_programs.webm"
							type="video/webm"
						/>
					</video>
					<div className="absolute h-[400px] w-full bg-gradient-to-b from-[#00000056] to-[#000] px-[20px] pt-[250px] md:pl-[50px]">
						<h3 className="mb-2 text-start text-4xl font-bold">
							UVIA
						</h3>
						<p className="text-start text-lg font-normal">{`A walkthrough of what we have in-store at UVIA`}</p>
					</div>
				</div>
				<div className="relative grid h-[1000px] w-full grid-cols-1 gap-2 md:h-[370px] md:grid-cols-2">
					<div className="relative w-full">
						<Image
							src="/images/home/bg-card2.png"
							alt="image"
							height={"1000"}
							width={"1000"}
							className="absolute h-[1000px] md:h-[370px]"
						/>
						<hgroup className="absolute p-[30px] text-white">
							<h1 className="text-3xl font-bold md:w-[60%]">
								Economic Empowerment Programs
							</h1>
							<p className="mt-[20px]">
								Economic independence is crucial for personal
								and community growth. Our economic empowerment
								initiatives include business mentorship,
								financial literacy workshops, and investment
								opportunities. These programs are designed to
								help individuals start and grow their
								businesses, manage their finances effectively,
								and build generational wealth. We offer
								resources and support tailored to meet the
								unique needs of our community.
							</p>
							<Button
								className="mt-[10px] rounded-[6px] border-2 border-white bg-transparent"
								variant={"outline"}
							>
								Show More
							</Button>
						</hgroup>
					</div>
					<div className="relative w-full">
						<Image
							src="/images/home/bg-card.png"
							alt="image"
							height={"1000"}
							width={"1000"}
							className="absolute h-[1000px] md:h-[370px]"
						/>
						<hgroup className="absolute p-[30px] text-white">
							<h1 className="text-3xl font-bold md:w-[60%]">
								Youth Empowerment and Mentorship
							</h1>
							<p className="mt-[20px]">
								Our youth programs aim to inspire and guide the
								next generation of leaders. Through mentorship,
								educational workshops, and community service
								projects, we provide young people with the tools
								and support they need to achieve their full
								potential. Our programs focus on personal
								development, career exploration, and leadership
								skills.
							</p>
							<Button
								className="mt-[10px] rounded-[6px] border-2 border-white bg-transparent"
								variant={"outline"}
							>
								Show More
							</Button>
						</hgroup>
					</div>
				</div>
				<div className="relative h-[670px] w-full md:h-[400px]">
					<Image
						src="/images/home/bg-community.png"
						alt="image"
						height={"1000"}
						width={"1000"}
						className="absolute h-[670px] w-full md:h-[400px]"
					/>
					<hgroup className="absolute flex flex-col gap-16 p-[30px] md:p-[50px] text-black">
						<div className="l">
							<h1 className="text-4xl font-bold md:w-[60%]">
								Help Keep Baltimore Clean Community Improvement
								Group
							</h1>
							<p className="mt-[20px] md:w-[70%]">
								A clean environment is essential for the
								well-being of our community. Our Help Keep
								Baltimore Clean initiative engages volunteers
								and partners in neighborhood clean-ups,
								recycling programs, and public awareness
								campaigns. By working together, we strive to
								create a cleaner, healthier, and more beautiful
								Baltimore. Join us in making a tangible
								difference in our city’s environment.
							</p>
						</div>
						<div className="">
							<Button
								className="mt-[10px] rounded-[6px] border-2 border-black bg-transparent"
								variant={"outline"}
							>
								Show More
							</Button>
						</div>
					</hgroup>
				</div>
				<div className="relative h-[450px] text-white">
					<video
						autoPlay
						loop
						muted
						playsInline
						className={`absolute inset-0 h-[450px] w-full object-cover transition-opacity duration-1000`}
					>
						<source
							src="/videos/cleaning-up-balt.webm"
							type="video/webm"
						/>
					</video>
					<div className="absolute h-[450px] w-full bg-gradient-to-b from-[#00000056] to-[#000] px-[20px] pt-[300px] md:pl-[50px]">
						<h3 className="mb-2 text-start text-4xl font-bold">
							Cleaning up baltimore
						</h3>
						<p className="text-start text-lg font-normal">{`Watch volunteers & partners clean-up the community.`}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
