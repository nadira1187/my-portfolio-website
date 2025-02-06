import { motion } from "framer-motion";
import { SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss } from "react-icons/si";
const pdfFile="https://my-portfolio-chi-teal-83.vercel.app/Resume.pdf"
const Banner = () => {
  const downloadFileUrl = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
  
    aTag.addEventListener('error', (error) => {
      console.error('Error loading PDF file:', error);
    });
  
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  
  const text = "I'm Nadira | Web Developer Extraordinaire";

  const textArray = text.split(" ");

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.4 } },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="overflow-hidden">
      <div className=" top-0 left-0 w-full h-full">
        <div className="hero   relative">
          <div className="hero-content flex-col lg:flex-row relative z-10">
            <div className="w-full lg:w-1/2 md:w-3/4">
                 <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className=" w-1/2 text-blue-950 pb-6"
            >
              {textArray.map((word, index) => (
                <motion.span
                  key={index}
                  variants={textItemVariants}
                  className="text-3xl md:text-4xl sm:text-2xl font-bold "
                >
                  {word}{" "}
                </motion.span>
              ))}
            </motion.div>
            <p className="text-blue-950">Crafting Digital Experiences: Transforming Ideas into Innovative Web Solutions. Passionate about Frontend Development, UI/UX Design, and Creating Seamless User Journeys.</p>
            <button onClick={()=>{downloadFileUrl(pdfFile)}} className="mt-5 btn btn-primary bg-blue-800  border-white text-white">Download Resume</button>
            </div>
           
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 mt-10 lg:mt-0">
          {/* Floating skill icons */}
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
