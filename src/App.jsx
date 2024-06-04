import { Link } from "react-scroll";
import Welcome from "./Welcome";
import Hi from "./Hi";
import MyWorks from "./MyWorks";
import Education from "./Education";
import MySkills from "./MySkills";
import ContactMe from "./ContactMe";
import resume from "./assets/Subhradip Das CV_03_06.pdf";
import ReactAudioPlayer from "react-audio-player";
import song from "./assets/WhatsApp Audio 2024-05-23 at 14.11.55_d9ca3c52.mp3";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import gsap from "gsap";
import { Typewriter } from "react-simple-typewriter";

import "./App.css";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };

    document.body.classList.add("no-scroll");
    document.body.style.backgroundColor = "black";

    const loadingAnimation = gsap.timeline();
    loadingAnimation
      .to(".loading-page", {
        opacity: 0,
        duration: 1.5,
        delay: 5.1,
        ease: "power2.out",
      })
      .set(".loading-page", { display: "none" })
      .fromTo(
        ".main-page",
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" },
        "-=1"
      )
      .eventCallback("onComplete", () => {
        setIsLoading(false);
        document.body.classList.remove("no-scroll");
        document.body.style.backgroundColor = "";
      });
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {isLoading && (
        <div className="loading-page">
          <svg
            id="svg"
            xmlns="http://www.w3.org/2000/svg"
            height="10"
            width="10"
            viewBox="0 0 512 512"
          >
            <path
              fill="#5c00b8"
              d="M404.9 331c2.2-1.1 4.4-2.3 6.5-3.7l8.3-4.8c1.5-1.1 4.4-3.4 8.7-6.7l.5-.5c3.4-3.4 7.2-5 11.3-4.9c1.8 0 3.9 .5 6.4 1.5l31-27.5c.9-.7 1.7-1.3 2.6-1.8h.2c3.3-1.9 6-1.8 8.2 .4c3.9 2.1 4.2 5.6 .9 10.6L456.9 322c.2 .5 .4 1 .4 1.5c.5 2.2 .3 4.4-.5 6.6c-.7 1.5-1.8 2.9-3.1 4.2c-1.4 1.4-2.7 2.8-4.2 4.2l-18.8 13.7c-1.7 1.2-3.4 2.3-5.1 3.3c-2.1 1.3-4.3 2.5-6.6 3.6c-1 .4-1.9 .9-2.9 1.3c-5.9 2.5-11.9 4.2-18.2 5c-2.9 24.5-11.3 47.1-25.1 67.8c-17.5 25.7-41.4 45.4-71.8 58.8c-30.2 13.5-63 20.2-98.2 20.2c-48.6-.5-88-11.4-118.2-32.8C49.5 454.4 32 421.5 32 380.3v-5.6c1.2-28.1 9.5-54.6 24.8-79.8c15.1-24.9 37.1-41.7 66.1-50.5c14.9-4.4 29.9-6.6 45-6.6c15.5 0 31.6 2.9 48.1 8.6s35.2 15.5 55.9 29.5L326 312.2c15.1 9.8 28.8 16.5 41.2 20c-2.6-25.1-11.7-46.6-27.3-64.5c-15.7-18.1-35.6-31.3-59.9-39.7l-23.3-8c-21.4-7.5-37.3-14.9-47.7-22.2c-28.2-19.1-43.8-45.2-47-78.5l-.5-9.8c0-32.1 13-58.9 39-80.5C223.5 9.7 251.1 0 283 0c24 0 45.6 6.9 64.7 20.8c19.2 14 30.1 33.8 32.6 59.4l.5 10c0 18.6-4.8 34.5-14.4 47.7c-9.8 13.2-18.5 19.9-26 19.9c-1.6-.1-3.1-.3-4.5-.6l-34 32c-5.5 3-9.2 2.5-11.1-1.6c-1.9-2.2-1.8-4.9 .5-8.2l.2-.2c.5-.7 1.2-1.5 2-2.4l31.6-30c-.4-1.5-.6-3.1-.6-4.8c0-4.1 1.6-7.6 4.9-10.4c13.8-12.4 20.8-26.7 20.8-42.8c0-16-6.1-29.5-18.2-40.4s-28.7-16.5-49.7-16.8c-26.2 0-47.8 7.9-64.7 23.7S192.3 89.9 192.3 112c0 17.8 6.9 33.9 20.6 48.3c13.6 14.2 34.6 25.4 63 33.5c39.8 11.5 70.2 31 91.3 58.3c18.7 24.2 29.1 51.3 31.3 81.4c2.2-.7 4.3-1.5 6.5-2.6zM294.1 178.7c0 1.1 .6 1.6 1.8 1.6c.1 0 9.7-8.9 28.8-26.6c0-2.4-5.1 .9-15.3 10c-10.2 9.2-15.3 14.2-15.3 14.9zm8 6.4c0-1-.5-1.5-1.5-1.5c-1.1 0-2.1 .5-2.9 1.6c-1.9-.1-3.3 .1-4.2 .7c-.4 .2-.5 .5-.5 .7c0 .7 .5 1.3 1.5 1.6h3.3c2.9-1.1 4.4-2.2 4.4-3.3zm22.6-19.9c0-2.8-1.6-2.8-4.9 0c-1.6 1.5-3.6 3.5-6 6.2c-.8 .6-2.6 2.2-5.3 4.9c-2.8 2.9-4.2 4.7-4.2 5.3l.2 1.3c.7 .2 1.2 .4 1.5 .4c.1 0 3.3-2.9 9.5-8.7s9.3-8.9 9.3-9.3zm159.7 120l-30.6 27c1.8 1 3.2 2.4 4 4.2l30.2-27c.2-1.2 .1-2.2-.5-2.9c-.6-.5-1.6-.9-3.1-1.3zm-1.6-.9l-.7-.7-27 21.9 1.6 2 26-23.1zM366.6 363.9c-8-2.1-15.4-4.6-22.2-7.5c-15.3-6.2-34.3-17-57-32.4L250 298.7c-15.8-10.1-30.2-17.6-43.2-22.6c-13.1-4.9-26-7.3-38.6-7.3h-5.5c-32.2 1.7-57.2 13.8-75 36.2c-16.6 20.8-25 45.3-25 73.6c0 31.8 12.8 56.7 38.2 74.7c25.4 18.1 60.2 27.1 104.4 27.1c34.7 0 64-6.2 87.8-18.6c23.7-12.4 42.1-28.8 55.2-49.2c9.8-15.5 15.9-31.8 18.2-48.8z"
            />
          </svg>
          <span className="text-red-700">
            <Typewriter
              words={[
                "Welcome to the Realm of Creativity!",
                "Prepare to be Amazed...",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              deleteSpeed={30}
              typeSpeed={50}
              delaySpeed={500}
            />
          </span>
        </div>
      )}
      <div className="main-page bg-gradient-to-t from-fuchsia-900 to-black min-h-screen">
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
    </>
  );
}

export default App;
