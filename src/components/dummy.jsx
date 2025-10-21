import React from 'react'

const dummy = () => {
  return (
    <div>
                  {/* 1. Image Placeholder */}
            <div className="w-full h-44 overflow-hidden bg-gray-200">
                <img 
                    src={imageSrc || "project-image.jpg"} 
                    alt={`Screenshot of the ${title} project`}
                    // Ensures the image fills the container without stretching
                    className="w-full h-full object-cover block"
                />
            </div>

            <div className="p-4"> 
                
                {/* 2. Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {title || "Project Name"}
                </h3>

                {/* 3. Project Description */}
                <p className="text-sm text-gray-600 leading-snug mb-3">
                    {description || "A brief and engaging description of the project, explaining its key features or the problem it solves."}
                </p>

                {/* 4. Tech Stack */}
                <p className="text-xs text-blue-600 py-2 border-t border-b border-gray-200 mb-4">
                    <strong className="font-semibold text-gray-700">Tech Stack:</strong> {techStack || "HTML, CSS (Flexbox), JavaScript, React"}
                </p>

                {/* 5. Buttons Group (side-by-side) */}
                <div className="flex gap-3 mt-4"> 
                    
                    {/* Live Website Button */}
                    <a 
                        href={liveLink || "#"} 
                        // flex-1 makes it take up half the space
                        className="flex-1 px-3 py-2 rounded-lg text-sm font-semibold flex items-center justify-center space-x-2 bg-green-600 text-white hover:bg-green-700 transition duration-150" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`Link to the live demo of ${title}`}
                    >
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" /> 
                        Live Site
                    </a>
                    
                    {/* GitHub Repo Button */}
                    <a 
                        href={githubLink || "#"} 
                        // flex-1 makes it take up half the space
                        className="flex-1 px-3 py-2 rounded-lg text-sm font-semibold flex items-center justify-center space-x-2 bg-gray-800 text-white hover:bg-gray-900 transition duration-150" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`Link to the GitHub repository for ${title}`}
                    >
                        <FontAwesomeIcon icon={faGithub} className="mr-2" /> 
                        GitHub Repo
                    </a>
                </div>
            </div>
    </div>
  )
}

export default dummy
