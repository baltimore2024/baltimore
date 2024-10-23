import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export default function CommunityTestimonials() {
	const testimonials = [
		{
			name: 'John D.',
			text: "BEIC's programs have been life-changing. I've gained valuable skills and found a career I love.",
		},
		{
			name: 'Sarah M.',
			text: 'The mentorship I received through BEIC has been invaluable in starting my own business.',
		},
		{
			name: 'Michael R.',
			text: "Thanks to BEIC, I've been able to give back to my community and make a real difference.",
		},
	];

	return (
    <section className="py-16 px-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Hear from our community
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-[#6951DC] text-white">
            <CardContent className="p-6">
              <Quote className="w-8 h-8 mb-4" />
              <p className="mb-4">{testimonial.text}</p>
              <p className="font-semibold">- {testimonial.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
