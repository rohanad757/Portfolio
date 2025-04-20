import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 bg-gray-800 text-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">About Me</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-lg text-center text-gray-300 animate-fade-in-up">
          I'm a passionate full-stack and blockchain developer with a B.E. in Electronics and Communication Engineering from KLE Dr. M.S. Sheshgiri CET, Belagavi. I specialize in crafting scalable MERN stack applications and innovative decentralized solutions.
          </p>
          <div className="relative pl-8 before:content-[''] before:absolute before:left-2 before:top-0 before:bottom-0 before:w-1 before:bg-blue-500">
            <div className="mb-8 animate-slide-in-left">
              <h3 className="text-xl font-semibold text-blue-400">Education</h3>
              <p className="text-lg text-gray-300">B.E. in Electronics and Communication Engineering</p>
              <p className="text-gray-400">KLE Dr. M.S. Sheshgiri CET, Belagavi | Dec 2021 - 2025 | CGPA: 7.1/10</p>
            </div>
            <div className="animate-slide-in-left">
              <h3 className="text-xl font-semibold text-blue-400">Certifications</h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>Web3 Development (Solana and Ethereum) - 100xdevs</li>
                <li>Full-Stack Web Development - 100xdevs</li>
                <li>C++ Programming - codehelp</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;