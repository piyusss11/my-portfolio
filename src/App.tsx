import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GithubIcon, HashnodeIcon, LinkedinIcon } from "./components/Icons";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    ScrollTrigger.defaults({
      scroller: ".wrapper",
    });
    const panels = gsap.utils.toArray<HTMLElement>(".panel");
    panels.forEach((panel, i) => {
      gsap.to(`.bullet-${i + 1}`, {
        background: "#fff",
        scrollTrigger: {
          trigger: panel,
          start:"top center",
          end:"bottom center",
          toggleActions: "play reverse play reverse",
          onEnter: () => setDotActive(i),
          onLeave: () => setDotInactive(i),
        },
      });
    });
    const setDotActive = (index: number) => {
      const dot = document.querySelector(`.bullet-${index + 1}`);
      if (dot) {
        dot.classList.add("bg-white");
      }
    };
    const setDotInactive = (index: number) => {
      const dot = document.querySelector(`.bullet-${index + 1}`);
      if (dot) {
        dot.classList.remove("bg-white");
      }
    };
  }, []);
  return (
    <>
      <Navbar />
      <div className="fixed bottom-0 z-1 w-24 h-[70vh] flex flex-col justify-between items-center p-10">
        <div className="flex items-center -rotate-90 gap-8">
          <p>hello</p>
          <div className="w-20 h-[1px] bg-white/50"></div>
          <p>World</p>
        </div>
        <div className="flex flex-col gap-8">
          <GithubIcon />
          <LinkedinIcon />
          <HashnodeIcon />
        </div>
      </div>
      <div className="fixed top-1/2 right-10 z-1 space-y-3">
        <div className="bg-white/25 size-2 rounded-full bullet-1 duration-300"></div>
        <div className="bg-white/25 size-2 rounded-full bullet-2 duration-300"></div>
        <div className="bg-white/25 size-2 rounded-full bullet-3 duration-300"></div>
        <div className="bg-white/25 size-2 rounded-full bullet-4 duration-300"></div>
      </div>
      <div className="wrapper">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
