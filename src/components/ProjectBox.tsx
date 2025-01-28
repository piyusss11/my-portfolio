import { GithubIcon, LinkIcon, VideoIcon } from "./Icons";

const ProjectBox = () => {
  return (
    <div className="card bg-[url('https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png')] bg-top bg-cover w-1/4 h-1/2 relative overflow-hidden group rounded-lg">
      <div className="card_content absolute bottom-0 bg-white/90 text-black rounded-tl-3xl cursor-pointer transform translate-y-[70%] transition-transform duration-300 group-hover:translate-y-[10%] p-4">
        <h1 className="card_title text-2xl">Heading</h1>
        <h1 className="description leading-tighter text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
          voluptates quasi sequi quaerat fugiat reiciendis sit numquam natus
          temporibus commodi.
        </h1>
      </div>
      <div className="card_content w-full absolute -top-10 bg-white/90 text-black rounded-br-3xl cursor-pointer transform -translate-y-[100%] transition-transform duration-300 group-hover:translate-y-[80%] p-4">
        <div className="flex items-center justify-center gap-8 w-full">
            <GithubIcon link="https://github.com/piyusss11/devTinder"/>
            <LinkIcon/>
            <VideoIcon/>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
