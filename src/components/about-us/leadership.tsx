import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Twitter, Globe } from "lucide-react"
import { XIcon } from '@/lib/emma-icons'

interface LeaderProfile {
  name: string
  title: string
  description: string
  linkedin?: string
  twitter?: string
  website?: string
}

const leadershipTeam: LeaderProfile[] = [
  {
    name: "Tyrone Tidwell",
    title: "Founder & CEO",
    description: "As the President and Founder of the Black Economic Improvement Corporation, Tyrone Tidwell brings visionary leadership and a commitment to community-focused economic development. His guidance drives the corporation's mission to empower underserved communities and foster generational wealth.",
    linkedin: "#",
    twitter: "#",
    website: "#"
  },
  {
    name: "Al Baseer Mateen",
    title: "Vice President and Co-founder",
    description: "Al Baseer Mateen, as Vice President and Co-Founder, plays a crucial role in strategic decision-making and partnership building. His dedication and innovative approach contribute significantly to the corporation's success in creating sustainable growth opportunities.",
    linkedin: "#",
    twitter: "#",
    website: "#"
  },
  {
    name: "Resident Agent",
    title: "Rosario county firm Baltimore, Maryland",
    description: "Based in Baltimore, Maryland, Rosario County Firm serves as the Resident Agent, providing legal and administrative support. Their presence ensures that BEIC remains compliant with state regulations and is well-equipped to navigate complex business environments.",
    linkedin: "#",
    twitter: "#",
    website: "#"
  },
  {
    name: "Serena Simeon",
    title: "Director of Art and Graphic designs",
    description: "Serena Simeon leads the corporation’s visual and branding efforts as the Director of Art and Graphic Design. Her creativity and expertise in design ensure that BEIC’s message resonates visually with its audience, enhancing brand identity and engagement.",
    linkedin: "#",
    twitter: "#",
    website: "#"
  }
]

const LeaderCard: React.FC<LeaderProfile> = ({ name, title, description, linkedin, twitter, website }) => (
  <Card className="bg-white">
    <CardHeader>
      <CardTitle className="text-xl font-bold">{name}</CardTitle>
      <p className="text- font-bold text-black">{title}</p>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-black mb-4">{description}</p>
      <div className="flex items-center space-x-2">
        {linkedin && (
          <a href={linkedin} className="text-black hover:text-gray-600">
            <Linkedin size={20} />
          </a>
        )}
        {twitter && (
          <a href={twitter} className="text-black hover:text-gray-600">
            <XIcon />
          </a>
        )}
        {website && (
          <a href={website} className="text-black hover:text-gray-600">
            <Globe size={20} />
          </a>
        )}
      </div>
    </CardContent>
  </Card>
)

export default function LeadershipTeam() {
  return (
    <div className="container mx-auto px-4 py-8">
        <p className='pl-9 text-black font-bold'>
		Meet the Leaders Driving Our Mission Forward
      </p>
      <div className="p-6 mb-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">LEADERSHIP TEAM</h1>
        <p className="text-black">
          At the Black Economic Improvement Corporation (BEIC), our leadership team is composed of
          dedicated professionals who are passionate about empowering communities and creating
          sustainable opportunities for economic growth. Their diverse backgrounds and expertise guide our
          organization towards achieving our mission.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {leadershipTeam.map((leader, index) => (
          <LeaderCard key={index} {...leader} />
        ))}
      </div>
    </div>
  )
}