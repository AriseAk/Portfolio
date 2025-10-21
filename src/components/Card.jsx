// Card.jsx

import React from 'react';

import { GoLinkExternal } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import '../App.css'

const Card = ({ 
    imageSrc, 
    title, 
    description, 
    liveLink, 
    githubLink 
}) => {
    return (
        // Main Card Container
        <div className="flex flex-col w-[400px] h-[400px] bg-[#ffffe3] border border-[#ffffe358] rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1">
            
            {/* 1. Image Placeholder */}
            <div className="w-full h-[40%] bg-transparent overflow-hidden ">
                <img 
                    src={imageSrc || "project-image.jpg"} 
                    alt={`Screenshot of ${title} project`}
                    className="w-full h-full  bg-transparent "
                />
            </div>

            {/* Content Area */}
            <div className="p-4 flex flex-col justify-between flex-grow bg-transparent">
                
                {/* 2. Title */}
                <h3 className="text-2xl font-bold text-[#040000] mb-2  bg-transparent">
                    {title || "Project Title Here"}
                </h3>

                {/* 3. Project Description */}
                <p className="text-sm text-gray-700 leading-snug mb-3 flex-grow overflow-hidden  bg-transparent card-component-button">
                    {description || "A concise description of the project, explaining its purpose and key features. Using 'flex-grow' allows the description to fill the space."}
                </p>


                
                {/* 5. Buttons Group */}
                <div className='flex justify-between mt-4 space-x-3  bg-transparent card-component-button'>

                    {/* Live Demo Button - Transparent with Green Border and Text */}
                    <a 
                        href={liveLink || "#"}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='flex-1 cursor-pointer flex items-center justify-center space-x-2 
                                   bg-transparent text-black border border-[#000000]
                                   font-medium py-2 rounded-lg transition 
                                   ' // Reverse colors on hover
                    >
                        <GoLinkExternal className="text-lg  bg-transparent w-[30px] h-[25px]" />
                        <span className=' bg-transparent font-bold card-component-button'>Live Site</span>
                    </a>
                    
                    {/* GitHub Button - Transparent with Black Border and Text */}
                    <a 
                        href={githubLink || "#"}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='flex-1 cursor-pointer flex items-center justify-center space-x-2 
                                   bg-transparent text-black border border-[#000000]
                                   font-medium py-2 rounded-lg transition 
                                   ' // Reverse colors on hover
                    >
                        <FaGithub className="text-lg  bg-transparent w-[30px] h-[25px]" />
                        <span className=' bg-transparent card-component-button'>GitHub Repo</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;