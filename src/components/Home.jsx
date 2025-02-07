import Banner from "./Banner";
import Contact from "./Contact";
// import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";


const Home = () => {
    return (
        <div >
           
              <Banner></Banner>
              <Projects/>
              <Skills></Skills>
              <Experience></Experience>
              {/* <Education></Education> */}
              <Contact></Contact>
              
         </div>
    );
};

export default Home;