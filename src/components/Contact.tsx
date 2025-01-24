import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="h-screen relative snap-start">
      <div className="shapeCricle absolute size-60 top-60 right-50"></div>
      <div className="h-full backdrop-blur-3xl flex items-center justify-between px-60 py-32">
        <p className="text-4xl w-96">
          Lets mix our skills with your ideas and create something beautiful
        </p>
        <button className="glass-btn size-48 rounded-full text-lg">
          Start a project
        </button>
      </div>
      <div className="flex items-center justify-between text-xl px-20 py-10 border-2 border-red-500">
        <div className="space-y-2">
          <p className="opacity-60">Phone Number</p>
          <p>8077636022</p>
        </div>
        <div className="space-y-2">
          <p className="opacity-60">Email</p>
          <p>piyusss11@gmail.com</p>
        </div>
        <div className="space-y-2">
          <p className="opacity-60">Social Media</p>
          <div className="flex mt-5 gap-8">
            <FaGithub className="hover:text-orange-500 hover:scale-125 duration-300 cursor-pointer" />
            <FaLinkedin className="hover:text-orange-500 hover:scale-125 duration-300 cursor-pointer" />
            <FaHashnode className="hover:text-orange-500 hover:scale-125 duration-300 cursor-pointer" />
          </div>
        </div>
      </div>
      <footer className="px-60 py-10 opacity-50 flex justify-between items-center">
        <div className="text-lg">&copy; This is me </div>
        <div className="flex  items-center gap-8">
          <p>Hello</p>
          <div className="w-20 h-[1px] bg-white/50"></div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
