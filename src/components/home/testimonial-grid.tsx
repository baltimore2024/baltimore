'use client'

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Testimonial {
  title: string
  content: string
  author: {
    name: string
    role: string
    image: string
  }
  bgColor: "white" | "purple"
}

const testimonials: Testimonial[] = [
  {
    title: "Game-changer for me",
    content: "BEIC has been a game-changer for me. Through the Universal Vocational Institute of America, I gained valuable skills in IT and secured a well-paying job right after graduation. The support and training I received were top-notch. I can't thank BEIC enough for opening up new opportunities for my career.",
    author: {
      name: "Marcus J.",
      role: "UVIA Graduate",
      image: "/images/home/student-testimonial.png"
    },
    bgColor: "white"
  },
  {
    title: "Brought the community closer",
    content: "The Help Keep Baltimore Clean initiative has not only made our neighborhood look better, but it has also brought the community closer together. Volunteering in the clean-up events has been a rewarding experience, and I am proud to be part of making Baltimore a cleaner and more beautiful place to live.",
    author: {
      name: "David M.",
      role: "Community Volunteer",
      image: "/images/home/student-testimonial.png"
    },
    bgColor: "purple"
  },
  {
    title: "Gave my son confidence for his future",
    content: "The youth mentorship program at BEIC has been incredible for my son. He has gained confidence, learned valuable life skills, and developed a clear vision for his future. The mentors have been amazing role models and have truly made a difference in his life.",
    author: {
      name: "Angela T.",
      role: "Parent of a Youth Program Participant",
      image: "/images/home/student-testimonial.png"
    },
    bgColor: "white"
  },
  {
    title: "Game-changer for me",
    content: "Participating in the financial literacy workshops offered by BEIC has transformed the way I manage my finances. I now have a clear plan for saving and investing, which has helped me to start my own business. The mentors at BEIC are incredibly knowledgeable and supportive.",
    author: {
      name: "Keisha L.",
      role: "Entrepreneur and Program Participant",
      image: "/images/home/student-testimonial.png"
    },
    bgColor: "purple"
  },
  {
    title: "I now have a stable job in healthcare",
    content: "As a single mother, finding quality vocational training that fits my schedule was a challenge. UVIA's flexible programs allowed me to gain the skills I needed to re-enter the workforce. Today, I have a stable job in healthcare and can provide a better future for my children. BEIC made it all possible.",
    author: {
      name: "Sheila R.",
      role: "UVIA Graduate",
      image: "/images/home/student-testimonial.png"
    },
    bgColor: "white"
  },
  {
    title: "Managing my health better",
    content: "I am grateful for the community health workshops offered by BEIC. They have helped me adopt a healthier lifestyle and manage my stress better. The wellness resources provided are practical and accessible, making it easier for me to take care of my health.",
    author: {
      name: "Latoya W.",
      role: "Program Participant",
      image: "/images/home/student-testimonial.png"
    },
    bgColor: "purple"
  }
]

export function TestimonialGridComponent() {
  return (
    <div className="container mx-auto px-4 text-center items-center justify-center space-y-8 py-12">
      <h1 className="text-2xl font-bold">{`Hear from our community`}</h1>
      <p className="text-lg font-normal w-[672px] mx-auto text-center">{`At the Black Economic Improvement Corporation (BEIC), our success is measured by the positive impact we have on the lives of individuals and the community. Here are some stories and testimonials from those who have experienced the benefits of our programs and initiatives`}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className={`${testimonial.bgColor === 'purple' ? 'bg-primary text-primary-foreground' : 'bg-[#F6F5FB]'}`}>
            <CardHeader>
              <CardTitle>{testimonial.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{testimonial.content}</p>
              <div className="flex gap-3 items-center">
                <div className="w-[40px] h-[40px]">
                <Image
                  src={testimonial.author.image}
                  alt={testimonial.author.name}
                  width={50}
                  height={50}
                  className=" object-cover h-[50px] w-[50px] rounded-full"
                />
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author.name}</p>
                  <p className="text-sm opacity-75">{testimonial.author.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <h1 className='text-2xl font-bold'>{`Discover the difference BEIC can make in your life today`}</h1>
     <p  className="text-lg font-normal w-[672px] mx-auto text-center">{`These testimonials reflect the heart and soul of BEIC’s mission. We are committed to continuing our efforts to empower individuals and uplift our community. We invite you to join us and become a part of this positive change.`}</p>
    </div>
  )
}