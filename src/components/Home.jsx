import Banner from "./Banner";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";


const Home = () => {
    return (
        <div className="overflow-x-hidden">
           
              <Banner></Banner>
              <Skills></Skills>
              <Experience></Experience>
              <Education></Education>
              <Contact></Contact>
              
         </div>
    );
};

export default Home;