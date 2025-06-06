import React, { useState } from "react";
import BannerPng from "../../assets/education.png";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { FadeUp } from "../Hero/Hero";
import { motion } from "framer-motion";

const Banner = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="about" className="py-10 pt-20">
      <div className="container py-6 md:py-10 flex flex-col md:grid md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        
        {/* About the App - First on small screens, Left on larger screens */}
        <div className="flex flex-col justify-center order-1 md:order-1 text-center md:text-left">
          <div className="space-y-6">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-gray-900"
            >
              About the App
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[15px] text-gray-700 leading-relaxed"
            >
              <b>Your time, your fitness, your way!</b> Our AI-powered app personalizes
              your workouts based on your schedule, preferences, and available equipment.
              Whether you're balancing a busy lifestyle, working out from home, or hitting the gym,
              our system adapts to you, so you can stay consistent and achieve your goals effortlessly.
            </motion.p>

            {/* Feature Cards */}
            <div className="flex flex-col gap-6 items-center md:items-start">
              
              {/* Card 1 */}
              <motion.div
                variants={FadeUp(0.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`flex items-center gap-4 p-4 rounded-full w-[90%] md:w-auto duration-300 hover:shadow-2xl ${
                  hoveredCard === 1 ? "bg-blue-400 text-white" : "bg-[#f4f4f4]"
                }`}
              >
                <FaBookReader className="text-lg" />
                <p className="text-[14px]">
                  <b>Smart Workout Plans</b><br />
                  AI adapts your routine to your fitness level & schedule.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                variants={FadeUp(0.4)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`flex items-center gap-4 p-4 rounded-full w-[90%] md:w-auto duration-300 hover:shadow-2xl ${
                  hoveredCard === 2 ? "bg-green-400 text-white" : "bg-[#f4f4f4]"
                }`}
              >
                <GrUserExpert className="text-lg" />
                <p className="text-[14px]">
                  <b>Gym or Home, Your Choice</b><br />
                  Custom plans for home & gym workouts.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                variants={FadeUp(0.6)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCard(3)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`flex items-center gap-4 p-4 rounded-full w-[90%] md:w-auto duration-300 hover:shadow-2xl ${
                  hoveredCard === 3 ? "bg-red-400 text-white" : "bg-[#f4f4f4]"
                }`}
              >
                <MdOutlineAccessTime className="text-lg" />
                <p className="text-[14px]">
                  <b>Fitness Without Limits</b><br />
                  Short on time? Get quick, effective workouts.
                </p>
              </motion.div>

            </div>
          </div>
        </div>

        {/* Banner Image - Second on small screens, Right on larger screens */}
        <div className="flex justify-center items-center order-2 md:order-2">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={BannerPng}
            alt="About the App"
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;
