import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ title, description, techStack, primaryButtonText, primaryButtonUrl, githubUrl ,imageSrc }) => {
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
        max-w-sm w-full mx-auto
        rounded-2xl overflow-hidden
        bg-[#c0c0a6]
        shadow-[0_4px_25px_rgba(255,255,227,0.3)]
        transition-all duration-700 ease-out transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        hover:shadow-[0_10px_30px_rgba(255,255,227,0.5)] hover:scale-[1.02]
        flex flex-col
      `}
    >
      {/* Top Section */}
      <div className="w-full h-44 flex items-center justify-center bg-black rounded-t-2xl border-b border-[#ffffe358]">
<img 
            src={imageSrc} 
            alt={`Screenshot of the ${title} project`} 
            className="  w-full h-full text-[#10100e] bg-transparent object-cover"
        />
          {/* <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          ></path> */}
        
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col justify-between flex-grow bg-transparent">
        <div className="space-y-5 bg-transparent">
          {/* Title */}
          <h2 className="text-2xl font-bold text-[#10100e] bg-transparent card-component-button">
            {title}
          </h2>

          {/* Description */}
          <p className="text-base text-[#10100e] bg-transparent leading-relaxed card-component-button3">
            {description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 pt-1 bg-transparent">
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

        {/* Buttons */}
        <div className="flex flex-row gap-4 pt-6 bg-transparent mt-auto">
          {/* Primary Button */}
          <a
            href={primaryButtonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-6 text-center text-lg font-bold rounded-xl
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
            className="flex-1 py-3 px-6 text-center text-lg font-bold rounded-xl
                       text-[#ffffe3] bg-[#10100e]
                       border border-[#ffffe3]
                       shadow-md transition duration-300 transform
                       hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,227,0.4)]
                       focus:outline-none focus:ring-4 focus:ring-[#ffffe3] focus:ring-opacity-30
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
