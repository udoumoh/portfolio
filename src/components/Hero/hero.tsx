"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiCode, HiLightningBolt, HiSparkles } from "react-icons/hi";
import { MdRocketLaunch } from "react-icons/md";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const profileVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -10 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const rotateVariants = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Subtle geometric background elements - minimal and purposeful */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-100/20 to-transparent rounded-full blur-3xl" />
      
      {/* Main content container with perfect proportions */}
      <div className="relative z-10 h-screen flex items-center">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left content - 7 columns on large screens */}
            <motion.div
              className="lg:col-span-7 space-y-12"
              variants={itemVariants}
            >
              {/* Elegant introduction */}
              <motion.div
                className="space-y-8"
                variants={itemVariants}
              >
                {/* Sophisticated welcome element */}
                <motion.div
                  className="inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-full shadow-2xl"
                  variants={itemVariants}
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium tracking-wide">
                    Available for opportunities
                  </span>
                </motion.div>

                {/* Masterful typography hierarchy */}
                <div className="space-y-6">
                  <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[0.9] tracking-tight"
                    variants={itemVariants}
                  >
                    <span className="block">John</span>
                    <span className="block text-gray-400">Udoumoh</span>
                  </motion.h1>
                  
                  <motion.div
                    className="space-y-4"
                    variants={itemVariants}
                  >
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-700">
                      Software Engineer
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 font-medium max-w-lg">
                      Crafting digital experiences that matter. Specializing in{" "}
                      <span className="text-gray-900 font-semibold">
                        AI/ML, PropTech, EduTech & FinTech
                      </span>
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Refined description */}
              <motion.p
                className="text-lg text-gray-600 leading-relaxed max-w-2xl"
                variants={itemVariants}
              >
                I transform complex problems into elegant, user-centered solutions. 
                My approach combines technical expertise with design thinking, 
                creating systems that are both beautiful and functional.
              </motion.p>

              {/* Sophisticated action buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-8"
                variants={itemVariants}
              >
                <motion.button
                  className="group relative px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Explore My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.button>
                
                <motion.button
                  className="px-8 py-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Download Resume
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right content - 5 columns with perfect balance */}
            <motion.div
              className="lg:col-span-5 flex justify-center lg:justify-end"
              variants={itemVariants}
            >
              <motion.div
                className="relative group"
                variants={profileVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Main profile image with sophisticated styling */}
                <div className="relative">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <Image
                      src={"/assets/hero-profile-img.svg"}
                      height={500}
                      width={500}
                      alt="John Udoumoh - Software Engineer"
                      className="w-full h-auto object-cover"
                    />
                    {/* Subtle overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                  </div>
                  
                  {/* Elegant status indicator */}
                  <motion.div
                    className="absolute -top-3 -right-3 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg"
                    variants={pulseVariants}
                    animate="animate"
                  />
                  
                  {/* Floating expertise badges - minimal and purposeful */}
                  <motion.div
                    className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
                    variants={floatingVariants}
                    animate="animate"
                  >
                    <HiCode className="text-blue-600" size={28} />
                  </motion.div>
                  
                  <motion.div
                    className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl"
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: "1s" }}
                  >
                    <MdRocketLaunch className="text-purple-600" size={28} />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
