import React from "react";

const Payments = () => {
  return (
    <section className=" relative w-full h-screen bg-white-grey grid payment-grid-sm md:payment-grid-md lg:payment-grid-lg xl:payment-grid bg-floor bg-repeat-x payment-bg-position">
      <div className="row-start-1 self-start justify-self-center text-center lg:self-center lg:justify-self-start lg:text-left col-start-2 col-end-3 flex flex-col gap-4 lg:max-w-[352px] mt-8 lg:mt-0 my-0 xl:mr-12 lg:ml-12 xl:ml-28 mb-0 lg:mb-32">
        <h className="font-primary text-primary-color text-xl sm:text-4xl md:text-[40px] leading-tight sm:leading-10 ">
          Payments
        </h>
        <p className="font-secondary text-[14px] xxs:text-base text-black tracking-[0.3px]">
          Send and receive money with anyone, donate to an important cause, or
          tip professionals. Just enter a $cashtag, phone number, or scan their
          QR code to pay.
        </p>
      </div>

      <div className="col-start-2 col-end-3 row-start-1 min-w-full xxxs:min-w-[240px] xxs:min-w-[380px] xs:min-w-[520px] sm:min-w-[600px] max-w-[750px] justify-self-center self-center z-30 xxs:z-20 sm:mt-16 mb-0 lg:mb-16">
        <img
          src="/images/payment-phone.png"
          className="object-cover w-full h-[300px] sm:h-[400px]"
          alt="Payment Phone"
        />
      </div>

      {/* Images */}
      {/* Right -  Center - Left */}
      <img
        src="/images/payment-column.png"
        alt="Payment Column"
        className="lg:block col-start-2 col-end-3 row-start-1 max-w-[810px] max-h-[458px] absolute -right-[290px]  lg:-right-[110px] xl:-right-[110px] bottom-0 lg:bottom-[60px] z-0"
      />

      <img
        src="/images/payment-column.png"
        alt="Payment Column"
        className="col-start-2 col-end-3 row-start-1 max-w-[810px] max-h-[458px] absolute -right-[120px] xs:-right-[110px] md:-right-[110px] lg:right-[180px] xl:right-[180px] -bottom-[250px] md:-bottom-[180px] lg:-bottom-[100px] xl:-bottom-[60px] z-40"
      />

      <img
        src="/images/payment-column.png"
        alt="Payment Column"
        className="col-start-2 col-end-3 row-start-1 max-w-[810px] max-h-[458px] absolute -left-[700px] xxxs:-left-[660px] sm:-left-[640px] md:-left-[640px] lg:-left-[640px] xl:-left-[700px] -bottom-[150px] md:-bottom-[180px] lg:-bottom-[135px]  xl:-bottom-[100px] z-40"
      />

      {/* 4 - Medium */}
      {/* Left */}
      <img
        src="/images/pillar-medium.png"
        alt="Pillair Medium"
        className="col-start-2 col-end-3 row-start-1 max-w-[140px] sm:max-w-[172px] max-h-[254px] absolute bottom-[320px] xxs:bottom-[190px] sm:bottom-[80px] lg:bottom-[34px] -left-[110px] xxs:-left-[60px] sm:left-[30px] lg:left-[80px] z-20"
      />

      {/* Left Second */}
      <img
        src="/images/pillar-medium.png"
        alt="Pillair Medium"
        className="col-start-2 col-end-3 row-start-1 max-w-[140px] sm:max-w-[172px] max-h-[254px] absolute -bottom-[100px] lg:bottom-[50px] left-[0px] sm:left-[120px] md:left-[120px]  lg:left-[345px]  xl:left-[435px] z-20 lg:z-50"
      />

      {/* Right back */}
      <img
        src="/images/pillar-medium.png"
        alt="Pillair Medium"
        className="col-start-2 col-end-3 row-start-1 max-w-[140px] sm:max-w-[172px] max-h-[254px] absolute bottom-[320px] lg:bottom-[160px] -right-[30px] lg:right-[150px] z-10"
      />

      {/* Right Front */}
      <img
        src="/images/pillar-medium.png"
        alt="Pillair Medium"
        className="hidden xxs:block col-start-2 col-end-3 row-start-1 max-w-[140px] sm:max-w-[172px] max-h-[254px] absolute -bottom-[100px] lg:-bottom-[60px] right-[90px] xs:right-[180px] sm:right-[200px] md:right-[120px] lg:right-[420px] xl:right-[460px] z-30 lg:z-50"
      />

      {/* Large - 1 */}
      <img
        src="/images/pillar-large.png"
        alt="Pillair Large"
        className="hidden xxxs:block col-start-2 col-end-3 row-start-1 max-w-[160px] sm:max-w-[210px] max-h-[334px] absolute bottom-[120px] lg:bottom-[90px] -right-[20px] xxs:-right-[10px] sm:right-[60px] lg:right-[380px] md: z-10 lg:z-20 xl:z-0"
      />

      {/* Small - 1 */}
      <img
        src="/images/pillar-small.png"
        alt="Pillair Small"
        className="col-start-2 col-end-3 row-start-1 max-w-[90px] sm:max-w-[135px] max-h-[132px] absolute bottom-[80px] left-[0px] lg:left-[180px] z-30 lg:z-10"
      />
    </section>
  );
};

export default Payments;
