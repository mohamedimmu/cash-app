import React from "react";
import FooterButton from "./FooterButton";

const Footer = ({ theme }) => {
  return (
    <footer className="self-end py-4 grid grid-cols-12 grid-flow-dense items-center  gap-x-4 lg:gap-x-4 gap-y-4">
      <div className="flex flex-wrap gap-5 col-span-12 justify-self-center sm:justify-self-start sm:col-span-9 lg:col-span-5">
        <FooterButton src="/images/apple.svg" title="App Store" theme={theme} />
        <FooterButton
          src="/images/play-store.svg"
          title="Google Play"
          theme={theme}
        />
      </div>

      <div
        className={`animate-bounce justify-self-center col-span-12 lg:col-span-2 order-3 lg:order-2`}
      >
        <img
          src="/images/down-arrow.svg"
          alt="Down Arrow"
          className={`${theme === "black" ? "transform rotate-180" : ""} `}
        />
      </div>

      <div className="col-span-12 text-center lg:text-left lg:col-span-3 order-2 lg:order-3">
        <p
          className={`font-secondary font-bold text-[10px] ${
            theme === "black"
              ? "text-footer-font-secondary"
              : "text-footer-font"
          } leading-3 line-clamp-5`}
        >
          Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See
          our BrokerCheck. Investing involves risk; you may lose money. Bitcoin
          trading offered by Cash App. Cash App Investing does not trade bitcoin
          and Cash App is not a member of FINRA or SIPC. Cash App facilitates
          banking services through Sutton Bank and Lincoln Savings Bank, Members
          FDIC.
        </p>
      </div>

      <div className="col-span-12 justify-self-center sm:col-span-3 lg:col-span-2 flex gap-5 lg:justify-self-end lg:order-4">
        <img
          src={`${
            theme === "black"
              ? "/images/twitch-black.svg"
              : "/images/twitch.svg"
          }`}
          alt="twitch"
        />
        <img
          src={`${
            theme === "black"
              ? "/images/twitter-black.svg"
              : "/images/twitter.svg"
          }`}
          alt="twitter"
        />
        <img
          src={`${
            theme === "black"
              ? "/images/instagram-black.svg"
              : "/images/instagram.svg"
          }`}
          alt="Instagram"
        />
      </div>
    </footer>
  );
};

export default Footer;
