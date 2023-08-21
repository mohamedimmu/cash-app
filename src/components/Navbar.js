import { useState } from "react";
import { headerLink } from "../constants/index";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="absolute z-10 top-0 right-0 w-full">
      <nav className="hidden lg:flex items-center justify-between px-8 xl:px-16 py-6 text-white">
        <div className="logo">
          <a href="/">
            <img
              src="/images/dollars.svg"
              className="w-8 h-11 object-contain"
              alt="Logo"
            />
          </a>
        </div>

        <ul className="flex gap-5 relative">
          {headerLink.map((link) => (
            <li>
              <a
                className="font-primary text-xs font-extrabold uppercase"
                href="/"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button>
          <img
            src="/images/eye-button.svg"
            className="w-16 h-8 object-contain"
            alt="Eye Button"
          />
        </button>
      </nav>

      {/* Mobile Naviagtion */}
      <nav className="lg:hidden flex justify-between px-8 py-6 gap-4 flex-wrap">
        <div className="logo">
          <a href="/">
            <img
              src="/images/dollars.svg"
              className="w-8 h-11  object-contain"
              alt="Logo"
            />
          </a>
        </div>

        <button>
          <img
            src="/images/eye-button.svg"
            className="w-16 h-8  object-contain"
            alt="Eye Button"
          />
        </button>

        <Bars2Icon
          onClick={() => setIsOpen(true)}
          className="h-11 w-11 object-contain"
        />

        <div
          className={`${
            isOpen ? "block animate-slide-in" : " animate-slide-out hidden"
          } shadow-md transition-all duration-500 ease-in-out absolute top-0 right-0 z-20 bg-black h-screen w-3/4 flex flex-col items-end p-6 gap-12`}
        >
          <div className="flex justify-end ">
            <XMarkIcon
              onClick={() => setIsOpen(false)}
              className="h-10 w-10 object-contain"
            />
          </div>

          <ul className="flex flex-col gap-5 text-right">
            {headerLink.map((link) => (
              <li>
                <a
                  className="font-primary text-xs font-extrabold uppercase"
                  href="/"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Overlay */}
        <div
          className={`${
            isOpen ? "opacity-30" : "hidden"
          } transition-all duration-500 ease-in-out bg-black absolute top-0 left-0 right-0 z-1 w-screen h-screen`}
        />
      </nav>
    </header>
  );
};

export default Navbar;
