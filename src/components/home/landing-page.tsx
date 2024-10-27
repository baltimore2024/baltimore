'use client';

import Image from 'next/image';

export function LandingPageComponent() {
	return (
    // 		<div className='min-h-screen  bg-white'>
    // 			<header className='relative h-[80svh] bg-gray-900 text-white'>
    // 				<Image
    // 					src='/images/home/alumni-achievements.png'
    // 					alt='Conference room with audience'
    // 					layout='fill'
    // 					objectFit='cover'
    // 					className='mix-blend-overlay'
    // 				/>
    // 				<div className='absolute inset-0 bg-black bg-opacity-60'>
    // 					<div className='container mx-auto bottom-0 py-24 h-full flex flex-col justify-end'>
    // 						<h1 className='text-4xl md:text-5xl font-medium leading-8 max-w-lg mb-4'>
    // 							Join us in making a difference
    // 						</h1>
    // 						<p className='text-lg md:text-xl font-normal max-w-2xl mb-8'>
    // 							{`The Black Economic Improvement Corporation (BEIC) is committed to empowering individuals and uplifting communities through education, economic development, and community improvement. But we can’t do it alone – we need your support. Here’s how you can get involved and make a lasting impact:`}
    // 						</p>
    // 					</div>
    // 				</div>
    // 				<div className=' relative flex flex-col    justify-end items-end transform translate-y-10'>
    // 					<Image
    // 						src='/images/home/student-testimonial.png'
    // 						alt='Student portrait'
    // 						width={200}
    // 						height={200}
    // 						className='rounded-lg border-4 border-white absolute shadow-lg'
    // 					/>
    // 					<div className='mt-16'>
    // 						<h2 className='text-2xl md:text-3xl font-bold mb-4'>
    // 							Student testimonials
    // 						</h2>
    // 						<p className='text-gray-600 mb-4 w-60'>
    // 							{`Hear directly from our students about their experiences and what makes BEIC special`}
    // 						</p>
    // 					</div>
    // 				</div>
    // 			</header>
    // 			<main className='container mx-auto py-16 md:py-24'>
    // 				<div className='grid md:grid-cols-2 gap-12'>
    // 					<section>
    // 						<h2 className='text-sm font-semibold text-gray-500 mb-2'>
    // 							ALUMNI ACHIEVEMENTS
    // 						</h2>
    // 						<h3 className='text-2xl md:text-3xl font-bold mb-4'>
    // 							{`Our graduates go on to achieve
    // remarkable success in their various fields.`}
    // 						</h3>
    // 						<h4 className='text-muted-foreground mb-4'>
    // 							{`Read about their journey and how BEIC helped shape their future`}
    // 						</h4>
    // 					</section>
    // 				</div>
    // 			</main>
    // 		</div>
    <div className=" max-w-7xl h-[1700px]  md:h-[1000px] mx-auto relative ">
      <Image
        src={"/images/home/alumni-achievements.png"}
        alt="image"
        width={"1000"}
        height={"1000"}
        className="w-full absolute md:h-[730px] h-[800px] object-cover md:rounded-xl"
      />
      <div className="absolute flex px-[20px] h-[2000px]  md:h-[1000px] from-[#00000056] to-[#000]  md:px-[50px] justify-between mt-[480px] md:mt-[470px]">
        <div className="text-white">
          <h1 className="text-5xl text-[20px] md:w-[50%] ">
            Join us in making a difference
          </h1>
          <p className="md:w-[70%] mt-[20px] text-[#6B7280] ">
            The Black Economic Improvement Corporation (BEIC) is committed to
            empowering individuals and uplifting communities through education,
            economic development, and community improvement. But we can’t do it
            alone – we need your support. Here’s how you can get involved and
            make a lasting impact:
          </p>
        </div>
        <div className="hidden md:inline">
          <Image
            src={"/images/home/alum.png"}
            alt="image"
            width={"600"}
            height={"600"}
            className="border-[4px] rounded-[20px] border-white"
          />
          <p className="text-2xl">Student testimonials</p>
          <p className="mt-[10px] text-[#6B7280] ">
            Hear directly from our students about their experiences and what
            makes BEIC special
          </p>
        </div>
      </div>
      <div className="relative">
        <div className=" md:w-[35%] md:pt-[750px] pt-[830px]  px-[20px] md:px-0">
          <p>ALUMNI ACHIEVEMENTS</p>
          <h1 className="text-2xl mt-[10px]">
            Our graduates go on to achieve remarkable success in their various
            fields.
          </h1>
          <p className="text-2xl text-[#6B7280] ">
            Read about their journey and how BEIC helped shape their future
          </p>
        </div>
        <div className="inline relative px-[20px] md:px-0 md:hidden">
          <Image
            src={"/images/home/alum.png"}
            alt="image"
            width={"600"}
            height={"600"}
            className="border-[4px] px-[20px] md:px-0 rounded-[20px] border-white"
          />
          <p className="px-[20px] md:px-0 text-2xl">Student testimonials</p>
          <p className="px-[20px] md:px-0 mt-[10px] text-[#6B7280] ">
            Hear directly from our students about their experiences and what
            makes BEIC special
          </p>
        </div>
      </div>
    </div>
  );
}
