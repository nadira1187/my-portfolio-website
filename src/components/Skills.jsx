"use client"

import { motion } from "framer-motion"
import { FaJs, FaReact } from "react-icons/fa"
import { DiMongodb } from "react-icons/di"
import { SiMysql, SiNextdotjs, SiTailwindcss } from "react-icons/si"

const skills = [
  { name: "React", icon: <FaReact />, color: "from-blue-400 to-cyan-400", level: 90 },
  { name: "JavaScript", icon: <FaJs />, color: "from-yellow-400 to-orange-400", level: 85 },
  { name: "Next.js", icon: <SiNextdotjs />, color: "from-gray-700 to-gray-900", level: 80 },
  { name: "MongoDB", icon: <DiMongodb />, color: "from-green-400 to-emerald-400", level: 75 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "from-teal-400 to-blue-400", level: 88 },
  { name: "MySQL", icon: <SiMysql />, color: "from-blue-600 to-indigo-600", level: 70 },
]

const Skills = () => {
  return (
    <div className="relative py-20 bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gray-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Technical
            <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent"> Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Crafting digital experiences with cutting-edge technologies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 50,
              }}
              className="group relative perspective-1000"
            >
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 h-64 flex flex-col items-center justify-center text-center hover:bg-white/15 transition-all duration-500 transform-gpu">
                {/* Skill level indicator */}
                <div className="absolute top-4 right-4 text-xs font-bold text-white/70">{skill.level}%</div>

                {/* Icon with gradient background */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className={`relative mb-6 p-4 rounded-2xl bg-gradient-to-br ${skill.color} shadow-lg`}
                >
                  <div className="text-4xl text-white drop-shadow-lg">{skill.icon}</div>

                  {/* Floating particles */}
                  <div className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-2 h-2 bg-white rounded-full animate-ping"></div>
                    <div className="absolute top-0 right-0 w-1 h-1 bg-white rounded-full animate-ping delay-200"></div>
                    <div className="absolute bottom-0 left-0 w-1 h-1 bg-white rounded-full animate-ping delay-400"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-white rounded-full animate-ping delay-600"></div>
                  </div>
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors duration-300">
                  {skill.name}
                </h3>

                {/* Progress bar */}
                <div className="w-full bg-white/20 rounded-full h-2 mb-4">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                  ></motion.div>
                </div>

                {/* Hover glow effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
