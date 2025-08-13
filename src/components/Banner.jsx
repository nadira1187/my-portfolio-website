"use client"

import { motion, AnimatePresence } from "framer-motion"
import { SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss } from "react-icons/si"
import { FiDownload, FiArrowRight, FiStar } from "react-icons/fi"
import { useState, useEffect } from "react"
import jsPDF from "jspdf"

const pdfFile = "/resume.pdf"

export default function Banner() {
  const [isDownloading, setIsDownloading] = useState(false)

  const downloadFileUrl = async (url) => {
    setIsDownloading(true)
    try {
      // First try to download the existing PDF file
      const response = await fetch(url)
      if (response.ok) {
        const blob = await response.blob()
        const fileName = "Nadira_Resume.pdf"
        const aTag = document.createElement("a")
        aTag.href = URL.createObjectURL(blob)
        aTag.setAttribute("download", fileName)
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
        URL.revokeObjectURL(aTag.href)
      } else {
        // If PDF doesn't exist, generate a simple one
        generateResumePDF()
      }

      // Simulate download time for better UX
      setTimeout(() => setIsDownloading(false), 2000)
    } catch (error) {
      console.error("Download failed:", error)
      // Fallback to generating PDF
      generateResumePDF()
      setTimeout(() => setIsDownloading(false), 2000)
    }
  }

  const generateResumePDF = () => {
    const doc = new jsPDF()

    // Add header
    doc.setFontSize(32)
    doc.setTextColor("#dc2626")
    doc.text("Nadira", 10, 20)
    doc.setFontSize(18)
    doc.setTextColor("#666")
    doc.text("Web Developer & UI/UX Designer", 10, 30)
    doc.setFontSize(14)
    doc.setTextColor("#666")
    doc.text("Email: nadira@example.com | Phone: +1234567890 | Portfolio: nadira-portfolio.com", 10, 40)
    doc.setLineWidth(2)
    doc.setDrawColor("#dc2626")
    doc.line(10, 45, 200, 45)

    // Add professional summary
    doc.setFontSize(20)
    doc.setTextColor("#dc2626")
    doc.text("Professional Summary", 10, 60)
    doc.setFontSize(14)
    doc.setTextColor("#333")
    doc.text(
      "Passionate Web Developer and UI/UX Designer with expertise in creating innovative digital experiences. Skilled in modern web technologies and committed to delivering high-quality, user-centered solutions.",
      10,
      70,
    )

    // Add technical skills
    doc.setFontSize(20)
    doc.setTextColor("#dc2626")
    doc.text("Technical Skills", 10, 90)
    const skills = [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "UI/UX Design",
      "Responsive Design",
      "Git",
    ]
    let x = 10
    let y = 100
    skills.forEach((skill) => {
      doc.setTextColor("#f3f4f6")
      doc.setFillColor("#333")
      doc.rect(x, y, doc.getStringUnitWidth(skill) * 10 + 24, 20, "F")
      doc.setTextColor("#333")
      doc.text(skill, x + 12, y + 12)
      x += doc.getStringUnitWidth(skill) * 10 + 34
      if (x > 200) {
        x = 10
        y += 30
      }
    })

    // Add experience
    doc.setFontSize(20)
    doc.setTextColor("#dc2626")
    doc.text("Experience", 10, y + 20)
    doc.setFontSize(16)
    doc.setTextColor("#333")
    doc.text("Web Developer", 10, y + 40)
    doc.setFontSize(14)
    doc.setTextColor("#dc2626")
    doc.text("Edupy", 10, y + 50)
    doc.setFontSize(12)
    doc.setTextColor("#666")
    doc.text("2023 - Present", 10, y + 60)
    doc.setFontSize(14)
    doc.setTextColor("#333")
    doc.text(
      "Developing modern web applications using React.js and Next.js. Creating responsive user interfaces and implementing best practices for performance optimization.",
      10,
      y + 70,
    )

    // Add education
    doc.setFontSize(20)
    doc.setTextColor("#dc2626")
    doc.text("Education", 10, y + 90)
    doc.setFontSize(16)
    doc.setTextColor("#333")
    doc.text("Bachelor's Degree in Computer Science", 10, y + 110)
    doc.setFontSize(14)
    doc.setTextColor("#dc2626")
    doc.text("Daffodil International University", 10, y + 120)
    doc.setFontSize(12)
    doc.setTextColor("#666")
    doc.text("2020 - 2024", 10, y + 130)

    // Add projects
    doc.setFontSize(20)
    doc.setTextColor("#dc2626")
    doc.text("Projects", 10, y + 150)
    doc.setFontSize(16)
    doc.setTextColor("#333")
    doc.text("Portfolio Website", 10, y + 170)
    doc.setFontSize(14)
    doc.setTextColor("#333")
    doc.text(
      "A modern, responsive portfolio website built with React.js and Tailwind CSS, featuring smooth animations and glassmorphism design elements.",
      10,
      y + 180,
    )

    doc.save("Nadira_Resume.pdf")
  }

  const titles = ["Web Developer.", "UI/UX Designer.", "Problem Solver.", "Creative Thinker."]
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden pb-8">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-red-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-red-400 to-pink-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Enhanced Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center px-6 py-3 glass rounded-full shadow-lg">
              <motion.span
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="mr-2 text-2xl"
              >
                👋
              </motion.span>
              <span className="text-red-600 font-semibold">Hello, I'm</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold">
              <motion.span
                className="bg-gradient-to-r from-gray-900 via-red-600 to-pink-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Nadira
              </motion.span>
            </h1>

            {/* Enhanced Animated Title */}
            <div className="h-20 md:h-24 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={titles[currentTitleIndex]}
                  initial={{ opacity: 0, y: 60, rotateX: 90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -60, rotateX: -90 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="text-3xl md:text-5xl lg:text-6xl font-serif font-semibold text-gray-700"
                >
                  a {titles[currentTitleIndex]}
                </motion.h2>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Enhanced Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
              Crafting Digital Experiences: Transforming Ideas into Innovative Web Solutions.
            </p>
            <p className="text-lg text-gray-500 max-w-2xl">
              Passionate about Frontend Development, UI/UX Design, and Creating Seamless User Journeys.
            </p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <motion.button
              onClick={() => downloadFileUrl(pdfFile)}
              disabled={isDownloading}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden bg-gradient-to-r from-red-600 via-pink-600 to-red-700 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl transition-all duration-300 disabled:opacity-70"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-pink-700 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <span className="relative z-10 flex items-center gap-3">
                {isDownloading ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Downloading...
                  </>
                ) : (
                  <>
                    <FiDownload className="w-6 h-6" />
                    Download Resume
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <FiArrowRight className="w-6 h-6" />
                    </motion.div>
                  </>
                )}
              </span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-5 border-3 border-red-600 text-red-600 rounded-2xl font-bold text-xl hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <FiStar className="w-6 h-6" />
                View My Work
              </span>
              <div className="absolute inset-0 bg-red-600 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Enhanced Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          {/* Enhanced Main Image */}
          <div className="relative z-10">
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 6,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="relative glass p-8 rounded-3xl shadow-2xl">
                <img
                  src="https://i.postimg.cc/mgnmC3Hw/Untitled-design-4.png"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-contain"
                  alt="Nadira"
                />

                {/* Enhanced Glow Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-400/30 to-pink-400/30 rounded-3xl blur-2xl -z-10 animate-pulse"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 to-pink-600/20 rounded-3xl blur-3xl -z-20"></div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Floating Tech Icons */}
          <div className="absolute inset-0">
            {[
              { icon: SiReact, color: "from-cyan-400 to-cyan-600", position: "top-8 left-8", delay: 0 },
              { icon: SiNextdotjs, color: "from-gray-700 to-gray-900", position: "top-16 right-8", delay: 0.5 },
              { icon: SiTailwindcss, color: "from-blue-400 to-blue-600", position: "bottom-16 left-12", delay: 1 },
              { icon: SiNodedotjs, color: "from-green-400 to-green-600", position: "bottom-8 right-12", delay: 1.5 },
            ].map(({ icon: Icon, color, position, delay }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: delay + 0.8, duration: 0.5 }}
                className={`absolute ${position}`}
              >
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 4 + index,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  className="glass p-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <div
                    className={`w-10 h-10 bg-gradient-to-r ${color} rounded-lg flex items-center justify-center text-white`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Background Decorations */}
          <div className="absolute inset-0 -z-20">
            <motion.div
              className="absolute top-1/4 left-1/4 w-40 h-40 bg-red-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70"
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0.9, 0.7] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute top-1/3 right-1/4 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.9, 0.7, 0.9] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
            />
            <motion.div
              className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70"
              animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-red-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-red-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
