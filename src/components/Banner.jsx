import { motion } from "framer-motion";
import gif from "../assets/animation.gif";  // Import the GIF correctly
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
    <div className="">
      <div className=" top-0 left-0 w-full h-full">
        <div className="hero bg-base-100  relative">
          <div className="hero-content flex-col lg:flex-row relative z-10">
            <div className="w-full lg:w-1/2 md:w-3/4">
                 <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className=" w-1/2"
            >
              {textArray.map((word, index) => (
                <motion.span
                  key={index}
                  variants={textItemVariants}
                  className="text-3xl md:text-4xl sm:text-2xl font-bold"
                >
                  {word}{" "}
                </motion.span>
              ))}
            </motion.div>
            <p>Crafting Digital Experiences: Transforming Ideas into Innovative Web Solutions. Passionate about Frontend Development, UI/UX Design, and Creating Seamless User Journeys.</p>
            <button onClick={()=>{downloadFileUrl(pdfFile)}} className="mt-5 btn btn-primary bg-orange-400  border-white text-white">Download Resume</button>
            </div>
           
            <img 
              // Fix the style here
              style={{ backgroundImage: `url(${gif})`, backgroundRepeat: 'no-repeat', marginTop: "20px" }}
              src="https://i.ibb.co/dkn7zTC/Dark-Blue-Modern-Geometric-Simple-Feature-Section-Website-UI-Prototype-removebg-preview.png"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
