import AcademicExcellence from '@/components/home/AcademicExcellence';
import CommunityTestimonials from '@/components/home/CommunityTestimonials';
import DiscoverDifference from '@/components/home/DiscoverDifference';
import FeaturedPrograms from '@/components/home/FeaturedPrograms';
import HeroSection from '@/components/home/HeroSection';
import Impact from '@/components/home/Impact';
import { TestimonialGridComponent } from '@/components/home/testimonial-grid';

export default function Home() {
	return (
		<div className=''>
			<HeroSection />
			<AcademicExcellence />
			<FeaturedPrograms />
			<TestimonialGridComponent/>
			{/* <CommunityTestimonials /> */}
			<DiscoverDifference />
			<Impact />
		</div>
	);
}
