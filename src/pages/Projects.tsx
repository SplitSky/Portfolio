import React, { useEffect, useState } from 'react';

interface Project {
  id: number;
  name: string;
  description: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
    fetch('https://localhost:5000/api/projects') // TODO : GO backend request -> Make it environment variable later

  useEffect(() => {
      fetch('http://localhost:5000/api/projects')  // Go backend URL
        .then((response) => response.json())
        .then((data) => setProjects(data))
        .catch((error) => console.error('Error fetching projects:', error));
    }, []);
  return (
  //  <div className="min-h-screen flex flex-col items-center justify-center bg-white">
  //    <h2 className="text-4xl font-bold">My Projects</h2>
  //    <p className="mt-4 text-gray-600">
  //      Here are some of my favorite projects...
  //    </p>
  //    {/* You can add a grid or list of project cards here */}
  //  </div>
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h2 className="text-4xl font-bold">My Projects</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="p-4 bg-gray-100 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold">{project.name}</h3>
            <p className="mt-2 text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

