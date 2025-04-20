import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="bg-gray-900 text-gray-100 font-sans">
      <Navbar />
      <div ref={(el) => (sectionsRef.current[0] = el)} className="section-transition">
        <Home />
      </div>
      <div ref={(el) => (sectionsRef.current[1] = el)} className="section-transition">
        <About />
      </div>
      <div ref={(el) => (sectionsRef.current[2] = el)} className="section-transition">
        <Skills />
      </div>
      <div ref={(el) => (sectionsRef.current[3] = el)} className="section-transition">
        <Projects />
      </div>
      <div ref={(el) => (sectionsRef.current[4] = el)} className="section-transition">
        <Contact />
      </div>
    </div>
  );
}

export default App;