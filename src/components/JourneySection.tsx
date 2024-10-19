import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    title: 'MPhys Physics at University of Manchester',
    date: 'Sept 2018 - Jul 2023',
    description: `
      During my time at the University of Manchester, I developed a strong foundation in physics and programming, 
      studying topics such as object-oriented C++, computational physics, and nuclear physics. This period helped 
      me refine my problem-solving abilities and led me to work on various innovative projects like the Chess AI.
    `,
    image: '/path-to-university-image.jpg', // Add your own image path
  },
  {
    title: 'Data Consultant at Cloud Perspective',
    date: 'Sept 2023 - Present',
    description: `
      Currently, I am working at Cloud Perspective as a Data Consultant. I have led complex data migration projects 
      for enterprise clients, managed datasets of over 2 million records, and built key integrations between Salesforce 
      and Informatica MDM, streamlining data workflows and ensuring data accuracy.
    `,
    image: '/path-to-job-image.jpg', // Add your own image path
  },
  {
    title: 'Summer Intern - Data Scientist at University of Manchester',
    date: 'Jun 2022 - Aug 2022',
    description: `
      As a Data Scientist intern, I developed an API-based data analytics pipeline using Python and MongoDB. 
      This experience deepened my understanding of data processing, automation, and the application of advanced 
      Python libraries like Pandas and Numpy.
    `,
    image: '/path-to-internship-image.jpg', // Add your own image path
  },
  {
    title: 'Projects and Hackathons',
    date: 'Ongoing',
    description: `
      From building the full-stack ResData application to optimizing a Chess AI, I have consistently worked on projects 
      that challenge my skills in web development, data analysis, and software architecture. Participating in Hack-A-Bot 
      2023 further refined my teamwork and problem-solving abilities.
    `,
    image: '/path-to-projects-image.jpg', // Add your own image path
  },
];

const JourneySection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">My Journey</h2>
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8"
            >
              <img
                src={milestone.image}
                alt={milestone.title}
                className="w-full md:w-1/3 h-auto rounded-lg shadow-lg"
              />
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold">{milestone.title}</h3>
                <p className="text-gray-500 italic">{milestone.date}</p>
                <p className="mt-4 text-gray-700">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
