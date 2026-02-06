import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RiTailwindCssFill, RiVercelFill } from "react-icons/ri";
import { FaGithub, FaPython } from "react-icons/fa";
import { SiExpress, SiNetlify, SiRender, SiFlask, SiMysql, SiMongodb } from "react-icons/si";
import { SiTensorflow, SiPytorch, SiPandas, SiNumpy, SiScikitlearn } from "react-icons/si";

// Import your local assets here
import cpp from "../assets/cpp.png";
// import java from "../assets/java.png"; 

gsap.registerPlugin(ScrollTrigger);

const SkillBox = ({ name, icon }) => (
  <div className="skill-box opacity-0 group flex items-center gap-3 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/50 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_5px_20px_rgba(255,255,255,0.15)] transition-all duration-300 cursor-default">
    <div className="text-lg sm:text-xl text-white/80 group-hover:text-[#ffffe3] transition-colors duration-300 flex-shrink-0">
      {typeof icon === 'string' ? (
        <img src={icon} alt={name} className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
      ) : (
        icon
      )}
    </div>
    <span className="text-xs sm:text-sm font-medium text-white/70 group-hover:text-white tracking-wide whitespace-nowrap">
      {name}
    </span>
  </div>
);

const TechCategory = ({ title, children }) => (
  <div className="flex flex-col gap-4 mb-6">
    <div className="flex items-center gap-3">
      <div className="h-[1px] w-6 bg-[#ffffe3]/30"></div>
      <h3 className="text-xs font-bold tracking-[0.2em] text-[#ffffe3]/80">{title}</h3>
      <div className="h-[1px] flex-grow bg-[#ffffe3]/10"></div>
    </div>
    <div className="flex flex-wrap gap-3 justify-start">
      {children}
    </div>
  </div>
);

const TechStack = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animations (Kept exactly as you had them)
      gsap.fromTo(titleRef.current,
        { x: '80vw', opacity: 0, filter: 'blur(8px)' },
        {
          x: 0, opacity: 1, filter: 'blur(0px)', duration: 2.5, ease: 'power4.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 85%', end: 'top 60%', scrub: 1, toggleActions: 'play none none reverse' }
        }
      );

      gsap.fromTo(boxRef.current,
        { x: -100, y: 50, opacity: 0 },
        {
          x: 0, y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: boxRef.current, start: "top 80%", end: "top 50%", scrub: 1 }
        }
      );

      gsap.fromTo(".skill-box",
        { y: 20, opacity: 0, scale: 0.8 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.4, stagger: 0.03, ease: "back.out(1.5)",
          scrollTrigger: { trigger: boxRef.current, start: "top 75%", toggleActions: "play none none reverse" }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen flex flex-col items-start justify-center py-20 px-4 md:px-20 overflow-hidden">

      <div className="tech-stack__container w-full">
        <div className="tech-stack__title mb-10" ref={titleRef}>
          <h1 className="tech-stack__title-text text-5xl md:text-7xl font-bold text-[#ffffe3]">Tech Stack</h1>
        </div>

        {/* MAIN BOX CONTAINER */}
        <div
          ref={boxRef}
          className="relative w-[55vw] max-w-6xl p-6 md:p-8 rounded-2xl border border-white/10 bg-[#10100e]/60 backdrop-blur-md shadow-2xl mr-auto"
        >
          {/* Grid Layout: 1 Column on mobile, 2 Columns on Large screens */}
          <div className="flex flex-row gap-10  w-[100vw] ">

            {/* Left Column: Skills */}
            <div className="flex flex-col w-[50vw]">
              <TechCategory title="LANGUAGES">
                <SkillBox name="C++" icon={cpp} />
                <SkillBox name="C" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
                <SkillBox name="JavaScript" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                <SkillBox name="Python" icon={<FaPython className="text-[#3776ab]" />} />
              </TechCategory>

              <TechCategory title="MACHINE LEARNING & AI">
                <SkillBox name="TensorFlow" icon={<SiTensorflow className="text-[#FF6F00]" />} />
                <SkillBox name="PyTorch" icon={<SiPytorch className="text-[#EE4C2C]" />} />
                <SkillBox name="Scikit-learn" icon={<SiScikitlearn className="text-[#F7931E]" />} />
                <SkillBox name="Pandas" icon={<SiPandas className="text-[#150458]" />} />
                <SkillBox name="NumPy" icon={<SiNumpy className="text-[#013243]" />} />
              </TechCategory>

              <TechCategory title="FRONTEND">
                <SkillBox name="React" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                <SkillBox name="HTML5" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                <SkillBox name="CSS3" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                <SkillBox name="Tailwind" icon={<RiTailwindCssFill className="text-[#38bdf8]" />} />
                <SkillBox name="Bootstrap" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
              </TechCategory>

              <TechCategory title="BACKEND">
                <SkillBox name="Node.js" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                <SkillBox name="Express" icon={<SiExpress className="text-white" />} />
                <SkillBox name="Next.js" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
                <SkillBox name="Flask" icon={<SiFlask className="text-white" />} />
              </TechCategory>

              <TechCategory title="DATABASE MANAGEMENT">
                <SkillBox name="MongoDB" icon={<SiMongodb className="text-[#47A248]" />} />
                <SkillBox name="MySQL" icon={<SiMysql className="text-[#00758F]" />} />
              </TechCategory>

              <TechCategory title="DEPLOYMENT & TOOLS">
                <SkillBox name="Git" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                <SkillBox name="GitHub" icon={<FaGithub className="text-white" />} />
                <SkillBox name="Vercel" icon={<RiVercelFill className="text-white" />} />
                <SkillBox name="Netlify" icon={<SiNetlify className="text-[#25c1b7]" />} />
                <SkillBox name="Render" icon={<SiRender className="text-white" />} />
              </TechCategory>
            </div>

            <div className="flex flex-col gap-6 justify-center items-center lg:items-end h-full">
              <div className="relative w-full max-w-[320px] rounded- overflow-hidden border border-white/5 bg-white/5 hover:border-white/20 transition-all duration-300">
                <img
                  src="https://raw.githubusercontent.com/AriseAk/Portfolio/main/profile-summary-card-output/dark/3-stats.svg"
                  alt="GitHub Stats"
                  className="w-full opacity-90 hover:opacity-100 transition duration-300"
                  loading="lazy"
                />
              </div>
              <div className="relative w-full max-w-[620px] rounded-lg overflow-hidden border border-white/5 bg-white/5 hover:border-white/20 transition-all duration-300">
                <img
                  src="https://raw.githubusercontent.com/AriseAk/Portfolio/main/profile-summary-card-output/dark/0-profile-details.svg"
                  alt="GitHub Profile Details"
                  className="w-full opacity-90 hover:opacity-100 transition duration-300"
                  loading="lazy"
                />
              </div>
              <div className="relative w-full max-w-[320px] rounded- overflow-hidden border border-white/5 bg-white/5 hover:border-white/20 transition-all duration-300">
                <img
                  src="https://raw.githubusercontent.com/AriseAk/Portfolio/main/profile-summary-card-output/dark/4-productive-time.svg"
                  alt="GitHub Stats"
                  className="w-full opacity-90 hover:opacity-100 transition duration-300"
                  loading="lazy"
                />
              </div>


            </div>



          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;