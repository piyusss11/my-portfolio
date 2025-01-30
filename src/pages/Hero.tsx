const Hero = () => {
  return (
    <section className="panel h-screen relative snap-start">
      <div className="shape absolute w-[20rem] h-[10rem] md:w-[40rem] md:h-[20rem] rotate-45 top-20 md:top-40 right-10 md:right-40"></div>

      <div className="h-full backdrop-blur-3xl px-6 md:px-40 flex items-center">
        <div className="heroText flex flex-col gap-3 md:gap-5 w-full md:w-3/4">
          <span className="opacity-50 text-lg md:text-xl">
            Development & Design
          </span>

          <h1 className="text-3xl md:text-7xl leading-tight">
            Writing code is like being in 'The Matrix' -
          </h1>

          <p className="text-lg md:text-4xl text-gray-300">
            You either take the red pill and debug reality, or you take the blue
            pill and pretend everything works!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
