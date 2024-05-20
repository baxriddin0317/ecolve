"use client";
import React, { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [fixed, setFixed] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 100) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={cn("fixed inset-x-0 z-50 transition-all duration-300 ease-linear", className ,`${fixed ? 'top-0' : 'top-8'}`)}>
      <div className={`absolute size-full ${fixed ? 'bg-white/10 backdrop-blur-sm -z-10' : ''}`}></div>
      <div className="max-w-8xl px-4 mx-auto flex items-center justify-between gap-20 ">
        <Link className="text-white font-bold text-lg" href={'/'}>
          Logo
        </Link>
        <div className={`w-full flex-1 relative flex items-center justify-center gap-4 ${fixed ? '' : 'bg-white/10'} px-8 rounded-full transition-all duration-300 ease-linear`}>
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Services">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Products">
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Algochurn"
                  href="https://algochurn.com"
                  src="https://assets.aceternity.com/demos/algochurn.webp"
                  description="Prepare for tech interviews like never before."
                />
                <ProductItem
                  title="Tailwind Master Kit"
                  href="https://tailwindmasterkit.com"
                  src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                  description="Production ready Tailwind css components for your next project"
                />
                <ProductItem
                  title="Moonbeam"
                  href="https://gomoonbeam.com"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                  description="Never write from scratch again. Go from idea to blog in minutes."
                />
                <ProductItem
                  title="Rogue"
                  href="https://userogue.com"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                  description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Documantation">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Hobby</HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
          <Link href={'#pricing'} className="hover:opacity-[0.9] hover:text-yellow-600 text-white">
            Pricing
          </Link>
        </div>
        <div className="flex items-center gap-2 z-20">
          <button className="w-32 h-10 rounded-xl hover:bg-white/10 text-white font-bold">
            Client Login
          </button>
          <Link href={'#'} className="h-10 flex items-center justify-center hover:underline rounded-xl text-yellow-600 font-bold">
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar