import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';
import Image from 'next/image';

export default function FeaturedPrograms() {
	return (
		<div className='bg-background py-16 px-8'>
			<h2 className='text-3xl font-bold mb-8 text-center'>
				{`Featured Programs`}
			</h2>
			<div className=''>
				<div
					className='relative py-10 overflow-hidden '
			
				>
					<Image
					src='/images/home/bg-stable.png'
					objectFit='cover'
					layout='fill'
					className='absolute inset-0 z-0 w-full h-full'
					alt=''

					/>
					<div className='relative text-start z-10 max-w-4xl mx-auto text-white'>
						<h3 className='text-2xl max-w-md font-extrabold mb-4'>
							{`Universal Vocational Institute of America
							(UVIA)`}
						</h3>
						<p className='mb-6 max-w-3xl'>
							{`At the Black Economic Improvement Corporation (BEIC), we are proud to offer a variety of programs designed to uplift and empower our community. Our initiatives focus on education, economic development, and community improvement, ensuring a holistic approach to building a brighter future. Here are some of our featured programs.`}
						</p>
						<Button
							variant='outline'
							className='text-white border-white bg-transparent'
						>
							Read more
						</Button>
					</div>
				</div>
				<div className='bg-black text-white py-16 px-8 text-center'>
					<PlayCircle className='mx-auto mb-4 w-16 h-16' />
					<h3 className='text-2xl font-bold mb-2'>UVIA</h3>
					<p>{`A walkthrough of what we have in-store at UVIA`}</p>
				</div>
				<div className=' grid md:grid-cols-2 gap-2'>
					<div className="relative">
							<Image
							objectFit='cover'
							layout='fill'
							quality={100}
							src='/images/home/bg-card2.png'
							alt=''
							className='w-full h-full absolute inset-0 z-0'
							/>

					<div className='overflow-hidden p-8'>
						
						<div className='relative z-10 text-white'>
							<h3 className='text-2xl font-bold w-72 mb-4'>
								{`Economic Empowerment Programs`}
							</h3>
							<p className='mb-6 text-sm'>
								{`Economic independence is crucial for personal and community growth. Our economic empowerment initiatives include business mentorship, financial literacy workshops, and investment opportunities. These programs are designed to help individuals start and grow their businesses, manage their finances effectively, and build generational wealth. We offer resources and support tailored to meet the unique needs of our community.`}
							</p>
							<Button
								variant='outline'
								className='text-white border-white bg-transparent'
							>
								Show more
							</Button>
						</div>
					</div>
					</div>
					
					<div className="relative gap-3">
							<Image
							quality={100}
							objectFit='cover'
							layout='fill'
							src='/images/home/bg-card.png'
							alt=''
							className='w-full absolute inset-0 z-0 h-full'
							/>

					<div className='relative z-10 overflow-hidden  p-8'>
						<div className=' text-white'>
							<h3 className='text-2xl font-bold mb-4 w-72'>
								{`Youth Empowerment and Mentorship`}
							</h3>
							<div className="space-y-10">
							<p className='mb-6 text-sm'>
								{`Our youth programs aim to inspire and guide the next generation of leaders. Through mentorship, educational workshops, and community service projects, we provide young people with the tools and support they need to achieve their full potential. Our programs focus on personal development, career exploration, and leadership skills.`}
							</p>
							<Button
								variant='outline'
								className='text-white border-white bg-transparent'
							>
								Show more
							</Button>
							</div>
						</div>
					</div>
					</div>

				</div>
				<div className='relative gap-3 py-10' >
									<Image
									objectFit='cover'
									layout='fill'
									quality={100}
									src='/images/home/bg-community.png'
									alt=''
									className='w-full absolute z-0 inset-0 h-full'
						/>
					<div className=' relative z-10 space-y-10 text-black top-10 p-9 max-w-4xl mx-auto '>
						<h3 className='text-3xl leading-10 font-bold  max-w-lg mb-4'>
							{`Help Keep Baltimore Clean Community
							Improvement Group`}
						</h3>
						<p className='mb-6 text-md font-normal w-[748px]'>
							{`A clean environment is essential for the well-being of our community. Our Help Keep Baltimore Clean initiative engages volunteers and partners in neighborhood clean-ups, recycling programs, and public awareness campaigns. By working together, we strive to create a cleaner, healthier, and more beautiful Baltimore. Join us in making a tangible difference in our city’s environment.`}
						</p>
						
						<Button
							variant='outline'
							className=' rounded-lg border-solid border-black bg-transparent'
						>
							Read more
						</Button>
					</div>

				</div>
				<div className='relative'>
					<Image
						src='/placeholder.svg'
						alt='Baltimore skyline'
						objectFit='cover'
						layout='fill'
						className='w-full absolute inset-0 z-0 h-full'
					/>
					<div className='relative inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
						<PlayCircle className='w-16 h-16 text-white' />
					</div>
					<div className='relative bottom-0 left-0 right-0 p-4 bg-opacity-75 text-white'>
						<h3 className='text-2xl font-bold mb-2'>
							{`Cleaning up baltimore`}
						</h3>
						<p>
							{`Watch volunteers & partners clean up the
							community`}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
