import React from "react";
import Footer from "./Footer";

const Investing = () => {
  return (
    <section className="relative isolate w-full h-screen bg-secondary-color px-4 md:px-8 xl:px-16 flex flex-col">
      <div className="grid grid-cols-2 grid-rows-[auto_1fr] gap-4 xxs:gap-6 lg:gap-20 items-start my-auto xs:my-0">
        {/* Heading  */}
        <h2 className="col-span-full justify-self-center text-white text-xl sm:text-4xl md:text-[40px] font-primary mt-4 md:mt-8 lg:mt-20">
          Investing
        </h2>

        {/* Stock */}
        <div className="justify-self-center md:justify-self-end flex gap-4 lg:gap-8 items-center md:items-start col-span-full md:col-span-1">
          <div className="max-w-[352px]">
            <h3 className="font-primary text-black text-base md:text-xl lg:text-[22px]">
              Stocks
            </h3>
            <p className="font-secondary text-black tracking-[0.3px] text-xs lg:text-base">
              Whether you're an expert or just getting started, Cash App is the
              fastest and most accessible way to invest in stocks. Start now
              with as little as $1.
            </p>
          </div>

          <div className="max-w-[82px] min-w-[62px] sm:min-w-[82px] md:min-w-fit self-end">
            <img
              src="/images/investing-stocks.png"
              alt="Stocks"
              className="object-contain"
            />
          </div>
        </div>

        {/* Bitcoin */}
        <div className="flex flex-row-reverse items-center md:items-start col-span-full md:col-span-1 gap-4 lg:gap-8 md:justify-self-start justify-self-center">
          <div className="max-w-[352px]">
            <h3 className="font-primary text-black text-base md:text-xl lg:text-[22px] ">
              Bitcoin
            </h3>
            <p className="font-secondary text-black tracking-[0.3px] text-xs lg:text-base">
              Cash App is the fastest way to convert dollars to bitcoin. From
              your home screen, six taps are all it takes to stack sats, buy an
              entire bitcoin, or just see what it's all about.
            </p>
          </div>

          <div className="max-w-[82px] min-w-[62px] sm:min-w-[82px] md:min-w-fit">
            <img
              src="/images/investing-bitcoin.png"
              alt="Bitcoin"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Ray overlay */}
      <div className="animate-rotate absolute top-0 bottom-0 -z-10">
        <img
          src="/images/investing-rays.svg"
          alt="Rays"
          className="object-cover bg-center w-full h-full"
        />
      </div>

      {/* Investing - Floor */}
      <div className="absolute bottom-0 right-0 left-0 h-[40vh] -z-10 bg-[#f8f6f6] floor-position">
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
            className=""
          />
          <img
            src="/images/investing-graph-3.png"
            alt="Graph 3"
            className="transfrom-none sm:transform sm:-translate-y-[60%] md:-translate-y-[44%] translate-x-[10%] lg:translate-x-0 lg:-translate-y-[20%]"
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
