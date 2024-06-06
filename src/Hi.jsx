/* eslint-disable react/no-unescaped-entities */
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
            className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-2xl animate-glow hover:translate-y-[-20px] transition-all duration-500"
          />
        </div>
        <div className="md:w-1/2 md:mr-10 text-center md:text-left">
          <h1
            className="text-5xl font-bold mb-4 font-comic-neue"
            style={{ fontWeight: "normal" }}
          >
            Eat 5 Star and{" "}
            <span className="text-red-500">
              <Typewriter
                words={["Dream", "Create", "Achieve", "Repeat!"]}
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
            Salutations, intrepid voyagers of the web!
            👋 I'm your friendly neighborhood coder here to extend a hearty Welcome as you grace my digital domain.
            Whether you're a seasoned developer or a curious newcomer, I'm thrilled to connect with you amidst the vast expanse of the internet.
            Let's embark on this coding adventure together and make waves in the ever-evolving landscape of technology!
          </p>
        </div>
      </section>
    </>
  );
};

export default Hi;
