// App.tsx
import React, { useState, useEffect, useRef } from 'react';
import Heading from './Components/Heading';
import Sections from './Components/Sections';
import About from './Components/About';
import Projects from './Components/Projects';
import Details from './Components/Details';
import Social from './Components/Social';

const App: React.FC = () => {
  const [about, setAbout] = useState(true);
  const [projects, setProjects] = useState(false);
  const[details , setDetails] = useState(false)

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-[#10122b] overflow-y-scroll w-full h-screen">
      <div
        className="fixed w-[650px] h-[650px] bg-[radial-gradient(circle,rgba(255,255,255,0.5)_15%,rgba(255,255,255,0)_70%)] rounded-full z-10 pointer-events-none mix-blend-overlay transition-transform ease-out duration-150"
        style={{
          transform: `translate(${position.x - 205}px, ${position.y - 205}px)`,
        }}
      />
      <div className="relative w-[95%] lg:w-[80%] mx-auto">
        <div className="flex flex-col lg:flex-row pt-8">
          <div className="lg:fixed  flex-col gap-5 lg:gap-20 flex">
            <Heading />
            <Sections  about={about} projects={projects} details={details} />
            <Social />
          </div>
          <div className="lg:absolute pt-4 lg:pt-0 top-28 w-full lg:w-[50%] right-0">
            <div className="flex flex-col gap-14">
              <About setAbout={setAbout}  />
              <Projects setProjects={setProjects}/>
              <Details setDetails={setDetails} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
