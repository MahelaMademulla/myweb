import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import BgImage from "../../assets/1.jpeg";
import { motion } from "framer-motion";

const Subscribe = () => {
  return (
    <section className="bg-[#f7f7f7] py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="max-w-[1200px] mx-auto px-6 py-16 min-h-[500px] flex items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center w-full text-center space-y-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-snug">
            People all around the world are transforming their fitness journey
          </h1>
          <p className="text-white text-base md:text-lg leading-relaxed">
            Get AI-powered workout plans, progress tracking, and expert fitness guidance.
            Whether at home or in the gym, take control of your fitness journey today!
          </p>

          {/* ✅ Play Store & App Store Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 flex items-center gap-3 rounded-lg shadow-lg transition hover:scale-105 duration-300 w-full sm:w-[220px] justify-center"
            >
              <FaGooglePlay className="text-xl" />
              <span className="text-sm font-medium">Download from Play Store</span>
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 flex items-center gap-3 rounded-lg shadow-lg transition hover:scale-105 duration-300 w-full sm:w-[220px] justify-center"
            >
              <FaApple className="text-xl" />
              <span className="text-sm font-medium">Download from App Store</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
