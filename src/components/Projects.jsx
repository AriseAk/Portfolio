import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const titleRef = useRef(null);
  const containerRef = useRef(null); // For scoping

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const el = titleRef.current;

      gsap.fromTo(el,
        {
          x: '-50vw',
          opacity: 0,
          filter: 'blur(6px)',
        },
        {
          x: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 2.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 1,
            toggleActions: 'play none none reverse',
          }
        }
      );
    }, containerRef); // <- scoped only to this component

    return () => ctx.revert(); // Clean up safely
  }, []);

  return (
    <div ref={containerRef}>
      <div className="projects-cards h-[100vh] mt-[40px]">
        <div
          className="title h-[10vh] w-[90vw] text-7xl"
          ref={titleRef}
        >
          Projects
        </div>
      </div>
    </div>
  );
};

export default Projects;
