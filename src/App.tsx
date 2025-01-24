import { FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "./components/Navbar";
import { FaHashnode } from "react-icons/fa6";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <div className="fixed bottom-0 w-24 h-[70vh] flex flex-col justify-between items-center p-10">
        <div className="flex items-center -rotate-90 gap-8">
          <p>hello</p>
          <div className="w-20 h-[1px] bg-white/50"></div>
          <p>World</p>
        </div>
        <div className="space-y-8">
          <FaGithub className="hover:text-orange-500 hover:scale-125 duration-300 cursor-pointer" />
          <FaLinkedin className="hover:text-orange-500 hover:scale-125 duration-300 cursor-pointer" />
          <FaHashnode className="hover:text-orange-500 hover:scale-125 duration-300 cursor-pointer" />
        </div>
      </div>
      <div className="wrapper">
        <Hero />
        <About />
        <Contact/>
        <Projects/>
      </div>
    </>
  );
}

export default App;
