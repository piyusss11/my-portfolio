import { MoreProjectsIcon } from "../components/Icons";
import ProjectBox from "../components/ProjectBox";
import { projectsInfo } from "../utils/projectsInfo";
const Projects = () => {
  
  
  return (
    <section className="panel h-screen snap-start relative">
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
