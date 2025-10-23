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
          x: '80vw',
          opacity: 0,
          filter: 'blur(8px)'
        },
        {
          x: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 2.5,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 1,
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate categories
      gsap.utils.toArray('.tech-category').forEach((category) => {
        gsap.fromTo(category,
          { opacity: 0, y: 60 },
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
              refreshPriority: -1
            }
          }
        );
      });

      // Animate tech items
      gsap.utils.toArray('.tech-item').forEach((item, index) => {
        gsap.fromTo(item,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            delay: (index % 6) * 0.1,
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              toggleActions: "play none none reset",
              refreshPriority: -1
            }
          }
        );
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);


  return (
    <section ref={containerRef} className="tech-stack bg-transparent w-[90vw] h-[90vh]">
      <div className="tech-stack__container">
        <div className="tech-stack__title" ref={titleRef}>
          <h1 className="tech-stack__title-text">Tech Stack</h1>
        </div>

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
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="tech-item__icon" alt="JavaScript" />
              <span className="tech-item__name">JavaScript</span>
            </div>
            <div className="tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="tech-item__icon" alt="React" />
              <span className="tech-item__name">React</span>
            </div>
            <div className="tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="tech-item__icon" alt="HTML5" />
              <span className="tech-item__name">HTML5</span>
            </div>
            <div className="tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="tech-item__icon" alt="CSS3" />
              <span className="tech-item__name">CSS3</span>
            </div>
            <div className="tech-item">
              <RiTailwindCssFill className='w-[30px] h-[30px]' />
              <span className="tech-item__name">Tailwind CSS</span>
            </div>
            <div className="tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" className="tech-item__icon" alt="Bootstrap" />
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
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="tech-item__icon" alt="Node.js" />
              <span className="tech-item__name">Node.js</span>
            </div>
            <div className="tech-item">
              <SiExpress className='w-[30px] h-[30px]' />
              <span className="tech-item__name">Express</span>
            </div>
            <div className="tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="tech-item__icon" alt="Next.js" />
              <span className="tech-item__name">Next.js</span>
            </div>
            <div className="tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="tech-item__icon" alt="MongoDB" />
              <span className="tech-item__name">MongoDB</span>
            </div>
            <div className="tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="tech-item__icon" alt="Mongoose" />
              <span className="tech-item__name">Mongoose</span>
            </div>
            <div className="tech-item">
              <SiFlask className='w-[30px] h-[30px]' />
              <span className="tech-item__name">Flask</span>
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
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="tech-item__icon" alt="Git" />
              <span className="tech-item__name">Git</span>
            </div>
            <div className="tech-item">
              <FaGithub className='w-[30px] h-[30px]' />
              <span className="tech-item__name">GitHub</span>
            </div>
            <div className="tech-item">
              <RiVercelFill className='w-[30px] h-[30px]' />
              <span className="tech-item__name">Vercel</span>
            </div>
            <div className="tech-item">
              <SiNetlify className='w-[30px] h-[30px]' />
              <span className="tech-item__name">Netlify</span>
            </div>
            <div className="tech-item">
              <SiRender className='w-[30px] h-[30px]' />
              <span className="tech-item__name">Render</span>
            </div>
          </div>
        </div>

        {/* LANGUAGES */}
        <div className="tech-category">
          <div className="tech-category__label">
            <div className="tech-category__label-inner">
              <div className="tech-category__label-dot"></div>
              LANGUAGES
            </div>
          </div>
          <div className="tech-category__items">
            <div className="tech-item">
              <img src={cpp} className="tech-item__icon" alt="Git" />
              <span className="tech-item__name">C++</span>
            </div>
            <div className="tech-item">
              <FaPython className='w-[30px] h-[30px]' />
              <span className="tech-item__name">Python</span>
            </div>
            <div className="tech-item">
              <img src={java} alt="" className='w-[30px] h-[30px]'/>
              <span className="tech-item__name">Java</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
