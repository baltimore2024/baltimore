'use client';

export default function HeroSection() {
	return (
    <div className="relative min-h-screen flex flex-col">
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000`}
      >
        <source src="/videos/main-video.webm" type="video/webm" />
      </video>
      <div className="absolute bg-gradient-to-b w-full h-screen from-[#00000056] to-[#000] ">
        <div className="flex-grow container mx-auto flex mt-[160px] md:mt-[300px] flex-col text-left justify-center items-start  text-white px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-start mb-6 ">
            Welcome to the Black Economic Improvement Corporation
          </h1>
          <p className="text-lg md:text-xl text-start max-w-6xl">
            {`At the Black Economic Improvement Corporation
						(BEIC), we are dedicated to empowering urban
						communities through a multifaceted approach that
						combines education, economic growth, and community
						improvement. Our mission is to create a
						sustainable and thriving environment where
						individuals can achieve economic independence,
						gain valuable skills, and live in clean, beautiful
						neighborhoods.`}
          </p>
        </div>
      </div>

      {/* Gradient Overlay
			<div className='absolute inset-0 bg-gradient-to-b top-0 from-black/30 to-black/70 z-10'></div>

			Content
			<div className='container mx-auto relative z-20 flex-grow -bottom-12 flex flex-col'>
				Hero Content
				<div className='flex-grow flex flex-col text-left justify-center items-start  text-white px-4'>
					<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-start mb-6 '>
						Welcome to the Black Economic Improvement
						Corporation
					</h1>
					<p className='text-lg md:text-xl text-start max-w-6xl'>
						{`At the Black Economic Improvement Corporation
						(BEIC), we are dedicated to empowering urban
						communities through a multifaceted approach that
						combines education, economic growth, and community
						improvement. Our mission is to create a
						sustainable and thriving environment where
						individuals can achieve economic independence,
						gain valuable skills, and live in clean, beautiful
						neighborhoods.`}
					</p>
				</div>
			</div> */}
    </div>
  );
}
