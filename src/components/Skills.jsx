
const Skills = () => {
    return (
        <div className="mt-5   ">
            <h2 className="text-5xl font-bold text-center">Professional Skills</h2>

            <div className="mt-5 flex flex-col md:flex-row gap-5 justify-center items-center bg-slate-300 p-5">
                <div className="flex gap-5 flex-col">
                <p>React</p>
                <progress className="progress  w-96" value={0} max="100"></progress>
                <p>JavaScript</p>
                <progress className="progress  w-96" value="10" max="100"></progress>
                <p>CSS</p>
                <progress className="progress  w-96" value="40" max="100"></progress>
                </div>
                <div className="flex gap-5  flex-col">
                <p>MongoDB</p>
                <progress className="progress  w-96" value="70" max="100"></progress>
                <p>Java</p> 
                <progress className="progress  w-96" value="100" max="100"></progress>
                <p>MySQL</p>
                <progress className="progress  w-96" value="100" max="100"></progress>
                </div>
            </div>
        </div>
    );
};

export default Skills;