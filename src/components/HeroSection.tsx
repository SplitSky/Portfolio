import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white h-screen flex items-center justify-center">
      <div className="text-center max-w-xl">
        {/* Profile Picture */}
        <img
          src="/profile-pic.jpg"  // Add your profile image here
          alt="Tomasz Neska"
          className="mx-auto rounded-full h-32 w-32 border-4 border-white"
        />

        {/* Name and Title */}
        <h1 className="text-5xl font-bold mt-4">Tomasz Neska</h1>
        <p className="mt-2 text-xl">Data Consultant | Full-Stack Developer</p>

        {/* Short Professional Bio */}
        <p className="mt-4 text-gray-200">
          I specialize in data migration, API development, and full-stack applications. With hands-on
          experience in Python, FastAPI, Salesforce, and MongoDB, I build robust and scalable solutions
          for enterprise clients.
        </p>

        {/* Call-to-Action */}
        <a
          href="#projects"
          className="mt-6 inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          View My Work
        </a>

        {/* Social Links */}
        <div className="flex justify-center mt-6 space-x-6">
          <a
            href="https://github.com/SplitSky"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tomasz-neska-444476187/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
