import {
	Briefcase,
	GraduationCap,
	Heart,
	Home,
	Recycle,
	Users,
} from 'lucide-react';
import Image from 'next/image';

export default function Impact() {
	const impactItems = [
		{ icon: GraduationCap, text: 'Educational Programs' },
		{ icon: Briefcase, text: 'Job Placement' },
		{ icon: Home, text: 'Community Development' },
		{ icon: Recycle, text: 'Environmental Initiatives' },
		{ icon: Users, text: 'Youth Mentorship' },
		{ icon: Heart, text: 'Health & Wellness' },
	];

	return (
		<section className='py-16 px-8'>
			<div className='max-w-6xl mx-auto'>
				<div className='grid md:grid-cols-2 gap-8 items-center'>
					<div>
						<h2 className='text-3xl font-bold mb-8'>
							Our Impact
						</h2>
						<div className='grid grid-cols-2 gap-6'>
							{impactItems.map((item, index) => (
								<div
									key={index}
									className='flex items-center'
								>
									<item.icon className='w-8 h-8 text-purple-600 mr-4' />
									<span>{item.text}</span>
								</div>
							))}
						</div>
					</div>
					<div>
						<Image
							src='/placeholder.svg'
							alt='BEIC Impact'
							width={600}
							height={400}
							className='rounded-lg shadow-lg'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
