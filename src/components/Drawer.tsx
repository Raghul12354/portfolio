"use client";

import { useState } from "react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

import Link from "next/link";
import MenuIcon from "@/app/components/Icons/MenuIcon";
import CloseIcon from "@/app/components/Icons/CloseIcon";

const Drawer_comp = () => {
  const [open, setOpen] = useState(false);
  return (
    <Drawer dismissible={false} open={open} direction="left">
      <DrawerTrigger asChild onClick={() => setOpen(true)}>
        <div>
          <MenuIcon />
        </div>
      </DrawerTrigger>
      <DrawerContent className="h-full bg-[#f6f5f2]">
        <DrawerClose
          asChild
          onClick={() => setOpen(false)}
          className="flex justify-end w-full pr-5"
        >
          <button className="border-none w-fit">
            <CloseIcon />
          </button>
        </DrawerClose>
        <div className="flex flex-col gap-12 items-center justify-center h-full">
          <Link className="nav_links" onClick={() => setOpen(false)} href="/">
            Home
          </Link>
          <Link className="nav_links" onClick={() => setOpen(false)} href="#projects">
            Projects
          </Link>
          <Link className="nav_links" onClick={() => setOpen(false)} href="#about">
            About
          </Link>
          <Link className="nav_links" onClick={() => setOpen(false)} href="#contact">
            Contact
          </Link>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Drawer_comp;
