import { Link } from "react-scroll";
import Welcome from "./Welcome";
import Hi from "./Hi";
import MyWorks from "./MyWorks";
import Education from "./Education";
import MySkills from "./MySkills";
import ContactMe from "./ContactMe";
import resume from "./assets/Subhradip Das CV.pdf";
import ReactAudioPlayer from "react-audio-player";
import song from "./assets/WhatsApp Audio 2024-05-23 at 14.11.55_d9ca3c52.mp3";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { useState } from "react";
import { motion, useScroll } from "framer-motion";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-gradient-to-t from-fuchsia-900 to-black min-h-screen">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-900 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <ReactAudioPlayer src={song} autoPlay loop />
      <nav className="fixed top-0 w-full bg-transparent text-white z-10">
        <button
          className="nav-item transition-all duration-300 p-5 md:hidden fixed "
          onClick={toggleMenu}
        >
          {isMenuOpen ? <TfiClose /> : <CiMenuBurger />}
        </button>
        <ul
          className={`font-kalam md:flex justify-center space-x-4 p-4 group md:items-center ${
            isMenuOpen ? "flex flex-col mt-10" : "hidden"
          } md:flex`}
        >
          <li className="nav-item group-hover:blur-sm hover:!blur-none transition-all duration-300 ">
            <Link
              activeClass="active"
              className="cursor-pointer p-2 rounded"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
            >
              Greetings
            </Link>
          </li>
          <li className="nav-item group-hover:blur-sm hover:!blur-none transition-all duration-300">
            <Link
              activeClass="active"
              className="cursor-pointer p-2 rounded"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
            >
              Hi!
            </Link>
          </li>
          <li className="nav-item group-hover:blur-sm hover:!blur-none transition-all duration-300">
            <Link
              activeClass="active"
              className="cursor-pointer p-2 rounded"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
            >
              My Works
            </Link>
          </li>
          <li className="nav-item group-hover:blur-sm hover:!blur-none transition-all duration-300">
            <Link
              activeClass="active"
              className="cursor-pointer p-2 rounded"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
            >
              Education
            </Link>
          </li>
          <li className="nav-item group-hover:blur-sm hover:!blur-none transition-all duration-300">
            <Link
              activeClass="active"
              className="cursor-pointer p-2 rounded"
              to="section5"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
            >
              My Skills
            </Link>
          </li>
          <li className="nav-item group-hover:blur-sm hover:!blur-none transition-all duration-300">
            <a
              className="cursor-pointer p-2 rounded"
              offset={-70}
              href={resume}
            >
              Resume
            </a>
          </li>
          <li className="nav-item group-hover:blur-sm hover:!blur-none transition-all duration-300">
            <Link
              activeClass="active"
              className="cursor-pointer p-2 rounded"
              to="section7"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>

      <div className="pt-16">
        <Welcome />
        <Hi />
        <MyWorks />
        <Education />
        <MySkills />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
