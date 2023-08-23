import React from "react";
import Footer from "./Footer";

const Hero = () => {
  return (
    <section className="w-full h-screen pt-24 px-4 md:px-8 xl:px-16 py-6 relative flex flex-col justify-center bg-black overflow-hidden isolate">
      <div className="mt-auto mb-4 sm:mb-auto self-center grid relative">
        <h1 className="heading z-0 col-span-1">Cash</h1>
        <div className="absolute center-absolute z-20 col-span-1">
          <img src="/images/intro-phone.png" alt="Phone" />
        </div>
        <h1 className="heading z-30 col-span-1">App</h1>
      </div>

      {/* Ray Overlay */}
      <div className="animate-rotate absolute inset-0 h-screen w-screen -z-20">
        <img
          src="/images/rays.svg"
          alt="Rays"
          className="object-cover bg-center w-full h-full"
        />
      </div>

      {/* Elements Overlay */}
      <div className="absolute grid grid-cols-2 items-center h-screen inset-0 -z-10 ">
        <img
          src="/images/intro-cube.png"
          alt="Cube"
          className=" self-start justify-self-center transform -translate-x-[120%] translate-y-[90%] md:translate-y-3/4"
        />
        <img
          src="/images/intro-stairs.png"
          alt="Stairs"
          className="justify-self-end self-start translate-y-1/4 lg:translate-y-0 translate-x-1/2 lg:self-end transform lg:translate-x-1/4 xl:-translate-x-1/2"
        />
        <img
          src="/images/intro-cubes.png"
          alt="Cubes"
          className="self-end -translate-x-1/3 translate-y-1/4 lg:self-center lg:transform lg:translate-x-2/3 lg:translate-y-0"
        />
        <img
          src="/images/intro-pillar.png"
          alt="Pillar"
          className="self-end transform translate-x-1/2"
        />
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default Hero;
