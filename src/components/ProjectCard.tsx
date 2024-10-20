import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  highlightColor: string; // This will control the highlight color
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, highlightColor }) => {
  return (
    <motion.div
      className="bg-black p-6 border-2 rounded-lg shadow-lg"
      style={{ borderColor: highlightColor }}
      whileHover={{ scale: 1.05 }} // Hover scaling
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold" style={{ color: highlightColor }}>
        {title}
      </h3>
      <p className="mt-4 text-gray-300">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-white font-semibold"
        style={{ borderBottom: `2px solid ${highlightColor}` }}
      >
        View More
      </a>
    </motion.div>
  );
};


export default ProjectCard;

