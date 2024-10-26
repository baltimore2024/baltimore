import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
	Laptop,
	Stethoscope,
	Wrench,
	Briefcase,
	Calculator,
	TrendingUp,
	Users,
	Lightbulb,
	Recycle,
	Megaphone,
	Heart,
	Dumbbell,
	Clipboard,
	Brain,
} from 'lucide-react';
import Image from 'next/image';


const programs = [
	{
		title: 'Universal Vocational Institute of America (UVIA)',
		description:
			'Empowering individuals through education is at the heart of our mission. UVIA offers a wide range of vocational training programs that provide practical skills and certifications in high-demand fields such as technology, healthcare, and skilled trades. Our programs include:',
		gradient: '/images/program/section1.png',
		items: [
			{
				title: 'Technology Training',
				icon: Laptop,
				items: [
					'Web Development',
					'Digital Literacy',
					'Information Technology',
				],
			},
			{
				title: 'Healthcare programs',
				icon: Stethoscope,
				items: [
					'Nursing Assistant',
					'Medical Administration',
					'Health Informatics',
				],
			},
			{
				title: 'Trade skills',
				icon: Wrench,
				items: ['Electrical work', 'Plumbing', 'HVAC maintenance'],
			},
			{
				title: 'Career services',
				icon: Briefcase,
				items: [
					'Job placement assistance',
					'Resume writing workshops',
					'Interview preparation',
				],
			},
		],
	},
	{
		title: 'Economic Empowerment Programs',
		description:
			'Economic independence is crucial for personal and community growth. Our economic empowerment initiatives provide essential support services, including:',
		gradient: '/images/program/section2.png',
		items: [
			{
				title: 'Business Mentorship',
				icon: Users,
				items: [
					'One-on-one guidance',
					'Business plan development',
					'Growth strategies',
				],
			},
			{
				title: 'Financial Literacy Workshops',
				icon: Calculator,
				items: [
					'Budgeting basics',
					'Investment education',
					'Credit management',
				],
			},
			{
				title: 'Investment Opportunities',
				icon: TrendingUp,
				items: [
					'Community investment funds',
					'Small business loans',
					'Micro-financing options',
				],
			},
			{
				title: 'Entrepreneurship Programs',
				icon: Lightbulb,
				items: [
					'Startup incubators',
					'Networking events',
					'Resource access',
				],
			},
		],
	},
	{
		title: 'Help Keep Baltimore Clean Community Improvement Group',
		description:
			'A clean and vibrant community is essential for the well-being of its residents. Our community improvement initiative focuses on environmental stewardship and community beautification through:',
		gradient: '/images/program/section3.png',
		items: [
			{
				title: 'Neighborhood Clean-Ups',
				icon: Recycle,
				items: [
					'Organized events to clean up litter and debris',
					'Graffiti removal',
					'Green space maintenance',
				],
			},
			{
				title: 'Recycling Programs',
				icon: Recycle,
				items: [
					'Promoting recycling and sustainable waste management',
					'Education on proper recycling practices',
				],
			},
			{
				title: 'Public Awareness Campaigns',
				icon: Megaphone,
				items: [
					'Educating the community on the importance of cleanliness',
					'Anti-littering initiatives',
				],
			},
			{
				title: 'Volunteer Opportunities',
				icon: Users,
				items: [
					'Engaging community members in improvement projects',
					'Youth volunteer programs',
				],
			},
		],
	},
	{
		title: 'Youth Empowerment and Mentorship',
		description:
			'Our youth programs aim to inspire and guide the next generation of leaders. We offer:',
		gradient: '/images/program/section4.png',
		items: [
			{
				title: 'Mentorship Programs',
				icon: Users,
				items: [
					'One-on-one mentoring',
					'Group mentoring sessions',
					'Career guidance',
				],
			},
			{
				title: 'Educational Workshops',
				icon: Laptop,
				items: [
					'Study skills and time management',
					'College preparation',
					'Financial literacy for youth',
				],
			},
			{
				title: 'Community Service Projects',
				icon: Heart,
				items: [
					'Engaging youth in local volunteer opportunities',
					'Leadership development through service',
				],
			},
		],
	},
	{
		title: 'Community Health and Wellness',
		description:
			'Promoting health and wellness is a vital component of our work. We provide programs and resources that address both physical and mental health, including:',
		gradient: '/images/program/section5.png',
		items: [
			{
				title: 'Fitness Classes',
				icon: Dumbbell,
				items: [
					'Community exercise programs',
					'Nutrition education',
				],
			},
			{
				title: 'Health Screenings',
				icon: Clipboard,
				items: [
					'Regular health check-ups',
					'Early detection initiatives',
				],
			},
			{
				title: 'Wellness Workshops',
				icon: Heart,
				items: ['Stress management', 'Healthy lifestyle choices'],
			},
			{
				title: 'Mental Health Resources',
				icon: Brain,
				items: [
					'Counseling services',
					'Support groups',
					'Mental health awareness programs',
				],
			},
		],
	},
];

export default function ProgramsPage() {
	return (
		<div className='bg-gray-50 min-h-screen'>
			<header className='bg-white shadow'>
				<div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
					<h1 className='text-3xl font-bold text-gray-900'>
						Programs we offer
					</h1>
				</div>
			</header>
			<main className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
				<div className='px-4 py-6 sm:px-0'>
					<p className='text-xl text-gray-700 mb-8'>
						At the Black Economic Improvement Corporation
						(BEIC), we offer a range of programs designed to
						empower individuals and uplift communities through
						education, economic development, and community
						improvement. Our comprehensive programs are
						tailored to meet the diverse needs of our
						community members.
					</p>

					{programs.map((program, index) => (
						<section
							key={index}
							className='relative py-16'
							
						>
							<Image
							layout='fill'
							alt='background'
							objectFit='cover'
							src={program.gradient}
							className='absolute inset-0 z-0'
							/>
							<div className="mx-auto px-4 relative z-10">
							<h2 className='text-3xl font-bold mb-4 text-white'>
								{program.title}
							</h2>
							<p className='text-xl font-normal text-white mb-6'>
								{program.description}
							</p>
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
								{program.items.map(
									(item, itemIndex) => (
										<Card
											key={itemIndex}
											className='bg-white'
										>
											<CardContent className='p-6'>
												<item.icon className='w-12 h-12 text-purple-600 mb-4' />
												<h3 className='text-xl font-bold mb-2'>
													{item.title}
												</h3>
												<ul className='list-disc list-inside'>
													{item.items.map(
														(
															subItem,
															subIndex
														) => (
															<li
																key={
																	subIndex
																}
																className='text-gray-600'
															>
																{
																	subItem
																}
															</li>
														)
													)}
												</ul>
											</CardContent>
										</Card>
									)
								)}
							</div>
							</div>
						</section>
					))}
				</div>
			</main>
			<footer className='bg-purple-600 text-white py-12'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						<div className='col-span-2'>
							<h3 className='text-2xl font-bold mb-4'>
								Join us in our mission to empower &
								uplift our community.
							</h3>
							<p className='mb-4'>
								Explore our website to learn more about
								these programs and how you can get
								involved. Whether you're looking to gain
								new skills, support economic
								development, improve your community, or
								promote health and wellness, BEIC has a
								program for you.
							</p>
						</div>
						<div className='flex flex-col justify-center items-start'>
							<Button className='bg-white text-purple-600 hover:bg-gray-100 mb-4'>
								Let's get in touch
							</Button>
							<p className='text-sm'>
								Have questions or want to get involved?
								Reach out to us through our contact
								page, and a member of our team will be
								happy to assist you.
							</p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
