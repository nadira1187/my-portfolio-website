"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { FaEnvelope, FaLinkedin, FaPhoneAlt, FaPaperPlane, FaMapMarkerAlt } from "react-icons/fa"
import emailjs from "@emailjs/browser"
import swal from "sweetalert"

const Contact = () => {
  const form = useRef()
  const [isLoading, setIsLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setIsLoading(true)

    emailjs
      .sendForm("service_wn1g0hi", "template_hdtpb6p", form.current, "DKxtEHpnRG8yEqq-F")
      .then(() => {
        swal("Success!", "Your message has been sent successfully!", "success")
        form.current.reset()
      })
      .catch(() => {
        swal("Error!", "Failed to send message. Please try again later.", "error")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      label: "Phone",
      value: "+8801953796281",
      href: "tel:+8801953796281",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "jknadira2011@gmail.com",
      href: "mailto:jknadira2011@gmail.com",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "nadira-ohi1187",
      href: "https://www.linkedin.com/in/nadira-ohi1187/",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Dhaka, Bangladesh",
      href: "#",
    },
  ]

  return (
    <div className="relative py-20 bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
            Let's
            <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent"> Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : "_self"}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : ""}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-red-500/25">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Decorative quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-6 border border-red-500/20"
            >
              <p className="text-white/90 italic text-lg leading-relaxed">
                "Great things are built by great teams. Let's create something amazing together."
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="from_email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Discussion"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows="5"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none"
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 px-6 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
