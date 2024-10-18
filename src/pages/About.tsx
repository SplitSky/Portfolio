import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-4xl font-bold">About Me</h2>
      <p className="mt-4 text-gray-600 max-w-2xl text-center">
        I am a passionate developer with experience in React, Svelte, and various other front-end and back-end technologies.
      </p>
    </div>
  );
};

export default About;
