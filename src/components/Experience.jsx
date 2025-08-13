"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa"

const Experience = () => {
  const [activeTab, setActiveTab] = useState("experience")

  const experienceData = [
    {
      title: "Next.js Developer - Intern",
      company: "Edupy",
      year: "2024(Nov) - 2025(Jan)",
      location: "Remote",
      description:
        "Developed interactive learning platforms using Next.js, managed project documentation, and optimized performance.",
      skills: ["Next.js", "React", "TypeScript", "Performance Optimization"],
    },
  ]

  const educationData = [
    {
      degree: "B.Sc. in Software Engineering",
      institution: "Daffodil International University",
      year: "2022 - Present",
      location: "Dhaka, Bangladesh",
      description: "Majoring in Data Science with a focus on full-stack development.",
      skills: ["Data Science", "Software Engineering", "Full-Stack Development"],
    },
    {
      degree: "Web Development Course",
      institution: "Programming Hero",
      year: "2023",
      location: "Online",
      description:
        "Completed the comprehensive Complete Web Development course on Programming Hero. Acquired hands-on experience with cutting-edge technologies, including React.js, MongoDB, Express.js, and Tailwind CSS.",
      skills: ["React.js", "MongoDB", "Express.js", "Tailwind CSS"],
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Cumilla Govt. Womens' College",
      year: "2018 - 2020",
      location: "Cumilla, Bangladesh",
      description: "Studied Science with a strong focus on Mathematics, Physics, and Computer Programming.",
      skills: ["Mathematics", "Physics", "Computer Programming"],
    },
  ]

  return (
    <div className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-red-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-red-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-gray-200/20 to-red-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-red-600 to-pink-600 bg-clip-text text-transparent mb-4">
            My Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Professional experience and educational background</p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Enhanced Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-2 shadow-xl border border-white/20">
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 flex items-center gap-3 ${
                  activeTab === "experience"
                    ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab("experience")}
              >
                <FaBriefcase />
                Experience
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 flex items-center gap-3 ${
                  activeTab === "education"
                    ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab("education")}
              >
                <FaGraduationCap />
                Education
              </motion.button>
            </div>
          </div>
        </div>

        {/* Enhanced Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "experience" && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {experienceData.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                          <FaBriefcase className="text-white text-2xl" />
                        </div>
                      </div>

                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-600">
                          <span className="font-semibold text-red-600">{exp.company}</span>
                          <div className="flex items-center gap-1">
                            <FaCalendarAlt className="text-sm" />
                            <span>{exp.year}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FaMapMarkerAlt className="text-sm" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-gradient-to-r from-red-100 to-pink-100 text-red-700 rounded-full text-sm font-medium border border-red-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                          <FaGraduationCap className="text-white text-2xl" />
                        </div>
                      </div>

                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                        <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-600">
                          <span className="font-semibold text-red-600">{edu.institution}</span>
                          <div className="flex items-center gap-1">
                            <FaCalendarAlt className="text-sm" />
                            <span>{edu.year}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FaMapMarkerAlt className="text-sm" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4 leading-relaxed">{edu.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {edu.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-gradient-to-r from-red-100 to-pink-100 text-red-700 rounded-full text-sm font-medium border border-red-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Experience
