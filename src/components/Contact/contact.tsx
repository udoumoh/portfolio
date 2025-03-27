"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socialLinks = [
  {
    icon: <FaGithub className="w-6 h-6" />,
    url: "https://github.com/udoumoh",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin className="w-6 h-6" />,
    url: "https://www.linkedin.com/in/johnudoumoh/",
    label: "LinkedIn",
  },
  {
    icon: <FaTwitter className="w-6 h-6" />,
    url: "https://twitter.com/JohnUdoumoh",
    label: "Twitter",
  },
  {
    icon: <MdEmail className="w-6 h-6" />,
    url: "mailto:johnudoumoh63@gmail.com",
    label: "Email",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section className="py-10 bg-[#F7F7F7]">
      <div className="flex flex-col items-center mb-10">
        <h2 className="font-spaceMono text-4xl font-semibold">CONTACT</h2>
        <span className="relative -top-5 left-10 -z-50 h-5 w-10 bg-blue-700/20"></span>
      </div>

      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="font-spaceMono text-2xl font-semibold mb-4">
            Get in Touch
          </h3>
          <p className="font-inter text-lg mb-6">
            I'm always open to new opportunities and collaborations. Feel free
            to reach out!
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white p-3 rounded-full border border-[#e0e0e0] hover:border-blue-700 transition-colors"
                whileHover={{ y: -5 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#e0e0e0]">
            <h4 className="font-spaceMono text-xl font-semibold mb-2">
              Location
            </h4>
            <p className="font-inter">Lagos, Nigeria</p>

            <h4 className="font-spaceMono text-xl font-semibold mt-4 mb-2">
              Email
            </h4>
            <p className="font-inter">johnudoumoh63@gmail.com</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-[#e0e0e0]">
          <h3 className="font-spaceMono text-2xl font-semibold mb-4">
            Send a Message
          </h3>

          {submitSuccess ? (
            <motion.div
              className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Thank you for your message! I'll get back to you soon.
            </motion.div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block font-spaceMono text-sm font-medium mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700/50"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-spaceMono text-sm font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700/50"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-spaceMono text-sm font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700/50"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-black text-white font-spaceMono font-semibold px-8 py-3 rounded-full flex items-center gap-2 hover:bg-blue-700 transition-colors disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
