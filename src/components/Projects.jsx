import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../TechStack.css';
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import ScrollReveal from './ScrollReveal';
import { RiVercelFill } from "react-icons/ri";
import { SiNetlify } from "react-icons/si";
import { SiRender } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import cpp from "../assets/cpp.png"
import java from "../assets/java.png"

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null); // New

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation: left to right with blur
      gsap.fromTo(titleRef.current,
        {
          x: '40vw',
          opacity: 0,
          filter: 'blur(8px)'
        },
        {
          x: '80vw',
          opacity: 1,
          filter: 'blur(0px)',
          duration: 2.5,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1,
            toggleActions: 'play none none reverse'
          }
        }
      );


      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);


  return (
    <section ref={containerRef} className="tech-stack">
      <div className="tech-stack__container">
        <div className="tech-stack__title" ref={titleRef}>
          <h1 className="tech-stack__title-text">Projects</h1>
        </div>
  
      </div>
    </section>
  );
};

export default TechStack;
