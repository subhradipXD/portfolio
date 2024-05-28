import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProjectItem = ({
  name,
  duration,
  description,
  technologies,
  direction,
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
      <p className="text-sm text-gray-400">Duration: {duration} months</p>
      <p className="text-gray-300">{description}</p>
      <p className="text-gray-500">Technologies used: {technologies}</p>
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
                  duration="xx"
                  description="Small description about the project..."
                  technologies="React, Node.js, MongoDB"
                  direction="left"
                />
                <ProjectItem
                  name="Project Name"
                  duration="xx"
                  description="Small description about the project..."
                  technologies="React, Node.js, MongoDB"
                  direction="left"
                />
                <ProjectItem
                  name="Project Name"
                  duration="xx"
                  description="Small description about the project..."
                  technologies="React, Node.js, MongoDB"
                  direction="left"
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
                  duration="xx"
                  description="Small description about the project..."
                  technologies="React, Node.js, MongoDB"
                  direction="right"
                />
                <ProjectItem
                  name="Project Name"
                  duration="xx"
                  description="Small description about the project..."
                  technologies="React, Node.js, MongoDB"
                  direction="right"
                />
                <ProjectItem
                  name="Project Name"
                  duration="xx"
                  description="Small description about the project..."
                  technologies="React, Node.js, MongoDB"
                  direction="right"
                />
                <ProjectItem
                  name="Project Name"
                  duration="xx"
                  description="Small description about the project..."
                  technologies="React, Node.js, MongoDB"
                  direction="right"
                />
                <ProjectItem
                  name="Project Name"
                  duration="xx"
                  description="Small description about the project..."
                  technologies="React, Node.js, MongoDB"
                  direction="right"
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
