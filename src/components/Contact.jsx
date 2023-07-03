import { BsGithub, BsLinkedin, BsTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
const Contact = () => {
  return (
    <section>
      <div className="bg-amber-50 md:py-8 px-5 mx-auto flex sm:flex-nowrap flex-wrap mt-8 justify-center gap-20">
        <div className="rounded-md space-y-4">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold mb-4">Contact Information</h1>
            <p className="text-lg flex justify-center items-center">
              <MdEmail className="mr-2"></MdEmail>
              Email: monirulislam9549@gmail.com
            </p>
            <p className="text-lg flex justify-center items-center">
              <BsTelephoneFill className="mr-2"></BsTelephoneFill>
              Phone: +88 01889 182663
            </p>
            <p className="text-lg flex justify-center items-center">
              <MdLocationOn className="mr-2 text-2xl"></MdLocationOn>
              Chittagong, Bangladesh
            </p>
          </div>
          <div className="flex text-3xl justify-center mt-2">
            <a href="https://github.com/monirulislam9549">
              <BsGithub></BsGithub>
            </a>
            <a className="ml-2" href="">
              <BsLinkedin></BsLinkedin>
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col w-full mt-8 md:mt-0">
          <h2 className="text-3xl font-bold mb-4">Message Me</h2>

          <form action="https://formspree.io/f/mjvqbdpk" method="POST">
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="off"
                required
                placeholder="Your Name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="off"
                placeholder="Enter Your Email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                cols={30}
                rows={10}
                autoComplete="off"
                required
                placeholder="Your Message"
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <input
              type="submit"
              value="Send Message"
              className="text-black hover:bg-white hover:border font-medium bg-amber-300 border border-gray-300 py-2 px-6 focus:outline-none  rounded text-lg"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
