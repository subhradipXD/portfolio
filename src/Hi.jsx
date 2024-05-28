import { Typewriter } from "react-simple-typewriter";
import myImg from "./assets/IMG_20230910_004859.jpg";

const Hi = () => {
  return (
    <>
      <section
        id="section2"
        className="min-h-screen p-8 text-white flex flex-col md:flex-row items-center justify-center"
      >
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={myImg}
            alt="my image"
            className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-2xl hover:shadow-fuchsia-900 hover:translate-y-[-10px] transition-all duration-500"
          />
        </div>
        <div className="md:w-1/2 md:mr-10 text-center md:text-left">
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
            Welcome, fellow code explorers! 🌍 I'm Subhradip, a Full Stack Web
            Sorcerer on a quest to craft captivating digital realms. With
            front-end enchantment and back-end wizardry, I weave immersive
            experiences where every line holds magic. Join my mystical coding
            journey!
          </p>
        </div>
      </section>
    </>
  );
};

export default Hi;
