import { motion } from "framer-motion";
import gif from "../assets/animation.gif";  // Import the GIF correctly

const Banner = () => {
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
            <div className="w-1/2">
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
                  className="text-4xl font-bold"
                >
                  {word}{" "}
                </motion.span>
              ))}
            </motion.div>
            <p>Crafting Digital Experiences: Transforming Ideas into Innovative Web Solutions. Passionate about Frontend Development, UI/UX Design, and Creating Seamless User Journeys</p>
            <button className="mt-5 btn btn-primary bg-pink-400  border-white text-white">Download Resume</button>
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
