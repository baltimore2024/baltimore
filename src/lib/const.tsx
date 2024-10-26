import { title } from "process";
import {
  BadgeCheck,
  Civic,
  Clock,
  Community,
  Database,
  Education,
  MaterialSymbolHouse,
  MentalHealth,
  Network,
  Nutrition,
  RaphaelGreen,
  Recycle,
  Tree,
  UsersGroup,
  Vote,
  Water,
} from "./icons";

export const NAVLINKS = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Programs",
    link: "/programs",
  },
  {
    title: "Initiatives",
    link: "/initiatives",
  },
  {
    title: "News",
    link: "/news",
  },
  { title: "About Us", link: "/about-us" },
  { title: "Contact", link: "/contact-us" },
];

const width = "30";
const height = "30";

export const INITIATIVES = [
  {
    serial: "1.",
    order: "normal",
    mainTitle: "Community Development Initiative",
    mainDescription:
      "This initiative focuses on revitalizing neighborhoods through infrastructure improvements, community engagement, and sustainable development. Key activities include:",
    subInfo: [
      {
        icon: (
          <MaterialSymbolHouse
            width={width}
            height={height}
            className="text-[#6951DC]"
          />
        ),
        title: "Urban Renewal Projects",
        description:
          "Partnering with local government and organizations to renovate and improve public spaces and housing.",
      },
      {
        icon: (
          <Community width={width} height={height} className="text-[#6951DC]" />
        ),
        title: "Community Engagement",
        description:
          "Organizing town hall meetings, workshops, and forums to involve community members in decision-making processes.",
      },
      {
        icon: (
          <RaphaelGreen
            width={width}
            height={height}
            className="text-[#6951DC]"
          />
        ),
        title: "Sustainable Development",
        description:
          "Promoting green building practices, energy efficiency, and eco-friendly community projects.",
      },
    ],
  },
  {
    serial: "2.",
    order: "swapped",
    mainTitle: "Small Business Support Initiative",
    mainDescription:
      "We aim to boost local economies by supporting small businesses and entrepreneurs. This initiative provides:",
    subInfo: [
      {
        icon: (
          <Database width={width} height={height} className="text-[#6951DC]" />
        ),
        title: "Microloans and Grants",
        description:
          "Financial assistance to help start or expand small businesses.",
      },
      {
        icon: (
          <UsersGroup
            width={width}
            height={height}
            className="text-[#6951DC]"
          />
        ),
        title: "Business Development Workshops",
        description:
          "Training sessions on business planning, marketing, and management.",
      },
      {
        icon: (
          <Network width={width} height={height} className="text-[#6951DC]" />
        ),
        title: "Networking Opportunities",
        description:
          "Connecting entrepreneurs with mentors, investors, and other business owners.",
      },
    ],
  },
  {
    serial: "3.",
    order: "normal",
    mainTitle: "Educational Empowerment Initiative",
    mainDescription:
      "Education is a key driver of economic and personal growth. Our educational empowerment initiative includes:",
    subInfo: [
      {
        icon: (
          <Education width={width} height={height} className="text-[#6951DC]" />
        ),
        title: "Scholarship Programs",
        description:
          "Providing financial support for students pursuing higher education.",
      },
      {
        icon: (
          <Clock width={width} height={height} className="text-[#6951DC]" />
        ),
        title: "After-School Programs",
        description:
          "Offering tutoring, homework help, and enrichment activities for K-12 students.",
      },
      {
        icon: (
          <BadgeCheck
            width={width}
            height={height}
            className="text-[#6951DC]"
          />
        ),
        title: "Adult Education",
        description:
          "GED preparation, literacy classes, and continuing education opportunities for adults.",
      },
    ],
  },
  {
    serial: "4.",
    order: "swapped",
    mainTitle: "Health and Wellness Initiative",
    mainDescription:
      "This initiative aims to improve the overall health and well-being of our community members. Key components include:",
    subInfo: [
      {
        icon: (
          <UsersGroup
            width={width}
            height={height}
            className="text-[#6951DC]"
          />
        ),
        title: "Community Health Fairs",
        description:
          "Free health screenings, fitness demonstrations, and wellness resources.",
      },
      {
        icon: (
          <MentalHealth
            width={width}
            height={height}
            className="text-[#6951DC]"
          />
        ),
        title: "Mental Health Support",
        description:
          "Access to counseling, support groups, and mental health awareness campaigns.",
      },
      {
        icon: (
          <Nutrition width={width} height={height} className="text-[#6951DC]" />
        ),
        title: "Nutrition Programs",
        description:
          "Education on healthy eating, cooking classes, and access to fresh produce through community gardens and farmers markets.",
      },
    ],
  },
  {
    serial: "5.",
    order: "normal",
    mainTitle: "Environmental Stewardship Initiative",
    mainDescription:
      "We are committed to protecting and enhancing our natural environment. This initiative includes:",
    subInfo: [
      {
        icon: <Tree width={width} height={height} className="text-[#6951DC]" />,
        title: "Tree Planting Campaigns",
        description:
          "Increasing urban green spaces by planting trees and maintaining parks.",
      },
      {
        icon: (
          <Water width={width} height={height} className="text-[#6951DC]" />
        ),
        title: "Clean Water Projects",
        description:
          "Ensuring access to clean and safe drinking water through conservation and infrastructure improvements.",
      },
      {
        icon: (
          <Recycle width={width} height={height} className="text-[#6951DC]" />
        ),
        title: "Sustainable Practices Education",
        description:
          "Workshops on recycling, composting, and reducing carbon footprints.",
      },
    ],
  },
  {
    serial: "6.",
    order: "swapped",
    mainTitle: "Civic Engagement Initiative",
    mainDescription:
      "Encouraging active participation in civic life is essential for a thriving community. This initiative involves:",
    subInfo: [
      {
        icon: <Vote width={width} height={height} className="text-[#6951DC]" />,
        title: "Voter Registration Drives",
        description:
          "Helping community members register to vote and understand their voting rights.",
      },
      {
        icon: (
          <UsersGroup
            width={width}
            height={height}
            className="text-[#6951DC]"
          />
        ),
        title: "Advocacy Training",
        description:
          "Teaching individuals how to advocate for policies and issues that matter to them.",
      },
      {
        icon: (
          <Civic width={width} height={height} className="text-[#6951DC]" />
        ),
        title: "Civic Education",
        description:
          "Providing information on local government processes and how to get involved in community decision-making.",
      },
    ],
  },
];

export const NEWS = [
  {
    image: "/news-image-1.png",
    title: "BEIC Launches New Vocational Training Program",
    detail:
      "We are excited to announce the launch of a new vocational training program at the Universal Vocational Institute of America (UVIA). This program offers certifications in emerging technology fields, including cybersecurity and data analytics, to equip our community members with the skills needed for high-demand careers.",
    read: "5",
    type: "news",
  },
  {
    image: "/news-image-2.png",
    title: "Help Keep Baltimore Clean Kicks Off Summer Clean-Up Campaign",
    detail:
      "Our Help Keep Baltimore Clean initiative is kicking off its summer clean-up campaign with a series of community events. Volunteers will be gathering to clean local parks, streets, and public spaces. Join us in making Baltimore a cleaner and more beautiful place to live!",
    read: "5",
    type: "news",
  },
  {
    image: "/news-image-3.png",
    title: "BEIC Receives Grant for Economic Empowerment Initiatives",
    detail:
      "We are thrilled to share that BEIC has received a substantial grant from the State Government of Maryland to support our economic empowerment initiatives. This funding will allow us to expand our financial literacy workshops, business mentorship programs, and investment resources.",
    read: "5",
    type: "news",
  },
];

export const EVENTS = [
  {
    image: "/events-image-1.png",
    title: "Community Clean-Up Day",
    detail:
      "Join us for a day of community clean-up and beautification. All volunteers are welcome, and supplies will be provided.",
    type: "events",
  },
  {
    image: "/events-image-2.png",
    title: "Vocational Training Information Session",
    detail:
      "Discover the vocational training programs available at UVIA and how they can help you achieve your career goals.",
  },
  {
    image: "/events-image-3.png",
    title: "Financial Literacy Workshop",
    detail:
      "Learn essential skills for managing your finances, including budgeting, saving, and investing. Open to all community members.",
    type: "events",
  },
  {
    image: "/events-image-4.png",
    title: "Health and Wellness Expo",
    detail:
      "Explore a variety of health and wellness resources, including fitness classes, nutrition advice, and mental health support.",
    type: "events",
  },
  {
    image: "/events-image-5.png",
    title: "Business Networking Event",
    detail:
      "Connect with local entrepreneurs, business mentors, and investors. This is a great opportunity to grow your network and learn from industry experts.",
    type: "events",
  },
];

export const STORIES = [
  {
    title: "From Struggle to Success",
    name: "Marcus J.’s Journey",
    detail:
      "Marcus J., a recent graduate of UVIA’s IT program, shares his journey from unemployment to a thriving career in cybersecurity. Marcus credits BEIC for providing the training and support needed to secure a well-paying job and build a brighter future.",
  },
  {
    title: "Entrepreneurial Triumph",
    name: "Keisha L.",
    detail:
      "Keisha L. attended our financial literacy workshops and received business mentorship through BEIC. Today, she runs a successful small business and is a proud employer in her community. Read about her inspiring path to entrepreneurial success.",
  },
  {
    title: "Community Impact",
    name: "David M.",
    detail:
      "David M., a dedicated volunteer with Help Keep Baltimore Clean, shares how participating in our clean-up events has brought positive change to his neighborhood and strengthened community bonds",
  },
];