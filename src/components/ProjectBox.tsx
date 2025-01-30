import { FC } from "react";
import { Project } from "../utils/projectsInfo";
import { GithubIcon, LinkIcon, VideoIcon } from "./Icons";

const ProjectBox: FC<Project> = ({
  id,
  title,
  description,
  image,
  githubLink,
  liveLink,
  videoLink,
}) => {
  console.log(id);

  return (
    <div
      id={`project-${id}`}
      
      style={{ backgroundImage: `url(${image})` }}
      className={`card bg-transparent bg-center bg-contain bg-no-repeat w-[280px] h-[240px] relative overflow-hidden group rounded-lg`}
    >
      <div className="card_content absolute bottom-2 bg-white/90 text-black rounded-md cursor-pointer transform translate-y-[65%] transition-transform duration-300 group-hover:translate-y-[10%] p-4">
        <h1 className="card_title text-2xl">{title}</h1>
        <h1 className="description line-clamp-4 leading-tighter text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </h1>
      </div>
      <div className="card_content w-full absolute -top-7   bg-white/90 text-black rounded-md cursor-pointer transform -translate-y-[100%] transition-transform duration-300 group-hover:translate-y-[80%] p-4">
        <div className="flex items-center justify-center gap-8 w-full px-2">
          <GithubIcon link={githubLink} />
          {liveLink && <LinkIcon link={liveLink} />}
          <VideoIcon link={videoLink} />
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
