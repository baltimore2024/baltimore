"use client";

export default function HeroSection() {
	return (
		<div className="relative flex min-h-screen flex-col bg-black">
			{/* <video
				autoPlay
				loop
				muted
				playsInline
				className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000`}
			>
				<source src="/videos/main-video.webm" type="video/webm" />
			</video> */}
			<div className="absolute grid h-screen w-full place-items-end bg-gradient-to-b from-black/50 to-black pb-16 md:pb-32">
				<div className="container mx-auto px-4 text-left text-white">
					<h1 className="mb-6 text-start text-3xl font-bold md:text-4xl lg:text-5xl">
						Welcome to the Black Economic Improvement Corporation
					</h1>
					<p className="max-w-6xl text-start text-lg md:text-xl">
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
		</div>
	);
}
