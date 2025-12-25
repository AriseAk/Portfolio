import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import '../App.css';

const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("INITIALIZING...");
  // REMOVED: const [percentage, setPercentage] = useState(0); 
  
  // 1. New Ref for the Number Element
  const percentageRef = useRef(null); 
  
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const barRef = useRef(null);

  const bootLogs = [
    "LOADING_KERNEL...",
    "DECRYPTING_ASSETS...",
    "ESTABLISHING_UPLINK...",
    "ACCESS_GRANTED"
  ];

  useEffect(() => {
    const tl = gsap.timeline();
    const duration = 2; // Slightly slower for drama

    // 1. Animate Counter & Bar
    let progress = { val: 0 };
    
    tl.to(progress, {
      val: 100,
      duration: duration,
      ease: "power2.inOut",
      onUpdate: () => {
        // DIRECT DOM UPDATE (Solves the "Stuck at 97" bug)
        // We update the innerText directly, skipping React's render cycle
        if (percentageRef.current) {
          percentageRef.current.innerText = Math.round(progress.val) + "%";
        }

        // Keep boot logs in state (they are slower, so it's fine)
        const logIndex = Math.min(
          Math.floor((progress.val / 100) * bootLogs.length),
          bootLogs.length - 1
        );
        setText(bootLogs[logIndex]);
      }
    })
    .to(barRef.current, {
      width: "100%",
      duration: duration,
      ease: "power2.inOut"
    }, "<");

    // 2. FORCE COMPLETE STATE (Just to be safe)
    tl.call(() => {
        if (percentageRef.current) percentageRef.current.innerText = "100%";
        setText("ACCESS_GRANTED");
    });

    // 3. THE PAUSE (Wait 0.8s)
    tl.to({}, { duration: 0.8 }); 

    // 4. THE EXIT
    tl.to(textRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.in"
    })
    .to(containerRef.current, {
      yPercent: -100,
      duration: 1,
      ease: "power4.inOut",
      onComplete: onComplete
    }, "-=0.2");

  }, [onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[9999] bg-[#10100e] flex flex-col items-center justify-center overflow-hidden"
    >
      <div ref={textRef} className="flex flex-col items-start w-[300px] loaderstyle">
        
        {/* PERCENTAGE TEXT - Uses Ref instead of State */}
        <div 
          ref={percentageRef}
          className="text-[100px] md:text-[120px]  text-[#ffffe3] leading-none"
          style={{ fontFamily: "'Jersey 10', sans-serif" }}
        >
          0%
        </div>

        {/* Boot Log Text */}
        <div className="flex justify-between w-full items-end mt-2 loaderstyle">
            <span 
              className="text-sm text-white/50 tracking-widest "
              style={{ fontFamily: "'Jersey 10', sans-serif" }}
            >
              // {text}
            </span>
            <span className="h-2 w-2 bg-[#ffffe3] animate-pulse rounded-full"></span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-[2px] bg-white/10 mt-6 relative overflow-hidden">
          <div 
            ref={barRef} 
            className="absolute top-0 left-0 h-full w-0 bg-[#ffffe3] shadow-[0_0_15px_rgba(255,255,227,0.5)]"
          ></div>
        </div>

      </div>

      {/* Decorative Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{ 
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', 
            backgroundSize: '50px 50px' 
        }}
      />
    </div>
  );
};

export default LoadingScreen;