import { Button } from '@/components/ui/button';
import { LocationIcon } from '@/lib/icons';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className='bg-[#6951DC] p-[30px] md:p-[80px] md:h-[530px] md:overflow-clip w-full '>
			<div className='text-white flex gap-8 flex-col  md:flex-row container mx-auto'>
				<div className='flex flex-col gap-20 '>
					<div className='flex gap-10 flex-col md:flex-row'>
						<div className='flex flex-col gap-3'>
							<h3 className='text-[27px]'>
								Join us in our initiatives to make a
								meaningful and lasting impact. Together,
								we can build a stronger, healthier, and
								more vibrant community.
							</h3>
							<div className='md:flex hidden gap-3 items-center flex-row rounded-full border py-[15px] px-[20px] border-[#fff] bg-[#ffffff1b]'>
								<LocationIcon
									width='20'
									height='20'
								/>
								<p className='text-white text-[12px] md:text-[14px] '>
									305 E. Joppa Road, Towson Maryland
									21286
								</p>
							</div>
						</div>
						<div>
							<h3 className='text-[19px] '>
								These initiatives reflect our commitment
								to creating a holistic and inclusive
								approach to community development. By
								addressing various aspects of community
								life, we aim to create a supportive and
								thriving environment where everyone has
								the opportunity to succeed.
							</h3>
							<div className='flex md:hidden gap-3 mt-[10px] items-center flex-row rounded-full border py-[15px] px-[20px] border-[#fff] bg-[#ffffff1b]'>
								<LocationIcon
									width='20'
									height='20'
								/>
								<p className='text-white text-[12px] md:text-[14px] '>
									305 E. Joppa Road, Towson Maryland
									21286
								</p>
							</div>
							<div className=' border-white border-[2px] mt-[20px] md:hidden md:h-[700px] flex flex-col gap-16 p-[30px] rounded-[20px] '>
								<div className='flex gap-2 flex-col'>
									<h1 className='text-[25px] text-center '>
										Let's get in touch
									</h1>
									<p className='text-[15px]'>
										Have questions or want to get
										involved? Reach out to us
										through our contact page, and
										a member of our team will be
										happy to assist you.
									</p>
								</div>
								<Link href='/contact-us'>
									<Button className='bg-[#ffffff1b] w-full py-[25px] rounded-full px '>
										Contact Us
									</Button>
								</Link>
							</div>
						</div>
					</div>
					<div className='flex flex-col md:flex-row gap-3  md:gap-6 '>
						<p>
							© 2024 Black Economic Improvement Forum, Inc.
							All rights reserved.
						</p>
						<Link href='/terms-and-conditions'>
							TERMS AND CONDITIONS
						</Link>
						<Link href='/privacy-policy'>PRIVACY POLICY</Link>
					</div>
				</div>

				<div className=' border-white border-[2px] hidden md:h-[700px] md:flex flex-col gap-16 p-[30px] rounded-[20px] '>
					<div className='flex gap-2 flex-col'>
						<h1 className='text-[25px] text-center '>
							Let's get in touch
						</h1>
						<p className='text-[15px]'>
							Have questions or want to get involved? Reach
							out to us through our contact page, and a
							member of our team will be happy to assist
							you.
						</p>
					</div>
					<Link href='/contact-us'>
						<Button className='bg-[#ffffff1b] w-full py-[25px] rounded-full px '>
							Contact Us
						</Button>
					</Link>
				</div>
			</div>
		</footer>
	);
}
