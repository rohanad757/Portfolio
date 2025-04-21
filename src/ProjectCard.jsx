import React from 'react';

function ProjectCard({ title, description, tools, link, style , demo }) {
  return (
    <div
      className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 tilt transition duration-300 animate-fade-in-up card-hover flex flex-col min-h-[300px] w-full max-w-md mx-auto"
      style={style}
    >
      <div className="p-4 sm:p-6 flex-1 flex flex-col space-y-4">
        <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
        <p className="text-gray-300 min-h-[4.5rem] text-sm sm:text-base">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tools.split(', ').map((tool, index) => (
            <span
              key={index}
              className={`text-xs font-medium px-2.5 py-0.5 rounded-full shadow-sm ${
                tool.includes('React') || tool.includes('Tailwind') || tool.includes('Next.js')
                  ? 'bg-blue-900 text-blue-300'
                  : tool.includes('Node.js') || tool.includes('Express.js') || tool.includes('MongoDB') || tool.includes('JWT')
                  ? 'bg-teal-900 text-teal-300'
                  : 'bg-purple-900 text-purple-300'
              }`}
            >
              {tool}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-auto">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-700 to-teal-600 text-white px-4 py-2 rounded-full hover:bg-blue-600 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 transition z-30 pointer-events-auto"
          >
            View Project
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-400 text-blue-400 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white hover:scale-105 hover:shadow-2xl hover:-translate-y-2 transition z-30 pointer-events-auto"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
