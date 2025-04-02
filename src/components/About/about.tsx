'use client'
import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";
import { FaRegFileAlt } from "react-icons/fa";
import ShinyText from "../reactbits/ShinyText";
import BlurText from "../reactbits/BlurText";
const About = ({}) => {

  return (
    <section className="flex flex-col py-10" id="about">
      <div className="flex flex-col items-center">
        <h2 className="font-spaceMono text-4xl font-semibold">ABOUT</h2>
        <span className="relative -top-5 left-10 -z-50 h-5 w-10 bg-blue-700/20"></span>
      </div>
      <div className="max-w-6xl mx-auto px-8 my-5">
        <BlurText
          text="A developer with a passion for building things from the ground up and
          bringing them to life. I also enjoy enhancing outdated or existing
          applications, giving them a fresh, modern touch. My focus is on
          crafting cutting-edge, elegant, and accessible user experiences. I'm
          deeply passionate about the web, naturally curious, and committed to
          continuous learning while taking responsibility for solving real-world
          problems."
          delay={20}
          animateBy="words"
          direction="top"
          className="text-md md:text-2xl font-inter font-medium text-black leading-[30px] md:leading-[50px]"
        />
        <div className="flex mt-12 mb-6 gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 py-1 border-b-2 border-black"
          >
            <p className="font-spaceMono text-[10px] md:text-sm font-semibold">Read More</p>
            <CgArrowTopRight className="w-5 h-5" />
          </Link>
          <button className="flex items-center bg-black px-4 md:px-8 rounded-full gap-4 py-2">
            <a
              className="font-semibold font-spaceMono text-white text-[10px] md:text-base"
              href="/files/resume.pdf"
              download="John_Udoumoh_CV.pdf"
            >
              <ShinyText
                text={`DOWNLOAD CV `}
                disabled={false}
                speed={2}
                className="custom-class"
              />
            </a>
            <FaRegFileAlt className="w-3 h-3 md:w-4 md:h-4 text-[#f1f1f1c4]" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default About
// {
  /* <motion.div
  className="space-y-6 text-md text-center text-black font-inter"
  variants={containerVariants}
>
  <p className="transition duration-300 font-semibold">
    {`Hello, I'm`}{" "}
    <span className="font-semibold text-purple-500 cursor-pointer">
      John David Udoumoh
    </span>{" "}
    — a passionate software engineer dedicated to creating engaging digital
    experiences that push the boundaries of modern web development. I thrive on
    building robust applications from scratch and rejuvenating existing
    platforms with innovative features that make them shine.
  </p>

  <p className="transition duration-300">
    My journey began in 2018 with a deep dive into{" "}
    <span className="font-semibold text-purple-500 cursor-pointer">
      JavaScript
    </span>
    , <span className="font-semibold text-purple-500 cursor-pointer">HTML</span>
    , and{" "}
    <span className="font-semibold text-purple-500 cursor-pointer">CSS</span>,
    which naturally evolved into mastering{" "}
    <span className="font-semibold text-purple-500 cursor-pointer">React</span>
    {`. Over the years, I've expanded my expertise to include backend
            technologies such as`}{" "}
    <span className="font-semibold text-purple-500 cursor-pointer">
      Node.js
    </span>
    ,{" "}
    <span className="font-semibold text-purple-500 cursor-pointer">
      Express
    </span>
    ,{" "}
    <span className="font-semibold text-purple-500 cursor-pointer">
      MongoDB
    </span>
    ,{" "}
    <span className="font-semibold text-purple-500 cursor-pointer">NestJS</span>
    , and{" "}
    <span className="font-semibold text-purple-500 cursor-pointer">
      GraphQL
    </span>
    {`, enabling me to deliver comprehensive, full-stack solutions. In the
            realm of frontend development, I've embraced advanced systems design
            principles to architect scalable and maintainable web applications.
            I've implemented state management strategies, code splitting,
            memoization, and even transformed web apps into seamless Progressive
            Web Apps (PWAs) to ensure high performance and accessibility.`}
  </p>

  <p className="transition duration-300">
    {`Beyond traditional web development, I have a growing interest in`}{" "}
    <span className="font-semibold text-purple-500 cursor-pointer">AI/ML</span>{" "}
    {`and am currently diving into the exciting world of`}{" "}
    <span className="font-semibold text-purple-500 cursor-pointer">
      {`agentic AI`}
    </span>
    {` . I’m fascinated by how intelligent agents can autonomously tackle
            complex tasks and drive innovative solutions. This emerging field
            represents a new frontier in technology, and I'm eager to explore
            how these advancements can be integrated into future projects to
            create smarter, more responsive applications.`}
  </p>

  <p className="transition duration-300">
    {` I'm a lifelong learner who is always curious and committed to
            solving real-world problems through technology. Whether working
            independently or collaborating with diverse teams, I aim to deliver
            solutions that are both cutting-edge and user-centric.`}
  </p>
</motion.div>; */
// }