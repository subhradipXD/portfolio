import { FaHtml5, FaReact, FaNode, FaCss3, FaPhp, FaJava, FaPython, FaBootstrap } from "react-icons/fa";
import { SiMongodb, SiMysql, SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoLogoFirebase } from "react-icons/io5";


const MySkills = () => {
  const { ref: refAcademicSkills, inView: inViewAcademicSkills } = useInView();
  const { ref: refDevSkills, inView: inViewDevSkills } = useInView();

  const animationVariants = {
    hidden: { opacity: 0, rotate: 0, scale: 0.5 },
    visible: { opacity: 1, rotate: 360, scale: 1 },
  };

  return (
    <section
      id="section5"
      className="p-8 text-white items-center justify-center overflow-hidden"
    >
      <h2 className="text-4xl font-bold text-center mb-8 transition-all duration-300 hover:text-white hover:scale-125 animate-pulse">
        My Skills
      </h2>
      <div className="flex flex-wrap justify-center mt-10">
        <motion.div
          ref={refAcademicSkills}
          initial="hidden"
          animate={inViewAcademicSkills ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 md:pr-4 md:border-r border-gray-500 animate-slide-left overflow-hidden"
        >
          <h3 className="text-2xl font-semibold mb-4 text-center transition-all duration-300 text-black hover:text-white hover:scale-125">
            My Academic Skills
          </h3>
          <div className="flex flex-wrap justify-center">
            <div className="p-4 m-2 bg-indigo-500 rounded-lg shadow-md transition-all duration-300 animate-bounce hover:animate-pulse hover:scale-110">
              <FaJava size={48} />
            </div>
            <div className="p-4 m-2 bg-indigo-500 rounded-lg shadow-md transition-all duration-300 animate-bounce hover:animate-pulse hover:scale-110">
              <FaPython size={48} />
            </div>
            <div className="p-4 m-2 bg-orange-500 rounded-lg shadow-md transition-all duration-300 animate-bounce hover:animate-pulse hover:scale-110">
              <FaHtml5 size={48} />
            </div>
            <div className="p-4 m-2 bg-blue-500 rounded-lg shadow-md transition-all duration-300 animate-bounce hover:animate-pulse hover:scale-110">
              <FaCss3 size={48} />
            </div>
            <div className="p-4 m-2 bg-indigo-700 rounded-lg shadow-md transition-all duration-300 animate-bounce hover:animate-pulse hover:scale-110">
              <FaPhp size={48} />
            </div>
            <div className="p-4 m-2 bg-yellow-500 rounded-lg shadow-md transition-all duration-300 animate-bounce hover:animate-pulse hover:scale-110">
              <IoLogoJavascript size={48} />
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={refDevSkills}
          initial="hidden"
          animate={inViewDevSkills ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 md:pl-4 md:border-l border-gray-500 animate-slide-right overflow-hidden"
        >
          <h3 className="text-2xl font-semibold mb-4 text-center transition-all duration-300 text-black hover:text-white hover:scale-125">
            Development Skills
          </h3>
          <div className="flex flex-wrap justify-center">
            <div className="p-4 m-2 bg-blue-500 rounded-lg shadow-md transition-all duration-300 animate-bounce hover:animate-pulse hover:scale-110">
              <FaReact size={48} />
            </div>
            <div className="p-4 m-2 bg-gray-500 rounded-lg shadow-md transition-all duration-300 animate-bounce hover:animate-pulse hover:scale-110">
              <SiExpress size={48} />
            </div>
            <div className="p-4 m-2 bg-green-500 rounded-lg shadow-md transition-all duration-300 animate-bounce hover:animate-pulse hover:scale-110">
              <SiMongodb size={48} />
            </div>
            <div className="p-4 m-2 bg-green-700 rounded-lg shadow-md transition-all duration-300 animate-bounce hover:animate-pulse hover:scale-110">
              <FaNode size={48} />
            </div>
            <div className="p-4 m-2 bg-blue-700 rounded-lg shadow-md transition-all duration-300 animate-bounce hover:animate-pulse hover:scale-110">
              <SiMysql size={48} />
            </div>
            <div className="p-4 m-2 bg-green-500 rounded-lg shadow-md transition-all duration-300 animate-bounce hover:animate-pulse hover:scale-110">
              <RiTailwindCssFill size={48} />
            </div>
            <div className="p-4 m-2 bg-purple-500 rounded-lg shadow-md transition-all duration-300 animate-bounce hover:animate-pulse hover:scale-110">
              <FaBootstrap size={48} />
            </div>
            <div className="p-4 m-2 bg-orange-600 rounded-lg shadow-md transition-all duration-300 animate-bounce hover:animate-pulse hover:scale-110">
              <IoLogoFirebase size={48} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
