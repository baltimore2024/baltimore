"use client";

import Image from "next/image";

export function LandingPageComponent() {
	return (
		<div className="relative mx-auto h-[1700px] max-w-7xl md:h-[1000px]">
			<Image
				src={"/images/home/alumni-achievements.png"}
				alt="image"
				width={"1000"}
				height={"1000"}
				className="absolute h-[800px] w-full object-cover md:h-[730px] md:rounded-xl"
			/>
			<div className="absolute mt-[480px] flex h-[2000px] justify-between from-[#00000056] to-[#000] px-[20px] md:mt-[470px] md:h-[1000px] md:px-[50px]">
				<div className="text-white">
					<h1 className="text-5xl text-[20px] md:w-[50%]">
						Join us in making a difference
					</h1>
					<p className="mt-[20px] text-[#6B7280] md:w-[70%]">
						The Black Economic Improvement Corporation (BEIC) is
						committed to empowering individuals and uplifting
						communities through education, economic development, and
						community improvement. But we can’t do it alone – we
						need your support. Here’s how you can get involved and
						make a lasting impact:
					</p>
				</div>
				<div className="hidden md:inline">
					<Image
						src={"/images/home/alum.png"}
						alt="image"
						width={"600"}
						height={"600"}
						className="rounded-[20px] border-[4px] border-white"
					/>
					<p className="text-2xl">Student testimonials</p>
					<p className="mt-[10px] text-[#6B7280]">
						Hear directly from our students about their experiences
						and what makes BEIC special
					</p>
				</div>
			</div>
			<div className="relative">
				<div className="px-[20px] pt-[830px] md:w-[35%] md:px-0 md:pt-[750px]">
					<p>ALUMNI ACHIEVEMENTS</p>
					<h1 className="mt-[10px] text-2xl">
						Our graduates go on to achieve remarkable success in
						their various fields.
					</h1>
					<p className="text-2xl text-[#6B7280]">
						Read about their journey and how BEIC helped shape their
						future
					</p>
				</div>
				<div className="relative inline px-[20px] md:hidden md:px-0">
					<Image
						src={"/images/home/alum.png"}
						alt="image"
						width={"600"}
						height={"600"}
						className="rounded-[20px] border-[4px] border-white px-[20px] md:px-0"
					/>
					<p className="px-[20px] text-2xl md:px-0">
						Student testimonials
					</p>
					<p className="mt-[10px] px-[20px] text-[#6B7280] md:px-0">
						Hear directly from our students about their experiences
						and what makes BEIC special
					</p>
				</div>
			</div>
		</div>
	);
}
