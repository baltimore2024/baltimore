import LeadershipTeam from '@/components/about-us/leadership';
import MissionLayout from '@/components/about-us/our-mission';
import OurStory from '@/components/about-us/our-story';
import OurValues from '@/components/about-us/our-value';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function OurMissionPage() {
	return (
    <div className="bg-gray-50 min-h-screen pt-[60px]">
      <header className="grid md:grid-cols-2 gap-4 p-4 w-full container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900">Our mission</h1>
        <p className="text-xl text-gray-700 mb-8">
          At the Black Economic Improvement Corporation (BEIC), our mission is
          to empower individuals and communities through education, economic
          development, and community-building initiatives. We are dedicated to
          creating opportunities for sustainable growth, fostering
          entrepreneurship, and providing the tools and resources necessary for
          individuals to achieve financial independence, gain valuable skills,
          and thrive in today's economy.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols- gap-6 mb-12">
        <div className="h-auto bg-[url('/public/our-mission/our1.png')] bg-cover bg-center">
          <MissionLayout />
        </div>
        <div className="">
          <OurStory />
        </div>
        <div className="">
          <LeadershipTeam />
        </div>
        <div className="container mx-auto px-4 py-8">
          <p>
            Our leadership team is committed to making a positive impact and
            driving the success of BEIC. Their collective efforts and dedication
            ensure that we continue to empower individuals and transform
            communities.
          </p>
        </div>
        <div className="">
          <OurValues />
        </div>
        <div className=" container mx-auto px-4 py-8">
          <p className="">
            By adhering to these values, we aim to make a meaningful and lasting
            difference in the lives of those we serve. Join us in our commitment
            to these principles and be part of a community dedicated to
            empowerment, growth, and positive change.
          </p>
          <p>Together, we can build a brighter future.</p>
        </div>
      </div>
    </div>
  );
}
