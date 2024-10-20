import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold my-8">Contact Me</h1>
      <div className="text-center">
        <p className="text-lg">Feel free to reach out through the links below:</p>
        <div className="flex justify-center space-x-6 my-6">
          <a href="mailto:tomaszneska523@gmail.com" className="text-blue-600 hover:underline">Email</a>
          <a href="https://github.com/SplitSky" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/tomasz-neska-444476187/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
        </div>
        {/* TODO: Add a form once the backend is implementred */}
      </div>
    </div>
  );
};

export default Contact;
