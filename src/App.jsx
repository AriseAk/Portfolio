import React, { useState, useEffect, useRef } from "react";
import LightRays from './components/LightRays';
import Navbar from './components/Navbar';
import './App.css';
import Space from "./components/Space";
import DecryptedText from './components/DecryptedText';
import BlurText from "./components/BlurText";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import Divider from "./components/Divider";
import Divider2 from "./components/Divider2";
import Footer from "./components/Footer";
import Textype from "./components/Textype";
import LoadingScreen from './components/LoadingScreen';
import TechStack from "./components/TechStack";
import ProjectsSection from './components/ProjectsSection';
import placeholder from "./assets/placeholder.png";
import me from "./assets/me.jpeg";
import StickyDock from "./components/StickyDock";
import { FaCode } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { BsEnvelopeFill } from "react-icons/bs";
import ContactCard from "./components/ContactCard";
import { PiCardsThin } from "react-icons/pi";
import gsap from "gsap";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PiCardsFill } from "react-icons/pi";

gsap.registerPlugin(ScrollTrigger);

function App() {
    const items = [
        { icon: <GoHomeFill size={28} color="#000000" />, label: "Home", href: "#home-section" },
        { icon: <FaCode size={28} color="#000000" />, label: "Skills", href: "#skills-section" },
        { icon: <PiCardsFill size={28} color="#000000" />, label: "Projects", href: "#projects-section" },
        { icon: <BsEnvelopeFill size={28} color="#000000" />, label: "Contact", href: "#contact-section" },
    ];

    const [loading, setLoading] = useState(true);
    const [linkedinHover, setLinkedinHover] = useState(false);
    const [githubHover, setGithubHover] = useState(false);
    const [gmailHover, setGmailHover] = useState(false);
    
    // State to track if screen is large (for StickyDock sizing)
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1350);

    const firstRef = useRef(null);
    const secondRef = useRef(null);

    // Loader effect
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    // Handle resize for StickyDock
    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1350);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
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
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".main-wrapper",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 1,
                    }
                });

                tl.to(".main-wrapper", {
                    "--bg-color": "#10100e",
                    "--text-stroke": "rgba(255, 255, 227, 0.3)",
                    duration: 1,
                    ease: "none"
                })
                .to(".main-wrapper", {
                    "--bg-color": "#4c4c42",
                    "--text-primary": "#f0f0d8",
                    duration: 1,
                    ease: "none"
                })
                .to(".dark-divider-wrapper", {
                    color: "#1a1a1a",
                    duration: 1,
                    ease: "none"
                }, "<")
                .to(".main-wrapper", {
                    "--bg-color": "#b5b5a2",
                    "--text-primary": "#2a2a2a",
                    "--text-stroke": "rgba(26, 26, 26, 0.2)",
                    duration: 1,
                    ease: "none"
                })
                .to(".main-wrapper", {
                    "--bg-color": "#ffffe3",
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
                <LoadingScreen />
            </div>
        );
    }

    return (
        <div>
            <div className="main-wrapper margin -water">
                <>
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

                    <div className="relative z-10">
                        <StickyDock 
                            items={items} 
                            baseSize={isLargeScreen ? 40 : 34} 
                            magnify={isLargeScreen ? 60 : 50} 
                        />

                        <div id="home-section" >
                            <Navbar />
                        </div>

                        <div className="container flex flex-col min-[1350px]:flex-row h-auto min-[1350px]:h-[25vh] justify-center items-center mt-4 min-[1350px]:-mt-[60px]">
                            
                            <div className="left flex justify-center items-center w-full min-[1350px]:w-[25vw] mb-1 min-[1350px]:mb-0">
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
                            
                            <div className="right w-full min-[1350px]:w-[60vw] flex justify-center items-center text-[12vw] min-[1350px]:text-[140px] font-bold text-[#ffffe3]">
                                <DecryptedText text="DEVELOPER" />
                            </div>
                        </div>

                        <div className="inside box flex w-full min-[1350px]:w-[70vw] justify-center text-[12vw] min-[1350px]:text-[140px] font-bold outline mt-1 min-[1350px]:-mt-[50px]">
                            <DecryptedText text="CASEBOOK" />
                        </div>

                        <div className="photo flex flex-col min-[1350px]:flex-row justify-center items-center h-auto min-[1350px]:h-[45vh] gap-5 min-[1350px]:gap-3 mt-6 min-[1350px]:mt-0">
                            
                            <div
                                className="first w-[50vw] h-[30vh] min-[1350px]:w-[20vw] min-[1350px]:h-full flex justify-center items-center rounded-xl"
                                ref={firstRef}
                            >
                                <img src={me} alt="Profile" className="first w-full h-full object-cover rounded-xl" />
                            </div>

                            <div
                                className="second w-[90vw] min-[1350px]:w-[40vw] h-auto min-[1350px]:h-full flex justify-center gap-4 min-[1350px]:gap-3 flex-col items-center min-[1350px]:items-start"
                                ref={secondRef}
                            >
                                {/* Shorter Text for Mobile (Hidden on Desktop) */}
                                <span className="card-component-button3 text-[15px] text-left block min-[1350px]:hidden">
                                    Hello! I’m Akshay, a passionate Developer building scalable applications. I thrive where innovation meets logic, turning abstract ideas into reality. 
                                    <br />
                                    Let’s connect and create something amazing!
                                </span>

                                {/* Full Text for Desktop (Hidden on Mobile) */}
                                <span className="card-component-button3 text-[15px] text-justify hidden min-[1350px]:block">
                                    Hello! I’m Akshay, a passionate Developer dedicated to the craft of building scalable applications. I thrive in
                                    dynamic environments where innovation meets logic, using my background
                                    to turn abstract ideas into reality.
                                    <br />I believe in the power of consistent growth. I
                                    am eager to bring my energy, technical perspective, and collaborative spirit to teams that are ready to make a positive impact.
                                    <br />
                                    Let’s connect and create something amazing together!
                                </span>
                                
                                <div className="flex flex-col w-full gap-6 items-center min-[1350px]:items-start mt-4">
                                    <div className="resume flex">
                                        <a
                                            href="/resume.pdf"
                                            download="AkshayBhat_Resume.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <button className="inline-flex items-center justify-center no-underline btn cursor-pointer">
                                                Resume
                                            </button>
                                        </a>
                                    </div>
                                    
                                    <div className="links w-full flex flex-row justify-center min-[1350px]:justify-start items-center gap-6">
                                        <a
                                            href="https://www.linkedin.com/in/akshay-bhat-a2900a333/"
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
                                            href="https://github.com/AriseAk"
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
                                            href="mailto:akshay.code.bhat@gmail.com"
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
                        </div>

                        <div className="block min-[1350px]:hidden h-16"></div>
                        <div className="hidden min-[1350px]:block">
                            <Space />
                        </div>
                        
                        <Divider />

                        <div id="skills-section">
                            <TechStack />
                        </div>

                        <div id="after-skills">
                            <div className="block min-[1350px]:hidden h-16"></div>
                            <div className="hidden min-[1350px]:block">
                                <Space />
                            </div>
                        </div>

                        <Divider />

                        <div id="projects-section">
                            <ProjectsSection />
                        </div>

                        <div id="after-projects">
                            <div className="block min-[1350px]:hidden h-16"></div>
                            <div className="hidden min-[1350px]:block">
                                <Space />
                            </div>
                        </div>

                        <div className="dark-divider-wrapper">
                            <Divider2 />
                        </div>

                        <div className="block min-[1350px]:hidden h-16"></div>
                        <div className="hidden min-[1350px]:block">
                            <Space />
                        </div>

                        <div id="contact-section">
                            <ContactCard />
                        </div>

                    </div>
                    
                    <div className="block min-[1350px]:hidden h-16"></div>
                    <div className="hidden min-[1350px]:block">
                        <Space />
                    </div>
                </>

            </div>
            <Footer />
        </div>
    );
}

export default App;