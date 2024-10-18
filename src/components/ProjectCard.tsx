import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  details: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <img
        src={project.image}
        alt={project.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-gray-600">{project.description}</p>
        <button
          className="mt-4 text-blue-500 font-semibold hover:underline focus:outline-none"
          onClick={toggleExpand}
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
        {isExpanded && (
          <div className="mt-4 text-gray-800">
            <p>{project.details}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
