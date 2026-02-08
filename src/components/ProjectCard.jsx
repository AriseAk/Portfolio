import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ title, description, techStack, primaryButtonText, primaryButtonUrl, githubUrl, imageSrc }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`
        max-w-sm w-full mx-auto max-h-60
        rounded-2xl overflow-hidden
        bg-[#2e2e26]
        
        transition-all duration-700 ease-out transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:scale-[1.02]
        flex flex-col min-[1150px]:max-h-[500px]
      `}
    >
      {/* Top Section */}
      <div className="w-full h-30 flex items-center justify-center bg-black rounded-t-2xl border-b border-[#ffffe358] min-[1150px]:h-44">
        <img 
          src={imageSrc} 
          alt={`Screenshot of the ${title} project`} 
          className="w-full h-full text-[#10100e] bg-transparent object-cover"
        />
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col justify-between flex-grow bg-transparent">
        <div className="space-y-5 bg-transparent">
          {/* Title */}
          <h2 className="text-lg font-semibold text-[#ffffe3] bg-transparent card-component-button3 min-[1150px]:text-2xl">
            {title}
          </h2>

          {/* Description - Hidden on screens < 1150px */}
          <p className="text-base text-[#ffffe3] bg-transparent leading-relaxed card-component-button3 hidden min-[1150px]:block">
            {description}
          </p>

          {/* Tech Stack - Hidden on screens < 1150px */}
          <div className="flex-wrap gap-2 pt-1 bg-transparent hidden min-[1150px]:flex">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-[8px] py-[2px] text-xs font-medium rounded-full
                           text-[#ffffe3] bg-[#10100e]
                           transition duration-300 hover:scale-[1.05]
                           shadow-sm card-component-button3"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons - Side by side on >= 1150px, stacked below */}
        <div className="flex flex-col  min-[1150px]:flex-row gap-4 pt-6 bg-transparent mt-auto">
          {/* Primary Button */}
          <a
            href={primaryButtonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card-component-button3 flex-1 py-3 px-6 text-center text-lg font-bold rounded-xl
                       text-[#ffffe3] bg-[#10100e]
                       shadow-md transition duration-300 transform
                       hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,227,0.4)]
                       focus:outline-none focus:ring-4 focus:ring-[#ffffe3] focus:ring-opacity-30
                       flex items-center justify-center gap-2 card-component-button1"
          >
            <FiExternalLink className="text-xl" />
            {primaryButtonText}
          </a>

          {/* GitHub Button */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card-component-button3 flex-1 py-3 px-6 text-center text-lg font-bold rounded-xl
                       text-[#ffffe3] bg-[#10100e]
                       
                       shadow-md transition duration-300 transform
                       hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,227,0.4)]
                       focus:outline-none focus:ring-4 focus:ring-opacity-30
                       flex items-center justify-center gap-2 card-component-button1"
          >
            <FaGithub className="text-xl" />
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;