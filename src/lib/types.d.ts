interface INavLink {
  title: string;
  link: string;
  onClick?: () => void;
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
		icon: React.ReactNode;
		title: string;
		description: string;
	}[];
}

interface ITileCards {
	image: string;
	title: string;
	detail: string;
	read?: string;
	type?: string;
	className?: string;
}

interface IStories {
	title: string;
	name: string;
	detail: string;
}
