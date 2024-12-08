import AcademicExcellence from "@/components/home/AcademicExcellence";
import FeaturedPrograms from "@/components/home/FeaturedPrograms";
import HeroSection from "@/components/home/HeroSection";
import { GetInvolvedComponent } from "@/components/home/get-involved";

export default function Home() {
	return (
		<div className="">
			<HeroSection />
			<AcademicExcellence />
			<FeaturedPrograms />
			{/* <TestimonialGridComponent /> */}
			{/* <LandingPageComponent /> */}
			<GetInvolvedComponent />
		</div>
	);
}
