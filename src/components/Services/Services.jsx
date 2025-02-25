import React, { useState } from "react";
import { DiCodeigniter } from "react-icons/di";
import { RiRobot2Fill } from "react-icons/ri";
import { GiProgression } from "react-icons/gi";
import { RiVidicon2Line } from "react-icons/ri";
import { MdGroups2 } from "react-icons/md";
import { IoPulseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const ServicesData = [
  {
    id: 1,
    title: "Workout Progress Tracking",
    description: "Track your workout progress and achieve your fitness goals efficiently.",
    icon: <GiProgression />,
    delay: 0.2,
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Personalized Workout Plans",
    description: "Get AI-generated workout plans tailored to your needs and goals.",
    icon: <RiRobot2Fill />,
    delay: 0.3,
    color: "bg-red-500",
  },
  {
    id: 3,
    title: "Food Calorie Counter",
    description: "Monitor your calorie intake with an easy-to-use food tracker.",
    icon: <DiCodeigniter />,
    delay: 0.4,
    color: "bg-green-500",
  },
  {
    id: 4,
    title: "AI Posture Detection",
    description: "Use AI-powered technology to maintain correct posture while exercising.",
    icon: <RiVidicon2Line />,
    delay: 0.5,
    color: "bg-yellow-500",
  },
  {
    id: 5,
    title: "Calorie Burned Counter",
    description: "Calculate the calories burned during workouts to optimize your routine.",
    icon: <IoPulseOutline />,
    delay: 0.6,
    color: "bg-purple-500",
  },
  {
    id: 6,
    title: "Connect with Community",
    description: "Join a fitness community and connect with like-minded individuals.",
    icon: <MdGroups2 />,
    delay: 0.7,
    color: "bg-pink-500",
  },
];

const SlideLeft = (delay) => ({
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, delay: delay, ease: "easeInOut" },
  },
});

const Services = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="services" className="bg-white pt-20">
      <div className="container pb-6 pt-6">
        <h1 className="text-4xl font-bold text-left pb-10">Features</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {ServicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 duration-300 shadow-md transition-all ${
                hoveredId === service.id
                  ? `${service.color} text-white scale-110`
                  : "bg-gray-100 hover:bg-gray-300"
              }`}
              style={{
                transform: hoveredId === service.id ? "scale(1.2)" : "scale(1)", 
                zIndex: hoveredId === service.id ? 10 : 1, 
              }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h1 className="text-lg font-semibold text-center px-3">
                {service.title}
              </h1>
              {hoveredId === service.id && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="text-center px-4 text-sm"
                >
                  {service.description}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
