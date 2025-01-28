import ProjectBox from "../components/ProjectBox";

const Projects = () => {
  return (
    <section className="panel h-screen snap-start  relative">
      <div className="shape absolute w-full h-[40vh] bottom-0 left-0 right-0"></div>
      <div className="backdrop-blur-3xl px-40 py-24 h-full w-full">
        <h1 className="text-7xl ">My Work</h1>
        <ProjectBox />
      </div>
    </section>
  );
};

export default Projects;
