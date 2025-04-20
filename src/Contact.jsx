import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 animate-fade-in">Get in Touch</h2>
        <div className="max-w-md sm:max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
          <p className="text-base sm:text-xl text-gray-300 animate-fade-in delay-200">
            As a B.E. ECE graduate, I’m passionate about building innovative MERN and Web3 solutions. Let’s connect to explore collaboration opportunities!
          </p>
          <div className="flex flex-col items-center space-y-3 sm:space-y-4 animate-fade-in-up delay-400">
            <div className="flex items-center gap-3">
              <i className="fas fa-envelope text-cyan-400 text-sm sm:text-base"></i>
              <p className="text-sm sm:text-base">
                Email: <a href="mailto:rohanad757@gmail.com" className="hover:text-blue-400 hover:underline transition focus:text-blue-400" aria-label="Email Rohan">rohanad757@gmail.com</a>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <i className="fas fa-phone text-cyan-400 text-sm sm:text-base"></i>
              <p className="text-sm sm:text-base">
                Phone: <a href="tel:+917892867091" className="hover:text-blue-400 hover:underline transition focus:text-blue-400" aria-label="Call Rohan">+91 7892-867-091</a>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <i className="fab fa-linkedin text-cyan-400 text-sm sm:text-base"></i>
              <p className="text-sm sm:text-base">
                LinkedIn: <a href="https://linkedin.com/in/rohanad" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 hover:underline transition focus:text-blue-400" aria-label="Visit Rohan's LinkedIn">linkedin.com/in/rohanad</a>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <i className="fab fa-github text-cyan-400 text-sm sm:text-base"></i>
              <p className="text-sm sm:text-base">
                GitHub: <a href="https://github.com/rohanad757" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 hover:underline transition focus:text-blue-400" aria-label="Visit Rohan's GitHub">github.com/rohanad757</a>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <i className="fas fa-map-marker-alt text-cyan-400 text-sm sm:text-base"></i>
              <p className="text-sm sm:text-base">Location: Belgaum, Karnataka, India</p>
            </div>
          </div>
          <div className="flex justify-center gap-4 sm:gap-6 mt-6 animate-fade-in-up delay-600">
            <a href="https://github.com/rohanad757" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 hover:scale-110 transition focus:text-blue-400" aria-label="Visit Rohan's GitHub">
              <i className="fab fa-github text-xl sm:text-3xl"></i>
            </a>
            <a href="https://linkedin.com/in/rohanad" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 hover:scale-110 transition focus:text-blue-400" aria-label="Visit Rohan's LinkedIn">
              <i className="fab fa-linkedin text-xl sm:text-3xl"></i>
            </a>
          </div>
          <div className="mt-6 animate-fade-in-up delay-600">
            <a
              href="mailto:rohanad757@gmail.com"
              className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-6 py-3 rounded-full font-medium font-poppins text-sm sm:text-base hover:shadow-[0_0_30px_rgba(79,70,229,0.8)] hover:scale-105 transition z-30 pointer-events-auto inline-block"
              aria-label="Send email to Rohan"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;