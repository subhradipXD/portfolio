import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

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
        {technologies.includes("React") && <FaReact className="mr-2" />}
        {technologies.includes("Node.js") && <FaNodeJs className="mr-2" />}
        {technologies.includes("MongoDB") && <SiMongodb className="mr-2" />}
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
                  name="Project Name"
                  description="Small description about the project..."
                  technologies={["React", "Node.js", "MongoDB"]}
                  direction="left"
                  liveLink="https://example.com"
                  codeLink="https://github.com/username/project"
                />
                <ProjectItem
                  name="Project Name"
                  description="Small description about the project..."
                  technologies={["React", "Node.js", "MongoDB"]}
                  direction="left"
                  liveLink="https://example.com"
                  codeLink="https://github.com/username/project"
                />
                <ProjectItem
                  name="Project Name"
                  description="Small description about the project..."
                  technologies={["React", "Node.js", "MongoDB"]}
                  direction="left"
                  liveLink="https://example.com"
                  codeLink="https://github.com/username/project"
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
                  name="Project Name"
                  description="Small description about the project..."
                  technologies={["React", "Node.js", "MongoDB"]}
                  direction="right"
                  liveLink="https://example.com"
                  codeLink="https://github.com/username/project"
                />
                <ProjectItem
                  name="Project Name"
                  description="Small description about the project..."
                  technologies={["React", "Node.js", "MongoDB"]}
                  direction="right"
                  liveLink="https://example.com"
                  codeLink="https://github.com/username/project"
                />
                <ProjectItem
                  name="Project Name"
                  description="Small description about the project..."
                  technologies={["React", "Node.js", "MongoDB"]}
                  direction="right"
                  liveLink="https://example.com"
                  codeLink="https://github.com/username/project"
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
