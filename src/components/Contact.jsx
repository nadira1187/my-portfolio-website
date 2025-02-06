import { useRef } from "react";
import { FaEnvelope, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_wn1g0hi', 'template_hdtpb6p', form.current, 'DKxtEHpnRG8yEqq-F')
            .then(() => {
                swal("Success!", "Your message has been sent.", "success");
                form.current.reset();
            })
            .catch(() => {
                swal("Error!", "Failed to send message. Try again later.", "error");
            });
    };

    return (
        <div className="overflow-hidden bg-gray-50 dark:bg-gray-900 py-12 px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Get in Touch</h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Feel free to reach out to me for any queries or collaborations.</p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                        <FaPhoneAlt className="text-blue-600 text-2xl" />
                        <span className="text-gray-700 dark:text-gray-200">+8801953796281</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                        <FaEnvelope className="text-blue-600 text-2xl" />
                        <span className="text-gray-700 dark:text-gray-200">jknadira2011@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                        <FaLinkedin className="text-blue-600 text-2xl" />
                        <a href="https://www.linkedin.com/in/nadira-ohi1187/" className="text-blue-500 hover:underline">nadira-ohi1187</a>
                    </div>
                </div>
                
                <form ref={form} onSubmit={sendEmail} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                    <div className="mb-4">
                        <input type="text" name="from_name" placeholder="Your Name" className="input input-bordered w-full p-2 rounded-md border-gray-300 focus:border-blue-500" required />
                    </div>
                    <div className="mb-4">
                        <input type="email" name="from_email" placeholder="Your Email" className="input input-bordered w-full p-2 rounded-md border-gray-300 focus:border-blue-500" required />
                    </div>
                    <div className="mb-4">
                        <textarea name="message" placeholder="Your Message" rows="4" className="input input-bordered w-full p-2 rounded-md border-gray-300 focus:border-blue-500" required></textarea>
                    </div>
                    <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
