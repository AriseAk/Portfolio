"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import "../StickyDock.css";

const StickyDockItem = ({
  icon,
  label,
  mouseY,
  baseSize = 50,
  magnify = 80,
  range = 100,
}) => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const mouseDistance = useTransform(mouseY, (y) => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      y: 0,
      height: baseSize,
    };
    return y - (rect.y + baseSize / 2);
  });

  const targetSize = useTransform(
    mouseDistance,
    [-range, 0, range],
    [baseSize, magnify, baseSize]
  );

  const size = useSpring(targetSize, {
    stiffness: 200,
    damping: 15,
  });

  return (
    <div
      ref={ref}
      className="sticky-dock-item-with-label"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.span
            className="sticky-label"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: -8 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>

      <motion.div style={{ width: size, height: size }} className="sticky-icon">
        {icon}
      </motion.div>
    </div>
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
    <div
      className="sticky-dock"
      onMouseMove={(e) => mouseY.set(e.clientY)}
      onMouseLeave={() => mouseY.set(Infinity)}
    >
      {items.map((item, index) => (
        <StickyDockItem
          key={index}
          icon={item.icon}
          label={item.label}
          mouseY={mouseY}
          baseSize={baseSize}
          magnify={magnify}
          range={range}
        />
      ))}
    </div>
  );
}
