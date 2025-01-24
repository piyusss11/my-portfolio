const About = () => {
  return (
    <section className="h-screen relative snap-start">
      <div className="shape absolute w-full h-[50vh] rotate-180 left-0 right-0"></div>
      <div className="h-full w-full backdrop-blur-3xl flex flex-col justify-center p-40">
        <h1 className="text-8xl p-20">About</h1>
        <div className="w-96 self-center flex flex-col gap-6 opacity-50 font-sans ">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit et
            praesentium minima, dolores omnis in!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
            veniam odit aliquam saepe distinctio ratione ea optio laboriosam,
            culpa deleniti harum, officia nostrum asperiores repudiandae!
          </p>
        </div>
        <div className="px-10 py-20">
          <div className="flex items-center justify-around gap-40">
            <h1 className="text-5xl">Services</h1>
            <ul className="space-y-1">
              <p>Development</p>
              <li className="opacity-60">Front - end</li>
              <li className="opacity-60">Back - end</li>
              <li className="opacity-60">Fullstack</li>
              <li className="opacity-60">Web3</li>
            </ul>
            <ul>
              <p>Development</p>
              <li>Front-end</li>
              <li>Back-end</li>
              <li>Fullstack</li>
              <li>Web3</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
