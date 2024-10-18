import React from 'react';
import ProjectList from '../components/ProjectList';

const Projects: React.FC = () => {
  // Sample data - Replace this with dynamic data from an API later
  const projectData = [
    {
      id: 1,
      title: 'Project 1',
      image: 'https://via.placeholder.com/600x400',
      description: 'This is a short description of project 1.',
      details:
        'Here are more details about project 1. It was built using React, TypeScript, and Tailwind CSS.',
    },
    {
      id: 2,
      title: 'Project 2',
      image: 'https://via.placeholder.com/600x400',
      description: 'This is a short description of project 2.',
      details:
        'Here are more details about project 2. It was built using Node.js and Express.',
    },
    {
      id: 3,
      title: 'Project 3',
      image: 'https://via.placeholder.com/600x400',
      description: 'This is a short description of project 3.',
      details:
        'Here are more details about project 3. It is a full-stack project using MERN stack.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-center py-8">My Projects</h1>
      <ProjectList projects={projectData} />
    </div>
  );
};

export default Projects;

