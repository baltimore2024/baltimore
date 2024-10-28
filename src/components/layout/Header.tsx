"use client";
import { Button } from "@/components/ui/button";
import { NAVLINKS } from "@/lib/const";
import { NavBarIcon } from "@/lib/icons";
import Image from "next/image";
import { useState } from "react";
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

  const openNav = () => {
    setOpen(!open);
  };

  return (
    <div className="fixed w-full z-50 bg-white">
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
            <Button className="bg-[#6951DC] rounded-[10px] text-white">
              Get Started
            </Button>
            <NavBarIcon onClick={openNav} />
          </div>
        </div>

        <div
          className={`${
            open ? "h-[200px]" : "h-0"
          } flex flex-col md:h-[20px]  overflow-clip md:flex-row gap-4`}
        >
          {NAVLINKS.map((link, i) => (
            <div
              key={i}
              onClick={() => {
                setOpen(false);
              }}
            >
              <NavLink link={link.link} title={link.title} />
            </div>
          ))}
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="deutsch">Deutsch</SelectItem>
              <SelectItem value="french">French</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-[#6951DC] rounded-[10px] text-white">
            Get Started
          </Button>
        </div>
      </nav>
    </div>
  );
}
