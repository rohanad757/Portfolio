import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  const projects = [
    {
      title: 'Ecommerce Website with Crypto Payment Gateway',
      description: 'A full-stack e-commerce platform with over 100 product listings and integrated crypto wallet support for secure, decentralized transactions. Features MetaMask, Phantom, and Trust Wallet connectivity.',
      tools: 'React, Node.js, Express.js, MongoDB, Tailwind CSS, JWT',
      link: 'https://github.com/rohanad757/FoodOrder-with-Crypto-Gateway',
      demo : "https://rohanad757-frontend.onrender.com/",
    },
    {
      title: 'Real-Time Chat Application',
      description: 'A scalable chat app with instant messaging powered by WebSocket (Socket.io) for low-latency communication. Designed for seamless user experience across multiple concurrent users.',
      tools: 'Socket.io, React, Node.js, Express.js, MongoDB',
      link: 'https://github.com/rohanad757/Real-Time-Chat-App',
      demo : "https://rohanad757-chatapp-frontend.onrender.com/",
    },
    {
      title: 'Solana Decentralized Application',
      description: 'A dApp for real-time token balance visualization on the Solana blockchain. Supports secure wallet-to-wallet token transfers and a self-airdrop mechanism for testnet tokens.',
      tools: 'Web3.js, React, JavaScript',
      link: 'https://github.com/rohanad757/solana-dapp',
      demo : "https://loquacious-licorice-81e634.netlify.app/"
    },
    {
      title: 'Token Launchpad on Solana',
      description: 'An intuitive platform for token creation and distribution on Solana. Includes secure wallet connectivity and real-time analytics for token supply, balances, and transaction history.',
      tools: 'React, Solana Web3.js, JavaScript',
      link: 'https://github.com/rohanad757/token-launchpad',
      
      demo : "https://beamish-pastelito-a625b5.netlify.app/"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="py-20 bg-gray-800 text-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Projects</h2>
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tools={project.tools}
              link={project.link}
              demo={project.demo}
              style={{ animationDelay: `${index * 0.4}s` }}
            />
          ))}
        </div>
        <div className="md:hidden relative overflow-visible">
          <div className="flex justify-center my-10">
            <ProjectCard
              title={projects[currentIndex].title}
              description={projects[currentIndex].description}
              tools={projects[currentIndex].tools}
              link={projects[currentIndex].link}
              className="w-full max-w-[90vw] mx-auto shadow-lg"
            />
          </div>
          <button
            onClick={handlePrev}
            className="absolute left-1/4 bottom-2 transform -translate-x-1/2 carousel-button"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-1/4 bottom-2 transform translate-x-1/2 carousel-button"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          <div className="flex justify-center gap-3 mt-4">
            {projects.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full ${index === currentIndex ? 'bg-blue-400' : 'bg-gray-500'}`}
              ></div>
            ))}
          </div>
          <div className="mt-4 h-0.5 bg-gray-700 rounded-full overflow-hidden">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
