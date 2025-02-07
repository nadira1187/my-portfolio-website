import { DiGithub } from "react-icons/di";
import { FaEye } from "react-icons/fa";

const projects = [
    {
        title: "Lush Beauty",
        image: "https://i.postimg.cc/Kvk3Jspb/Web2.png",
        description: "Explore a dynamic homepage with navigation features, showcasing diverse brand names and images.",
        projectLink: "https://lush-beauty-client.web.app",
        codeLink: "https://github.com/nadira1187/lush-beauty-client"
    },
    {
        title: "Stay Zayn",
        image: "https://i.postimg.cc/xCBN2vqh/Web3.png",
        description: "Deliver a visually captivating user interface for hotel room bookings, enhancing user engagement with personalized booking management through My Bookings.",
        projectLink: "https://hapless-approval.surge.sh",
        codeLink: "https://github.com/nadira1187/stay-zen-client"
    },
    {
        title: "Byte Blitz",
        image: "https://i.postimg.cc/5N1DmZ2Y/Web1.png",
        description: "Discover and engage with the latest tech products on our platform, featuring an interactive system for users to upvote, submit, and explore innovations.",
        projectLink: "https://byte-blitz-client.web.app",
        codeLink: "https://github.com/nadira1187/bite-blitz-client"
    }
];

const Projects = () => {
    return (
        <div className="overflow-x-hidden flex flex-col  items-center mt-10">
            <h2 className="text-5xl text-center font-bold">Projects</h2>
            <p className="text-lg text-center my-4 text-red-500">Projects I built as a developer</p>

            <div className="flex flex-wrap justify-center md:justify-start  gap-6  mt-10 mb-16">
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className="card w-full max-w-[360px] h-[400px] rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl"
                    >
                        <figure>
                            <img className="w-full h-48 object-cover" src={project.image} alt={project.title} />
                        </figure>
                        <div className="card-body p-5 flex flex-col justify-between h-[calc(450px-192px)]">
                            <div>
                                <h2 className="card-title text-xl font-bold">{project.title}</h2>
                                <p className="text-gray-600 text-sm">{project.description}</p>
                            </div>
                            <div className="card-actions flex gap-4 justify-center mt-4">
                                <a 
                                    href={project.projectLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-5 py-2 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 flex gap-2 items-center"
                                >
                                    <FaEye />
                                    View Project
                                </a>
                                <a 
                                    href={project.codeLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-5 py-2 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 flex gap-2 items-center"
                                >
                                    <DiGithub />
                                    See Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
