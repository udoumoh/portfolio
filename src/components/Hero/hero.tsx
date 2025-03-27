"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const profileVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="flex flex-col items-center justify-center bg-[#F7F7F7] min-h-svh px-4">
      <motion.div
        className="flex flex-col items-center justify-center max-w-[700px] gap-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          className="flex items-center gap-1 md:gap-3"
          variants={itemVariants}
        >
          <p className="font-inter text-2xl md:text-5xl font-semibold text-gray-800">{`Hey, I'm`}</p>
          <motion.div
            variants={profileVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={"/assets/hero-profile-img.svg"}
              height={90}
              width={90}
              alt="profile picture"
              className="rounded-full"
            />
          </motion.div>
          <p className="font-inter text-2xl md:text-5xl font-semibold text-gray-800">{`John`}</p>
        </motion.span>

        <motion.span
          className="flex flex-col gap-1 md:gap-3"
          variants={itemVariants}
        >
          <motion.p
            className="font-inter text-2xl md:text-5xl font-semibold text-center text-gray-800"
            variants={itemVariants}
          >
            Software Engineer<span className="text-blue-900">(Frontend)</span>
          </motion.p>
          <motion.p
            className="font-inter text-2xl md:text-5xl font-semibold text-center text-gray-800"
            variants={itemVariants}
          >
            with an interest in <span className="text-blue-900">AI/ML</span>
          </motion.p>
        </motion.span>
      </motion.div>

      {/* Subtle background element */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-50 to-transparent opacity-50 -z-10" />
    </section>
  );
};

export default Hero;
