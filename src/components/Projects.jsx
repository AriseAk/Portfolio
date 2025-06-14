import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from './Card';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  const col1Ref = useRef([]);
  const col2Ref = useRef([]);
  const col3Ref = useRef([]);

  // Reset column refs before pushing new ones
  col1Ref.current = [];
  col2Ref.current = [];
  col3Ref.current = [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { x: '-50vw', opacity: 0, filter: 'blur(6px)' },
        {
          x: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 2.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 1,
            toggleActions: 'play none none reverse',
          },
        }
      );

      const sharedTrigger = {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'top 40%',
        scrub: 1,
      };

      gsap.fromTo(
        col1Ref.current,
        { x: '-100vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 15,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: sharedTrigger,
        }
      );

      gsap.fromTo(
        col2Ref.current,
        { y: '-100vh', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 15,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: sharedTrigger,
        }
      );

      gsap.fromTo(
        col3Ref.current,
        { x: '100vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 15,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: sharedTrigger,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <div className="projects-cards min-h-screen w-[90vw] mt-[40px] gap-[50px]">
        <div className="title h-[10vh] w-[90vw] text-7xl mb-[50px]" ref={titleRef}>
          Projects
        </div>
        <div className="card-container ml-[70px] grid grid-cols-3 gap-[50px]">
          {/* Column 1 (Left) */}
          <div ref={(el) => (col1Ref.current[0] = el)}>
            <Card title="Project A" color="purple" />
          </div>
          <div ref={(el) => (col2Ref.current[0] = el)}>
            <Card title="Project B" color="blue" />
          </div>
          <div ref={(el) => (col3Ref.current[0] = el)}>
            <Card title="Project C" color="green" />
          </div>
          <div ref={(el) => (col1Ref.current[1] = el)}>
            <Card title="Project D" color="red" />
          </div>
          <div ref={(el) => (col2Ref.current[1] = el)}>
            <Card title="Project E" color="orange" />
          </div>
          <div ref={(el) => (col3Ref.current[1] = el)}>
            <Card title="Project F" color="yellow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
