import {
  GithubIcon,
  HashnodeIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../components/Icons";

const Contact = () => {
  return (
    <section
      className="panel h-screen snap-start flex flex-col justify-between items-center relative "
      id="contact"
    >
      <div className="shapeCircle absolute w-30   md:w-40 h-40 top-70 right-[44%]"></div>

      <div className="w-full backdrop-blur-3xl h-full flex flex-col items-center justify-between text-center space-y-10 px-8 py-16">
        <p className="py-4 text-lg md:text-4xl font-semibold max-w-xl">
          Let's mix our skills with your ideas and create something beautiful.
        </p>

        <button className="glass-btn size-42 mt-8 rounded-full text-lg md:text-xl cursor-pointer">
          Start a Project
        </button>
        <div className="md:flex md:justify-between md:text-lg  gap-4 w-full max-w-4xl">
          <div className="space-y-1 text-center md:text-left">
            <p className="opacity-60">Phone Number</p>
            <p>8077636022</p>
          </div>

          <div className="space-y-1 text-center md:text-left">
            <p className="opacity-60">Email</p>
            <p>piyusss11@gmail.com</p>
          </div>

          <div className="space-y-1 text-center md:text-left">
            <p className="opacity-60">Social Media</p>
            <div className="flex justify-center gap-8 mt-5">
              <GithubIcon />
              <TwitterIcon />
              <LinkedinIcon />
              <HashnodeIcon />
            </div>
          </div>
        </div>

        <footer className="opacity-50 text-sm absolute bottom-1">
          <div>&copy; This is me</div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
