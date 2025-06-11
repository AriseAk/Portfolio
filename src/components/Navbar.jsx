// Navbar.js
import React from "react";
import Handwriting from "./Handwriting"; 
import { IoMdDownload } from "react-icons/io";
import '../App.css';



const Navbar = () => {
    return (
        <nav className="flex justify-between z-20">
            <div className="">
                <Handwriting /> 
            </div>
            {/* <div className="flex"><a href="">My Resume</a><IoMdDownload /></div> */}
            <ul className="gap-2" >
                <li className=" cursor-pointer">Projects</li>
                <li className=" cursor-pointer">Skills</li>
                <li className=" cursor-pointer">Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;
