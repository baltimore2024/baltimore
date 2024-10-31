import LeadershipTeam from "@/components/about-us/leadership";
import MissionLayout from "@/components/about-us/our-mission";
import OurStory from "@/components/about-us/our-story";
import OurValues from "@/components/about-us/our-value";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Us",
};

export default function OurMissionPage() {
	return (
		<div className="min-h-screen bg-gray-50 pt-[60px]">
			<header className="container mx-auto grid w-full gap-4 p-4 px-4 py-8 md:grid-cols-2">
				<h1 className="text-3xl font-bold text-gray-900">
					Our mission
				</h1>
				<p className="mb-8 text-xl text-gray-700">
					At the Black Economic Improvement Corporation (BEIC), our
					mission is to empower individuals and communities through
					education, economic development, and community-building
					initiatives. We are dedicated to creating opportunities for
					sustainable growth, fostering entrepreneurship, and
					providing the tools and resources necessary for individuals
					to achieve financial independence, gain valuable skills, and
					thrive in today's economy.
				</p>
			</header>
			<div className="md:grid-cols- mb-12 grid grid-cols-1 gap-6">
				<div className="h-auto bg-[url('/public/our-mission/our1.png')] bg-cover bg-center">
					<MissionLayout />
				</div>
				<div className="">
					<OurStory />
				</div>
				<div className="">
					<LeadershipTeam />
				</div>
				<div className="container mx-auto px-4 py-8">
					<p>
						Our leadership team is committed to making a positive
						impact and driving the success of BEIC. Their collective
						efforts and dedication ensure that we continue to
						empower individuals and transform communities.
					</p>
				</div>
				<div className="">
					<OurValues />
				</div>
				<div className="container mx-auto px-4 py-8">
					<p className="">
						By adhering to these values, we aim to make a meaningful
						and lasting difference in the lives of those we serve.
						Join us in our commitment to these principles and be
						part of a community dedicated to empowerment, growth,
						and positive change.
					</p>
					<p>Together, we can build a brighter future.</p>
				</div>
			</div>
		</div>
	);
}
