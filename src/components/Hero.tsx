import React from "react";

const Hero = () => {
  return (
    <section className="h-screen">
      <div className="shape absolute w-[40rem] h-[20rem] rotate-45 top-40 right-40"></div>
      <div className="px-40 h-full backdrop-blur-3xl">
        <div className="px-20 h-full flex flex-col justify-center gap-1">
          <span className="opacity-50 text-xl">Devleopment & Design</span>
          <h1 className="text-7xl">
            If code is poetry - then im a potter <br /> harry potter
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
