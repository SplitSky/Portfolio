import React from 'react';
import profilePicture from '../assets/logo_vector.png';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-black text-white h-screen flex items-center justify-center">
      <div className="text-center max-w-xl">
        {/* Profile Picture */}
        <img
          src={profilePicture}
          alt="Tomasz Neska"
          className="mx-auto rounded-full h-52 w-52 border-4 border-white"
        />

        {/* Name and Title */}
        <h1 className="text-5xl font-light mt-4 tracking-wide">Tomasz Neska</h1>
        <p className="mt-3 text-xl font-light tracking-wide text-gray-300">
          Data Consultant | Full-Stack Developer | Physicist
        </p>

        {/* Short Professional Bio */}
        <p className="mt-4 text-gray-400 font-light leading-relaxed">
          I specialize in data migration, API development, and full-stack application architecture. Leveraging my hands-on experience with C++, Python, FastAPI, Salesforce, React, and Svelte, I deliver robust, scalable solutions tailored to meet the needs of enterprise clients.
        </p>

        {/* Call-to-Action */}
        <a
          href="#projects"
          className="mt-6 inline-block bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-250 transition-all duration-200"
        >
          View My Work
        </a>

        {/* Social Links */}
        <div className="flex justify-center mt-6 space-x-6">
          <a
            href="https://github.com/SplitSky"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tomasz-neska-444476187/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

