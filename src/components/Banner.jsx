import { motion, AnimatePresence } from "framer-motion";
import { SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss } from "react-icons/si";
import { useState, useEffect } from "react";

const pdfFile = "https://my-portfolio-chi-teal-83.vercel.app/Resume.pdf";

const Banner = () => {
  const downloadFileUrl = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  const titles = ["Web Developer.", "Programmer."];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000); // Changes every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="top-0 left-0 w-full h-full">
        <div className="hero relative">
          <div className="hero-content flex-col lg:flex-row relative z-10">
            <div className="w-full lg:w-1/2 md:w-3/4">
              {/* Animated Text */}
              <div className="text-3xl md:text-5xl sm:text-2xl font-bold pb-6 flex flex-col">
                <span className="">
                  Hi, I&apos;m <span className="text-red-600">Nadira</span>
                </span>
                <div className="h-12 md:h-16 overflow-hidden relative">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={titles[currentTitleIndex]}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.5 }}
                      className="absolute  w-full "
                    >
                     a {titles[currentTitleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>

              <p className="">
                Crafting Digital Experiences: Transforming Ideas into Innovative Web Solutions.
                Passionate about Frontend Development, UI/UX Design, and Creating Seamless User Journeys.
              </p>
              <button onClick={() => downloadFileUrl(pdfFile)} className="text-lg font-normal box-border border-4 border-red-700 w-48 h-14 rounded-lg bg-red-500 text-white relative group mt-4"><span className="pr-8">Download Resume</span><span className="bg-red-700 absolute right-0 top-0  h-full flex items-center justify-center px-1 group-hover:duration-300 group-hover:w-full w-10 duration-300"><svg viewBox="0 0 24 24" fill="none" className="w-8 inline mx-auto" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></span></button>

            </div>

            {/* Floating Skill Icons */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 mt-10 lg:mt-0">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ y: [0, -10, 0], opacity: [0.8, 1, 0.8] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <div className="absolute -top-8 left-10 text-cyan-400 text-4xl">
                  <SiReact />
                </div>
                <div className="absolute top-12 -left-12 text-slate-900 text-4xl">
                  <SiNextdotjs />
                </div>
                <div className="absolute -bottom-8 left-14 text-blue-400 text-4xl">
                  <SiTailwindcss />
                </div>
                <div className="absolute bottom-10 -right-16 text-green-500 text-4xl">
                  <SiNodedotjs />
                </div>
              </motion.div>

              {/* Image */}
              <img
                src="https://i.postimg.cc/mgnmC3Hw/Untitled-design-4.png"
                className="relative z-10 w-full h-full object-contain drop-shadow-lg"
                alt="Nadira"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
