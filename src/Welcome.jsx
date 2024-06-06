/* eslint-disable react/no-unescaped-entities */
import { Typewriter } from "react-simple-typewriter";
import myImg from "./assets/1708594263137.jpg";

const Welcome = () => {
  return (
    <section
      id="section1"
      className="min-h-screen p-8 text-white flex flex-col-reverse md:flex-row items-center justify-center"
    >
      <div className="md:w-1/2 text-center md:text-left md:ml-10">
        <h1
          className="text-5xl font-bold mb-4 font-comic-neue"
          style={{ fontWeight: "normal" }}
        >
          Life is simple{" "}
          <span className="text-red-500">
            <Typewriter
              words={["Eat", "Sleep", "Code", "Repeat!"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className="text-lg mb-8 font-handlee">

          Greetings, digital voyagers!

          I'm Subhradip Das, a seasoned navigator of the digital realm, armed with a BSC in Computer Science Honors (2022) and a Master's in Computer Application (2024). My passion lies in the enchanting world of full-stack web development, where innovation meets functionality. Let's embark on this journey together and sculpt the future of technology!



        </p>
      </div>
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0 relative">
        <img
          src={myImg}
          alt="my image"
          className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-2xl animate-glow hover:translate-y-[-20px] transition-all duration-500"
        />
      </div>

    </section>
  );
};

export default Welcome;
