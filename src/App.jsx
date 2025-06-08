import React from "react";
import Navbar from './components/Navbar'
import './App.css';
import Divider from "./components/Divider";
import woman from "./assets/woman.jpeg";
import download from "./assets/download.jpg";
import another from "./assets/another.jpg";
import pic from "./assets/pic.jpg";
import armas from "./assets/armas.jpg";
import Waves from "./assets/waves.svg";
import Top from "./components/Top";
import DecryptedText from './components/DecryptedText';
import TextPressure from './components/TextPressure';
import ScrollVelocity from './components/ScrollVelocity';
import Space from "./components/Space";
import { IoLogoLinkedin } from "react-icons/io";


const velocity = 100;

function App() {
  return (
    <>
      <Navbar />
      <div className="container flex h-[25vh] justify-center -mt-[60px]">
        <div className="left flex justify-center items-center w-[25vw]">
          <div className=" text-[#3d3d3d] text-4xl font-bold"><DecryptedText text="FULL" /></div>
          <div className=" outline text-4xl"><DecryptedText text="STACK" /></div>
        </div>
        <div className="right w-[60vw] flex justify-center items-center text-[140px] font-bold text-[#3d3d3d]">
          <DecryptedText text="DEVELOPER" />
        </div>
      </div>
      <div className="box flex w-[70vw] justify-center text-[140px] font-bold outline -mt-[50px]"><DecryptedText text="CASEBOOK" /></div>
      <div className="photo flex justify-center h-[45vh]">
        <div className="first w-[20vw] h-full flex justify-center items-center ">
          <img src={armas} alt="Profile" className="w-full h-full object-cover " />
        </div>
        <div className="second w-[40vw] h-full flex justify-center items-center ">
          <span>Hello! I’m Akshay,a passionate and driven Developer with a love for creating innovative solutions. With [X] years of experience in [your industry or area], I thrive on tackling new challenges and continuously expanding my skills.
            <br></br>
            I believe in the power of [mention a value or approach, e.g., collaboration, creativity, lifelong learning] and enjoy working with others to bring ideas to life. Whether I’m building, or exploring the latest trends in Tech, I’m always eager to make a positive impact.
            <br />
            Let’s connect and create something amazing together!</span>
        </div>
        <div className="links">
          <a href="">
            <IoLogoLinkedin className="h-7 w-7"/>
          </a>
        </div>
      </div>
      <Space/>
      <ScrollVelocity
        texts={['Explore My Projects ↓']}
        velocity={velocity}
        className="custom-scroll-text"
      />


    </>
  );
}


export default App;
