import React from "react";
import { Square } from "lucide-react";
import { StoryIcon } from "@/lib/emma-icons";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const timelineEvents: TimelineEvent[] = [
  {
    icon: StoryIcon,
    date: "Year • Month",
    title: "Summary of event",
    description:
      "The Black Economic Improvement Corporation (BEIC) was founded with a vision to transform urban communities by empowering individuals through education, economic development, and community improvement. Our journey began with a simple yet powerful idea: to create sustainable opportunities for economic growth and upliftment, ensuring that every member of our community has the tools and resources needed to thrive.",
  },
  {
    icon: StoryIcon,
    date: "Year • Month",
    title: "Early Beginnings",
    description:
      "BEIC was established out of a deep commitment to address the economic disparities and challenges faced by urban communities. Our founders, a group of dedicated professionals and community leaders, recognized the need for a holistic approach to empowerment—one that integrates economic support, vocational training, and environmental stewardship.",
  },
  {
    icon: StoryIcon,
    date: "Year • Month",
    title: "Building Foundations",
    description:
      "From the outset, BEIC focused on creating impactful programs that address the immediate and long-term needs of our community. We launched the Universal Vocational Institute of America (UVIA) to provide quality vocational education and training, enabling individuals to acquire the skills needed for gainful employment. Our economic empowerment initiatives began with workshops and mentorship programs aimed at fostering entrepreneurship and financial literacy.",
  },
  {
    icon: StoryIcon,
    date: "Year • Month",
    title: "Expanding Our Reach",
    description:
      "As our programs gained traction, we expanded our reach to more neighborhoods and communities. We established partnerships with local businesses, educational institutions, and government agencies to create a robust network of support for our initiatives. This period saw the launch of our community improvement projects, focusing on urban renewal and environmental sustainability.",
  },
  {
    icon: StoryIcon,
    date: "Year • Month",
    title: "Adapting and Innovating",
    description:
      "Over the years, BEIC has continually evolved to meet the changing needs of our community. We have embraced innovation, integrating new technologies and approaches to enhance our programs and services. Our commitment to inclusivity and accessibility ensures that everyone, regardless of their background or circumstances, can benefit from our efforts.",
  },
  {
    icon: StoryIcon,
    date: "Year • Month",
    title: "Creating Impact",
    description:
      "Today, BEIC stands as a beacon of hope and empowerment in our community. Through UVIA, we have trained hundreds of individuals who have gone on to successful careers. Our economic empowerment programs have helped numerous entrepreneurs start and grow their businesses. The Help Keep Baltimore Clean initiative has significantly improved the living environment, making our neighborhoods cleaner and more vibrant.",
  },
  {
    icon: StoryIcon,
    date: "Year • Month",
    title: "Looking Forward",
    description:
      "As we look to the future, our commitment to our mission remains unwavering. We will continue to expand our programs, forge new partnerships, and innovate to meet the evolving needs of our community. Our story is one of resilience, dedication, and the unwavering belief that together, we can create a brighter future for all.",
  },
];

const TimelineEvent: React.FC<TimelineEvent> = ({
  date,
  title,
  description,
  icon: Icon,
}) => (
  <div className="flex items-start mb-16 gap-6">
    <div className="">
        <Icon />
      </div>
    <div className="flex-1">
      <div className="text-sm font-bold text-black mb-1">{date}</div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-base font-normal text-black leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

export default function OurStory() {
  return (
    <div className=" container grid md:grid-cols-2 mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12">OUR STORY</h1>
      <div>
        {timelineEvents.map((event, index) => (
          <TimelineEvent key={index} {...event} />
        ))}
      </div>
    </div>
  );
}
