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
          Hi! 👋 I'm Subhradip, a Full Stack Web Sorcerer conjuring captivating
          digital realms where imagination takes flight. With spells of
          front-end enchantment and back-end wizardry, I sculpt immersive
          experiences and mystical solutions. Enter my realm, where every line
          of code holds the essence of a magical journey.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src={myImg}
          alt="my image"
          className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-2xl hover:shadow-fuchsia-900 hover:translate-y-[-10px] transition-all duration-500"
        />
      </div>
    </section>
  );
};

export default Welcome;
