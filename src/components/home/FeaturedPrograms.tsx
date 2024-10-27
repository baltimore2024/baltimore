import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';
import Image from 'next/image';

export default function FeaturedPrograms() {
	return (
    <div className="container mx-auto bg-background py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        {`Featured Programs`}
      </h2>
      <p className="text-[#6B7280] w-[80%] mx-auto text-center ">
        At the Black Economic Improvement Corporation (BEIC), we are proud to
        offer a variety of programs designed to uplift and empower our
        community. Our initiatives focus on education, economic development, and
        community improvement, ensuring a holistic approach to building a
        brighter future. Here are some of our featured programs
      </p>
      <div className="mt-[30px]">
        <div className="relative py-10 overflow-hidden ">
          <Image
            src="/images/home/bg-stable.png"
            width={"1000"}
            height={"1000"}
            className="absolute inset-0 z-0 w-full h-full"
            alt=""
          />
          <div className="relative text-start z-10 p-8 mx-auto text-white">
            <h3 className="text-4xl w-full md:w-[50%] font-extrabold mb-4">
              {`Universal Vocational Institute of America
							(UVIA)`}
            </h3>
            <p className="mb-6 max-w-3xl">
              {`At the Black Economic Improvement Corporation (BEIC), we are proud to offer a variety of programs designed to uplift and empower our community. Our initiatives focus on education, economic development, and community improvement, ensuring a holistic approach to building a brighter future. Here are some of our featured programs.`}
            </p>
            <Button
              variant="outline"
              className="text-white border-white bg-transparent"
            >
              Read more
            </Button>
          </div>
        </div>
        <div className=" relative h-[400px] text-white">
          <video
            autoPlay
            loop
            muted
            playsInline
            className={`inset-0 w-full absolute h-[400px] object-cover transition-opacity duration-1000`}
          >
            <source src="/videos/feat_programs.webm" type="video/webm" />
          </video>
          <div className="absolute bg-gradient-to-b px-[20px] md:pl-[50px] pt-[250px] w-full h-[400px] from-[#00000056] to-[#000]">
            <h3 className="text-4xl text-start font-bold mb-2">UVIA</h3>
            <p className="font-normal text-start text-lg">{`A walkthrough of what we have in-store at UVIA`}</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 h-[1000px] md:h-[350px] relative gap-2 w-full">
          <div className="w-full relative">
            <Image
              src="/images/home/bg-card2.png"
              alt="image"
              height={"1000"}
              width={"1000"}
              className="md:h-[350px] h-[1000px] absolute"
            />
            <hgroup className="absolute p-[30px] text-white ">
              <h1 className="text-3xl md:w-[60%] font-bold ">
                Economic Empowerment Programs
              </h1>
              <p className="mt-[20px]">
                Economic independence is crucial for personal and community
                growth. Our economic empowerment initiatives include business
                mentorship, financial literacy workshops, and investment
                opportunities. These programs are designed to help individuals
                start and grow their businesses, manage their finances
                effectively, and build generational wealth. We offer resources
                and support tailored to meet the unique needs of our community.
              </p>
              <Button
                className="bg-transparent mt-[10px] border-2 border-white rounded-[6px]"
                variant={"outline"}
              >
                Show More
              </Button>
            </hgroup>
          </div>
          <div className="w-full relative">
            <Image
              src="/images/home/bg-card.png"
              alt="image"
              height={"1000"}
              width={"1000"}
              className="md:h-[350px] h-[1000px] absolute"
            />
            <hgroup className="absolute p-[30px] text-white ">
              <h1 className="text-3xl md:w-[60%] font-bold ">
                Youth Empowerment and Mentorship
              </h1>
              <p className="mt-[20px]">
                Our youth programs aim to inspire and guide the next generation
                of leaders. Through mentorship, educational workshops, and
                community service projects, we provide young people with the
                tools and support they need to achieve their full potential. Our
                programs focus on personal development, career exploration, and
                leadership skills.
              </p>
              <Button
                className="bg-transparent mt-[10px] border-2 border-white rounded-[6px]"
                variant={"outline"}
              >
                Show More
              </Button>
            </hgroup>
          </div>
        </div>
        <div className="w-full h-[800px] md:h-[400px] relative">
          <Image
            src="/images/home/bg-community.png"
            alt="image"
            height={"1000"}
            width={"1000"}
            className=" h-[800px] md:h-[400px] w-full absolute"
          />
          <hgroup className="absolute flex gap-16 flex-col p-[50px] text-black ">
            <div className="l">
              <h1 className="text-4xl md:w-[60%] font-bold ">
                Help Keep Baltimore Clean Community Improvement Group
              </h1>
              <p className="mt-[20px] md:w-[70%] ">
                A clean environment is essential for the well-being of our
                community. Our Help Keep Baltimore Clean initiative engages
                volunteers and partners in neighborhood clean-ups, recycling
                programs, and public awareness campaigns. By working together,
                we strive to create a cleaner, healthier, and more beautiful
                Baltimore. Join us in making a tangible difference in our city’s
                environment.
              </p>
            </div>
            <div className="">
              <Button
                className="bg-transparent mt-[10px] border-2 border-black rounded-[6px]"
                variant={"outline"}
              >
                Show More
              </Button>
            </div>
          </hgroup>
        </div>
        <div className=" relative h-[450px] text-white">
          <video
            autoPlay
            loop
            muted
            playsInline
            className={`inset-0 w-full absolute h-[450px] object-cover transition-opacity duration-1000`}
          >
            <source src="/videos/cleaning-up-balt.webm" type="video/webm" />
          </video>
          <div className="absolute bg-gradient-to-b px-[20px] md:pl-[50px] pt-[300px] w-full h-[450px] from-[#00000056] to-[#000]">
            <h3 className="text-4xl text-start font-bold mb-2">
              Cleaning up baltimore
            </h3>
            <p className="font-normal text-start text-lg">{`Watch volunteers & partners clean-up the community.`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
