// Handwriting.js
import React from "react";
import heading from "../assets/Heading.png"

function Handwriting() {
  return (
      <img className="cursor-pointer"

        src={heading}
        alt="Handwriting fonts"
        style={{ maxWidth: '100%', height: '60%'}}
      />
  );
}

export default Handwriting;
