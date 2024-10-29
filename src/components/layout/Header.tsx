"use client";
import { Button } from "@/components/ui/button";
import { NAVLINKS } from "@/lib/const";
import { NavBarIcon } from "@/lib/icons";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavLink from "../shared/navlink";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";

export default function Header() {
	const [open, setOpen] = useState(false);
	const [hasScrolled, setHasScrolled] = useState(false);

	const openNav = () => {
		setOpen(!open);
	};

	const pathName = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setHasScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div
			className={`fixed z-50 w-full transition-all ${
				hasScrolled ? "bg-white" : "bg-transparent"
			} ${open ? "bg-white" : ""} `}
		>
			<nav
				className={`container mx-auto flex flex-col justify-start space-x-4 p-4 md:flex-row md:items-center md:justify-between md:border-b ${
					hasScrolled ? "md:border-b" : "md:border-b-0"
				} `}
			>
				<div className="flex justify-between">
					<div>
						<Image
							src={`/logo-placeholder.svg`}
							alt="logo"
							height="40"
							width="40"
						/>
					</div>
					<div className="flex items-center gap-4 md:hidden">
						<Button className="rounded-[10px] bg-[#6951DC] text-white">
							Get Started
						</Button>
						<NavBarIcon
							className={`${
								hasScrolled
									? "text-black"
									: pathName === "/"
										? "text-white"
										: "text-black"
							}`}
							onClick={openNav}
						/>
					</div>
				</div>

				<div
					className={`${
						open ? "" : "h-0"
					} flex flex-col gap-4 overflow-clip md:h-[20px] md:flex-row md:gap-6`}
				>
					{NAVLINKS.map((link, i) => (
						<div
							key={i}
							onClick={() => {
								setOpen(false);
							}}
						>
							<NavLink
								className={` ${
									hasScrolled
										? "text-black"
										: pathName === "/"
											? "md:text-white"
											: "text-black"
								}`}
								link={link.link}
								title={link.title}
							/>
						</div>
					))}
				</div>
				<div className="hidden items-center gap-4 md:flex">
					<Select>
						<SelectTrigger
							className={`w-[180px ${
								hasScrolled
									? "text-black"
									: pathName === "/"
										? "md:text-white"
										: "text-black"
							} `}
						>
							<SelectValue placeholder="Language" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="english">English</SelectItem>
							{/* <SelectItem value="deutsch">Deutsch</SelectItem>
							<SelectItem value="french">French</SelectItem> */}
						</SelectContent>
					</Select>
					<Button className="rounded-[10px] bg-[#6951DC] text-white">
						Get Started
					</Button>
				</div>
			</nav>
		</div>
	);
}
