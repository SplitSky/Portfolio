import React from 'react';
import HeroSection from '../components/HeroSection.tsx';
import ProjectPreview from '../components/ProjectPreview.tsx'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <h1 className="text-6xl font-bold text-white">Welcome to My Portfolio</h1>
      <p className="text-lg text-white mt-4">I'm a web developer with experience in React and Tailwind CSS.</p>
      <div>
        <HeroSection /> 
        <ProjectPreview />
      </div>
    </div>
  );
};

export default Home;
