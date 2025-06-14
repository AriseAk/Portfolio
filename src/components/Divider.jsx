import React from "react";
import waves from "../assets/waves.svg"

function Divider() {
    return(
        <>
        {/* <div className="divider h-[1px] bg-[#ffffe358]"></div> */}
        <img src={waves} alt="" className="divider h-[25px] w-[100vw]" />
        </>

    );
    
}

export default Divider;