import { Typewriter } from "react-simple-typewriter";
import myImg from "./assets/1708594263137.jpg";

const Welcome = () => {
  return (
    <section id="section1" className="min-h-screen p-8 text-white">
      <div className="flex flex-col md:flex-row items-center">
        <div className="text-5xl pl-7 ml-7 my-8 md:w-1/2">
          <h1
            style={{
              paddingTop: "5rem",
              margin: "auto 0",
              fontWeight: "normal",
            }}
          >
            Life is simple{" "}
            <span style={{ color: "red", fontWeight: "bold" }}>
              <Typewriter
                words={["Eat", "Sleep", "Code", "Repeat!"]}
                loop={0} // infinite loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="text-base mt-5">
            Hi! 👋 I'm Subhradip, a Full Stack Web Sorcerer conjuring
            captivating digital realms where imagination takes flight. With
            spells of front-end enchantment and back-end wizardry, I sculpt
            immersive experiences and mystical solutions. Enter my realm, where
            every line of code holds the essence of a magical journey.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center mt-20">
          <img
            src={myImg}
            alt="my image"
            className="w-48 h-48 rounded-full object-cover border-2 border-white hover:shadow-2xl hover:shadow-fuchsia-900 hover:translate-y-[-5px]  transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
