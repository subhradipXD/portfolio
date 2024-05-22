import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { BsSend } from "react-icons/bs";

const ContactMe = () => {
  return (
    <div className="min-h-screen flex items-center justify-center md:mt-0">
      <h2 className="text-3xl font-bold text-center mb-8 transition-all duration-300 hover:text-white hover:scale-105 animate-pulse">
        Contact Me
      </h2>
      <section id="section7" className="p-8 rounded-lg w-full max-w-lg">
        <form action="" className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name"
            className="p-3 border border-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
          />
          <input
            type="email"
            placeholder="Your @Email"
            className="p-3 border border-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
          />
          <div className="relative">
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="p-3 border border-black rounded-tl rounded-tr rounded-bl-none rounded-br-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent w-full"
            ></textarea>
            <button className="absolute bottom-0 right-0 transform translate-y-1/3 translate-x-1/2 p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <BsSend className="text-xl" />
            </button>
          </div>
        </form>
        <div className="flex justify-center gap-10 mt-6 flex-wrap">
          <div className="flex flex-col items-center">
            <a href="https://github.com/subhradipXD">
              <FaGithub
                className="text-gray-900 hover:text-black animate-bounce hover:animate-pulse"
                size={48}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/subhradip-das-2000s69/"
              className="mt-5"
            >
              <ImLinkedin
                className="text-blue-700 hover:text-blue-900 animate-bounce hover:animate-pulse"
                size={48}
              />
            </a>
          </div>
          <div className="flex flex-col items-center">
            <a href="mailto:subhradipdas6969@gmail.com">
              <BiLogoGmail
                className="text-red-500 hover:text-red-700 animate-bounce hover:animate-pulse w-auto "
                size={48}
              />
            </a>
            <a href="tel:+919635760319" className="mt-5">
              <FaPhoneAlt
                className="text-green-500 hover:text-green-700 animate-bounce hover:animate-pulse w-auto "
                size={48}
              />
            </a>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://x.com/Subhradip2000?t=bkawPXYen5ey9rIlhcRlbA&s=08">
              <FaXTwitter
                className="text-blue-400 hover:text-blue-600 animate-bounce hover:animate-pulse w-auto"
                size={48}
              />
            </a>
            <a href="https://wa.me/9635760319" className="mt-5">
              <ImWhatsapp
                className="text-green-600 hover:text-green-800 animate-bounce hover:animate-pulse w-auto"
                size={48}
              />
            </a>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://www.facebook.com/profile.php?id=100085587863785">
              <FaFacebookF
                className="text-blue-600 hover:text-blue-800 animate-bounce hover:animate-pulse w-auto"
                size={48}
              />
            </a>
            <a
              href="https://www.instagram.com/bhin\_\_desi\_\_tara/"
              className="mt-5"
            >
              <FaInstagram
                className="text-pink-500 hover:text-pink-700 animate-bounce hover:animate-pulse w-auto"
                size={48}
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
