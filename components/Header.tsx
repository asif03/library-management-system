"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex flex-row items-center justify-between py-16">
      <Image src="icons/logo.svg" alt="Logo" width={176} height={32} />
      <nav className="flex flex-row items-center justify-between text-xl text-secondary">
        <ul className="flex items-center justify-center gap-8">
          <li
            className={cn(
              "",
              pathname === "/" ? "text-primary" : "text-secondary",
            )}
          >
            <Link href="">Home</Link>
          </li>
          <li>Search</li>
          <li className="flex flex-row items-center justify-center gap-1 text-secondary">
            <Image
              src="icons/profile.svg"
              alt="avatar"
              width={32}
              height={32}
              className="h-8 w-8 rounded-full"
            />
            <p>Asif</p>
          </li>
          <li>
            <Image
              src="/icons/logout.svg"
              alt="Logout"
              width="24"
              height="24"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
