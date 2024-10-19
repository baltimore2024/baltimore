'use client';

export default function HeroSection() {
	return (
		<div className='relative min-h-screen flex flex-col'>
			{/* Background Video */}
			<video
				autoPlay
				loop
				muted
				playsInline
				className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000`}
			>
				<source
					src='/sample.webm'
					type='video/webm'
				/>
			</video>

			{/* Gradient Overlay */}
			<div className='absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 z-10'></div>

			{/* Content */}
			<div className='relative z-20 flex-grow flex flex-col'>
				{/* Hero Content */}
				<div className='flex-grow flex flex-col justify-center items-center text-white px-4'>
					<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 max-w-4xl'>
						Welcome to the Black Economic Improvement
						Corporation
					</h1>
					<p className='text-lg md:text-xl text-center max-w-3xl'>
						At the Black Economic Improvement Corporation
						(BEIC), we are dedicated to empowering urban
						communities through a multifaceted approach that
						combines education, economic growth, and community
						improvement. Our mission is to create a
						sustainable and thriving environment where
						individuals can achieve economic independence,
						gain valuable skills, and live in clean, beautiful
						neighborhoods.
					</p>
				</div>
			</div>
		</div>
	);
}
