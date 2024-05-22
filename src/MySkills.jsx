import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";

const MySkills = () => {
  return (
    <section
      id="section5"
      className="p-8 text-white items-center justify-center"
    >
      <h2 className="text-3xl font-bold text-center mb-8 transition-all duration-300 hover:text-white hover:scale-105 animate-pulse">
        My Skills
      </h2>
      <div className="flex flex-wrap justify-center mt-10">
        <div className="w-full md:w-1/2 md:pr-4 md:border-r border-gray-500 animate-slide-left">
          <h3 className="text-2xl font-semibold mb-4 text-center transition-all duration-300 text-black hover:text-white hover:scale-105">
            My Academic Skills
          </h3>
          <div className="flex flex-wrap justify-center">
            <div className="p-4 m-2 bg-indigo-500 rounded-lg shadow-md transition-all duration-300 animate-bounce hover:animate-pulse">
              <FaJava size={48} />
            </div>
            <div className="p-4 m-2 bg-indigo-500 rounded-lg shadow-md transition-all duration-300 animate-bounce hover:animate-pulse">
              <FaPython size={48} />
            </div>
            <div className="p-4 m-2 bg-orange-500 rounded-lg shadow-md transition-all duration-300 animate-bounce hover:animate-pulse">
              <FaHtml5 size={48} />
            </div>
            <div className="p-4 m-2 bg-blue-500 rounded-lg shadow-md transition-all duration-300 animate-bounce hover:animate-pulse">
              <FaCss3 size={48} />
            </div>
            <div className="p-4 m-2 bg-indigo-700 rounded-lg shadow-md transition-all duration-300 animate-bounce hover:animate-pulse">
              <FaPhp size={48} />
            </div>
            <div className="p-4 m-2 bg-yellow-500 rounded-lg shadow-md transition-all duration-300 animate-bounce hover:animate-pulse">
              <IoLogoJavascript size={48} />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-4 animate-slide-right">
          <h3 className="text-2xl font-semibold mb-4 text-center transition-all duration-300 text-black hover:text-white hover:scale-105">
            Development Skills
          </h3>
          <div className="flex flex-wrap justify-center">
            <div className="p-4 m-2 bg-blue-500 rounded-lg shadow-md transition-all duration-300 animate-bounce hover:animate-pulse">
              <FaReact size={48} />
            </div>
            <div className="p-4 m-2 bg-gray-500 rounded-lg shadow-md transition-all duration-300 animate-bounce hover:animate-pulse">
              <SiExpress size={48} />
            </div>
            <div className="p-4 m-2 bg-green-500 rounded-lg shadow-md transition-all duration-300 animate-bounce hover:animate-pulse">
              <SiMongodb size={48} />
            </div>
            <div className="p-4 m-2 bg-green-700 rounded-lg shadow-md transition-all duration-300 animate-bounce hover:animate-pulse">
              <FaNode size={48} />
            </div>
            <div className="p-4 m-2 bg-blue-700 rounded-lg shadow-md transition-all duration-300 animate-bounce hover:animate-pulse">
              <SiMysql size={48} />
            </div>
            <div className="p-4 m-2 bg-green-500 rounded-lg shadow-md transition-all duration-300 animate-bounce hover:animate-pulse">
              <RiTailwindCssFill size={48} />
            </div>
            <div className="p-4 m-2 bg-purple-500 rounded-lg shadow-md transition-all duration-300 animate-bounce hover:animate-pulse">
              <FaBootstrap size={48} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
