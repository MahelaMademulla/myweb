import React from 'react';
import { motion } from 'framer-motion';
import BoyAnimation from '../../assets/3.jpg'; 
import GirlAnimation from '../../assets/4.jpg'; 
import './TeamSection.css'; // Make sure to style it properly

const teamMembers = [
  { name: 'Naveen', gender: 'boy' },
  { name: 'Kushan', gender: 'boy' },
  { name: 'Ragulan', gender: 'boy' },
  { name: 'Dinith', gender: 'boy' },
  { name: 'Osura', gender: 'boy' },
  { name: 'Yenuli', gender: 'girl' }
];

const TeamSection = () => {
  return (
    <section id="team" className="team-section">
      {/* ✅ Section Title */}
      <h1 className="team-title">Team</h1>

      {/* ✅ Cards directly below title */}
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            className="team-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="team-avatar">
              <img
                src={member.gender === 'boy' ? BoyAnimation : GirlAnimation}
                alt={member.name}
                className="team-image"
              />
            </div>
            <div className="team-name">{member.name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
