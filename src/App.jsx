import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import './App.css';
import armas from "./assets/armas.jpg";
import ScrollVelocity from './components/ScrollVelocity';
import Space from "./components/Space";
import DecryptedText from './components/DecryptedText';
import BlurText from "./components/BlurText";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import pattern from './assets/pattern.svg';
import Card from "./components/Card";
import ScrollReveal from "./components/ScrollReveal";
import ScrollFloat from "./components/ScrollFloat";
import Divider from "./components/Divider";
import Loader from "./components/Loader";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import StickyDock from "./components/StickyDock";
import { FaGithub, FaReact, FaPython } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { BsEnvelopeFill } from "react-icons/bs";
import { IoIosPhotos } from "react-icons/io";
import { FaCode } from "react-icons/fa";

const velocity = 100;


function App() {
  const items = [
  { icon: <GoHomeFill size={24} />, label: "Home" },
  { icon: <FaCode size={24} />, label: "Skills" },
  { icon: <IoIosPhotos  size={24}/>, label: "Projects" },
  { icon: <BsEnvelopeFill size={20}/>, label: "Contact" },
];
  const [loading, setLoading] = useState(true);
  const [linkedinHover, setLinkedinHover] = useState(false);
  const [githubHover, setGithubHover] = useState(false);
  const [gmailHover, setGmailHover] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container flex h-[25vh] justify-center -mt-[60px]">
        <div className="left flex justify-center items-center w-[25vw]">
          <div className="text-[#ffffe3] text-4xl font-bold"><DecryptedText text="FULL" /></div>
          <div className="inside outline text-4xl"><DecryptedText text="STACK" /></div>
        </div>
        <div className="right w-[60vw] flex justify-center items-center text-[140px] font-bold text-[#ffffe3]">
          <DecryptedText text="DEVELOPER" />
        </div>
      </div>

      <div className="inside box flex w-[70vw] justify-center text-[140px] font-bold outline -mt-[50px]">
        <DecryptedText text="CASEBOOK" />
      </div>

      <div className="photo flex justify-center h-[45vh] gap-3">
        <div className="first w-[20vw] h-full flex justify-center items-center ">
          <img src={armas} alt="Profile" className="first w-full h-full object-cover " />
        </div>
        <div className="second w-[40vw] h-full flex justify-center gap-3 flex-col">
          <span>
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
      <Divider/>
      <TechStack/>
      <Space></Space>
      <Space></Space>
      <Divider></Divider>
      <Projects/>
      <Divider />
      <StickyDock items={items} baseSize={40} magnify={60}/>


    </>
  );
}

export default App;
