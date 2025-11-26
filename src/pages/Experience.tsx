const Experience = () => {
  return (
    <section className="panel h-screen relative snap-start">
      <div className="shape absolute w-full h-[40vh] bottom-0 left-0 right-0"></div>
      <div className="h-full w-full backdrop-blur-3xl flex flex-col gap-12 md:gap-0 justify-center px-6 md:px-20 lg:px-40 overflow-y-auto">
        <h1 className="text-4xl md:text-6xl lg:text-8xl md:p-10 lg:p-20 text-center md:text-left">
          Experience
        </h1>

        <div className="w-full lg:w-full self-center flex flex-col gap-12 md:gap-10 pb-10">
          {/* Software Development Engineering */}
          <div className="space-y-3 px-10 md:px-0">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Software Development Engineering at Wylo
              </h2>
              <span className="text-sm md:text-base opacity-70">
                (March 2025 - current)
              </span>
            </div>
            <ul className="space-y-2 text-sm md:text-base opacity-80 list-disc pl-5 md:pl-6">
              <li>
                Diagnosed and resolved critical bugs in both web and React
                Native mobile applications, improving stability and performance.
              </li>
              <li>
                Refactored and optimized legacy codebases for better
                maintainability and scalability.
              </li>
              <li>
                Developed and integrated new features that enhanced user
                experience and business functionality across platforms.
              </li>
            </ul>
          </div>

          {/* Frontend Developer at We Credit */}
          <div className="space-y-3 px-10 md:px-0">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Frontend Developer at We Credit
              </h2>
              <span className="text-sm md:text-base opacity-70">
                (Feb 2025 - April 2025)
              </span>
            </div>
            <ul className="space-y-2 text-sm md:text-base opacity-80 list-disc pl-5 md:pl-6">
              <li>
                Developed the frontend for a mobile loan discovery app at
                WeCredit using React.
              </li>
              <li>
                Enabled users to explore loan providers and connect with
                multiple lending companies.
              </li>
              <li>
                Designed a smooth, responsive UI for seamless navigation and
                enhanced user experience.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
