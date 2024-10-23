"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "../ui/select";
import Image from "next/image";
import { NAVLINKS } from "@/lib/const";
import NavLink from "../shared/navlink";
import { SideBarIcon } from "@/lib/icons";
import { useState } from "react";
import { BookOpen } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const openNav = () => {
    setOpen(!open);
  };

  return (
    <div className="">
      <nav className="flex flex-col md:flex-row justify-start md:justify-around md:items-center gap-4 p-4 md:border-b">
        <div className="flex justify-between">
          <div>
            <Image
              src={`/logo-placeholder.svg`}
              alt="logo"
              height="40"
              width="40"
            />
          </div>
          <div className="flex items-center md:hidden gap-4 ">
            <Button className="bg-purple-600 rounded-[10px] text-white">
              Get Started
            </Button>
            <SideBarIcon onClick={openNav} />
          </div>
        </div>

        <div
          className={`${
            open ? "h-[200px]" : "h-0"
          } flex flex-col md:h-[20px]  overflow-clip md:flex-row gap-4`}
        >
          {NAVLINKS.map((link, i) => (
            <NavLink key={i} link={link.link} title={link.title} />
          ))}
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">English</SelectItem>
              <SelectItem value="dark">Deutsch</SelectItem>
              <SelectItem value="system">French</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-purple-600 rounded-[10px] text-white">
            Get Started
          </Button>
        </div>
      </nav>
    </div>
  );
}
