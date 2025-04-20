import React from 'react';

function Skills() {
  const skills = {
    Languages: ['C++', 'JavaScript', 'TypeScript'],
    Frontend: ['React.js', 'Next.js', 'Tailwind CSS'],
    Backend: ['Node.js', 'Express.js', 'MongoDB'],
    Blockchain: ['Solidity', 'Web3.js', 'Ethers.js', 'Solana', 'dApp Development'],
  };

  return (
    <section id="skills" className="py-20 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300 animate-fade-in-up">
              <h3 className="text-lg font-semibold mb-3 text-blue-400 flex items-center">
                <i className="fas fa-code mr-2"></i> {category}
              </h3>
              <ul className="text-gray-300 space-y-2">
                {items.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <i className="fas fa-check-circle text-blue-500 mr-2"></i> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;