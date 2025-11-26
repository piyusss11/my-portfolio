import { MoreProjectsIcon } from "../components/Icons";
import ProjectBox from "../components/ProjectBox";
import { projectsInfo } from "../utils/projectsInfo";
const Projects = () => {
  return (
    <section className="panel h-screen snap-start relative">
      <div className="shape absolute w-1/2 h-[40vh] bottom-[50%] top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
      <div className="backdrop-blur-3xl flex flex-col items-center md:block px-14 md:px-30 py-16 h-full w-full">
        <div className="md:flex md:justify-between md:items-center space-y-6 md:space-y-0 mt-4 ">
          <h1 className="text-3xl md:text-6xl">My Work</h1>
          <a
            target="_blank"
            href="https://docs.google.com/spreadsheets/d/1LVBCuGuXQgOYJhftaqfEfnaNVioPh6XusDYHq6M9jWM/edit?usp=sharing"
          >
            <button className="glass-btn text-xl md:text-2xl cursor-pointer px-4 py-3 outline rounded-lg flex items-center justify-center gap-4 hover:text-orange-400 hover:outline-orange-400">
              More <MoreProjectsIcon className="disabled" />
            </button>
          </a>
        </div>
        <div className="w-full mt-14 md:mt-0 pb-10 h-full overflow-y-scroll md:gap-10 md:flex md:flex-wrap items-center justify-center">
          {projectsInfo.map((project) => (
            <div
              className="w-full flex items-center justify-center md:w-1/2 lg:w-1/3"
              key={project.id}
            >
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
