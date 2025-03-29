"use client";
import { type FC, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { DialogTitle } from "@/components/ui/dialog";
import { IoClose } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

  // Prevent scrolling when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "About", url: "/#about" },
    { name: "Projects", url: "/#projects" },
    { name: "Skills", url: "/#skills" },
    { name: "Resume", url: "/resume" },
    { name: "Contact", url: "/#contact" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      url: "https://github.com/udoummoh",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin size={20} />,
      url: "https://linkedin.com/in/johnudoumoh",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter size={20} />,
      url: "https://twitter.com/johnudoumoh",
      label: "Twitter",
    },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="flex flex-col h-[100vh] p-0 bg-[#F7F7F7] border-l border-gray-200 w-[85%] max-w-[400px]"
      >
        {/* Hidden Title for Accessibility */}
        <DialogTitle className="sr-only">Mobile Navigation</DialogTitle>

        <div className="p-6 border-b border-gray-200">
          <div className="w-full flex justify-between items-center">
            <Link href="/" className="" onClick={onClose}>
              <div className="flex items-center gap-2">
                <Image
                  height={40}
                  width={40}
                  alt="Portfolio logo"
                  src="/assets/portfolio-logo.svg"
                  className="h-[35px] w-auto"
                />
              </div>
            </Link>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Close navigation menu"
            >
              <IoClose size={24} className="text-gray-800" />
            </button>
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
              },
            },
          }}
          className="flex flex-col px-6 py-8 flex-grow"
        >
          <div className="space-y-6 mb-auto">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                <Link
                  href={link.url}
                  className="block text-xl font-inter font-medium text-gray-800 hover:text-blue-600 transition-colors border-b border-gray-200 pb-3"
                  onClick={onClose}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-auto"
          >
            <Link href="/#contact" onClick={onClose}>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-inter font-medium hover:bg-blue-700 transition-colors mb-6">
                Get in Touch
              </button>
            </Link>

            <div className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-1 text-gray-700 hover:text-blue-600"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            <p className="text-center text-gray-500 text-sm mt-6 font-inter">
              © {new Date().getFullYear()} John. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
