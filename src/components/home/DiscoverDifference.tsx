import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function DiscoverDifference() {
	return (
    <section className="relative py-16">
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg"
          alt="BEIC Impact"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Discover the difference BEIC can make in your life today
        </h2>
        <p className="mb-8">
          Join us in our mission to empower communities, foster economic growth,
          and create lasting positive change.
        </p>
        <Button className="bg-[#6951DC] hover:bg-purple-700">
          Get Involved
        </Button>
      </div>
    </section>
  );
}
