import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-28 bg-[#ECEFF1]" id="contact"> {/* ⬅ Light Purple Background */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* ✅ First Section - About FitLife */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">PulsePro</h1>
            <p className="text-dark2">
              PulsePro is your ultimate fitness companion. Get AI-powered workout plans, 
              real-time progress tracking, and access to a supportive fitness community. 
              Whether at home or in the gym, take control of your fitness journey today!
            </p>
          </div>

          {/* ✅ Second Section - Services & Links */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Features</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-purple-600 duration-200">
                    AI Workout Plans
                  </li>
                  <li className="cursor-pointer hover:text-purple-600 duration-200">
                    AI Personal Training
                  </li>
                  <li className="cursor-pointer hover:text-purple-600 duration-200">
                    Diet & Nutrition
                  </li>
                  <li className="cursor-pointer hover:text-purple-600 duration-200">
                    Community Support
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Links</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-purple-600 duration-200">
                    Home
                  </li>
                  <li className="cursor-pointer hover:text-purple-600 duration-200">
                    Features
                  </li>
                  <li className="cursor-pointer hover:text-purple-600 duration-200">
                    About
                  </li>
                  <li className="cursor-pointer hover:text-purple-600 duration-200">
                    Contact
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ✅ Third Section - Newsletter & Socials */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Get Updates</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"
              />
              <button className="bg-purple-600 text-white font-semibold py-4 px-6 rounded-e-xl">
                Go
              </button>
            </div>
            {/* ✅ Social Icons */}
            <div className="flex space-x-6 py-3">
              <a href="https://chat.whatsapp.com">
                <FaWhatsapp className="cursor-pointer hover:text-purple-600 hover:scale-105 duration-200" />
              </a>
              <a href="https://www.instagram.com">
                <FaInstagram className="cursor-pointer hover:text-purple-600 hover:scale-105 duration-200" />
              </a>
              <a href="https://Pulsepro.com">
                <TbWorldWww className="cursor-pointer hover:text-purple-600 hover:scale-105 duration-200" />
              </a>
              <a href="https://www.youtube.com">
                <FaYoutube className="cursor-pointer hover:text-purple-600 hover:scale-105 duration-200" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
