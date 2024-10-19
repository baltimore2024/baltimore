import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function NewsPage() {
	return (
		<div className='min-h-screen flex flex-col'>
			<main className='flex-grow p-8'>
				<h1 className='text-4xl font-bold text-center mb-4'>
					News
				</h1>
				<p className='text-center text-gray-600 mb-8 max-w-2xl mx-auto'>
					Stay up-to-date with the latest news and updates from
					the Black Economic Improvement Corporation (BEIC).
					Here, you'll find information on our recent activities,
					upcoming events, and success stories from our
					community.
				</p>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
					{[
						{
							title: 'BEIC Launches New Vocational Training Program',
							image: '/placeholder.svg',
							description:
								'We are excited to announce the launch of a new vocational training program at the Baltimore Economic Improvement Corporation (BEIC). This program aims to equip participants with emerging technology skills, including cybersecurity and data analytics, to meet the growing demand for skilled workers in these fields.',
							date: '3 days ago',
						},
						{
							title: 'Help Keep Baltimore Clean Kicks Off Summer Clean-Up Campaign',
							image: '/placeholder.svg',
							description:
								"Our Help Keep Baltimore Clean initiative is kicking off its summer clean-up campaign with a series of community events. Join us in our efforts to beautify our city's streets, parks, and public spaces. Join us in making Baltimore a cleaner and more beautiful place to live!",
							date: '5 days ago',
						},
						{
							title: 'BEIC Receives Grant for Economic Empowerment Initiatives',
							image: '/placeholder.svg',
							description:
								'We are thrilled to share that BEIC has received a substantial grant from the State Government of Maryland to support our economic empowerment initiatives. This funding will allow us to expand our financial literacy workshops, business development programs, and community outreach efforts.',
							date: '1 week ago',
						},
						{
							title: 'Community Health Fair a Huge Success',
							image: '/placeholder.svg',
							description:
								"Our recent Community Health Fair was a resounding success! With over 500 attendees receiving free health screenings, wellness advice, and fitness demonstrations, we're proud to have made a positive impact on our community's health and well-being.",
							date: '2 weeks ago',
						},
						{
							title: 'Youth Empowerment Program Celebrates Graduates',
							image: '/placeholder.svg',
							description:
								'Congratulations to the latest graduates of our Youth Empowerment Program! These young individuals have completed mentoring sessions, leadership training, and community service projects. We are proud of their achievements and excited to see their continued growth.',
							date: '3 weeks ago',
						},
					].map((article, index) => (
						<Card key={index}>
							<Image
								src={article.image}
								alt={article.title}
								width={300}
								height={200}
								className='w-full object-cover'
							/>
							<CardContent className='p-4'>
								<h3 className='font-bold mb-2'>
									{article.title}
								</h3>
								<p className='text-sm text-gray-600 mb-2'>
									{article.description}
								</p>
								<p className='text-xs text-gray-400'>
									{article.date}
								</p>
							</CardContent>
						</Card>
					))}
				</div>

				<h2 className='text-3xl font-bold mb-8'>Upcoming Events</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
					{[
						{
							title: 'Community Clean-Up Day',
							image: '/placeholder.svg',
							description:
								'Join us for a day of community clean-up and beautification. Together, we can make our neighborhood cleaner and greener.',
						},
						{
							title: 'Vocational Training Information Session',
							image: '/placeholder.svg',
							description:
								'Discover our vocational training programs and learn how they can help you achieve your career goals.',
						},
						{
							title: 'Financial Literacy Workshop',
							image: '/placeholder.svg',
							description:
								'Learn essential skills for managing your finances, including budgeting, saving, and investing. Open to all community members.',
						},
						{
							title: 'Health and Wellness Expo',
							image: '/placeholder.svg',
							description:
								'Explore a variety of health and wellness resources, including fitness demos, nutrition advice, and mental health support.',
						},
						{
							title: 'Business Networking Event',
							image: '/placeholder.svg',
							description:
								"Connect with local entrepreneurs, business owners, and professionals. A great opportunity to grow your network and learn from others' experiences.",
						},
					].map((event, index) => (
						<Card key={index}>
							<Image
								src={event.image}
								alt={event.title}
								width={300}
								height={150}
								className='w-full object-cover'
							/>
							<CardContent className='p-4'>
								<h3 className='font-bold mb-2'>
									{event.title}
								</h3>
								<p className='text-sm text-gray-600'>
									{event.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>

				<h2 className='text-3xl font-bold mb-8'>Success Stories</h2>
				<p className='text-center text-gray-600 mb-8 max-w-2xl mx-auto'>
					Stay connected with us for more news, events, and
					stories that highlight the impact of BEIC's work.
					Together, we can continue to empower and uplift our
					community.
				</p>
				<div className='space-y-4 mb-16'>
					{[
						{
							title: 'From Struggle to Success',
							name: 'Marcus J.',
							story: "Marcus J., a recent graduate of BEIC's IT program, shares his journey from unemployment to a thriving career in tech. Through perseverance and the support he received from BEIC, Marcus now enjoys a well-paying job and has built a brighter future.",
						},
						{
							title: 'Entrepreneurial Triumph',
							name: 'Keisha L.',
							story: "Keisha L. attended our financial literacy workshops and received business mentorship through BEIC. Today, she's the proud owner of a successful catering company in our community. Read about her inspiring journey to entrepreneurial success.",
						},
						{
							title: 'Community Impact',
							name: 'David M.',
							story: "David M. utilized BEIC's resources to start a youth mentorship program in his neighborhood. His initiative has brought positive change to his neighborhood and strengthened community bonds.",
						},
					].map((story, index) => (
						<Card key={index}>
							<CardContent className='p-4'>
								<h3 className='font-bold mb-2'>
									{story.title}
								</h3>
								<p className='font-medium mb-1'>
									{story.name}
								</p>
								<p className='text-sm text-gray-600'>
									{story.story}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</main>
		</div>
	);
}
