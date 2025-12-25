import React, { useState, useEffect, useRef } from "react"; 
import LightRays from './components/LightRays';
import Navbar from './components/Navbar';
import './App.css';
import armas from "./assets/armas.jpg";
import Space from "./components/Space";
import DecryptedText from './components/DecryptedText';
import BlurText from "./components/BlurText";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import Card from "./components/Card";
import ScrollReveal from "./components/ScrollReveal";
import ScrollFloat from "./components/ScrollFloat";
import Divider from "./components/Divider";
import Textype from "./components/Textype";
import LoadingScreen from './components/LoadingScreen';
import TechStack from "./components/TechStack";
import ProjectsSection from './components/ProjectsSection';
import placeholder from "./assets/placeholder.png";
import StickyDock from "./components/StickyDock";
import { FaCode } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { BsEnvelopeFill } from "react-icons/bs";
import ContactCard from "./components/ContactCard";
import DarkVeil from './components/DarkVeil';
import { PiCardsThin } from "react-icons/pi";
import gsap from "gsap";

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PiCardsFill } from "react-icons/pi";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const items = [
      { icon: <GoHomeFill size={28} color="#000000" />, label: "Home", href: "#home-section" },
      { icon: <FaCode size={28} color="#000000" />, label: "Skills", href: "#skills-section" },
      { icon: <PiCardsFill size={28} color="#000000"/>, label: "Projects", href: "#projects-section" },
      { icon: <BsEnvelopeFill size={28} color="#000000" />, label: "Contact", href: "#contact-section" },
  ];

  const [loading, setLoading] = useState(true);
  const [linkedinHover, setLinkedinHover] = useState(false);
  const [githubHover, setGithubHover] = useState(false);
  const [gmailHover, setGmailHover] = useState(false);

  const firstRef = useRef(null);
  const secondRef = useRef(null);

  // Loader effect
  useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
  }, []);

  // Photo reveal animations
  useEffect(() => {
      if (!loading) {
          gsap.fromTo(
              firstRef.current,
              { x: "-100%", opacity: 0 },
              { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
          );

          gsap.fromTo(
              secondRef.current,
              { x: "100%", opacity: 0 },
              { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.3 }
          );
      }
  }, [loading]);
useEffect(() => {
  if (!loading) {
    const ctx = gsap.context(() => {
      // Create one master timeline for the whole page
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".main-wrapper",
          start: "top top",
          end: "bottom bottom",
          scrub: 1, // Smoothing out the transition
        }
      });

      // Chain the colors together seamlessly
      tl.to(".main-wrapper", {
        "--bg-color": "#161614", // End of Home
        "--text-stroke": "rgba(255, 255, 227, 0.3)",
        duration: 1,
        ease: "none"
      })
      .to(".main-wrapper", {
        "--bg-color": "#42423d", // End of Skills
        "--text-primary": "#f0f0d8",
        duration: 1,
        ease: "none"
      })
      .to(".main-wrapper", {
        "--bg-color": "#75756b", // End of Projects
        "--text-primary": "#2a2a2a",
        "--text-stroke": "rgba(26, 26, 26, 0.2)",
        duration: 1,
        ease: "none"
      })
      .to(".main-wrapper", {
        "--bg-color": "#fdfcf0", // Final (Contact)
        "--text-primary": "#1a1a1a",
        duration: 1,
        ease: "none"
      });
    });

    return () => ctx.revert();
  }
}, [loading]);
  if (loading) {
      return (
          <div className="fixed inset-0 flex items-center justify-center ">
              <LoadingScreen/>
          </div>
      );
  }



  return (
    <div className="main-wrapper">

      <>
        {/* LightRays background */}
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.2}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.05}
          noiseAmount={0.05}
          distortion={0.02}
          className="absolute top-0 left-0 w-full h-screen pointer-events-none z-0 light-rays-container"
        />

        {/* All content above the background */}
        <div className="relative z-10">
          <StickyDock items={items} baseSize={40} magnify={60} />

          <div id="home-section">
            <Navbar />
          </div>

          {/* Hero Section */}
          <div className="container flex h-[25vh] justify-center -mt-[60px]">
            <div className="left flex justify-center items-center w-[25vw]">
                <div className="text-[#ffffe3] text-4xl font-bold gap-[10px]">
                  <Textype
                      text={["FULL STACK", ""]}
                      textColors={['#ffffe3']}
                      typingSpeed={200}
                      pauseDuration={800}
                      showCursor={true}
                      cursorCharacter="|"
                      className="gap-[10px]"
                  />
                </div>
            </div>
            <div className="right w-[60vw] flex justify-center items-center text-[140px] font-bold text-[#ffffe3]">
                <DecryptedText text="DEVELOPER" />
            </div>
          </div>

          <div className="inside box flex w-[70vw] justify-center text-[140px] font-bold outline -mt-[50px]">
              <DecryptedText text="CASEBOOK" />
          </div>

          {/* Photo Section with Reveal Animation */}
          <div className="photo flex justify-center h-[45vh] gap-3">
              <div
                  className="first w-[20vw] h-full flex justify-center items-center rounded-xl"
                  ref={firstRef}
              >
                  <img src={placeholder} alt="Profile" className="first w-full h-full object-cover " />
              </div>
              <div
                  className="second w-[40vw] h-full flex justify-center gap-3 flex-col"
                  ref={secondRef}
              >
                  <span className="card-component-button1">
                      Hello! I’m Akshay, a passionate and driven Developer with a love for creating innovative solutions.
                      With 1 year of experience in software, I thrive on tackling new challenges and continuously expanding my skills.
                      <br />
                      I believe in the power of lifelong learning and enjoy working with others to bring ideas to life.
                      Whether I’m building, or exploring the latest trends in Tech, I’m always eager to make a positive impact.
                      <br />
                      Let’s connect and create something amazing together!
                  </span>
                  <div className="resume flex">
                      <button type="button" className="btn cursor-pointer">Resume</button>
                  </div>
                  <div className="links pl-[50px] w-[10vw] flex flex-row justify-center items-center gap-6">
                      <a
                          href="#linkedin"
                          onMouseEnter={() => setLinkedinHover(true)}
                          onMouseLeave={() => setLinkedinHover(false)}
                          className="relative flex flex-col items-center"
                      >
                          <IoLogoLinkedin className="size" />
                          <div className="absolute top-[110%]">
                              <BlurText
                                  text="LinkedIn"
                                  delay={100}
                                  trigger={linkedinHover}
                                  className="text-sm"
                              />
                          </div>
                      </a>
                      <a
                          href="#github"
                          onMouseEnter={() => setGithubHover(true)}
                          onMouseLeave={() => setGithubHover(false)}
                          className="relative flex flex-col items-center"
                      >
                          <IoLogoGithub className="size" />
                          <div className="absolute top-[110%]">
                              <BlurText
                                  text="GitHub"
                                  delay={100}
                                  trigger={githubHover}
                                  className="text-sm"
                              />
                          </div>
                      </a>
                      <a
                          href="mailto:your-email@example.com"
                          onMouseEnter={() => setGmailHover(true)}
                          onMouseLeave={() => setGmailHover(false)}
                          className="relative flex flex-col items-center"
                      >
                          <BiLogoGmail className="size" />
                          <div className="absolute top-[110%]">
                              <BlurText
                                  text="Email"
                                  delay={100}
                                  trigger={gmailHover}
                                  className="text-sm"
                              />
                          </div>
                      </a>
                  </div>
              </div>
          </div>

          <Space />
          <Divider />
          
          <div id="skills-section">

              <TechStack />
          </div>
<div id="after-skills"><Space /></div>
          
          {/* <Divider /> */}
          
          <div id="projects-section">
              <ProjectsSection/>
          </div>
          <div id="after-projects">
          <Space />
          </div>


          <div id="contact-section">
              <ContactCard/>

          </div>
        </div>
      </>
      </div>
  );
}


export default App;
