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
          <h1 className="text-5xl font-bold mb-4 font-comic-neue" style={{ fontWeight: "normal" }}>
            Eat 5 Star and{" "}
            <span className="small-md:block custom-lg:block md:inline block text-red-500">
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
            Hi! I'm Subhradip Das, a seasoned navigator of the digital realm,
            armed with a BSC in Computer Science Honors (2022) and a Master's in Computer Application (2024).
            My passion lies in the enchanting world of full-stack web development, where innovation meets functionality.
            Let's embark on this journey together and sculpt the future of technology!
          </p>
        </div>
      </section>
    </>
  );
};

export default Hi;
