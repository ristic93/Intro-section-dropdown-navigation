import React, { useState } from "react";
import { features, company } from "../constants/data";
import logo from "../assets/logo.svg";
import arrowDown from "../assets/icon-arrow-down.svg";
import arrowUp from "../assets/icon-arrow-up.svg";
import menu from "../assets/icon-menu.svg";
import close from "../assets/icon-close-menu.svg";

const Navbar = () => {
  
  const [toggle, setToggle] = useState(true);

  const [toggleOne, setToggleOne] = useState(true);
  const [toggleTwo, setToggleTwo] = useState(true);
  const [toggleThree, setToggleThree] = useState(true);


  const [toggleMenu, setToggleMenu] = useState(true);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const handleToggleOne = () => {
    setToggleOne((prev) => !prev);
  };

  const handleToggleTwo = () => {
    setToggleTwo((prev) => !prev);
  };

  const handleToggleThree = () => {
    setToggleThree((prev) => !prev);
  };

  const handleMenu = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <nav className="flex justify-between items-center py-6 px-12 m-auto relative">
      <div className="flex space-x-16 md:space-x-8">
        <div>
          <img src={logo} alt="logo" className="cursor-pointer animate-pulse" />
        </div>
        <ul className="hidden md:flex space-x-10 md:space-x-5">
          <li onClick={handleToggle}>
            <a href="#" className="text-gray hover:text-black">
              Features
              <img
                src={toggle ? arrowUp : arrowDown}
                alt="arrow"
                className="inline w-[15px] ml-2"
              />
            </a>
          </li>
          <li onClick={handleToggleOne}>
            <a href="#" className="text-gray hover:text-black">
              Company
              <img
                src={toggleOne ? arrowUp : arrowDown}
                alt="arrow"
                className="inline w-[15px] ml-2"
              />
            </a>
          </li>
          <li>
            <a href="#" className="text-gray hover:text-black">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="text-gray hover:text-black">
              About
            </a>
          </li>
        </ul>
      </div>

      <div className="hidden md:flex text-gray space-x-10">
        <p className="cursor-pointer py-2 transition-all hover:text-black">
          Login
        </p>
        <button className="border border-black rounded-xl px-4 py-2 transition-all duration-300 hover:bg-black hover:text-white hover:scale-[1.2] font-bold animate-pulse">
          Register
        </button>
      </div>

      <div
        className={`${toggle ? "hidden" : "visible"
          } absolute top-[60px] left-[90px] rounded-lg`}
      >
        <ul className="py-5 px-10 bg-white rounded-md shadow-md shadow-gray ">
          {features.map((item) => {
            return (
              <li>
                <a href="#" className="flex items-center">
                  <img
                    src={item.icon}
                    alt="icon"
                    className="inline w-[12px] mr-3 mb-5 animate-bounce"
                  />
                  <p className="mb-4 hover:translate-x-4 transition-all duration-300">
                    {item.title}
                  </p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className={`${toggleOne ? "hidden" : "visible"
          } absolute top-[60px] left-[330px] rounded-lg`}
      >
        <ul className="py-5 px-10 bg-white rounded-md shadow-md shadow-gray ">
          {company.map((item) => {
            return (
              <li>
                <a href="#" className="flex items-center">
                  <p className="mb-4 hover:translate-x-4 transition-all duration-300">
                    {item.title}
                  </p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* hamburger menu */}

      <div className="md:hidden lg:hidden z-10">
        <button onClick={handleMenu}>
          <img src={toggleMenu ? menu : close} alt="" className="menu-button" />
        </button>
      </div>

      <div
        className={`${toggleMenu ? "hidden" : "visible"
          } absolute top-[0] right-[0] bottom-[0]`}
      >
        <ul className="py-20 pr-[100px] pl-8 h-[100vh] bg-white shadow-md shadow-gray z-10 leading-10 md:hidden">
          <li onClick={handleToggleTwo}>
            <a href="#" className="text-gray hover:text-black">
              Features
              <img
                src={toggleTwo ? arrowUp : arrowDown}
                alt="arrow"
                className="inline w-[15px] ml-2"
              />
            </a>
          </li>
          <ul className={`${toggleTwo ? "hidden" : "visible"
            } leading-3`}>
            {features.map((item) => {
              return (
                <li>
                  <a href="#" className="flex items-center">
                    <img
                      src={item.icon}
                      alt="icon"
                      className="inline w-[12px] mr-3 mb-5 animate-bounce"
                    />
                    <p className="mb-4 hover:translate-x-4 transition-all duration-300">
                      {item.title}
                    </p>
                  </a>
                </li>
              );
            })}
          </ul>
          <li onClick={handleToggleThree}>
            <a href="#" className="text-gray hover:text-black">
              Company
              <img
                src={toggleThree ? arrowUp : arrowDown}
                alt="arrow"
                className="inline w-[15px] ml-2"
              />
            </a>
          </li>
          <ul className={`${toggleThree ? "hidden" : "visible"
            } leading-3 pl-6`}>
            {company.map((item) => {
              return (
                <li>
                  <a href="#" className="flex items-center">
                    <p className="mb-4 hover:translate-x-4 transition-all duration-300">
                      {item.title}
                    </p>
                  </a>
                </li>
              );
            })}
          </ul>
          <li>
            <a href="#" className="text-gray hover:text-black">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="text-gray hover:text-black">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
