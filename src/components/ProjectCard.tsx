
import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githublink?: string;
  reverse?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, githublink, reverse }) => {
  return (
    <motion.div
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center my-12`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/4 h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain rounded-lg shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 md:px-6 mt-4 md:mt-0">
        <h3 className="text-3xl font-bold text-blue-400 mb-4">{title}</h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          {description}
        </p>

        {/* GitHub Button */}
        {githublink && (
          <a
            href={githublink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-transparent border-2 border-blue-400 text-blue-400 px-4 py-2 rounded-md hover:bg-blue-400 hover:text-black transition-all duration-300"
          >
            View on GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;

