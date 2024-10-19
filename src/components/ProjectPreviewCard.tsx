import React from 'react';

interface ProjectPreviewCardProps {
  title: string;
  description: string;
  image: string;
  link: string; // Link to the project details or external site (GitHub, live demo)
}

const ProjectPreviewCard: React.FC<ProjectPreviewCardProps> = ({ title, description, image, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-blue-500 font-semibold hover:underline"
        >
          View More
        </a>
      </div>
    </div>
  );
};

export default ProjectPreviewCard;
