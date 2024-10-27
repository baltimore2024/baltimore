import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FirstCardIcon, FourhtCardIcon, SecondCardIcon, ThirdCardIcon } from "@/lib/emma-icons";
import { BarChart3, BookOpen, Home, Users } from "lucide-react"
import Image from "next/image";

type MissionCard = {
  title: string;
  icon: React.ElementType;
  description: string;
  bgImage: string;
}

const missionCards: MissionCard[] = [
  {
    title: "Economic Empowerment",
    icon: FirstCardIcon,
    description: "We strive to bridge the economic gap by offering programs and resources that support financial literacy, entrepreneurship, and investment in our communities. Through our economic empowerment initiatives, we provide business mentoring, access to capital, and financial tools that help individuals and families build generational wealth and economic stability.",
    bgImage: "/our-mission/our1.png",
  },
  {
    title: "Vocational Education",
    icon: SecondCardIcon,
    description: "Our Universal Vocational Institute of America (UVIA) is committed to providing comprehensive vocational training that equips individuals with the skills needed for today's job market. We offer a range of programs in technology, healthcare, and trades, ensuring that our graduates are well-prepared for successful careers. Education is a cornerstone of our mission, and we believe that...",
    bgImage: "/our-mission/our2.png",
  },
  {
    title: "Community Improvement",
    icon: ThirdCardIcon,
    description: "A clean and beautiful environment is essential for a high quality of life. Our Help Keep Baltimore Clean initiative mobilizes volunteers and resources to tackle litter, promote recycling, and enhance public spaces. By working together, we aim to create a cleaner, healthier, and more vibrant Baltimore. Our community improvement efforts are a testament to our commitment to making our neighborhoods better places to live, work, and play.",
    bgImage: "/our-mission/our3.png",
  },
  {
    title: "Holistic Approach",
    icon: FourhtCardIcon,
    description: "BEIC's holistic approach ensures that we address every aspect of our community, from economic development and educational opportunities to environmental stewardship. Our integrated programs work together to create a comprehensive strategy dedicated to empowering individuals and transforming communities through sustainable solutions.",
    bgImage: "/our-mission/our4.png",
  },
]

function MissionCard({ title, icon: Icon, description, bgImage }: MissionCard) {
  return (
    <Card className="overflow-hidden h-full">
      <div className="relative h-full bg-cover bg-center">
        <Image src={bgImage} alt={title} width={300} height={500} className="h-full w-full absolute bg-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <CardHeader className="relative z-10">
          <div className="flex items-center space-x-2">
            <Icon className="w-8 h-8 text-white" />
            <CardTitle className="text-xl font-semibold text-white">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="relative z-10">
          <p className="text-white text-sm">{description}</p>
        </CardContent>
      </div>
    </Card>
  )
}

export default function MissionLayout() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {missionCards.map((card, index) => (
          <MissionCard key={index} {...card} />
        ))}
      </div>
    </div>
  )
}