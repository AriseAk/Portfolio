import React from "react";
import heading from "../assets/Heading.png"

function Handwriting() {
  
  // Function to reload the page
  const handleReload = () => {
    window.location.reload();
  };

  return (
      <img 
        className="cursor-pointer"
        src={heading}
        alt="Handwriting fonts"
        style={{ maxWidth: '100%', height: '60%'}}
        onClick={handleReload} // Attach the click handler here
      />
  );
}

export default Handwriting;