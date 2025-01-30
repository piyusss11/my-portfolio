import { useEffect, useRef } from "react";
import { MoreProjectsIcon } from "../components/Icons";
import ProjectBox from "../components/ProjectBox";
import { projectsInfo } from "../utils/projectsInfo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
  const container = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
  useGSAP(() => {
    gsap.utils
      .toArray(["#project-1", "#project-2", "#project-3", "#project-4"])
      .forEach((el: any) => {
        gsap.from(el, {
          x: -200,
          opacity: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 70%", 
            end: "top 40%",
            toggleActions: "play reverse play reverse",
            onEnter: () => {
              gsap.to(el, { x: 0, opacity: 1, duration: 0.6 });
            },
            onLeave: () => {},
            onEnterBack: () => {
              gsap.to(el, { x: 0, opacity: 1, duration: 0.6 });
            },
            onLeaveBack: () => {
              gsap.set(el, { x: -200, opacity: 0 }); 
            },
          },
        });
      });
    gsap.utils
      .toArray(["#project-5", "#project-6", "#project-7", "#project-8"])
      .forEach((el: any) => {
        gsap.from(el, {
          x: 200,
          opacity: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 70%", 
            end: "top 40%",
            toggleActions: "play reverse play reverse",
            onEnter: () => {
              gsap.to(el, { x: 0, opacity: 1, duration: 0.6 });
            },
            onEnterBack: () => {
              gsap.to(el, { x: 0, opacity: 1, duration: 0.6 });
            },
          },
        });
      });
  });
  return (
    <section ref={container} className="panel h-screen snap-start relative">
      <div className="shape absolute w-full h-[40vh] bottom-0 left-0 right-0"></div>
      <div className="backdrop-blur-3xl flex flex-col items-center md:block px-14 md:px-30 py-16 h-full w-full">
        <div className="md:flex md:justify-between md:items-center space-y-6 md:space-y-0 mt-4 ">
          <h1 className="text-3xl md:text-6xl">My Work</h1>
          <a
            target="_blank"
            href="https://docs.google.com/spreadsheets/d/1LVBCuGuXQgOYJhftaqfEfnaNVioPh6XusDYHq6M9jWM/edit?usp=sharing"
          >
            <button className="glass-btn cursor-pointer w-24 h-12 outline rounded-lg flex items-center justify-center gap-4 hover:text-orange-400 hover:outline-orange-400">
              More <MoreProjectsIcon className="disabled" />
            </button>
          </a>
        </div>
        <div className="w-full mt-14 md:mt-0 pb-10 h-full overflow-y-scroll md:gap-10 md:flex md:flex-wrap items-center justify-center">
          {projectsInfo.map((project) => (
            <div key={project.id}>
              <ProjectBox
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
                videoLink={project.videoLink}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
