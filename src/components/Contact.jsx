import { useRef } from "react";

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
        <div className="mt-4 bg-amber-200 bg-opacity-10">
            <h2 className=" pt-3 pb-2 text-center text-3xl font-bold">Contact Us</h2>
            <p className="text-center text-lg">We are here to make your Life Easier</p>
            <div className="flex flex-col lg:flex-row justify-center items-center">
                <div className=" ml-5">
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
    );
};

export default Contact;