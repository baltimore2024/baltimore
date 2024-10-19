import { Button } from '@/components/ui/button';
import {
	Briefcase,
	GraduationCap,
	Heart,
	Home,
	Leaf,
	Vote,
} from 'lucide-react';

const initiatives = [
	{
		title: 'Community Development Initiative',
		description:
			'This initiative focuses on revitalizing neighborhoods through infrastructure improvements, community engagement, and sustainable development. Key activities include:',
		icon: Home,
		subItems: [
			{
				title: 'Urban Renewal Projects',
				description:
					'Revitalizing urban areas through infrastructure improvements and housing initiatives.',
			},
			{
				title: 'Community Engagement',
				description:
					'Organizing town halls, workshops, and forums to involve residents in decision-making.',
			},
			{
				title: 'Sustainable Development',
				description:
					'Promoting green initiatives, energy efficiency, and eco-friendly community projects.',
			},
		],
	},
	{
		title: 'Small Business Support Initiative',
		description:
			'We aim to boost local economies by supporting small businesses and entrepreneurs. This initiative provides:',
		icon: Briefcase,
		subItems: [
			{
				title: 'Microloans and Grants',
				description:
					'Financial assistance to help start or expand small businesses.',
			},
			{
				title: 'Business Development Workshops',
				description:
					'Training sessions on business planning, financial management, and marketing strategies.',
			},
			{
				title: 'Networking Opportunities',
				description:
					'Events to connect entrepreneurs, mentors, and potential investors.',
			},
		],
	},
	{
		title: 'Educational Empowerment Initiative',
		description:
			'Education is a key driver of economic growth. Our educational empowerment initiative includes:',
		icon: GraduationCap,
		subItems: [
			{
				title: 'Scholarship Programs',
				description:
					'Financial support for students pursuing higher education.',
			},
			{
				title: 'After-School Programs',
				description:
					'Offering tutoring, mentorship, and enrichment activities for K-12 students.',
			},
			{
				title: 'Adult Education',
				description:
					'GED preparation, literacy classes, and continuing education opportunities for adults.',
			},
		],
	},
	{
		title: 'Health and Wellness Initiative',
		description:
			'This initiative aims to improve the overall health and well-being of our community members. Key components include:',
		icon: Heart,
		subItems: [
			{
				title: 'Community Health Fairs',
				description:
					'Free health screenings, fitness demonstrations, and wellness resources.',
			},
			{
				title: 'Mental Health Support',
				description:
					'Access to counseling, support groups, and mental health awareness programs.',
			},
			{
				title: 'Nutrition Programs',
				description:
					'Education on healthy eating, cooking classes, and access to fresh produce through community gardens.',
			},
		],
	},
	{
		title: 'Environmental Stewardship Initiative',
		description:
			'We are committed to preserving and enhancing our local environment. This initiative includes:',
		icon: Leaf,
		subItems: [
			{
				title: 'Tree Planting Campaigns',
				description:
					'Increasing urban green spaces by planting trees and creating parks.',
			},
			{
				title: 'Clean Water Projects',
				description:
					'Initiatives to improve water quality through conservation and infrastructure improvements.',
			},
			{
				title: 'Sustainable Practices Education',
				description:
					'Workshops on recycling, composting, and reducing carbon footprints.',
			},
		],
	},
	{
		title: 'Civic Engagement Initiative',
		description:
			'Encouraging active participation in civic life is essential for a thriving community. This initiative includes:',
		icon: Vote,
		subItems: [
			{
				title: 'Voter Registration Drives',
				description:
					'Campaigns to increase voter registration and participation in local elections.',
			},
			{
				title: 'Advocacy Training',
				description:
					'Workshops on effective community advocacy and grassroots organizing.',
			},
			{
				title: 'Civic Education',
				description:
					'Programs on local government processes and how to get involved in community decision-making.',
			},
		],
	},
];

export default function InitiativesPage() {
	return (
		<div className='bg-white min-h-screen'>
			<header className='bg-purple-600 text-white py-12 px-4'>
				<div className='max-w-6xl mx-auto'>
					<h1 className='text-4xl font-bold mb-4'>
						Initiatives
					</h1>
					<p className='text-xl'>
						At the Black Economic Improvement Corporation
						(BEIC), our initiatives are designed to address
						the immediate needs of our community while
						fostering long-term sustainable development. Each
						initiative aligns with our mission to empower
						individuals, promote economic growth, and improve
						the living environment. Here are some of our key
						initiatives:
					</p>
				</div>
			</header>
			<main className='max-w-6xl mx-auto py-12 px-4'>
				<div className='space-y-16'>
					{initiatives.map((initiative, index) => (
						<div
							key={index}
							className='border-b border-gray-200 pb-16 last:border-b-0'
						>
							<div className='flex items-start'>
								<initiative.icon className='w-12 h-12 text-purple-600 mr-6 flex-shrink-0' />
								<div>
									<h2 className='text-3xl font-bold mb-4'>
										{initiative.title}
									</h2>
									<p className='text-xl text-gray-600 mb-6'>
										{initiative.description}
									</p>
									<div className='grid md:grid-cols-3 gap-6'>
										{initiative.subItems.map(
											(item, subIndex) => (
												<div
													key={subIndex}
													className='bg-gray-100 p-6 rounded-lg'
												>
													<h3 className='text-xl font-semibold mb-2'>
														{
															item.title
														}
													</h3>
													<p className='text-gray-600'>
														{
															item.description
														}
													</p>
												</div>
											)
										)}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</main>
			<footer className='bg-purple-600 text-white py-12 px-4'>
				<div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center'>
					<div className='mb-6 md:mb-0'>
						<h3 className='text-2xl font-bold mb-2'>
							Join us in our initiatives
						</h3>
						<p className='max-w-md'>
							These initiatives reflect our commitment to
							creating a holistic and inclusive approach to
							community development. By addressing various
							aspects of community life, we aim to create a
							supportive and thriving environment where
							everyone has the opportunity to succeed.
						</p>
					</div>
					<Button className='bg-white text-purple-600 hover:bg-gray-100'>
						Let's get in touch
					</Button>
				</div>
			</footer>
		</div>
	);
}
