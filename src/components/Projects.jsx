"use client"

import { motion } from "framer-motion"
import { DiGithub } from "react-icons/di"
import { FaEye, FaArrowRight } from "react-icons/fa"

const projects = [
  {
    title: "Lush Beauty",
    image: "https://i.postimg.cc/Kvk3Jspb/Web2.png",
    description: "Explore a dynamic homepage with navigation features, showcasing diverse brand names and images.",
    projectLink: "https://lush-beauty-client.web.app",
    codeLink: "https://github.com/nadira1187/lush-beauty-client",
    tech: ["React", "Firebase", "Tailwind CSS"],
  },
  {
    title: "Stay Zayn",
    image: "https://i.postimg.cc/xCBN2vqh/Web3.png",
    description:
      "Deliver a visually captivating user interface for hotel room bookings, enhancing user engagement with personalized booking management through My Bookings.",
    projectLink: "https://hapless-approval.surge.sh",
    codeLink: "https://github.com/nadira1187/stay-zen-client",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Byte Blitz",
    image: "https://i.postimg.cc/5N1DmZ2Y/Web1.png",
    description:
      "Discover and engage with the latest tech products on our platform, featuring an interactive system for users to upvote, submit, and explore innovations.",
    projectLink: "https://byte-blitz-client.web.app",
    codeLink: "https://github.com/nadira1187/bite-blitz-client",
    tech: ["React", "Express.js", "JWT"],
  },
]

const Projects = () => {
  return (
    <div className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-50 via-white to-red-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-gray-200/30 to-red-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-red-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of innovative solutions and creative implementations
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Floating tech badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-800 rounded-full border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{project.description}</p>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300"
                    >
                      <FaEye className="text-sm" />
                      Live Demo
                      <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.a>
                    <motion.a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-gray-700 to-gray-900 text-white px-4 py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300"
                    >
                      <DiGithub className="text-lg" />
                      Code
                    </motion.a>
                  </div>
                </div>

                {/* Decorative gradient border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/20 via-pink-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
