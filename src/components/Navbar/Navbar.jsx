import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import Logo from "../../assets/logo.jpg";

const NavbarMenu = [
  { id: 1, title: "Home", link: "#home" },
  { id: 2, title: "About", link: "#about" },
  { id: 3, title: "Features", link: "#services" },
  { id: 4, title: "Our Team", link: "#team" },
  { id: 5, title: "Contact Us", link: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-4 flex justify-between items-center"
      >
        {/* Logo and Home Link */}
        <div className="flex items-center gap-3">
          <a href="#home">
            <img
              src={Logo}
              alt="Logo"
              className="h-12 w-auto rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </a>
          <h1 className="font-bold text-2xl">PulsePro</h1> {/* ✅ Keep PulsePro in same place */}
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="group">
                <a
                  href={menu.link}
                  className="relative inline-block py-2 px-3 text-gray-700 hover:text-blue-500 transition-all duration-300"
                >
                  {menu.title}
                  {/* Hover Effect: Animated Underline */}
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
            <button className="primary-btn">Sign In</button>
          </ul>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-4xl">
            {isOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Sidebar Menu */}
      <motion.div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-5 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <ul className="flex flex-col gap-6">
          {NavbarMenu.map((menu) => (
            <li key={menu.id} onClick={toggleMenu} className="group">
              <a
                href={menu.link}
                className="block py-2 text-lg text-gray-700 hover:text-blue-500 transition-all duration-300"
              >
                {menu.title}
                {/* Mobile Underline Effect */}
                <span className="block w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
          <button className="primary-btn w-full">Sign In</button>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
