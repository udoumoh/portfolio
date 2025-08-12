"use client";
import { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiDocumentText } from "react-icons/hi";
import { MdWork } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const Nav = () => {
  const router = useRouter();

  const navLinks = [
    { name: "Resume", url: "/files/01_John_Udoumoh_Resume.pdf", icon: <HiDocumentText size={20} /> },
    { name: "Projects", url: "#works", icon: <MdWork size={20} /> },
    { name: "Work with me", url: "mailto:johnudoumoh63@gmail.com", icon: <IoMail size={20} /> },
  ];

  return (
    <div className="flex w-full justify-center">
      <nav className="fixed bottom-0 md:top-0 md:bottom-auto md:left-1/2 transform md:-translate-x-1/2 z-50 flex transition-all duration-300 py-2 px-3 my-4 w-[70vw] max-w-[40vw] lg:max-w-[50vw] rounded-full backdrop-blur-3xl bg-black/10 md:bg-[#ffffffd0] border-gray-300 border-[1.5px]">
        <div className="flex w-full items-center justify-between">
          {/* Logo / Avatar */}
          <div
            className="hidden md:flex items-center hover:cursor-pointer gap-2"
            onClick={() => router.push("/")}
          >
            <Avatar className="h-8 w-8">
              <AvatarImage
                src="/assets/profileImgLight.png"
                className="bg-cover md:hidden"
              />
              <AvatarImage
                src="/assets/profileImg.png"
                className="bg-cover hidden md:block"
              />
              <AvatarFallback>JU</AvatarFallback>
            </Avatar>
            <p className="hidden md:block font-spaceMono font-medium">
              John Udoumoh
            </p>
          </div>

                     {/* Desktop Nav Links */}
           <div className="hidden md:flex gap-x-[34px] pl-[69px] items-center">
             {navLinks.map((link, idx) => (
               <Link
                 href={link.url}
                 target={idx === 0 ? "_blank" : ""}
                 rel="noopener noreferrer"
                 key={idx}
               >
                 <p
                   className={cn(
                     "relative font-medium font-spaceMono transition-all duration-300 text-sm hover:text-gray-700",
                     idx === 2
                       ? "border-[1.5px] rounded-full px-3 py-2 shadow-lg shadow-border transition-all duration-300 hover:scale-105 active:scale-95"
                       : ""
                   )}
                 >
                   {link.name}
                 </p>
               </Link>
             ))}
           </div>

           {/* Mobile Bottom Nav */}
           <div className="md:hidden flex w-full items-center justify-between px-4">
             {navLinks.map((link, idx) => (
               <Link
                 href={link.url}
                 target={idx === 0 ? "_blank" : ""}
                 rel="noopener noreferrer"
                 key={idx}
                 className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors"
               >
                 {link.icon}
                 <span className="text-[10px] font-semibold">{link.name}</span>
               </Link>
             ))}
           </div>
         </div>
      </nav>
    </div>
  );
};

export default Nav;
