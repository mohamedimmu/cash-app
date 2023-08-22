import React from "react";
import Footer from "./Footer";

const Investing = () => {
  return (
    <section className="relative isolate w-full h-screen bg-secondary-color px-8 xl:px-16 flex flex-col overflow-hidden">
      <div className="grid grid-cols-2 grid-rows-[auto_1fr] gap-8 lg:gap-16 xl:gap-20 items-start">
        {/* Heading  */}
        <h2 className="col-span-full justify-self-center text-white text-[40px] font-primary  mt-8 lg:mt-12 xl:mt-20">
          Investing
        </h2>
        {/* Stock */}
        <div className="justify-self-end flex">
          <div className="max-w-[352px] mr-2 sm:mr-4 lg:mr-8 space-y-2">
            <h3 className="font-primary text-black text-xl lg:text-[22px]">
              Stocks
            </h3>
            <p className="font-secondary text-black tracking-[0.3px] text-xs lg:text-base">
              Whether you're an expert or just getting started, Cash App is the
              fastest and most accessible way to invest in stocks. Start now
              with as little as $1.
            </p>
          </div>
          <img src="/images/investing-stocks.png" alt="Stocks" className="w-[80px] xs:w-[100px] sm:w-[120px] md:w-[140px] lg:w-full" />
        </div>

        {/* Bitcoin */}
        <div className="flex flex-row-reverse justify-self-start">
          <div className="space-y-2 ml-2 sm:ml-4 lg:ml-8 max-w-[352px]">
            <h3 className="font-primary text-black text-xl lg:text-[22px] ">
              Bitcoin
            </h3>
            <p className="font-secondary text-black tracking-[0.3px] text-xs lg:text-base">
              Cash App is the fastest way to convert dollars to bitcoin. From
              your home screen, six taps are all it takes to stack sats, buy an
              entire bitcoin, or just see what it's all about.
            </p>
          </div>

          <img src="/images/investing-bitcoin.png" alt="Bitcoin" className="w-[80px] xs:w-[100px] sm:w-[120px] md:w-[140px] lg:w-full max-sm:hidden" />
        </div>
      </div>

      {/* Ray overlay */}
      <div className="absolute top-0 bottom-0 -z-10">
        <img
          src="/images/investing-rays.svg"
          alt="Rays"
          className="object-cover bg-center w-full h-full"
        />
      </div>

      {/* Investing - Floor */}
      <div className=" absolute bottom-0 right-0 left-0 -z-10 bg-[#f8f6f6] floor-position">
        <img
          src="/images/investing-floor.svg"
          alt="Floor"
          className="object-cover bg-center w-full h-full"
        />
      </div>

      {/* Graph */}
      <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 w-full -z-[5]">
        <img
          src="/images/investing-graph-1.png"
          alt="Graph 1"
          className="justify-self-start self-end"
        />
        <div className="justify-self-end flex flex-col items-end">
          <img
            src="/images/investing-graph-2.png"
            alt="Graph 2"
            className="transform translate-y-[20%]"
          />
          <img
            src="/images/investing-graph-3.png"
            alt="Graph 3"
            className=""
          />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <Footer theme="black" />
      </div>
    </section>
  );
};

export default Investing;
