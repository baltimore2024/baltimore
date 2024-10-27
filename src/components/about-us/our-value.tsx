import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Square } from "lucide-react"
import { BoxIcon } from '@/lib/emma-icons'

interface ValueCard {
  title: string
  description: string
}

const values: ValueCard[] = [
  {
    title: "Empowerment",
    description: "We believe in the power of education, economic opportunity, and community support to transform lives. Our programs are designed to empower individuals with the knowledge, skills, and resources they need to achieve financial independence and personal growth."
  },
  {
    title: "Integrity",
    description: "We conduct our work with honesty, transparency, and accountability. Integrity is at the heart of our relationships with our community members, partners, and stakeholders. We are committed to ethical practices in all aspects of our operations."
  },
  {
    title: "Inclusivity",
    description: "We are dedicated to creating an inclusive environment where everyone is valued and respected. Our programs and initiatives are designed to be accessible to all, regardless of background, race, or socioeconomic status. We celebrate diversity and strive for equity in all our efforts."
  },
  {
    title: "Innovation",
    description: "We embrace innovation and continually seek new and effective ways to address the challenges facing our communities. By leveraging technology, creative solutions, and forward-thinking strategies, we aim to stay at the forefront of community development and empowerment."
  },
  {
    title: "Community",
    description: "Our work is rooted in the belief that strong, vibrant communities are essential for individual and collective well-being. We are dedicated to fostering a sense of belonging, pride, and mutual support within the communities we serve."
  },
  {
    title: "Excellence",
    description: "We strive for excellence in everything we do. From program delivery to customer service, we are committed to achieving the highest standards of quality and effectiveness. Continuous improvement and professional development are integral to our approach."
  }
]

const ValueCard: React.FC<ValueCard> = ({ title, description }) => (
  <Card className="bg-gray-50">
    <CardHeader className="flex flex-row items-center space-x-2">
        <BoxIcon />
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-700">{description}</p>
    </CardContent>
  </Card>
)

export default function OurValues() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">OUR VALUES</h1>
      <p className="text-gray-700 mb-8">
        At the Black Economic Improvement Corporation (BEIC), our values guide everything we do. They
        are the foundation of our mission, the principles that drive our actions, and the standards by which
        we measure our success. We are committed to these core values as we work to empower individuals
        and uplift communities.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {values.map((value, index) => (
          <ValueCard key={index} {...value} />
        ))}
      </div>
    </div>
  )
}