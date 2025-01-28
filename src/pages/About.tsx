const About = () => {
  return (
    <section className="panel h-screen relative snap-start">
      <div className="shape absolute w-full h-[50vh] rotate-180 left-0 right-0"></div>
      <div className="h-full w-full backdrop-blur-3xl flex flex-col justify-center p-40">
        <h1 className="text-8xl p-20">About</h1>
        <div className="w-1/2 self-center flex flex-col gap-6 opacity-100 font-sans ">
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
