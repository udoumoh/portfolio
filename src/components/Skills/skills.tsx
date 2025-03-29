"use client";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiGraphql,
  SiTailwindcss,
  SiBootstrap,
  SiChakraui,
//   SiMaterialui,
  SiFramer,
  SiGreensock,
  SiGit,
//   SiAmazonaws,
  SiLinux,
  SiPostman,
  SiStyledcomponents,
  SiFlask,
  SiMysql,
  SiFigma,
  SiAntdesign,
  SiMaterialdesign,
  SiAmazon,
} from "react-icons/si";
import { TbSeo } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { TbApi } from "react-icons/tb";

// Organize skills by category
const skillCategories = [
  {
    name: "Frontend Development",
    skills: [
      {
        name: "React.js",
        icon: <SiReact />,
        color: "bg-blue-50 border-blue-200 text-blue-700",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        color: "bg-black text-white border-gray-700",
      },
      {
        name: "TypeScript",
        icon: <BiLogoTypescript />,
        color: "bg-blue-100 border-blue-300 text-blue-800",
      },
      {
        name: "Styled Components",
        icon: <SiStyledcomponents />,
        color: "bg-pink-50 border-pink-200 text-pink-700",
      },
    ],
  },
  {
    name: "Backend & Databases",
    skills: [
      {
        name: "Node.js",
        icon: <SiNodedotjs />,
        color: "bg-green-50 border-green-200 text-green-700",
      },
      {
        name: "GraphQL",
        icon: <SiGraphql />,
        color: "bg-pink-50 border-pink-200 text-pink-700",
      },
      {
        name: "Flask",
        icon: <SiFlask />,
        color: "bg-gray-100 border-gray-300 text-gray-700",
      },
      {
        name: "SQL",
        icon: <SiMysql />,
        color: "bg-blue-50 border-blue-200 text-blue-700",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        color: "bg-green-50 border-green-200 text-green-700",
      },
    ],
  },
  {
    name: "UI Frameworks & Libraries",
    skills: [
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        color: "bg-cyan-50 border-cyan-200 text-cyan-700",
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap />,
        color: "bg-purple-50 border-purple-200 text-purple-700",
      },
      {
        name: "Chakra UI",
        icon: <SiChakraui />,
        color: "bg-teal-50 border-teal-200 text-teal-700",
      },
      {
        name: "Material UI",
        icon: <SiMaterialdesign />,
        color: "bg-blue-50 border-blue-200 text-blue-700",
      },
      {
        name: "Shadcn",
        icon: <SiNextdotjs />,
        color: "bg-gray-800 text-gray-100 border-gray-600",
      },
      {
        name: "Ant Design",
        icon: <SiAntdesign />,
        color: "bg-red-50 border-red-200 text-red-700",
      },
    ],
  },
  {
    name: "State Management & API",
    skills: [
      {
        name: "Tanstack Query",
        icon: <TbApi />,
        color: "bg-red-50 border-red-200 text-red-700",
      },
      {
        name: "Postman",
        icon: <SiPostman />,
        color: "bg-orange-50 border-orange-200 text-orange-700",
      },
      {
        name: "REST API",
        icon: <TbApi />,
        color: "bg-blue-50 border-blue-200 text-blue-700",
      },
    ],
  },
  {
    name: "Design & Animation",
    skills: [
      {
        name: "Framer Motion",
        icon: <SiFramer />,
        color: "bg-purple-50 border-purple-200 text-purple-700",
      },
      {
        name: "GSAP",
        icon: <SiGreensock />,
        color: "bg-green-50 border-green-200 text-green-700",
      },
      {
        name: "Figma",
        icon: <SiFigma />,
        color: "bg-purple-50 border-purple-200 text-purple-700",
      },
      {
        name: "SEO",
        icon: <TbSeo />,
        color: "bg-yellow-50 border-yellow-200 text-yellow-700",
      },
    ],
  },
];

const SkillItem = ({ skill } : any) => {
  return (
    <motion.div
      className={`rounded-lg px-4 py-3 border ${skill.color} hover:shadow-md transition-all`}
      whileHover={{ y: -5, scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-2">
        <span className="text-xl">{skill.icon}</span>
        <p className="font-spaceMono text-sm font-medium">{skill.name}</p>
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ category, index }: { category: any; index: number }) => {
  return (
    <motion.div
      className="mb-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h3 className="font-spaceMono text-xl font-semibold mb-4 flex items-center">
        <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-2 text-sm font-bold">
          {index + 1}
        </span>
        {category.name}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {category.skills.map((skill: any, idx: any) => (
          <SkillItem key={idx} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="py-16 bg-white" id="skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <h2 className="font-spaceMono text-4xl font-semibold">SKILLS</h2>
          <span className="relative -top-5 left-10 -z-50 h-5 w-10 bg-blue-700/20"></span>
          <p className="text-center max-w-2xl font-inter text-gray-600 mt-4">
            My technical toolkit includes a wide range of technologies and
            frameworks that I use to build modern, responsive, and user-friendly
            applications.
          </p>
        </div>

        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-inter text-gray-600">
            Always learning and exploring new technologies to stay at the
            cutting edge of web development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
