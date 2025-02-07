import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const experienceData = [
    {
      title: "Next.js Developer - Intern",
      company: "Edupy",
      year: "2024(Nov) - 2025(Jan)",
      description: "Developed interactive learning platforms using Next.js, managed project documentation, and optimized performance.",
    },
    
  ];

  const educationData = [
    {
      degree: "B.Sc. in Software Engineering",
      institution: "Daffodil International University",
      year: "2022 - Present",
      description: "Majoring in Data Science with a focus on full-stack development.",
    },
    {
      degree: "Web Development Course",
      institution: "Programming Hero",
      year: "2023",
      description: "Completed the comprehensive Complete Web Development course on Programming Hero.Acquired hands-on experience with cutting-edge technologies, including React.js, MongoDB, Express.js, and Tailwind CSS.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Cumilla Govt. Womens' College",
      year: "2018 - 2020",
      description: "Studied Science with a strong focus on Mathematics, Physics, and Computer Programming.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto my-16">
      {/* Tabs */}
      <div className="flex justify-center gap-4">
        <button
          className={`px-6 py-2 text-lg font-semibold rounded-md ${
            activeTab === "experience" ? "bg-red-600 text-white" : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setActiveTab("experience")}
        >
          Experience
        </button>
        <button
          className={`px-6 py-2 text-lg font-semibold rounded-md ${
            activeTab === "education" ? "bg-red-600 text-white" : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-6 p-6 border rounded-lg shadow-lg bg-white">
        <AnimatePresence mode="wait">
          {activeTab === "experience" && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-red-600">Experience</h2>
              {experienceData.map((exp, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-gray-700">{exp.company} | {exp.year}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-red-600">Education</h2>
              {educationData.map((edu, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-gray-700">{edu.institution} | {edu.year}</p>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Experience;
