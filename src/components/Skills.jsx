import { motion } from "framer-motion";
import { FaJs, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiMysql, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "MongoDB", icon: <DiMongodb /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "MySQL", icon: <SiMysql /> },
];

const Skills = () => {
  return (
    <div className="mt-10 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-blue-950">Professional Skills</h2>
      <p className="text-center mb-5 text-blue-950">This section highlights my key professional skills and areas of expertise developed through experience and education.</p>

      {/* Grid Layout */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileTap={{ scale: 1.1, rotate: 5 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 w-72 h-40 bg-blue-950 shadow-xl rounded-xl text-white text-center flex flex-col justify-center items-center 
                       transition-all duration-300 border border-blue-700 hover:shadow-blue-500/50"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: -10 }}
              className="text-6xl text-blue-400 mb-3"
            >
              {skill.icon}
            </motion.div>
            <h3 className="text-2xl font-semibold">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
