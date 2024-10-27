'use client';

import {
	Flag,
	GraduationCap,
	Hand,
	Handshake,
	Heart,
	Megaphone,
} from 'lucide-react';
import Image from 'next/image';

export function GetInvolvedComponent() {
	const involvementOptions = [
		{
			icon: Hand,
			title: 'Become a Volunteer',
			description:
				'Join our dedicated team of volunteers and make a real difference in your community. Your time and skills can help us create lasting change.',
		},
		{
			icon: GraduationCap,
			title: 'Enroll in Our Programs',
			description:
				'Enhance your skills and knowledge through our educational programs. Our courses are designed to empower you for personal and professional growth.',
		},
		{
			icon: Heart,
			title: 'Support Our Mission',
			description:
				'Your donations enable us to expand our reach and impact. Every contribution, no matter the size, helps us continue our vital work in the community.',
		},
		{
			icon: Handshake,
			title: 'Partner with Us',
			description: `We're always looking to collaborate with organizations that share our vision. Together, we can create a greater impact and drive meaningful change.`,
		},
		{
			icon: Megaphone,
			title: 'Stay Informed',
			description:
				'Follow us on social media, subscribe to our newsletter, and attend our events to stay updated on our initiatives, success stories, and upcoming opportunities.',
		},
		{
			icon: Flag,
			title: 'Advocate for Change',
			description:
				'Use your voice to promote and support our cause. Share our message with your network and help us create awareness for positive change in our community.',
		},
	];

	return (
		<section className='bg-white'>
			<div className='container mx-auto'>
				<div className='grid md:grid-cols-2'>
					<div className='grid grid-cols-2  gap-8'>
						{involvementOptions.map((option, index) => (
							<div
								key={index}
								className='grid'
							>
								<option.icon className='w-8 h-8 mb-4 text-primary' />
								<h3 className='text-xl font-semibold mb-2'>
									{option.title}
								</h3>
								<p className='text-gray-600 font-normal text-base'>
									{option.description}
								</p>
							</div>
						))}
					</div>
					<div className=''>
						<Image
							width={600}
							height={400}
							src='/placeholder.svg'
							alt=''
							className='rounded-lg shadow-lg w-full object-cover'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
