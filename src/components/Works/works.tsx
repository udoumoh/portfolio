"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CgArrowTopRight } from "react-icons/cg";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiChakraui,
  SiTypescript,
  SiNodedotjs,
  SiFramer,
  SiGreensock,
  SiGraphql,
  SiReactquery,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const projects = [
  {
    name: "SalesKonnect",
    description:
      "SalesKonnect is a platform that seamlessly connects businesses with a dynamic sales force, enabling companies to expand their reach without the overhead of managing an in-house team. Simultaneously, it offers individuals flexible and rewarding sales opportunities, complete with training and support to ensure success.",
    image: "/projects/saleskonnect.png",
    logo: "/assets/sklogo.png",
    link: "https://sk.productkitchen.tech/",
    technologies: ["NEXT.JS", "TAILWINDCSS", "SHADCN", "FRAMER"],
  },
  {
    name: "Greynote Parents",
    description:
      "Greynote Parents is a dashboard designed to connect parents with schools based on their unique location and preferences, simplifying the process of exploring educational options for their children. ​",
    image: "/projects/greybanner.png",
    logo: "/assets/greyfull.png",
    link: "https://www.youtube.com/@GreynoteLimited/videos",
    technologies: ["NEXT.JS", "CHAKRA-UI", "GRAPHQL", "FRAMER", "TYPESCRIPT"],
  },
  {
    name: "Product Kitchen",
    description:
      "Product Kitchen specializes in building software solutions aimed at growing businesses, elevating brands, and engaging more customers. They offer a range of services tailored to meet the unique needs of their clients.",
    image: "/projects/productkitchen.png",
    logo: "/assets/pklogo.svg",
    link: "https://productkitchen.tech/",
    technologies: ["NEXT.JS", "TAILWINDCSS", "SHADCN", "FRAMER", "GSAP"],
  },
  {
    name: "Greynote Agents",
    description:
      "Greynote Agents is a platform that empowers individuals to become part of an innovative sales network, providing tools and resources to succeed as sales agents within the Greynote ecosystem.",
    image: "/projects/agentsdashboard.png",
    logo: "/assets/greyfull.png",
    link: "https://www.youtube.com/@GreynoteLimited/videos",
    technologies: ["NEXT.JS", "CHAKRA UI", "GRAPHQL", "FRAMER", "TYPESCRIPT"],
  },
  {
    name: "Ojami",
    description:
      "Ojami is a shopping platform powered by Kora, offering users a new and immersive shopping experience. It features store discovery, product listings, and advanced tools like 3D product visualization and an AI shopping assistant.",
    image: "/projects/vendor-mobile.png",
    logo: "/assets/ojami-logo.png",
    link: "https://ojami.shop/",
    technologies: [
      "NEXT.JS",
      "CHAKRA UI",
      "REST API",
      "FRAMER",
      "TYPESCRIPT",
      "NODE JS",
    ],
  },
  {
    name: "The Hectre",
    description:
      "The Hectre is an all-in-one housing platform that simplifies house renting, property listing, and co-sharing. It assists users in finding ideal roommates, exploring rental properties, and listing available spaces, catering to both newcomers and current residents seeking shared accommodations.",
    image: "/projects/theHectre.png",
    logo: "/assets/theHectre-logo.png",
    link: "https://thehectre-frontend.vercel.app/",
    technologies: [
      "NEXT.JS",
      "CHAKRA UI",
      "REST API",
      "FRAMER",
      "TYPESCRIPT",
      "NODE JS",
    ],
  },
  {
    name: "Eazzy-Logistics",
    description:
      "Built the Dahboard for a Logistics Company that provides a platform for users to manage their logistics operations efficiently. It offers features such as shipment tracking, order management, and real-time updates to streamline the logistics process.",
    image: "/projects/eazzy-logistics.png",
    logo: "/assets/eazzy-logo.svg",
    link: "https://eazzy-logistics.productkitchen.tech/",
    technologies: [
      "NEXT.JS",
      "TAILWINDCSS",
      "REST API",
      "TYPESCRIPT",
      "TANSTACK QUERY",
    ],
  },
];

// Map technology names to their respective icons
const techIcons: Record<string, any | null> = {
  "NEXT.JS": <SiNextdotjs />,
  TAILWINDCSS: <SiTailwindcss />,
  SHADCN: <SiNextdotjs />,
  FRAMER: <SiFramer />,
  "CHAKRA UI": <SiChakraui />,
  GRAPHQL: <SiGraphql />,
  TYPESCRIPT: <SiTypescript />,
  "NODE JS": <SiNodedotjs />,
  "REST API": <TbApi />,
  GSAP: <SiGreensock />,
  "TANSTACK QUERY": <SiReactquery />,
};

const Works = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const nextProject = () => {
    if (isAnimating) return;
    setDirection(1);
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevProject = () => {
    if (isAnimating) return;
    setDirection(-1);
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const variants = {
    enter: (direction: any) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: any) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const currentProject = projects[activeIndex];

  return (
    <section className="bg-black text-white py-16" id="works">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-12">
          <h2 className="font-spaceMono text-4xl font-semibold text-white z-10">
            FEATURED WORK
          </h2>
          <span className="relative -top-5 left-32 -z-10 h-5 w-10 bg-blue-700/50"></span>
          <p className="text-center max-w-2xl font-inter text-gray-300 mt-4">
            Explore my portfolio of projects showcasing expertise in frontend
            development, UI/UX design, and creating engaging digital
            experiences.
          </p>
        </div>

        {/* Project counter */}
        <div className="flex justify-between items-center mb-8">
          <div className="font-spaceMono text-sm text-gray-400">
            <span className="text-white text-xl font-bold">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span className="mx-2">/</span>
            <span>{String(projects.length).padStart(2, "0")}</span>
          </div>

          <div className="flex gap-4">
            <button
              onClick={prevProject}
              className="p-3 border border-gray-700 rounded-full hover:bg-gray-800 transition-colors"
              aria-label="Previous project"
            >
              <FiArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextProject}
              className="p-3 border border-gray-700 rounded-full hover:bg-gray-800 transition-colors"
              aria-label="Next project"
            >
              <FiArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Project showcase */}
        <div ref={containerRef} className="relative overflow-hidden">
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="w-full"
          >
            <div
              className={`grid ${
                isMobile ? "grid-cols-1 gap-8" : "grid-cols-2 gap-12"
              } items-center`}
            >
              {/* Project image */}
              <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-xl">
                {/* Background Blurred Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center blur-2xl scale-110"
                  style={{
                    backgroundImage: `url(${
                      currentProject.image || "/placeholder.svg"
                    })`,
                  }}
                ></div>

                {/* Foreground Image (Object Contain) */}
                <Image
                  src={currentProject.image || "/placeholder.svg"}
                  alt={currentProject.name}
                  fill
                  className="relative object-contain object-center"
                />
              </div>

              {/* Project details */}
              <div className="flex flex-col">
                <div className="bg-gray-300 p-2 rounded-md inline-block mb-6 w-fit border-2 border-purple-100">
                  <Image
                    width={120}
                    height={40}
                    src={currentProject.logo || "/placeholder.svg"}
                    alt={`${currentProject.name} logo`}
                    className="h-5 object-contain"
                  />
                </div>

                <h3 className="font-spaceMono text-3xl font-bold mb-4">
                  {currentProject.name}
                </h3>

                <p className="font-inter text-gray-300 mb-8">
                  {currentProject.description}
                </p>

                {/* Technology tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {currentProject.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1 bg-gray-800 px-3 py-2 rounded-md text-xs font-spaceMono"
                    >
                      <span className="text-xs mr-1">
                        {techIcons[tech] || null}
                      </span>
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={currentProject.link}
                  className="flex items-center gap-2 text-white border-b border-gray-700 w-fit hover:text-blue-400 hover:border-blue-400 transition-colors pb-1 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="font-spaceMono text-sm font-semibold">
                    View Project
                  </span>
                  <CgArrowTopRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Project navigation dots */}
        <div className="flex justify-center mt-12 gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (isAnimating) return;
                setDirection(index > activeIndex ? 1 : -1);
                setIsAnimating(true);
                setActiveIndex(index);
                setTimeout(() => setIsAnimating(false), 500);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex ? "bg-white scale-125" : "bg-gray-600"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
