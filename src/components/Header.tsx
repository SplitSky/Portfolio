import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/LookingOverCreature.png';

const Header: React.FC = () => {
  return (
  <header className="bg-black border-b-2 border-blue-500 text-white py-4">
    <nav className="container mx-auto flex justify-between items-center">
      {/* Logo and Title */}
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="h-20 w-20 object-contain" />
        <div className="text-xl font-bold">Portfolio</div>
      </div>
    
      {/* Navigation Links */}
      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/about" className="hover:text-blue-400">About</Link>
        <Link to="/projects" className="hover:text-blue-400">Projects</Link>
        <Link to="/contact" className="hover:text-blue-400">Contact</Link>
      </div>
    </nav>
</header>

  );
};

export default Header;
