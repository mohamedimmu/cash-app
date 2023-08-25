import React from "react";

const CashCard = () => {
  return (
    <section className="isolate relative h-screen w-full bg-black grid cash-card-grid-sm md:cash-card-grid-md lg:cash-card-grid-lg xl:cash-card-grid">
      <div className="row-start-1 self-start justify-self-center text-center lg:self-center lg:justify-self-start lg:text-left col-start-2 col-end-3 flex flex-col gap-4 lg:max-w-[336px] mt-8 lg:mt-0 my-0 xl:mr-12 lg:ml-12 xl:ml-28">
        <h className="font-primary text-primary-color text-xl sm:text-4xl md:text-[40px] leading-tight sm:leading-10 ">
          Cash Card & Boost
        </h>
        <p className="font-secondary text-[14px] xxs:text-base text-white tracking-[0.3px]">
          The Cash Card is a free, customizable debit card that lets you pay
          online and in stores. It's the only way to get Boosts—instant
          discounts that work at places where you want to spend.
        </p>
      </div>

      {/* Image Element - mb-[180px] xxxs:mb-[120px] xxs:mb-[95px]  */} 
      <div className="row-start-1 col-start-2 col-end-3 col-span-1 justify-self-center absolute bottom-[120px] md:bottom-[92px] ml-0 sm:ml-[48px] xl:ml-[96px] flex justify-center w-[200px] h-[260px] sm:w-[250px] sm:h-[300px] md:w-[200px] md:h-[300px] lg:w-[250px] lg:h-[400px] xl:h-[508px]">
        <img
          src="/images/boost-phone.png"
          alt="Phone"
          className="object-contain max-w-[85%] min-w-[160px] xs:max-w-[95%] sm:max-w-full"
        />
      </div>

      <img
        src="/images/boost-stairs-2.png"
        alt="Stairs Left"
        className="absolute -left-[120px] sm:-left-[220px] lg:-left-[160px] xl:-left-[80px] col-start-2 col-end-3 self-end -z-10"
      />

      <img
        src="/images/boost-stairs-1.png"
        alt="Stairs Right"
        className="max-w-fit absolute bottom-0 -right-[600px] xs:-right-[560px] md:-right-[380px] lg:-right-[160px] -z-20 col-start-2 col-end-3 row-start-1 self-end justify-self-end"
      />

      {/* Overlays */}
      <img
        src="/images/boost-burger.png"
        alt="Burger"
        className="animate-bounce absolute col-start-2 col-end-3 self-center justify-self-end right-[20px] xs:right-[40px] md:right-[40px] lg:right-[260px] bottom-[60px] md:bottom-[245px]"
      />
      <img
        src="/images/boost-coffee.png"
        alt="Coffee"
        className="hidden md:block animate-bounce absolute col-start-2 col-end-3 self-center justify-self-end -right-[60px] lg:right-[150px] bottom-[110px]"
      />
      <img
        src="/images/boost-hand.png"
        alt="Hand"
        className="hidden md:block animate-bounce absolute col-start-2 col-end-3 self-center justify-self-end -right-[160px] lg:right-[60px] bottom-[550px]"
      />
      <img
        src="/images/boost-card.png"
        alt="Burger"
        className="hidden md:block animate-bounce absolute col-start-2 col-end-3 self-center justify-self-end -right-[70px] lg:right-[150px] bottom-[400px]"
      />

      <img
        src="/images/boost-shoe.png"
        alt="Shoe"
        className="hidden lg:block animate-bounce absolute bottom-[260px] lg:-right-[140px] col-start-2 col-end-3 justify-self-end self-end"
      />
    </section>
  );
};

export default CashCard;
