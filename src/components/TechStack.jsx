import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../TechStack.css';
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import ScrollReveal from './ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Clear any existing ScrollTriggers first
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Wait for DOM to be fully rendered
      gsap.delayedCall(0.1, () => {
        // Animate categories
        gsap.utils.toArray('.tech-category').forEach((category, index) => {
          gsap.fromTo(category, 
            {
              opacity: 0,
              y: 60
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: category,
                start: "top 85%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
                // Remove markers in production
                markers: false,
                refreshPriority: -1
              }
            }
          );
        });

        // Animate tech items
        gsap.utils.toArray('.tech-item').forEach((item, index) => {
          gsap.fromTo(item,
            {
              opacity: 0,
              y: 30
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
              delay: (index % 6) * 0.1, // Stagger per category
              scrollTrigger: {
                trigger: item,
                start: "top 90%",
                toggleActions: "play none none reset",
                refreshPriority: -1
              }
            }
          );
        });

        // Force refresh after setup
        ScrollTrigger.refresh();
      });
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="tech-stack">
      <div className="tech-stack__container">
        <div className="tech-stack__title "><ScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={5}
  blurStrength={10}
textClassName="tech-stack__title-text"
>
    <h1>Tech Stack</h1>
</ScrollReveal></div>

        {/* FRONTEND */}
        <div className="tech-category">
          <div className="tech-category__label">
            <div className="tech-category__label-inner">
              <div className="tech-category__label-dot"></div>
              FRONTEND
            </div>
          </div>
          <div className="tech-category__items">
            <div className="tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="tech-item__icon" alt="JavaScript"/>
              <span className="tech-item__name">JavaScript</span>
            </div>
            <div className="tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="tech-item__icon" alt="React"/>
              <span className="tech-item__name">React</span>
            </div>
            <div className="tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="tech-item__icon" alt="HTML5"/>
              <span className="tech-item__name">HTML5</span>
            </div>
            <div className="tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="tech-item__icon" alt="CSS3"/>
              <span className="tech-item__name">CSS3</span>
            </div>
            <div className="tech-item">
              <RiTailwindCssFill className='w-[30px] h-[30px]'/>
              <span className="tech-item__name">Tailwind CSS</span>
            </div>
            <div className="tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" className="tech-item__icon" alt="Bootstrap"/>
              <span className="tech-item__name">Bootstrap</span>
            </div>
          </div>
        </div>

        {/* BACKEND */}
        <div className="tech-category">
          <div className="tech-category__label">
            <div className="tech-category__label-inner">
              <div className="tech-category__label-dot"></div>
              BACKEND
            </div>
          </div>
          <div className="tech-category__items">
            <div className="tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="tech-item__icon" alt="Node.js"/>
              <span className="tech-item__name">Node.js</span>
            </div>
            <div className="tech-item">
              <SiExpress className='w-[30px] h-[30px]'/>
              <span className="tech-item__name">Express</span>
            </div>
            <div className="tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="tech-item__icon" alt="Next.js"/>
              <span className="tech-item__name">Next.js</span>
            </div>
            <div className="tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="tech-item__icon" alt="MongoDB"/>
              <span className="tech-item__name">MongoDB</span>
            </div>
            <div className="tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="tech-item__icon" alt="Mongoose"/>
              <span className="tech-item__name">Mongoose</span>
            </div>
          </div>
        </div>

        {/* TOOLS */}
        <div className="tech-category">
          <div className="tech-category__label">
            <div className="tech-category__label-inner">
              <div className="tech-category__label-dot"></div>
              TOOLS
            </div>
          </div>
          <div className="tech-category__items">
            <div className="tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="tech-item__icon" alt="Git"/>
              <span className="tech-item__name">Git</span>
            </div>
            <div className="tech-item">
              <FaGithub className='w-[30px] h-[30px]' />
              <span className="tech-item__name">GitHub</span>
            </div>
            <div className="tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="tech-item__icon" alt="Docker"/>
              <span className="tech-item__name">Docker</span>
            </div>
            <div className="tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" className="tech-item__icon" alt="Google Cloud"/>
              <span className="tech-item__name">Google Cloud</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
