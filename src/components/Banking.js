import React from "react";

const Banking = () => {
  return (
    <section className="relative w-full h-screen bg-secondary-color grid banking-grid-sm md:banking-grid-md lg:banking-grid-lg xl:banking-grid ">
      <div className="row-start-1 self-start justify-self-center text-center lg:self-center lg:justify-self-start lg:text-left col-start-2 col-end-3 flex flex-col gap-4 lg:max-w-[323px] mt-8 lg:mt-0 my-0 xl:mr-12 lg:ml-12 xl:ml-28">
        <h className="font-primary text-white text-xl sm:text-4xl md:text-[40px] leading-tight sm:leading-10 ">
          Banking
        </h>
        <p className="font-secondary text-[14px] xxs:text-base text-black tracking-[0.3px]">
          Receive your paycheck, tax returns, and other direct deposits up to
          two days early using your Cash App routing and account number.
        </p>
      </div>

      <div className="row-start-1 col-start-2 col-end-3 justify-self-center self-center z-20 max-w-full max-h-full">
        <img
          src="/images/banking-phone.png"
          alt="Phone"
          className="object-contain"
        />
      </div>

      {/* Overlay */}

      <img
        src="/images/banking-hole.png"
        alt="Banking Hole Top"
        className="col-start-2 col-end-3 row-start-1 absolute -left-[320px] xxs:-left-[300px] sm:-left-[260px] lg:-left-[220px] -bottom-[120px] xxxs:-bottom-[80px] sm:-bottom-[60px] lg:top-0 max-w-[380px] max-h-[160px]"
      />
      <img
        src="/images/banking-hole.png"
        alt="Banking Hole Down"
        className="col-start-2 col-end-3 row-start-1 absolute -right-[320px] xxs:-right-[300px] sm:-right-[260px] lg:right-[160px] -bottom-[80px] md:-bottom-[60px] lg:-bottom-[110px] max-w-[380px] max-h-[160px]"
      />
      <img
        src="/images/banking-monster.png"
        alt="Banking Monster"
        className="col-start-2 col-end-3 row-start-1 absolute justify-self-center md:right-[280px] lg:right-0 bottom-[30px] xxs:-bottom-[5px] md:bottom-0 lg:bottom-[54px] w-[80px] h-[80px] xxs:w-[120px] xxs:h-[80px] object-contain"
      />
      <img
        src="/images/banking-ramp-1.png"
        alt="Banking Ramp 1"
        className="col-start-2 col-end-3 row-start-1 absolute bottom-[420px] md:bottom-[320px] lg:bottom-[340px] -right-[20px] md:-right-[60px] lg:right-[180px] xl:right-[220px]"
      />
      <img
        src="/images/banking-ramp-2.png"
        alt="Banking Ramp 2"
        className="hidden md:block col-start-2 col-end-3 row-start-1 absolute bottom-[120px] lg:bottom-[44px] -left-[160px] lg:left-[84px]"
      />
      <img
        src="/images/banking-track-1.png"
        alt="Banking Track 1"
        className="col-start-2 col-end-3 row-start-1 absolute bottom-[360px] md:bottom-[440px] lg:bottom-[480px] xl:bottom-[460px] -left-[150px] md:-left-[160px] lg:left-[180px] xl:left-[280px] z-10"
      />
      <img
        src="/images/banking-track-2.png"
        alt="Banking Track 2"
        className="hidden md:block col-start-2 col-end-3 row-start-1 absolute bottom-[480px] lg:top-[16px] -right-[140px] lg:right-[90px]"
      />
      <img
        src="/images/banking-cubes.png"
        alt="Banking Cubes"
        className="col-start-2 col-end-3 row-start-1 absolute bottom-[80px] md:bottom-[128px] lg:bottom-[84px] -right-[40px] md:-right-[80px] lg:right-[180px]"
      />
      <img
        src="/images/banking-column.png"
        alt="Banking Column"
        className="col-start-2 col-end-3 row-start-1 absolute bottom-[200px] md:bottom-[80px] lg:bottom-[520px] xl:bottom-[440px] -left-[110px] md:right-[120px] lg:-left-[60px] z-20"
      />
      <img
        src="images/banking-stairs-1.png"
        alt="Banking Stairs 1"
        className="col-start-2 col-end-3 row-start-1 absolute bottom-[200px] -right-[80px] md:-right-[180px] lg:right-[34px] xl:right-[64px]"
      />
      <img
        src="images/banking-stairs-2.png"
        alt=" Banking Stairs 2"
        className="hidden md:block col-start-2 col-end-3 row-start-1 absolute bottom-[240px] lg:bottom-[94px] xl:bottom-[114px] -left-[160px] lg:-left-[20px] xl:-left-[40px]"
      />
      <img
        src="images/banking-tube.png"
        alt=" Banking Tube"
        className="w-[120px] h-[120px] xxs:w-[150px] xss:h-[156px] col-start-2 col-end-3 row-start-1 absolute bottom-[90px] md:bottom-[80px] lg:-bottom-[28px] -left-[60px] sm:-left-[80px] md:left-[80px] lg:left-[480px] z-30 md:z-0"
      />
    </section>
  );
};

export default Banking;
