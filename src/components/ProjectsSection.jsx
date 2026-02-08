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
import mood from '../assets/mood.png'

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'Portfolio ',
      description:
        'A responsive, component-driven portfolio constructed using the React library and Tailwind CSS utilities to demonstrate the software projects.',
      techStack: ['React', 'Tailwind CSS','Vite','Vercel'],
      githubUrl: 'https://github.com/AriseAk/Portfolio',
      demoUrl: 'https://akshaybhat.vercel.app/',
      isDeployed: true,
      imageSrc: portfolio,
    },
    {
      id: 2,
      title: 'FabrAIc',
      description:
        'Turn your physical closet into a digital inventory. FabrAIc leverages AI to analyze clothing images for seamless organization and instant outfit ideas.',
      techStack: ['Python', 'Tensorflow', 'ResNet50', 'React' ],
      githubUrl: 'https://github.com/Redinferno1736/FabrAIc',
      demoUrl: 'https://github.com/example/readme-generator',
      isDeployed: false,
      imageSrc: '/assets/portfolio-website.jpg',
    },
    {
      id: 3,
      title: 'Alphawave',
      description:'Fintech-EdTech platform ensembling BERT and LSTM for real-time risk scoring. It gamifies the learning experience with virtual trading competitions and mini-games to master emotional discipline.',
      techStack: ['Python', 'BERT', 'LSTM', 'React','Next.js'],
      githubUrl: 'https://github.com/AriseAk/AlphaWave',
      demoUrl: 'https://demo.d-vote.com',
      isDeployed: false,
      imageSrc: '.',
    },
    {
      id: 4,
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
      id: 5,
      title: 'MoodQuest',
      description:'Enhance emotional self-awareness with MoodQuest. By analyzing real-time facial cues, it converts micro-expressions into actionable stress insights, visualized through a dashboard and a comforting pet companion',
      techStack: [ 'ML','Flask','Next.js','OpenCV','Tailwind'],
      githubUrl: 'https://github.com/Redinferno1736/MoodQuest',
      demoUrl: '..',
      isDeployed: false,
      imageSrc: mood,
    },
    {
      id: 6,
      title: 'HackArena',
      description:'HackArena is a platform designed to host and manage hackathons effortlessly,allows organizers to create and manage hackathons,while participants can register, form teams,and track progress in real time.',
      techStack: [ 'Python', 'Flask','JavaScript','OAuth','MongoDB'],
      githubUrl: 'https://github.com/AriseAk/HackArena',
      demoUrl: 'https://hackarena.onrender.com/',
      isDeployed: true,
      imageSrc: hackarena,
    },
    {
      id: 7,
      title: 'Spotify-Clone',
      description:'This project is a Spotify Clone, designed with HTML, CSS, and JavaScript. It mimics the appearanceand basic functionalities of Spotify, including a dynamic UI, music playback controls, and a responsive layout.',
      techStack: [ 'HTML','CSS','JavaScript'],
      githubUrl: 'https://github.com/AriseAk/Spotify-Clone',
      demoUrl: 'https://spotify-cloneak.netlify.app/',
      isDeployed: true,
      imageSrc: spotify,
    },
    {
      id: 8,
      title: 'Jarvis',
      description:'JARVIS is a smart AI-powered assistant that helps users interact naturally through voice and text commands. It enables seamless file access, YouTube navigation, and personalized responses, enhancing productivity and convenience.',
      techStack: [ 'Python', 'Flask','JavaScript','API','User-OAuth'],
      githubUrl: 'https://github.com/AriseAk/Jarvis',
      demoUrl: 'https://jarvis-4uec.onrender.com/',
      isDeployed: true,
      imageSrc: jarvis,
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Check screen width
      const isSmallScreen = window.innerWidth < 1150;

      if (isSmallScreen) {
        // Animation for SMALL screens (< 1150px) - ADJUST THESE VALUES
        gsap.fromTo(
          titleRef.current,
          { 
            x: 0,           // Starting X position
            opacity: 0,     // Starting opacity
            filter: 'blur(8px)' 
          },
          {
            x: '0vw',       // Ending X position - CHANGE THIS VALUE
            opacity: 1,     // Ending opacity
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
      } else {
        // Animation for LARGE screens (>= 1150px) - ADJUST THESE VALUES
        gsap.fromTo(
          titleRef.current,
          { 
            x: 0,           // Starting X position
            opacity: 0,     // Starting opacity
            filter: 'blur(8px)' 
          },
          {
            x: '55vw',      // Ending X position - CHANGE THIS VALUE
            opacity: 1,     // Ending opacity
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
      }

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-16 pb-16 px-4 sm:px-8 bg-transparent">
      <div className="tech-stack__container">
        <div className="tech-stack__title" ref={titleRef}>
          <h1 className="tech-stack__title-text text-[55px] min-[1150px]:text-[length:inherit] font-semibold">Projects</h1>
        </div>
      </div>

      <main 
        className="grid 
        grid-cols-2 min-[1150px]:grid-cols-3
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