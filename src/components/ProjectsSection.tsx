import React from 'react';
import ProjectCard from './ProjectCard';

import resdata_img from '../assets/resdata_logo.png';
import chess_img from '../assets/programmer_creature.png';
import em_img from '../assets/pointing_creature.png';
import hack_img from '../assets/hack-a-bot.jpg';
import cern_img from '../assets/CERN_logo.png';


const projectData = [
  {
    title: 'ResData - Full-Stack Data Management Application',
    description: `Designed and maintained ResData, a full-stack application for managing and analyzing large datasets from high-throughput lab equipment. 
      - Built with FastAPI and MongoDB for secure real-time data ingestion and storage.
      - Developed a Svelte-based front-end for intuitive researcher interaction.
      - Implemented CI/CD pipelines using GitHub Jobs for automated testing and deployments.`,
    image: resdata_img,
    githublink: 'https://github.com/SplitSky/resdata2',
  },
  {
    title: 'Chess AI and Game System',
    description: `Engineered an AI-powered chess game with an advanced alpha-beta pruning algorithm. 
      - Achieved a 90% win rate against human players by optimizing the AI's decision-making process.`,
    image: chess_img,
    githublink: 'https://github.com/SplitSky/OOP_C_2',
  },
  {
    title: 'Web-based Electromagnetism Teaching Tool',
    description: `Developed a web-based 3D interactive teaching tool to visualize electromagnetism. 
      - Built with HTML, CSS, Bootstrap, PHP, and JavaScript to simulate physics concepts for educational purposes.`,
    image: em_img,
    githublink: 'https://github.com/SplitSky/EM-simulation',
  },
  {
    title: 'Hack-A-Bot 2023 – Hackathon',
    description: `Collaborated with a team in the Hack-A-Bot 2023 Hackathon. 
      - Created a fully autonomous swarm of 3D-printed bots capable of playing football.
      - Directed the programming strategy, enhancing team collaboration and agile development.`,
    image: hack_img,
    githublink: 'https://github.com/druvdub/HackABot_Team30',
  },
  {
    title: 'ROOT Data Analysis',
    description: `Applied advanced data analysis techniques to transform ROOT data from particle detectors in high-energy physics experiments.
      - Used C++ and Python to extract insights from Lepton particle cross-section datasets.`,
    image: cern_img,
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-400 text-center mb-12">Projects</h2>

        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            reverse={index % 2 === 1}  // Alternate layout (left-right)
            githublink={project.githublink}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
