import { LocationIcon } from "@/lib/icons";
import { Cog, Star, Trash2 } from "lucide-react";
import Image from "next/image";

export default function AcademicExcellence() {
	return (
		<div className="bg-[#F6F5FB] px-4 py-12 sm:px-6 lg:px-8">
			<div className="container mx-auto">
				<div className="items-start lg:grid lg:grid-cols-2 lg:gap-8">
					<div>
						<h2 className="mb-8 text-4xl font-semibold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-4xl">
							Academic Excellence
						</h2>
						<div className="space-y-6">
							<div className="flex flex-col gap-2 border-l-4 border-gray-200 pl-4">
								<div className="flex-shrink-0">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-white">
										<Cog className="h-6 w-6" />
									</div>
								</div>
								<div className="">
									<h3 className="text-lg font-medium text-gray-900">
										{`Universal Vocational Institute
										of America (UVIA)`}
									</h3>
									<p className="mt-2 text-base text-gray-500">
										{`We believe that education is
										the cornerstone of personal
										and professional development.
										Through UVIA, we offer a range
										of vocational training
										programs designed to equip
										individuals with the skills
										needed to excel in today's job
										market. From technology to
										healthcare and trade skills,
										our programs are tailored to
										meet the needs of our diverse
										community.`}
									</p>
								</div>
							</div>
							<div className="flex flex-col gap-2 border-l-4 border-gray-200 pl-4">
								<div className="flex-shrink-0">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-white">
										<Star className="h-6 w-6" />
									</div>
								</div>
								<div className="">
									<h3 className="text-lg font-medium text-gray-900">
										{`Economic Empowerment Programs`}
									</h3>
									<p className="mt-2 text-base text-gray-500">
										{`BEIC is committed to fostering
										economic growth and
										generational wealth within our
										communities. Our economic
										empowerment initiatives
										provide critical support
										services, including business
										mentorship, financial literacy
										workshops, and investment
										opportunities, ensuring that
										our community members have the
										tools and resources they need
										to succeed.`}
									</p>
								</div>
							</div>
							<div className="flex flex-col gap-2 border-l-4 border-gray-200 pl-4">
								<div className="flex-shrink-0">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-white">
										<Trash2 className="h-6 w-6" />
									</div>
								</div>
								<div className="">
									<h3 className="text-lg font-medium text-gray-900">
										{`Help Keep Baltimore Clean
										Community Improvement Group`}
									</h3>
									<p className="mt-2 text-base text-gray-500">
										{`A clean and vibrant community
										is essential for a high
										quality of life. Our Help Keep
										Baltimore Clean initiative
										mobilizes volunteers and
										resources to tackle litter,
										promote recycling, and enhance
										public spaces. Together, we
										strive to create a cleaner,
										healthier, and more beautiful
										Baltimore.`}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="left-0 right-0 top-0 p-4">
						<p className="pb-4 text-base text-gray-500">
							{`We believe that education is the
									cornerstone of personal and
									professional development. Through
									UVIA, we offer a range of
									vocational training programs
									designed to equip individuals with
									the skills needed to excel in
									today's job market. From technology
									to healthcare and trade skills, our
									programs are tailored to meet the
									needs of our diverse community.`}
						</p>
						<span className="text-lg font-medium text-black">
							{`"Together, we can build a brighter
									future for all."`}
						</span>

						{/* <div className="relative h-full w-full">
							<Image
								width={"1000"}
								height={"1000"}
								className="h-full w-full rounded-lg"
								src="/images/home/academic-excellence.png"
								alt="Educational building"
							/>
							<div className="absolute bottom-0 left-0 right-0 bg-[#6951DC] p-2 text-center italic text-white">
								<p className="flex items-center justify-center gap-3 text-sm font-medium">
									<LocationIcon
										className="hidden md:inline"
										width="20"
										height="20"
									/>
									{`1701 East North Ave., Baltimore,
									Maryland`}
								</p>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
}
