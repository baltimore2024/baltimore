import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

const missionAreas = [
	{
		title: 'Economic Empowerment',
		description:
			'Fostering financial literacy, entrepreneurship, and sustainable economic growth within our community.',
		gradient: 'from-yellow-400 to-orange-500',
	},
	{
		title: 'Vocational Education',
		description:
			'Providing skill-based training and certifications to enhance employability and career advancement.',
		gradient: 'from-purple-500 to-indigo-600',
	},
	{
		title: 'Community Development',
		description:
			'Revitalizing neighborhoods, promoting civic engagement, and building stronger, more resilient communities.',
		gradient: 'from-red-500 to-pink-500',
	},
	{
		title: 'Holistic Approach',
		description:
			'Addressing interconnected challenges through comprehensive programs and partnerships for lasting impact.',
		gradient: 'from-blue-400 to-cyan-500',
	},
];

const timeline = [
	{
		year: '2010',
		title: 'Summary of event',
		description:
			'The Black Economic Improvement Corporation (BEIC) was founded with a vision to address economic disparities and empower communities through education, vocational training, and sustainable development initiatives. Our founders recognized the need for a holistic approach to community empowerment and set out to create an organization that would make a lasting impact.',
	},
	{
		year: '2012',
		title: 'Early Beginnings',
		description:
			'BEIC launched its first vocational training program, focusing on in-demand skills in technology and healthcare. We also established partnerships with local businesses to provide internship and job placement opportunities for our program graduates.',
	},
	{
		year: '2014',
		title: 'Building Foundations',
		description:
			'Expanded our programs to include financial literacy workshops and small business mentorship. We also initiated our first community development project, working with local residents to revitalize a neighborhood park and community center.',
	},
	{
		year: '2016',
		title: 'Expanding Our Reach',
		description:
			"BEIC's impact began to grow as we expanded our programs to multiple cities. We also launched our youth mentorship initiative, focusing on providing guidance and support to young people in underserved communities.",
	},
	{
		year: '2018',
		title: 'Adapting and Innovating',
		description:
			'Recognizing the changing needs of our community, we introduced new programs in digital literacy and green technology. We also strengthened our partnerships with local government and other non-profits to create a more comprehensive support network.',
	},
	{
		year: '2020',
		title: 'Creating Impact',
		description:
			'BEIC celebrated a decade of service and achievement. We conducted a comprehensive impact assessment, which showed significant improvements in employment rates, small business success, and overall community well-being in the areas we serve.',
	},
	{
		year: '2024',
		title: 'Looking Forward',
		description:
			"As we look to the future, we're committed to further expanding our reach and impact. We're developing new programs in emerging fields, strengthening our advocacy efforts, and working towards creating lasting, systemic change in the communities we serve.",
	},
];

const leadershipTeam = [
	{
		name: 'Tamika J. Hill',
		title: 'Founder & CEO',
		bio: "With over 20 years of experience in community development and social entrepreneurship, Tamika has been the driving force behind BEIC's mission and growth. Her visionary leadership has been instrumental in shaping BEIC into a catalyst for positive change in underserved communities.",
		image: '/placeholder.svg?height=100&width=100',
	},
	{
		name: 'Marcus Thompson',
		title: 'Vice President and Co-Founder',
		bio: "A former educator turned social innovator, Marcus brings a wealth of experience in program development and strategic partnerships. His passion for education and community empowerment has been crucial in developing BEIC's impactful programs.",
		image: '/placeholder.svg?height=100&width=100',
	},
	{
		name: 'Jasmine Agard',
		title: 'Director of Economic Empowerment Programs',
		bio: "With a background in finance and community organizing, Jasmine leads BEIC's initiatives in financial literacy, entrepreneurship support, and economic development. Her innovative approaches have helped countless individuals and small businesses thrive.",
		image: '/placeholder.svg?height=100&width=100',
	},
	{
		name: 'Terrence Stevens',
		title: 'Director of Vocational Education',
		bio: "Terrence's expertise in workforce development and vocational training has been instrumental in shaping BEIC's educational programs. His focus on aligning skills training with industry needs has resulted in high job placement rates for program graduates.",
		image: '/placeholder.svg?height=100&width=100',
	},
];

const values = [
	{
		title: 'Empowerment',
		description:
			'We believe in equipping individuals with the knowledge, skills, and resources to take control of their economic futures and create positive change in their communities.',
		icon: '💪',
	},
	{
		title: 'Integrity',
		description:
			'We uphold the highest standards of honesty, transparency, and ethical behavior in all our operations and interactions with our community and partners.',
		icon: '🤝',
	},
	{
		title: 'Collaboration',
		description:
			'We foster partnerships and work together with community members, organizations, and stakeholders to achieve our shared goals and create lasting impact.',
		icon: '🤲',
	},
	{
		title: 'Inclusivity',
		description:
			'We are committed to creating an inclusive environment that welcomes and respects diversity in all its forms, ensuring that our programs and services are accessible to all.',
		icon: '🌈',
	},
	{
		title: 'Innovation',
		description:
			'We continuously seek new and creative solutions to address the evolving challenges faced by our communities, embracing change and adapting our strategies as needed.',
		icon: '💡',
	},
	{
		title: 'Sustainability',
		description:
			'We strive to create long-lasting, sustainable change that will continue to benefit our communities for generations to come, focusing on both immediate impact and long-term growth.',
		icon: '🌱',
	},
	{
		title: 'Community',
		description:
			'We place the needs and aspirations of our community at the heart of everything we do, working tirelessly to build stronger, more resilient neighborhoods.',
		icon: '🏘️',
	},
	{
		title: 'Excellence',
		description:
			'We are committed to delivering high-quality programs and services, continuously improving our methods and striving for excellence in all aspects of our work.',
		icon: '🏆',
	},
];

export default function OurMissionPage() {
	return (
		<div className='bg-gray-50 min-h-screen'>
			<header className='bg-white'>
				<div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
					<h1 className='text-3xl font-bold text-gray-900'>
						Our mission
					</h1>
				</div>
			</header>
			<main className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
				<div className='px-4 py-6 sm:px-0'>
					<p className='text-xl text-gray-700 mb-8'>
						At the Black Economic Improvement Corporation
						(BEIC), our mission is to empower individuals and
						communities through education, economic
						development, and community-building initiatives.
						We are dedicated to creating opportunities for
						sustainable growth, fostering entrepreneurship,
						and providing the tools and resources necessary
						for individuals to achieve financial independence,
						gain valuable skills, and thrive in today's
						economy.
					</p>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'>
						{missionAreas.map((area, index) => (
							<Card
								key={index}
								className={`overflow-hidden`}
							>
								<CardContent
									className={`p-6 bg-gradient-to-br ${area.gradient} text-white h-full`}
								>
									<h3 className='text-2xl font-bold mb-2'>
										{area.title}
									</h3>
									<p>{area.description}</p>
								</CardContent>
							</Card>
						))}
					</div>

					<section className='mb-12'>
						<h2 className='text-3xl font-bold mb-6'>
							OUR STORY
						</h2>
						<div className='space-y-8'>
							{timeline.map((event, index) => (
								<div
									key={index}
									className='flex'
								>
									<div className='flex flex-col items-center mr-4'>
										<div className='w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold'>
											{event.year}
										</div>
										{index !==
											timeline.length - 1 && (
											<div className='h-full w-0.5 bg-purple-600 mt-2'></div>
										)}
									</div>
									<div>
										<h3 className='text-xl font-bold mb-2'>
											{event.title}
										</h3>
										<p className='text-gray-600'>
											{event.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</section>

					<section className='mb-12'>
						<h2 className='text-3xl font-bold mb-6'>
							LEADERSHIP TEAM
						</h2>
						<p className='text-xl text-gray-700 mb-8'>
							At the Black Economic Improvement Corporation
							(BEIC), our leadership team is composed of
							dedicated professionals who are passionate
							about empowering communities and driving
							positive change. With diverse backgrounds and
							expertise, our team is committed to guiding
							BEIC towards achieving its mission and making
							a lasting impact on the lives of those we
							serve.
						</p>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
							{leadershipTeam.map((member, index) => (
								<Card key={index}>
									<CardContent className='p-6 flex items-start space-x-4'>
										<Image
											src={member.image}
											alt={member.name}
											width={100}
											height={100}
											className='rounded-full'
										/>
										<div>
											<h3 className='text-xl font-bold'>
												{member.name}
											</h3>
											<p className='text-purple-600 mb-2'>
												{member.title}
											</p>
											<p className='text-gray-600'>
												{member.bio}
											</p>
											<div className='mt-4 flex space-x-2'>
												<Facebook className='w-5 h-5 text-gray-400 hover:text-purple-600 cursor-pointer' />
												<Twitter className='w-5 h-5 text-gray-400 hover:text-purple-600 cursor-pointer' />
												<Linkedin className='w-5 h-5 text-gray-400 hover:text-purple-600 cursor-pointer' />
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</section>

					<section className='mb-12'>
						<h2 className='text-3xl font-bold mb-6'>
							OUR VALUES
						</h2>
						<p className='text-xl text-gray-700 mb-8'>
							At the Black Economic Improvement Corporation
							(BEIC), our values guide everything we do.
							They are the foundation of our work and
							reflect our commitment to creating positive
							change in our communities. We are committed
							to these values as we work to empower
							individuals and uplift our communities.
						</p>
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
							{values.map((value, index) => (
								<Card key={index}>
									<CardContent className='p-6 flex flex-col items-center text-center'>
										<span className='text-4xl mb-4'>
											{value.icon}
										</span>
										<h3 className='text-xl font-bold mb-2'>
											{value.title}
										</h3>
										<p className='text-gray-600'>
											{value.description}
										</p>
									</CardContent>
								</Card>
							))}
						</div>
					</section>

					<p className='text-xl text-gray-700 mb-8'>
						At BEIC, by living these values, we aim to create
						a meaningful and lasting difference in the lives
						of those we serve, all while we continue to evolve
						and grow as an organization. We are committed to
						these principles and the positive change they
						foster in our communities.
					</p>
				</div>
			</main>
			<footer className='bg-purple-600 text-white py-12'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						<div>
							<h3 className='text-2xl font-bold mb-4'>
								Join us in our initiatives
							</h3>
							<p className='mb-4'>
								These initiatives reflect our commitment
								to creating a holistic and inclusive
								approach to community development. By
								addressing various aspects of community
								life, we aim to create a supportive and
								thriving environment where everyone has
								the opportunity to succeed.
							</p>
							<p className='font-semibold'>
								305 E. Joppa Road, Towson Maryland 21286
							</p>
						</div>
						<div>
							<p className='mb-4'>
								These initiatives reflect our commitment
								to creating a holistic and inclusive
								approach to community development. By
								addressing various aspects of community
								life, we aim to create a supportive and
								thriving environment where everyone has
								the opportunity to succeed.
							</p>
						</div>
						<div>
							<h3 className='text-2xl font-bold mb-4'>
								Let's get in touch
							</h3>
							<p className='mb-4'>
								Have questions or want to get involved?
								Reach out to us through our contact
								page, and a member of our team will be
								happy to assist you.
							</p>
							<Button className='bg-white text-purple-600 hover:bg-gray-100'>
								Contact us
							</Button>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
