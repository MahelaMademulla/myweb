import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa"; // Play Store & App Store icons
import BgImage from "../../assets/1.jpeg";
import { motion } from "framer-motion";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Subscribe = () => {
  return (
    <section className="bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={bgStyle}
        className="container py-24 md:py-48"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center"
        >
          <div className="text-center space-y-4 lg:max-w-[500px] mx-auto">
            <h1 className="text-4xl font-bold !leading-snug text-white">
              People all around the world are transforming their fitness journey
            </h1>
            <p className="text-white text-[15px] leading-relaxed">
              Get AI-powered workout plans, progress tracking, and expert fitness guidance. 
              Whether at home or in the gym, take control of your fitness journey today!
            </p>

            {/* ✅ Play Store & App Store Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <a
                href="https://play.google.com/store" // Replace with actual Play Store link
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 flex items-center gap-3 rounded-lg shadow-lg transition hover:scale-105 duration-300 w-[220px] justify-center"
              >
                <FaGooglePlay className="text-xl" />
                <span className="text-[14px] font-medium">Download from Play Store</span>
              </a>
              <a
                href="https://www.apple.com/app-store/" // Replace with actual App Store link
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 flex items-center gap-3 rounded-lg shadow-lg transition hover:scale-105 duration-300 w-[220px] justify-center"
              >
                <FaApple className="text-xl" />
                <span className="text-[14px] font-medium">Download from App Store</span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
