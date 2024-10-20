
import React from 'react';
import ProjectPreviewCard from './ProjectPreviewCard';

const ProjectsPreview: React.FC = () => {
  // Array of projects for display
  const projects = [
    {
      title: 'ResData',
      description: 'A full-stack data management application for high-throughput lab data.',
      image: 'https://via.placeholder.com/600x400', // Replace with actual image
      link: 'https://github.com/SplitSky/ResData', // Link to the project or demo
    },
    {
      title: 'Chess AI',
      description: 'An AI-powered chess game with optimized decision-making algorithms.',
      image: 'https://via.placeholder.com/600x400', // Replace with actual image
      link: 'https://github.com/SplitSky/ChessAI', // Link to the project or demo
    },
    {
      title: 'Web Electromagnetism Tool',
      description: 'A web-based interactive tool for teaching electromagnetism using 3D simulations.',
      image: 'https://via.placeholder.com/600x400', // Replace with actual image
      link: '#', // Link to the project or demo
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectPreviewCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;

