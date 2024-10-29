import AcademicExcellence from "@/components/home/AcademicExcellence";
import FeaturedPrograms from "@/components/home/FeaturedPrograms";
import HeroSection from "@/components/home/HeroSection";
import { GetInvolvedComponent } from "@/components/home/get-involved";
import { LandingPageComponent } from "@/components/home/landing-page";
import { TestimonialGridComponent } from "@/components/home/testimonial-grid";

export default function Home() {
	return (
		<div className="">
			<HeroSection />
			<AcademicExcellence />
			<FeaturedPrograms />
			<TestimonialGridComponent />
			<LandingPageComponent />
			<GetInvolvedComponent />
		</div>
	);
}
