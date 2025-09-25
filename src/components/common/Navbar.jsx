"use client";
import { navItems } from "@/src/constants/index.js";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import MobileNavbar from "./CreativeMobileNavbar";
import Image from "next/image";
import Box from "@mui/joy/Box";
import LanguageSwitcher from "./translate/LanguageSwitcher";
const NavBar = () => {
  // State for toggling audio and visual indicator
  // const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  // const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  // Refs for audio and navigation container
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);
  const linksRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle audio and visual indicator
  // const toggleAudioIndicator = () => {
  //   setIsAudioPlaying((prev) => !prev);
  //   setIsIndicatorActive((prev) => !prev);
  // };

  // Manage audio playback
  // useEffect(() => {
  //   if (isAudioPlaying) {
  //     audioElementRef.current.play();
  //   } else {
  //     audioElementRef.current.pause();
  //   }
  // }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 z-50 h-20 border-none transition-all duration-700 sm:inset-x-6 backdrop-blur-md "
    >
      <header className="absolute top-1/2 w-full  p-8 -translate-y-1/2 ">
        <nav className="flex size-full items-center  justify-between ">
          {/* Logo and Product button */}
          <div className="flex items-center gap-7">
            <Image
              src="/logo-van.png"
              alt="logo"
              className="w-48 md:w-72 h-12 md:h-16"
              width={500}
              height={500}
            />
          </div>

          {/* Navigation Links and Audio Button */}
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  ref={linksRef}
                  className="nav-hover-btn !text-base mx-4  hover:p-2"
                >
                  {item.title}
                </Link>
              ))}
              <LanguageSwitcher />
            </div>

            <div className="md:hidden">
              <MobileNavbar />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
