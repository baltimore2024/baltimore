import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';

export default function FeaturedPrograms() {
	return (
		<div className='bg-gray-100 py-16 px-8'>
			<h2 className='text-3xl font-bold mb-8 text-center'>
				Featured Programs
			</h2>
			<div className='space-y-8'>
				<div
					className='relative overflow-hidden rounded-lg gradient-bg py-16 px-8'
					style={
						{
							'--gradient-start': '#8B5CF6',
							'--gradient-end': '#22D3EE',
						} as React.CSSProperties
					}
				>
					<div className='noise-overlay'></div>
					<div className='relative z-10 max-w-4xl mx-auto text-white'>
						<h3 className='text-2xl font-bold mb-4'>
							Universal Vocational Institute of America
							(UVIA)
						</h3>
						<p className='mb-6'>
							At BEIC, we are proud to offer a variety of
							programs designed to uplift and empower our
							community. Our initiatives focus on
							education, economic development, and
							community improvement, ensuring a holistic
							approach to building a brighter future.
						</p>
						<Button
							variant='outline'
							className='text-white border-white hover:bg-white hover:text-purple-600'
						>
							Read more
						</Button>
					</div>
				</div>
				<div className='bg-black text-white py-16 px-8 text-center'>
					<PlayCircle className='mx-auto mb-4 w-16 h-16' />
					<h3 className='text-2xl font-bold mb-2'>UVIA</h3>
					<p>A walkthrough of what we have in-store at UVIA</p>
				</div>
				<div className='grid md:grid-cols-2 gap-8'>
					<div
						className='relative overflow-hidden rounded-lg gradient-bg p-8'
						style={
							{
								'--gradient-start': '#22C55E',
								'--gradient-end': '#3B82F6',
							} as React.CSSProperties
						}
					>
						<div className='noise-overlay'></div>
						<div className='relative z-10 text-white'>
							<h3 className='text-2xl font-bold mb-4'>
								Economic Empowerment Programs
							</h3>
							<p className='mb-6'>
								Economic independence is crucial for
								personal and community growth. Our
								economic empowerment initiatives include
								business mentorship, financial literacy
								workshops, and investment opportunities.
							</p>
							<Button
								variant='outline'
								className='text-white border-white hover:bg-white hover:text-green-600'
							>
								Show more
							</Button>
						</div>
					</div>
					<div
						className='relative overflow-hidden rounded-lg gradient-bg p-8'
						style={
							{
								'--gradient-start': '#4F46E5',
								'--gradient-end': '#22D3EE',
							} as React.CSSProperties
						}
					>
						<div className='noise-overlay'></div>
						<div className='relative z-10 text-white'>
							<h3 className='text-2xl font-bold mb-4'>
								Youth Empowerment and Mentorship
							</h3>
							<p className='mb-6'>
								Our youth programs aim to inspire and
								guide the next generation of leaders.
								Through mentorship, educational
								workshops, and community service
								projects, we provide young people with
								the tools and support they need to
								achieve their full potential.
							</p>
							<Button
								variant='outline'
								className='text-white border-white hover:bg-white hover:text-blue-600'
							>
								Show more
							</Button>
						</div>
					</div>
				</div>
				<div
					className='relative overflow-hidden rounded-lg gradient-bg px-8 py-16'
					style={
						{
							'--gradient-start': '#22D3EE',
							'--gradient-end': '#22C55E',
						} as React.CSSProperties
					}
				>
					<div className='noise-overlay'></div>
					<div className='relative z-10 max-w-4xl mx-auto text-white'>
						<h3 className='text-2xl font-bold mb-4'>
							Help Keep Baltimore Clean Community
							Improvement Group
						</h3>
						<p className='mb-6'>
							A clean environment is essential for the
							well-being of our community. Our Help Keep
							Baltimore Clean initiative engages volunteers
							and partners in neighborhood clean-ups,
							recycling programs, and public awareness
							campaigns.
						</p>
						<Button
							variant='outline'
							className='text-white border-white hover:bg-white hover:text-teal-600'
						>
							Read more
						</Button>
					</div>
				</div>
				<div className='relative rounded-lg overflow-hidden'>
					<img
						src='/placeholder.svg'
						alt='Baltimore skyline'
						className='w-full h-[400px] object-cover'
					/>
					<div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
						<PlayCircle className='w-16 h-16 text-white' />
					</div>
					<div className='absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-75 text-white'>
						<h3 className='text-2xl font-bold mb-2'>
							Cleaning up baltimore
						</h3>
						<p>
							Watch volunteers & partners clean up the
							community
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
