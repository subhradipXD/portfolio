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
    <div className="min-h-screen flex items-center justify-center">
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
        <div className="flex justify-center gap-20 mt-6">
          <div className="flex flex-col">
            <a href="">
              <FaGithub className="text-5xl text-gray-900 hover:text-black" />
            </a>
            <a href="" className="mt-5">
              <ImLinkedin className="text-5xl text-blue-700 hover:text-blue-900" />
            </a>
          </div>
          <div className="flex flex-col">
            <a href="">
              <BiLogoGmail className="text-5xl text-red-500 hover:text-red-700" />
            </a>
            <a href="" className="mt-5">
              <FaPhoneAlt className="text-5xl text-green-500 hover:text-green-700" />
            </a>
          </div>
          <div className="flex flex-col">
            <a href="">
              <FaXTwitter className="text-5xl text-blue-400 hover:text-blue-600" />
            </a>
            <a href="" className="mt-5">
              <ImWhatsapp className="text-5xl text-green-600 hover:text-green-800" />
            </a>
          </div>
          <div className="flex flex-col">
            <a href="">
              <FaFacebookF className="text-5xl text-blue-600 hover:text-blue-800" />
            </a>
            <a href="" className="mt-5">
              <FaInstagram className="text-5xl text-pink-500 hover:text-pink-700" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
