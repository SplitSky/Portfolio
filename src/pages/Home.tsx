import React from 'react';
import HeroSection from '../components/HeroSection.tsx';
import ProjectPreview from '../components/ProjectPreview.tsx'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
        <HeroSection /> 
    </div>
  );
};

export default Home;
