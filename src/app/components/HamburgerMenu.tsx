"use client";
import { useState } from "react";
import Hamburger from "../icon/Hamburger_icon.svg";
import Close from "../icon/Close_icon.svg";
import HamburgerList from "./List";
import '../styles/hamburger.css'

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger Icon */}
      <div
        className="cursor-pointer"
        onClick={toggleMenu}
        aria-label="Open Menu"
      >
        {isOpen ? <Close /> : <Hamburger />}
      </div>

      {/* Menu Container */}
      <div
        className={`hamburger-blk ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Menu Items */}
        <nav className="mt-6 pl-14">
          <ul className="text-lg font-semibold">
            {HamburgerList.map((item, index) => (
              <li key={item.id}>
                <a
                  href="#"
                  className={`block text-left pr-3 py-6 ${
                    index === HamburgerList.length - 1
                      ? ""
                      : "border-b border-white"
                  }`}
                >
                  {item.ListName}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default HamburgerMenu;
