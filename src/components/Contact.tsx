import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";

const Contact = () => {
  return (
    <section
      className="h-screen snap-start flex flex-col justify-between items-center relative px-8 py-16"
      id="contact"
    >
      <div className="shapeCircle absolute w-40 h-40 top-55 right-[44%]"></div>

      <div className="backdrop-blur-3xl h-full flex flex-col items-center text-center space-y-10">
        <p className="text-4xl font-semibold max-w-xl">
          Let's mix our skills with your ideas and create something beautiful.
        </p>

        <button className="glass-btn size-42 mt-8 rounded-full text-lg cursor-pointer">
          Start a Project
        </button>
      </div>

      <div className="flex justify-between w-full max-w-4xl space-x-8">
        <div className="space-y-2 text-center md:text-left">
          <p className="opacity-60">Phone Number</p>
          <p>8077636022</p>
        </div>

        <div className="space-y-2 text-center md:text-left">
          <p className="opacity-60">Email</p>
          <p>piyusss11@gmail.com</p>
        </div>

        <div className="space-y-2 text-center md:text-left">
          <p className="opacity-60">Social Media</p>
          <div className="flex justify-center gap-8 mt-5">
            <FaGithub className="hover:text-orange-500 hover:scale-125 duration-300 cursor-pointer" />
            <FaLinkedin className="hover:text-orange-500 hover:scale-125 duration-300 cursor-pointer" />
            <FaHashnode className="hover:text-orange-500 hover:scale-125 duration-300 cursor-pointer" />
          </div>
        </div>
      </div>

      <footer className="opacity-50 text-sm absolute bottom-1">
        <div>&copy; This is me</div>
      </footer>
    </section>
  );
};

export default Contact;
