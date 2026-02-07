import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
// Ensure App.css is imported if you are using custom fonts/animations from it
// import '../App.css';
import { FaGithub } from 'react-icons/fa';
import { IoLogoLinkedin, IoDocumentText, IoSend } from 'react-icons/io5';
import { BiLogoGmail } from 'react-icons/bi';

const ContactCard = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState('Send Message');

  const sendEmail = (e) => {
  e.preventDefault();
  setButtonText('Sending...');

  // --- FIXED SECTION: Strictly use import.meta.env for Vite ---
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Debugging: Check if keys are actually loading
  console.log("Service ID:", serviceID); 
  console.log("Template ID:", templateID);
  console.log("Public Key:", publicKey);

  if (!serviceID || !templateID || !publicKey) {
      console.error("One or more keys are missing. Check your .env file.");
      setButtonText('Config Error');
      return;
  }
  // -----------------------------------------------------------

  emailjs.sendForm(
    serviceID, 
    templateID, 
    form.current, 
    publicKey
  )
    .then((result) => {
        console.log(result.text);
        setButtonText('Message Sent!');
        e.target.reset(); 
        setTimeout(() => setButtonText('Send Message'), 3000);
    }, (error) => {
        console.log(error.text);
        setButtonText('Failed. Try Again.');
        setTimeout(() => setButtonText('Send Message'), 3000);
    });
};
  // --- Reusable Styles ---

  // Style for the 4 grid items on the left
  const gridItemClasses =
    'group flex items-center justify-start  p-4 rounded-lg shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 h-22 border border-[#1d1d1a]/10 bg-[#ffffe3]';

  // Style for form inputs on the right
  const inputClasses =
    'w-full pl-[10px] p-3 rounded-lg border border-[#1d1d1a]/20 bg-[#ffffe358] text-[#1d1d1a] placeholder-[#1d1d1a]/50 focus:outline-none focus:border-[#1d1d1a] transition resize-none font-light';

  return (
    // Main Card Container - Increased width/height for side-by-side layout
    <div className="w-[75vw] max-w-5xl min-h-[65vh] rounded-[25px] relative mx-auto bg-[#ffffe358] shadow-2xl overflow-hidden flex flex-row  pl-[15px]   gap-8 border border-[#1d1d1a]/5">

      {/* ================= LEFT COLUMN: TEXT & LINKS ================= */}
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8 text-[#1d1d1a] pt-[20px]">
        {/* Header Text */}
        <div>
          <div className="text-[16px] mt-3 leading-relaxed text-[#1d1d1a]/80 card-component-button3 pr-4">
            My inbox is open for anything—whether it's professional inquiries, potential projects, or casual chats. Reach out today!
          </div>
        </div>

        {/* 2×2 GRID SECTION */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 w-full">
          {/* Grid Item 1: Email */}
          <a
            href="mailto:akshay.code.bhat@gmail.com"
            className={gridItemClasses}
            aria-label="Email Akshay"
          >
            <BiLogoGmail className="w-[32px] h-[32px] flex-shrink-0 text-[#1d1d1a]/80 group-hover:text-[#1d1d1a] transition-colors" />
            <div className="flex flex-col justify-center overflow-hidden">
              <span className="font-bold text-base card-component-button truncate">Email</span>
              <span className="text-xs text-[#1d1d1a]/70 truncate card-component-button3">akshay.code.bhat@gmail.com</span>
            </div>
          </a>

          {/* Grid Item 2: LinkedIn */}
          <a
            className={gridItemClasses}
            href="https://www.linkedin.com/in/akshay-bhat-a2900a333"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn profile"
          >
            <IoLogoLinkedin className="w-[32px] h-[32px] flex-shrink-0 text-[#1d1d1a]/80 group-hover:text-[#0077b5] transition-colors" />
            <div className="flex flex-col justify-center">
              <span className="font-bold text-base card-component-button">LinkedIn</span>
              <span className="text-xs text-[#1d1d1a]/70 card-component-button3">Akshay Bhat</span>
            </div>
          </a>

          {/* Grid Item 3: GitHub */}
          <a
            className={gridItemClasses}
            href="https://github.com/AriseAk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
          >
            <FaGithub className="w-[32px] h-[32px] flex-shrink-0 text-[#1d1d1a]/80 group-hover:text-[#1d1d1a] transition-colors" />
            <div className="flex flex-col justify-center">
              <span className="font-bold text-base card-component-button">GitHub</span>
              <span className="text-xs text-[#1d1d1a]/70 card-component-button3">AriseAk</span>
            </div>
          </a>

          {/* Grid Item 4: Resume/CV */}
          <a
            className={gridItemClasses}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download resume"
          >
            <IoDocumentText className="w-[32px] h-[32px] flex-shrink-0 text-[#1d1d1a]/80 group-hover:text-[#1d1d1a] transition-colors" />
            <div className="flex flex-col justify-center">
              <span className="font-bold text-base card-component-button">Resume</span>
              <span className="text-xs text-[#1d1d1a]/70 card-component-button3">View PDF</span>
            </div>
          </a>
        </div>
      </div>

      {/* ================= RIGHT COLUMN: CONTACT FORM ================= */}
      <div className="w-full md:w-1/2 bg-transparent rounded-[20px] p-8 md:p-10 flex flex-col justify-center border border-[#1d1d1a]/5">

        <h3 className="text-[30px] font-bold text-[#1d1d1a] mb-2 card-component-button">Get in Touch</h3>
        <p className="text-sm text-[#1d1d1a]/70 mb-6 card-component-button3">Have something to discuss? Send me a message directly.</p>

        {/* LOGIC UPDATE: Added ref={form} and onSubmit={sendEmail} */}
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          {/* Name Input */}
          <div>
            <input
              type="text"
              name="user_name" /* Logic Update: Added name attribute */
              id="name"
              placeholder="Your Name"
              className={inputClasses}
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              name="user_email" /* Logic Update: Added name attribute */
              id="email"
              placeholder="Your Email"
              className={inputClasses}
              required
            />
          </div>

          {/* Message Textarea */}
          <div>
            <textarea
              name="message" /* Logic Update: Added name attribute */
              id="message"
              placeholder="Your Message"
              rows="4"
              className={inputClasses}
              required
            ></textarea>
          </div>

          {/* Send Button */}
          <button
            type="submit"
            className="no-global-css group flex items-center justify-center gap-3 bg-[#1f1f1a] text-[#ffffe3] p-3 rounded-lg 
             card-component-button text-[15px] font-semibold"
          >
            <span>{buttonText}</span> {/* Logic Update: Uses state variable */}
            <IoSend className="text-[15px] h-[20px] w-[20px] "/>
          </button>
        </form>
      </div>

    </div>
  );
};

export default ContactCard;