"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import "../StickyDock.css"; 
import { AnimatePresence, motion } from "framer-motion";

// Inside StickyDockItem component
return (
  <motion.div
    ref={ref}
    style={{ width: size, height: size }}
    className="sticky-dock-item"
    title={label}
    onMouseEnter={() => setShowLabel(true)}
    onMouseLeave={() => setShowLabel(false)}
  >
    {icon}

    <AnimatePresence>
      {showLabel && (
        <motion.div
          className="dock-label"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.1 }} // Faster transition
        >
          {label}
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);


const StickyDockItem = ({ icon, label, mouseY, baseSize = 50, magnify = 80, range = 100 }) => {
  const ref = useRef(null);

  const mouseDistance = useTransform(mouseY, (y) => {
    const rect = ref.current?.getBoundingClientRect() ?? { y: 0, height: baseSize };
    return y - (rect.y + baseSize / 2);
  });

  const targetSize = useTransform(
    mouseDistance,
    [-range, 0, range],
    [baseSize, magnify, baseSize]
  );

  const size = useSpring(targetSize, { stiffness: 200, damping: 15 });

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      className="sticky-dock-item"
      title={label}
    >
      {icon}
    </motion.div>
  );
};

export default function StickyDock({
  items,
  baseSize = 50,
  magnify = 80,
  range = 100,
}) {
  const mouseY = useMotionValue(Infinity);

return (
  <motion.div
    ref={ref}
    style={{ width: size, height: size }}
    className="sticky-dock-item"
    title={label}
    onMouseEnter={() => setShowLabel(true)}
    onMouseLeave={() => setShowLabel(false)}
  >
    {icon}

    <AnimatePresence>
      {showLabel && (
        <motion.div
          className="dock-label"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.1 }} // Faster transition
        >
          {label}
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);
}
