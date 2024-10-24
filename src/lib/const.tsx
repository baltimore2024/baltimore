import { title } from "process";
import { Community, MaterialSymbolHouse, RaphaelGreen } from "./icons";

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
];
