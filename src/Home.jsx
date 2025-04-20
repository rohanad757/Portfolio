import React from 'react';

function Home() {
  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] starfield-bg flex items-center justify-center text-gray-100 py-12 sm:py-16 relative z-0">
      <div className="star" style={{ top: '10%', left: '15%' }}></div>
      <div className="star" style={{ top: '20%', left: '80%' }}></div>
      <div className="star" style={{ top: '50%', left: '30%' }}></div>
      <div className="star" style={{ top: '70%', left: '60%' }}></div>
      <div className="star" style={{ top: '30%', left: '90%' }}></div>
      <div className="star" style={{ top: '80%', left: '20%' }}></div>
      <div className="container mx-auto px-0 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 relative z-10">
        <div className="flex-1 w-full sm:w-auto !text-center md:text-left space-y-4 max-w-md !mx-auto md:mx-0 animate-slide-in-left">
          <h1
            className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold text-gray-200 font-poppins animate-slide-in-left leading-snug"
            style={{ textShadow: '0 0 12px rgba(79,70,229,0.4)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}
          >
            Rohan Doddabasannavar
          </h1>
          <p
            className="text-xl sm:text-2xl md:text-2xl lg:text-3xl text-cyan-400 font-poppins font-semibold animate-slide-in-left delay-200 leading-snug"
            style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)' }}
          >
            <span className="inline-block border-b-2 border-cyan-400/70">
              Full-Stack & Blockchain Developer
            </span>
          </p>
          <p
            className="text-md sm:text-lg md:text-lg lg:text-xl text-gray-300 leading-tight lg:opacity-100 max-w-md mx-auto md:mx-0 font-poppins animate-fade-in delay-400"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}
          >
            B.E. ECE graduate crafting innovative MERN and Web3 solutions for scalable, decentralized applications.
          </p>
          <div className="flex justify-center !justify-center items-center gap-2 sm:gap-4 lg:gap-6 flex-nowrap w-auto max-w-full mx-auto md:justify-start animate-fade-in delay-600">
            <a
              href="#projects"
              className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-4 sm:px-6 lg:px-4 py-3 sm:py-4 rounded-full font-medium font-poppins text-sm sm:text-base hover:shadow-[0_0_30px_rgba(79,70,229,0.8)] hover:scale-105 transition z-30 pointer-events-auto w-[140px] lg:w-[200px] touch-action-manipulation"
              style={{ transition: 'transform 0.2s ease, box-shadow 0.2s ease', boxSizing: 'border-box' }}
            >
              Explore Projects
            </a>
            <a
              href="#contact"
              className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-4 sm:px-6 lg:px-4 py-3 sm:py-4 rounded-full font-medium font-poppins text-sm sm:text-base hover:shadow-[0_0_30px_rgba(79,70,229,0.8)] hover:scale-105 transition z-30 pointer-events-auto w-[140px] lg:w-[200px] touch-action-manipulation"
              style={{ transition: 'transform 0.2s ease, box-shadow 0.2s ease', boxSizing: 'border-box' }}
            >
              Contact Me
            </a>
          </div>
          <div className="flex justify-center md:fixed md:bottom-4 md:right-4 gap-6 sm:gap-4 mt-8 md:mt-0 bg-gray-800/60 md:bg-gray-800/80 p-2 md:p-4 rounded-lg animate-fade-in delay-800 z-20">
            <a
              href="https://github.com/rohanad757"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 hover:shadow-[0_0_10px_rgba(6,182,212,0.5)] transition animate-fade-in delay-800 pointer-events-auto touch-action-manipulation"
            >
              <i className="fab fa-github text-3xl md:text-3.5xl"></i>
            </a>
            <a
              href="https://linkedin.com/in/rohanad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 hover:shadow-[0_0_10px_rgba(6,182,212,0.5)] transition animate-fade-in delay-850 pointer-events-auto touch-action-manipulation"
            >
              <i className="fab fa-linkedin text-3xl md:text-3.5xl"></i>
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end animate-fade-in">
          <div className="relative max-w-full">
            <img
              src="../public/Rohan.jpg"
              alt="Rohan Doddabasannavar"
              className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl ring-4 ring-indigo-400/50 hover:scale-105 transition duration-300 animate-pulse max-w-full"
            />
            <div className="absolute inset-0 rounded-full bg-indigo-500/10 blur-2xl z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;