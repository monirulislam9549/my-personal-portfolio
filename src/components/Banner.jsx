import { BsDownload } from "react-icons/bs";
import Lottie from "lottie-react";
import blob from "../assets/23150-blob-animation.json";
import Typewriter from "typewriter-effect";
const Banner = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center mt-14 md:space-x-10">
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
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            praesentium nobis error, eius reiciendis quaerat laborum porro
            assumenda? Temporibus, rem doloribus accusantium, ipsam, atque dicta
            fugit eaque voluptatem recusandae sequi veritatis illo velit minima
            consequuntur aliquid nobis debitis ullam itaque error vitae alias
            ratione sit tempora quasi. Hic, quos laborum?
          </p>
          <a
            className="w-full md:w-48 flex items-center justify-center px-3 py-3 font-medium text-white transition duration-300 bg-black rounded-md hover:text-black hover:bg-green-600"
            href="/public/myResume.pdf"
          >
            DownLoad Resume
            <BsDownload className="ml-2"></BsDownload>
          </a>
        </div>
        <div className="relative flex-auto w-full md:w-32">
          <div className="absolute -left-60 w-48 h-36 bg-gradient-to-r from-[#B4C5FA] to-[#D6DFFC] filter blur-[25px] rounded-full hidden md:block"></div>
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
