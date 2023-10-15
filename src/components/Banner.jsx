import { BsDownload } from "react-icons/bs";
import Lottie from "lottie-react";
import blob from "../assets/23150-blob-animation.json";
import Typewriter from "typewriter-effect";
const Banner = () => {
  return (
    <div>
      <div className="bg-amber-50 p-10 flex flex-col md:flex-row items-center mt-14 md:space-x-10">
        <div className="flex-auto md:w-64 space-y-5 relative">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-amber-200">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: ["I'm Monirul Islam"],
                }}
              ></Typewriter>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold">
              Jr. Web Developer
            </h2>
          </div>
          <p className="text-justify text-2xl">
            Hello, I am Monirul Islam, a dedicated junior web developer with a
            passion for crafting captivating and user-centric websites. My
            journey in the world of web development has equipped me with a
            strong foundation in front-end technologies and MERN stack
            development, and I consistently strive to infuse creativity and
            functionality into every project.
          </p>
          <a
            className="text-black hover:bg-white hover:border font-medium bg-amber-300 border border-gray-300 w-full md:w-48 flex items-center justify-center px-3 py-3  transition duration-300  rounded-md hover:text-black "
            href="myResume.pdf"
            download="myResume.pdf"
          >
            DownLoad Resume
            <BsDownload className="ml-2"></BsDownload>
          </a>
        </div>
        <div className="relative flex-auto w-full md:w-32">
          <div className="absolute -left-60 w-48 h-36 bg-gradient-to-r from-[#B4C5FA] to-[#D6DFFC] filter blur-[50px] rounded-full hidden md:block"></div>
          <Lottie animationData={blob}></Lottie>
          <img
            className="absolute -top-8"
            src={`https://i.ibb.co/cL0Ly7C/IMG-1062-removebg-preview.png`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
