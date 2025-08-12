"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CgArrowTopRight } from "react-icons/cg";
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
    category: "SaaS Platform",
  },
  {
    name: "Greynote Parents",
    description:
      "Greynote Parents is a dashboard designed to connect parents with schools based on their unique location and preferences, simplifying the process of exploring educational options for their children.",
    image: "/projects/greybanner.png",
    logo: "/assets/greyfull.png",
    link: "https://www.youtube.com/@GreynoteLimited/videos",
    technologies: ["NEXT.JS", "CHAKRA-UI", "GRAPHQL", "FRAMER", "TYPESCRIPT"],
    category: "Education Tech",
  },
  {
    name: "Product Kitchen",
    description:
      "Product Kitchen specializes in building software solutions aimed at growing businesses, elevating brands, and engaging more customers. They offer a range of services tailored to meet the unique needs of their clients.",
    image: "/projects/productkitchen.png",
    logo: "/assets/pklogo.svg",
    link: "https://productkitchen.tech/",
    technologies: ["NEXT.JS", "TAILWINDCSS", "SHADCN", "FRAMER", "GSAP"],
    category: "Agency Website",
  },
  {
    name: "Greynote Agents",
    description:
      "Greynote Agents is a platform that empowers individuals to become part of an innovative sales network, providing tools and resources to succeed as sales agents within the Greynote ecosystem.",
    image: "/projects/agentsdashboard.png",
    logo: "/assets/greyfull.png",
    link: "https://www.youtube.com/@GreynoteLimited/videos",
    technologies: ["NEXT.JS", "CHAKRA UI", "GRAPHQL", "FRAMER", "TYPESCRIPT"],
    category: "Sales Platform",
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
    category: "E-commerce",
  },
  {
    name: "The Hectre",
    description:
      "The Hectre is an all-in-one housing platform that simplifies house renting, property listing, and co-sharing. It assists users in finding ideal roommates, exploring rental properties, and listing available spaces.",
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
    category: "PropTech",
  },
  {
    name: "Eazzy-Logistics",
    description:
      "Built the Dashboard for a Logistics Company that provides a platform for users to manage their logistics operations efficiently. It offers features such as shipment tracking, order management, and real-time updates.",
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
    category: "Logistics",
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
  // Animation variants for the grid
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

  const cardVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative bg-white py-24 overflow-hidden" id="works">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-100/20 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Clean section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-full shadow-xl mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium tracking-wide">
              Featured Projects
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight mb-6">
            My Work
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A collection of projects that showcase my expertise in creating 
            impactful digital experiences across various industries and technologies.
          </p>
        </motion.div>

        {/* Clean grid layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
            >
              {/* Clean, minimal card design */}
              <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                
                {/* Project image - dominant and clean */}
                <div className="card-image relative h-[28rem] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Project title and tagline integrated into image */}
                  <div className="absolute top-8 left-8 right-8">
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                      {project.name}
                    </h3>
                    <p className="text-white/90 text-lg leading-relaxed max-w-md drop-shadow-lg">
                      {project.description.length > 80 
                        ? `${project.description.substring(0, 80)}...` 
                        : project.description
                      }
                    </p>
                  </div>
                  
                  {/* Category badge - subtle and clean */}
                  <div className="absolute top-6 right-6">
                    <span className="inline-block bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Minimal bottom content - just essential info */}
                <div className="p-6 bg-white">
                  {/* Tech stack - clean and minimal */}
                  <div className="flex items-center gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <div
                        key={idx}
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                        title={tech}
                      >
                        {techIcons[tech]}
                      </div>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-gray-400 text-xs font-medium">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                  
                  {/* Simple call-to-action */}
                  <Link
                    href={project.link}
                    className="group/link inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>View Project</span>
                    <CgArrowTopRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Clean CTA section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="group px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View All Projects</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Works;
