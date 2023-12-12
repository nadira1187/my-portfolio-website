import { useRef } from "react";
import { FaEnvelope, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wn1g0hi', 'template_hdtpb6p', form.current, 'DKxtEHpnRG8yEqq-F')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            
            <div className="mt-4 bg-amber-200 bg-opacity-10">
            <h2 className=" pt-3 pb-2 text-center text-3xl font-bold">Contact Us</h2>
            <p className="text-center text-lg">Contact me for any query</p>
            <div className=" ml-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5" >             
                   <div className="card w-96 glass shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"><FaPhoneAlt />Phone</h2>
                    <p>+8801953796281</p>

                </div>
            </div>
                <div className="card w-96 glass shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title"><FaEnvelope />Email</h2>
                        <p>jknadira2011@gmail.com</p>

                    </div>
                </div>
                <div className="card w-96 glass shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title"><FaLinkedin />LinkedIn</h2>
                        <p>+8801953796281</p>

                    </div>
                </div></div>
            <div className="flex flex-col lg:flex-row justify-center items-center">

                <div className=" ml-5 ">

                    <img src="https://i.ibb.co/YDC2Yfj/undraw-Contact-us-re-4qqt.png" className="rounded-xl mt-5" alt="" />

                </div>
                <div className="w-80 lg:w-96 mx-auto">
                    <form ref={form} onSubmit={sendEmail} className="px-4 py-4 max-w-4xl">
                        <input type="text" name="from_name" placeholder="Name" className="input input-bordered w-full" required />
                        <input type="text" name="from_email" placeholder="Email" className="input input-bordered my-2 w-full" required />
                        <input type="textbox" name="message" placeholder="Write Message..." className="input input-bordered w-full" />

                        <div className="form-control mt-4">
                            <input type="submit" className="btn btn-primary bg-pink-400 border-fuchsia-500 text-white" value="Send" />

                        </div>
                    </form>
                </div>
            </div>
        </div>
        
        </div>
    );
};

export default Contact;