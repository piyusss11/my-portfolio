import { FC } from "react";
import { Project } from "../utils/projectsInfo";
import { GithubIcon, LinkIcon, VideoIcon } from "./Icons";

const ProjectBox:FC<Project> = ({id, title, description, image, githubLink, liveLink, videoLink}) => {
    console.log(image)
    console.log(title, description, githubLink, liveLink, videoLink)
    
  return (
    <div key={id} className={`card bg-[url(${image})] bg-top bg-cover w-[280px] h-[240px] relative overflow-hidden group rounded-lg`}>
      <div className="card_content absolute bottom-2 bg-white/90 text-black rounded-tl-3xl cursor-pointer transform translate-y-[65%] transition-transform duration-300 group-hover:translate-y-[10%] p-4">
        <h1 className="card_title text-2xl">{title}</h1>
        <h1 className="description line-clamp-4 leading-tighter text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {description}
        </h1>
      </div>
      <div className="card_content w-full absolute -top-10 bg-white/90 text-black rounded-br-3xl cursor-pointer transform -translate-y-[100%] transition-transform duration-300 group-hover:translate-y-[80%] p-4">
        <div className="flex items-center justify-center gap-8 w-full">
          <GithubIcon link={githubLink} />
          <LinkIcon link={liveLink} />
          <VideoIcon link={videoLink} />
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
