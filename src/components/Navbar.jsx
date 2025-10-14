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
            <ul className="gap-2" >
                <li className=" cursor-pointer">
                    <a href="#projects-section">Projects</a>
                </li>
                <li className=" cursor-pointer">
                    <a href="#skills-section">Skills</a>
                </li>
                <li className=" cursor-pointer">
                    <a href="#contact-section">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;