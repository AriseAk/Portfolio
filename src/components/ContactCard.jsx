import React from 'react';
import '../App.css';
import { FaGithub } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io5'; // Ionicons v5
import { BiLogoGmail } from 'react-icons/bi';
import { IoDocumentText } from 'react-icons/io5'; // Document icon

const ContactCard = () => {
  // Reusable class string for consistent item styling
  const gridItemClasses =
    'bg-[#10100e] text-[#ffffe3] p-4 rounded-lg shadow-md hover:scale-[1.03] transition h-24 border border-[#ffffe3]';

  return (
    <div className="w-[50vw] h-[55vh] rounded-[15px] relative mx-auto bg-[#ffffe3]">
      {/* Title */}
      <div className="upper flex justify-center text-[40px] card-component-button bg-transparent text-[#1d1d1a]">Let's Connect</div>

      {/* Description */}
      <div className="middle flex justify-center text-[15px] card-component-button3 mb-8 text-center px-4 bg-transparent text-[#1d1d1a]">
        My inbox is open for anything—whether it's professional inquiries, potential projects, or casual chats. Reach out today!
      </div>

      {/* 2×2 GRID SECTION */}
      <div className="grid grid-cols-2 gap-4 mx-auto w-3/4 bg-transparent text-[#1d1d1a]">
        {/* Grid Item 1: Email */}
        <a
          href="mailto:contact@akshay.dev"
          className={`${gridItemClasses} flex items-center justify-start gap-4 bg-transparent text-[#1d1d1a]`}
          aria-label="Email Akshay at contact@akshay.dev"
        >
          <BiLogoGmail className="w-[40px] h-[40px] flex-shrink-0 bg-transparent text-[#1d1d1a]" />
          <div className="flex flex-col justify-center bg-transparent text-[#1d1d1a] ">
            <span className="font-bold cursor-pointer text-base bg-transparent text-[#1d1d1a] card-component-button">Email</span>
            <span className="text-xs bg-transparent text-[#1d1d1a] card-component-button1">akshaybhat093@gmail.com</span>
          </div>
        </a>

        {/* Grid Item 2: LinkedIn */}
        <a
          className={`${gridItemClasses} flex items-center justify-start gap-4 bg-transparent text-[#1d1d1a]`}
          href="www.linkedin.com/in/akshay-bhat-a2900a333"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit LinkedIn profile at linkedin.com/in/akshaydev"
        >
          <IoLogoLinkedin className="w-[40px] h-[40px] flex-shrink-0 bg-transparent text-[#1d1d1a]" />
          <div className="flex flex-col justify-center bg-transparent text-[#1d1d1a]">
            <span className="font-bold cursor-pointer text-base bg-transparent text-[#1d1d1a] card-component-button">LinkedIn</span>
            <span className="text-xs bg-transparent text-[#1d1d1a] card-component-button1">Akshay Bhat</span>
          </div>
        </a>

        {/* Grid Item 3: GitHub */}
        <a
          className={`${gridItemClasses} flex items-center justify-start gap-4 bg-transparent text-[#1d1d1a]`}
          href="https://github.com/AriseAk"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit GitHub profile at github.com/AriseAk"
        >
          <FaGithub className="w-[40px] h-[40px] flex-shrink-0 bg-transparent text-[#1d1d1a]" />
          <div className="flex flex-col justify-center bg-transparent text-[#1d1d1a]">
            <span className="font-bold cursor-pointer text-base bg-transparent text-[#1d1d1a] card-component-button">GitHub</span>
            <span className="text-xs bg-transparent text-[#1d1d1a] card-component-button1">AriseAk</span>
          </div>
        </a>

        {/* Grid Item 4: Resume/CV */}
        <a
          className={`${gridItemClasses} flex items-center justify-start gap-4 bg-transparent text-[#1d1d1a]`}
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View or download resume PDF"
        >
          <IoDocumentText className="w-[40px] h-[40px] flex-shrink-0 bg-transparent text-[#1d1d1a]" />
          <div className="flex flex-col justify-center bg-transparent text-[#1d1d1a]">
            <span className="font-bold cursor-pointer text-base bg-transparent text-[#1d1d1a] card-component-button">View Resume</span>
            <span className="text-xs bg-transparent text-[#1d1d1a] card-component-button1">Download PDF</span>
          </div>
        </a>
      </div>
      {/* End Grid */}

      {/* Bottom-centered footer */}
      <footer className="absolute bottom-0 left-0 w-full text-center p-4 bg-transparent text-[#1d1d1a]">
        &copy; 2025 Akshay Bhat. All rights reserved.
      </footer>
    </div>
  );
};

export default ContactCard;
