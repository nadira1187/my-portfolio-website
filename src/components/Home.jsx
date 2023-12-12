import Banner from "./Banner";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Skills from "./Skills";


const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <Navbar></Navbar>
              <Banner></Banner>
              <Skills></Skills>
              <Experience></Experience>
              <Education></Education>
              <Contact></Contact>
              <Footer></Footer>
         </div>
    );
};

export default Home;