import Footer from "./Footer";
import Navbar from "./Navbar";

const Projects = () => {
    return (
        <div className="overflow-x-hidden">
            <Navbar></Navbar>
            <h2 className="text-5xl text-center font-bold mt-8">Projects</h2>
            <p className="text-lg text-center my-4"> Projects I am in as a developer</p>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
           <div className="card w-96 glass">
                <figure><img className="w-96" src="https://i.ibb.co/rGgxbZK/screencapture-lush-beauty-client-web-app-2023-12-12-12-15-18.png" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Lush Beauty</h2>

                    <p>Explore a dynamic homepage with navigation features, showcasing diverse brand names and images.</p>
                    <div className="card-actions justify-end">
                        <a href="https://lush-beauty-client.web.app" className="underline">Project Link</a>
                        <a href="https://github.com/nadira1187/lush-beauty-client" className="underline">Code Link</a>
                    </div>
                </div>
            </div>
            <div className="card w-96 glass">
                <figure><img className="w-96" src="https://i.ibb.co/Yb0kmVK/screencapture-hapless-approval-surge-sh-2023-12-12-12-20-22.png" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Stay zayn</h2>

                    <p>About
Deliver a visually captivating user interface for hotel room bookings,enhancing user engagement with personalized booking management through My Bookings</p>
                    <div className="card-actions justify-end">
                        <a href="https://hapless-approval.surge.sh" className="underline">Project Link</a>
                        <a href="https://github.com/nadira1187/stay-zen-client" className="underline">Code Link</a>
                    </div>
                </div>
            </div>
            <div className="card w-96 glass">
                <figure><img className="w-96" src="https://i.ibb.co/JBnkY0v/screencapture-byte-blitz-client-web-app-2023-12-12-12-21-22.png" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Lush Beauty</h2>

                    <p>Discover and engage with the latest tech products on our platform, featuring an interactive system for users to upvote, submit, and explore innovations.</p>
                    <div className="card-actions justify-end">
                        <a href="https://byte-blitz-client.web.app" className="underline">Project Link</a>
                        <a href="https://github.com/nadira1187/bite-blitz-client" className="underline">Code Link</a>
                    </div>
                </div>
            </div>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Projects;