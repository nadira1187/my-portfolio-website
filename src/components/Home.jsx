import Banner from "./Banner";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Skills from "./Skills";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
              <Banner></Banner>
              <Skills></Skills>
              <Experience></Experience>
              <Education></Education>
              <Footer></Footer>
         </div>
    );
};

export default Home;