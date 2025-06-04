import React from "react";
import Navbar from './components/Navbar'
import './App.css';
import Divider from "./components/Divider";
import woman from "./assets/woman.jpeg";
import download from "./assets/download.jpg";
import armas from "./assets/armas.jpg";

function App() {
  return (
    <>
      <Navbar />
      <div className="container flex h-[25vh] justify-center -mt-[60px]">
        <div className="left flex justify-center items-center w-[20vw]">
          <div className=" text-[#3d3d3d] text-4xl font-bold">FULL</div>
          <div className=" outline text-4xl">STACK</div>
        </div>
        <div className="right w-[55vw] flex justify-center items-center text-[140px] font-bold text-[#3d3d3d]">DEVELOPER</div>
      </div>
      <div className="box flex w-[70vw] justify-center text-[140px] font-bold outline -mt-[50px]">CASEBOOK</div>
      <div className="photo flex justify-center h-[45vh]">
        <div className="first w-[20vw] h-full flex justify-center items-center ">
          <img src={armas} alt="Profile" className="w-full h-full object-cover " />
        </div>
        <div className="second w-[40vw] h-full flex justify-center items-center ">
          <span>Hello! I’m [Your Name], a passionate and driven [your profession or field, e.g., software developer, graphic designer, marketing specialist] with a love for [mention a key interest or specialty, e.g., creating innovative solutions, crafting compelling visuals, building strong brands]. With [X] years of experience in [your industry or area], I thrive on tackling new challenges and continuously expanding my skills.

I believe in the power of [mention a value or approach, e.g., collaboration, creativity, lifelong learning] and enjoy working with others to bring ideas to life. Whether I’m [describe a typical task or project you enjoy], or exploring the latest trends in [your field], I’m always eager to make a positive impact.

Let’s connect and create something amazing together!</span>
        </div>
      </div>

      {/* <Divider/> */}
    </>
  );
}


export default App;
