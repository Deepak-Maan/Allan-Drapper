"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [navBar, setNavBar] = useState(false);

  function showNav() {
    setNavBar(!navBar);
  }

  function closeNav() {
    setNavBar(false);
  }

  useEffect(() => {
    if (navBar) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [navBar]);

  return (
    <>
      <nav className="max-w-[1264px] w-full mx-auto px-3 py-[14.5px] flex items-center justify-between">
        <Link className="relative z-10" href="/">
          <Image src='/assets/images/podcast/svg/navLogo.svg' alt="Logo" width={215} height={39} />
        </Link>
        <ul
          className={`flex items-center  z-20 relative sm:gap-[32px] lg:gap-5 xl:gap-10 lg:max-h-[80px] duration-300 max-lg:fixed max-lg:w-full max-lg:!min-h-screen max-lg:justify-center max-lg:flex-col max-lg:top-0 max-lg:left-[-105%] max-lg:p-[30px] max-lg:!bg-black ${navBar && "!left-0"
            }`} >
          <li className="duration-300 transition-all">
            <Link href="/" onClick={closeNav} className="font-450 leading-140 text-xl text-white">
              Meet Allan
            </Link>
          </li>
          <li className="duration-300 transition-all">
            <Link href="/" onClick={closeNav} className="font-450 leading-140 text-xl text-white">
              My Brands
            </Link>
          </li>
          <li className="duration-300 transition-all">
            <Link href="/" onClick={closeNav} className="font-450 leading-140 text-xl text-white">
              Podcast
            </Link>
          </li>
          <li className="duration-300 transition-all">
            <Link href="/" onClick={closeNav} className="font-450 leading-140 text-xl text-white">
              Coaching
            </Link>
          </li>
          <li className="duration-300 transition-all">
            <Link href="/podcast" onClick={closeNav} className="font-450 leading-140 text-xl text-white">
              Speaking
            </Link>
          </li>
          <li className="duration-300 transition-all">
            <Link href="/" onClick={closeNav} className="font-450 leading-140 text-xl text-white">
              Connect
            </Link>
          </li>
          <li>
            <button className="border border-orange border-solid py-3 px-5 text-orange font-bold text-lg leading-normal xl:ms-2" onClick={showNav}>
              Newsletter
            </button>
          </li>
        </ul>
        <button aria-label="crossIcon" onClick={showNav} className="lg:hidden relative z-50">
          {navBar ? (
            <div className="flex lg:hidden flex-col relative z-50 justify-between w-[24px] h-[24px] cursor-pointer">
              <span className="bg-orange min-w-[11px] min-h-[2px] rounded-md relative z-50 transition-all ease-linear duration-300 rotate-[45deg] translate-x-0 -translate-y-1 -bottom-[15px]"></span>
              <span className="bg-orange   min-w-[11px] min-h-[2px] rounded-md relative z-50 transition-all ease-linear duration-300 rotate-[-45deg] translate-x-0 translate-y-0 bottom-[11px]"></span>
            </div>
          ) : (
            <div className="flex lg:hidden flex-col z-50 justify-between my-1 w-[21px] h-[15px] md:w-[28px] md:h-[18px] cursor-pointer relative">
              <span className="bg-orange rounded-md w-[11px] md:w-[14px] h-[3px] md:h-[4px] relative z-50 transition-all ease-linear duration-300"></span>
              <span className="bg-orange rounded-md w-full h-[3px] md:h-[4px] relative z-50 transition-all ease-linear duration-300"></span>
              <span className="bg-orange rounded-md w-[11px] md:w-[14px] h-[3px] md:h-[4px] ms-auto relative z-50 transition-all ease-linear duration-300"></span>
            </div>
          )}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
