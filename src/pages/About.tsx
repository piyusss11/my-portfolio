const About = () => {
  return (
    <section className="panel h-screen relative snap-start">
      <div className="shape absolute w-full h-[50vh] rotate-180 left-0 right-0"></div>
      <div className="h-full w-full backdrop-blur-3xl flex flex-col justify-center px-6 md:px-20 lg:px-40">
        <h1 className="text-4xl md:text-6xl lg:text-8xl md:p-10 lg:p-20 text-center md:text-left">
          About
        </h1>

        <div className="w-full md:w-3/4 lg:w-1/2 self-center flex flex-col gap-4 md:gap-6 text-center md:text-lg md:text-left">
          <p>
            Dynamic and detail-oriented Product Developer skilled in designing,
            developing, and maintaining responsive websites and web
            applications. Proficient in front-end and back-end technologies,
            with expertise in web3, I excel at turning complex problems into
            elegant solutions for seamless user experiences.
          </p>
          <p>
            With a strong emphasis on user experience and interface design, I
            create engaging digital products—because life’s too short for clunky
            interfaces and slow loading times!
          </p>
        </div>

        <div className="px-4 py-10 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-around gap-10 md:gap-20 lg:gap-40">
            <h1 className="text-3xl md:text-5xl text-center md:text-left">
              Services
            </h1>

            <div className="grid grid-cols-2 gap-8 md:flex md:gap-16">
              <ul className="space-y-2 text-center md:text-left">
                <p className="font-semibold">Development</p>
                <li className="opacity-70">Front-end</li>
                <li className="opacity-70">Back-end</li>
                <li className="opacity-70">Fullstack</li>
                <li className="opacity-70">Web3</li>
              </ul>
              <ul className="space-y-2 text-center md:text-left">
                <p className="font-semibold">Other Skills</p>
                <li className="opacity-70">UI/UX Design</li>
                <li className="opacity-70">Performance Optimization</li>
                <li className="opacity-70">SEO & Accessibility</li>
                <li className="opacity-70">API Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
