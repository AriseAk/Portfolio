import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const el = titleRef.current;

      gsap.fromTo(
        el,
        {
          x: '80vw',        // Start far right
          opacity: 0,
          filter: 'blur(6px)',
        },
        {
          x: '0vw',         // Slide to natural position (left)
          opacity: 1,
          filter: 'blur(0px)',
          duration: 2.5,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',      // Start when element is 85% from top of viewport
            end: 'top 60%',
            scrub: 1,
            toggleActions: 'play none none reverse',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <div className="projects-cards h-[70vh] flex rounded-2xl ">
        <div
          className="title text-7xl text-[#ffffe3] ml-[40px] mt-[40px]"
          ref={titleRef}
        >
          Contact
        </div>
      </div>
    </div>
  );
};

export default Contact;
