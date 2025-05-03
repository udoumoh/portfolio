"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./mobileNav";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const navLinks = [
    { name: "About", url: "#about" },
    { name: "Projects", url: "#works" },
    {
      name: "Resume",
      url: "https://drive.google.com/file/d/1IGxGqFqCc_ntxF5Bu13Dzwg0AS8fbHR0/view?usp=sharing",
    },
  ];

  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 flex transition-all duration-300 py-3 px-6 my-5 w-[50%] rounded-lg backdrop-blur-3xl bg-[#ffffffd0] shadow-sm border-black border-2 hover:cursor-pointer">
      <div className="flex w-full items-center justify-between">
        <div className="hover:cursor-pointer" onClick={() => router.push("/")}>
          <Image
            src={"/assets/portfolio-logo.svg"}
            width={48}
            height={48}
            alt="Product-kitchen-logo"
            className="w-[50px] h-[39px] pointer-events-none"
          />
        </div>

        <div className="hidden lg:flex gap-x-[34px] pl-[69px] items-center">
          {navLinks?.map((link, index) => (
            <Link href={link.url} key={index}>
              <p className="relative font-medium font-inter transition-all duration-300 text-base hover:text-gray-700 after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                {link.name}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <p
          className="lg:hidden font-inter font-normal text-3"
          onClick={() => setIsMobileNavOpen(true)}
        >
          <RxHamburgerMenu size={28} color="#000000" />
        </p>
      </div>
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </nav>
  );
};

export default Nav;
