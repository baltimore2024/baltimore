interface INavLink {
  title: string;
  link: string;
}

interface IconType {
  className?: string;
  onClick?: () => void;
  width?: string;
  height?: string;
}

interface IInitiativeCards {
  serial: string;
  order: string;
  mainTitle: string;
  mainDescription: string;
  subInfo: {
    icon: any;
    title: string;
    description: string;
  }[];
}