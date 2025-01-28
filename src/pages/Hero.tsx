

const Hero = () => {

  return (
    <section className="panel h-screen relative snap-start">
      <div className="shape absolute w-[40rem] h-[20rem] rotate-45 top-40 right-40"></div>
      <div className="px-40 h-full backdrop-blur-3xl">
        <div className="heroText px-20 h-full w-3/4 flex flex-col justify-center gap-1">
          <span className="opacity-50 text-xl">Devleopment & Design</span>
          <h1 className="text-7xl">
            Writing code is like being in 'The Matrix' - <br />{" "}
            <h1 className="text-4xl"> 
              you either take the red pill and debug reality, or you take the
              blue pill and pretend everything works!
            </h1>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
