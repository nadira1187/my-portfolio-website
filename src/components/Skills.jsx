import { FaCss3, FaJava, FaJs, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";

const Skills = () => {
    return (
        <div className="mt-5   ">
            <h2 className="text-3xl md:text-5xl font-bold text-center">Professional Skills</h2>

            <div className="mt-5 flex flex-col md:flex-row gap-5 justify-center items-center bg-opacity-10 bg-amber-200 p-5">
                <div className="flex gap-5 flex-col">
                <p className="flex items-center text-xl">React <FaReact></FaReact></p>
                <progress className="progress w-72 lg:w-96" value="90" max="100"></progress>
                <p className="flex items-center text-xl">JavaScript <FaJs></FaJs></p>
                <progress className="progress w-72 lg:w-96" value="80" max="100"></progress>
                <p className="flex items-center text-xl">CSS <FaCss3></FaCss3></p>
                <progress className="progress  w-72 lg:w-96" value="80" max="100"></progress>
                </div>
                <div className="flex gap-5  flex-col">
                <p className="flex items-center text-xl">MongoDB <DiMongodb /> </p>
                <progress className="progress w-72 lg:w-96" value="60" max="100"></progress>
                <p className="flex items-center text-xl">Java <FaJava></FaJava></p> 
                <progress className="progress  w-72 lg:w-96" value="75" max="100"></progress>
                <p className="flex items-center text-xl">MySQL <SiMysql />

</p>
                <progress className="progress  w-72 lg:w-96" value="70" max="100"></progress>
                </div>
            </div>
        </div>
    );
};

export default Skills;