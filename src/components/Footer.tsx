import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Contact Information */}
          <div>
            <p className="text-sm">Feel free to send me an </p>
            <a href="mailto:tomaszneska523@gmail.com" className="hover:underline">
              email!
            </a>
          </div>

          {/* Back to Top Button - Centered */}
          <div className="mt-4 md:mt-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-white text-3xl focus:outline-none hover:text-blue-500"
              aria-label="Back to Top"
            >
              ↑
            </button>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com/SplitSky"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tomasz-neska-444476187/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

