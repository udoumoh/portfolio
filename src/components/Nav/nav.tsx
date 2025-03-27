"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./mobileNav";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/navigation";

const Nav = ({}) => {
  const router = useRouter();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const navLinks = [
    { name: "About", url: "/" },
    { name: "Projects", url: "/" },
    { name: "Resume", url: "/" },
  ];

  const handleOpenMobileNav = () => {
    setIsMobileNavOpen(true);
  };

  const handleCloseMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 flex transition-all duration-300 py-3 px-6 my-5 w-[50%] rounded-lg backdrop-blur-2xl bg-white shadow-sm  hover:cursor-pointer`}
    >
      <div className="flex w-full items-center justify-between">
        <div className="hover:cursor-pointer" onClick={() => router.push("/")}>
          <Image
            src={"/assets/portfolio-logo.svg"}
            width={28}
            height={28}
            alt="Product-kitchen-logo"
            className="lg:hidden w-[50px] h-[39px] pointer-events-none"
          />
          <Image
            src={"/assets/portfolio-logo.svg"}
            width={48}
            height={48}
            alt="Product-kitchen-logo"
            className="hidden w-[50px] h-[39px] lg:block pointer-events-none"
          />
        </div>

        <div className="hidden lg:flex gap-x-[34px] pl-[69px] items-center">
          {navLinks?.map((link, index) => (
            <Link href={`${link.url}`} key={index}>
              <p
                className={`font-medium font-inter transition-all duration-300 text-base pointer-events-none`}
              >
                {link.name}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <p
          className="lg:hidden font-inter font-normal text-3"
          onClick={handleOpenMobileNav}
        >
          <RxHamburgerMenu size={28} color="#000000" />
        </p>
      </div>
      <MobileNav isOpen={isMobileNavOpen} onClose={handleCloseMobileNav} />
    </nav>
  );
};

export default Nav;
