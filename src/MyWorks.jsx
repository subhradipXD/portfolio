/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaBootstrap,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiTailwindcss, SiExpress } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const ProjectItem = ({
  name,
  description,
  technologies,
  direction,
  liveLink,
  codeLink,
}) => {
  const { ref, inView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ x: direction === "left" ? -100 : 100, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.3 }}
      className={`mb-6 hover:bg-indigo-900 p-4 rounded-lg transition-all duration-300 hover:scale-105`}
    >
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-300">{description}</p>
      <div className="flex items-center mt-2">
        {technologies.includes("HTML") && <FaHtml5 className="mr-2 text-xl" />}
        {technologies.includes("CSS") && <FaCss3Alt className="mr-2 text-xl" />}
        {technologies.includes("Javascript") && (
          <FaJs className="mr-2 text-xl" />
        )}
        {technologies.includes("PHP") && <FaPhp className="mr-2 text-xl" />}
        {technologies.includes("MySQL") && <SiMysql className="mr-2 text-xl" />}
        {technologies.includes("Bootstrap") && (
          <FaBootstrap className="mr-2 text-xl" />
        )}
        {technologies.includes("React") && <FaReact className="mr-2 text-xl" />}
        {technologies.includes("Express.js") && (
          <SiExpress className="mr-2 text-xl" />
        )}
        {technologies.includes("Node.js") && (
          <FaNodeJs className="mr-2 text-xl" />
        )}
        {technologies.includes("MongoDB") && (
          <SiMongodb className="mr-2 text-xl" />
        )}
        {technologies.includes("Tailwind") && (
          <SiTailwindcss className="mr-2 text-xl" />
        )}
        {technologies.includes("FramerMotion") && (
          <TbBrandFramerMotion className="mr-2 text-xl" />
        )}
      </div>
      <div className="mt-4">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4"
          >
            Go Live
          </a>
        )}
        {codeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            <FaGithub className="inline-block mr-2" />
            See Code
          </a>
        )}
      </div>
    </motion.div>
  );
};

const MyWorks = () => {
  return (
    <div>
      <section
        id="section3"
        className="min-h-screen p-8 text-white relative overflow-hidden"
      >
        <h2 className="text-4xl font-bold text-center mb-8 transition-all duration-300 hover:text-white hover:scale-125">
          My Projects
        </h2>
        <div className="flex mt-20 flex-col md:flex-row">
          <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
            <h2 className="font-bold text-center mb-8 transition-all duration-300 text-white hover:scale-125 text-3xl">
              Academic Projects
            </h2>
            <div className="bg-transparent p-4 rounded-lg shadow-lg animate-fade-in">
              <AnimatePresence>
                <ProjectItem
                  name="UNI-RECORD"
                  description="Responsive website for uploading various curricular activities details of an organization and based on that give rating to those organisations by the NAAC creation III"
                  technologies={[
                    "HTML",
                    "CSS",
                    "Javascript",
                    "PHP",
                    "MySQL",
                    "Bootstrap",
                  ]}
                  direction="left"
                  codeLink="https://github.com/subhradipXD/UNIRECORD"
                />
                <ProjectItem
                  name="Mobile-Book"
                  description="Responsive website for online mobile shopping"
                  technologies={[
                    "HTML",
                    "CSS",
                    "Javascript",
                    "PHP",
                    "MySQL",
                    "Bootstrap",
                  ]}
                  direction="left"
                  codeLink="https://github.com/subhradipXD/mobileStore"
                />
                <ProjectItem
                  name="FundWise"
                  description="A responsive website for make a communication channel between entrepreneur and investor, to help entrepreneurs make their business grow"
                  technologies={[
                    "HTML",
                    "CSS",
                    "Bootstrap",
                    "Javascript",
                    "React",
                    "Express.js",
                    "Node.js",
                    "MongoDB",
                  ]}
                  direction="left"
                  codeLink="https://github.com/subhradipXD/FundWise"
                />
              </AnimatePresence>
            </div>
          </div>
          <div className="w-full md:w-1/2 pl-4">
            <h2 className="text-3xl font-bold text-center mb-8 transition-all duration-300 text-white hover:scale-125 text-shadow">
              Personal Projects
            </h2>
            <div className="bg-transparent p-4 rounded-lg shadow-lg animate-fade-in">
              <AnimatePresence>
                <ProjectItem
                  name="PortFolio"
                  description="My Personal Portfolio Web Site"
                  technologies={["React", "Tailwind", "FramerMotion"]}
                  direction="right"
                  liveLink="https://portfolio-lilac-one-87.vercel.app/"
                  codeLink="https://github.com/subhradipXD/portfolio"
                />
                <ProjectItem
                  name="tic-tac-toe"
                  description="A web based tic-tac-toe game"
                  technologies={["React", "Javascript", "CSS"]}
                  direction="right"
                  liveLink=" https://tic-tac-toe-silk-pi.vercel.app/"
                  codeLink="https://github.com/subhradipXD/tic-tac-toe"
                />
                <ProjectItem
                  name="WeatherApp"
                  description="A simple website using open-weather api to check your city's weather."
                  technologies={["React", "Javascript", "Bootstrap"]}
                  direction="right"
                  liveLink="https://weather-app-azure-eta.vercel.app/"
                  codeLink="https://github.com/subhradipXD/weather-app"
                />
                <ProjectItem
                  name="TaskManager"
                  description="A simple website for create your own todo list and tack record."
                  technologies={[
                    "HTML",
                    "CSS",
                    "Bootstrap",
                    "Javascript",
                    "React",
                    "Express.js",
                    "Node.js",
                    "MongoDB",
                  ]}
                  direction="right"
                  codeLink="https://github.com/subhradipXD/TaskMaster"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyWorks;
