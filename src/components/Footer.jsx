import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-blue-950 text-gray-300 py-6 mt-10">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
                
                {/* Navigation Links */}
                <nav className="flex gap-6 text-sm font-medium">
                    <Link to="/" className="hover:text-white">Home</Link>
                    <Link to="/projects" className="hover:text-white">Projects</Link>
                    <Link to="/contact" className="hover:text-white">Contact</Link>
                </nav>

                {/* Social Icons */}
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a href="https://www.linkedin.com/in/nadira-ohi1187" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-gray-300 hover:text-white text-xl" />
                    </a>
                    <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-gray-300 hover:text-white text-xl" />
                    </a>
                    <a href="https://www.facebook.com/albira.ahmed.5" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="text-gray-300 hover:text-white text-xl" />
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-sm mt-4 md:mt-0">&copy; {new Date().getFullYear()} JK Nadira. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
