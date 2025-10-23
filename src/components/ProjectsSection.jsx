import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './ProjectCard';
import '../TechStack.css';
import portfolio from '../assets/portfolio.png'
import carebridge from '../assets/carebridge.png'
import hackarena from '../assets/hackarena.png'
import jarvis from '../assets/jarvis.png'
import spotify from '../assets/spotify.png'

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description:
        'A responsive, component-driven portfolio constructed using the React library and Tailwind CSS utilities to demonstrate the software projects.',
      techStack: ['React', 'Tailwind CSS','Vite','Vercel'],
      githubUrl: 'https://github.com/AriseAk/Portfolio',
      demoUrl: 'https://demo.atschecker.com',
      isDeployed: true,
      imageSrc: portfolio,
    },
    {
      id: 2,
      title: 'FabrAIc',
      description:
        'udgcusgdfishdfihsidfgisgisd  dia diagid aisd ai sdia sdiasdia sdi aid aisd ai dgia dia dias dia di i',
      techStack: ['React', 'Tailwind CSS', 'Markdown', 'Netlify', 'Vite'],
      githubUrl: 'https://github.com/Redinferno1736/FabrAIc',
      demoUrl: 'https://github.com/example/readme-generator',
      isDeployed: false,
      imageSrc: '/assets/portfolio-website.jpg',
    },
    {
      id: 3,
      title: 'CareBridgeAi',
      description:
        'A comprehensive system designed to provide immediate help, support, and vital information to those in need,specifically fine-tuned on medical dialogues to provide relevant, conversational responses.',
      techStack: ['ML', 'Next.js', 'React', 'Tailwind','Notebook'],
      githubUrl: 'https://github.com/AriseAk/CareBridgeAI',
      demoUrl: 'https://demo.d-vote.com',
      isDeployed: false,
      imageSrc: carebridge,
    },
    {
      id: 4,
      title: 'HackArena',
      description:'HackArena is a platform designed to host and manage hackathons effortlessly,allows organizers to create and manage hackathons,while participants can register, form teams,and track progress in real time.',
      techStack: [ 'Python', 'Flask','JavaScript','API'],
      githubUrl: 'https://github.com/AriseAk/HackArena',
      demoUrl: 'https://hackarena.onrender.com/',
      isDeployed: true,
      imageSrc: hackarena,
    },
        {
      id: 5,
      title: 'Jarvis',
      description:'JARVIS is a smart AI-powered assistant that helps users interact naturally through voice and text commands. It enables seamless file access, YouTube navigation, and personalized responses, enhancing productivity and convenience.',
      techStack: [ 'Python', 'Flask','JavaScript','API','User-OAuth'],
      githubUrl: 'https://github.com/AriseAk/Jarvis',
      demoUrl: 'https://jarvis-4uec.onrender.com/',
      isDeployed: true,
      imageSrc: jarvis,
    },
        {
      id: 6,
      title: 'Spotify-Clone',
      description:'This project is a Spotify Clone, designed with HTML, CSS, and JavaScript. It mimics the appearanceand basic functionalities of Spotify, including a dynamic UI, music playback controls, and a responsive layout.',
      techStack: [ 'HTML','CSS','JavaScript'],
      githubUrl: 'https://github.com/AriseAk/Spotify-Clone',
      demoUrl: 'https://spotify-cloneak.netlify.app/',
      isDeployed: true,
      imageSrc: spotify,
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { x: 0, opacity: 0, filter: 'blur(8px)' },
        {
          x: '55vw',
          opacity: 1,
          filter: 'blur(0px)',
          duration: 3,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1,
            toggleActions: 'play none none reverse',
          },
        }
      );

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-16 pb-16 px-4 sm:px-8 bg-transparent">
      <div className="tech-stack__container">
        <div className="tech-stack__title" ref={titleRef}>
          <h1 className="tech-stack__title-text ">Projects</h1>
        </div>
      </div>

      <main
        className="grid 
        grid-cols-3 sm:grid-cols-2 lg:grid-cols-3
        max-w-7xl mx-auto
        gap-10 lg:gap-14
        place-items-stretch "
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            primaryButtonText={project.isDeployed ? 'Live Demo' : 'View Repo'}
            primaryButtonUrl={project.demoUrl}
            githubUrl={project.githubUrl}
            imageSrc={project.imageSrc}
          />
        ))}
      </main>
    </section>
  );
};

export default ProjectsSection;
