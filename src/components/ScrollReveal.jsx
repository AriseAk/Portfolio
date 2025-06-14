import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../App.css";
import React from 'react';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 8,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "+=400",
  wordAnimationEnd = "+=500",
  as: Component = "div"
}) => {
  const containerRef = useRef(null);

  const isString = typeof children === 'string';

  const splitText = useMemo(() => {
    if (!isString) return null;
    return children.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="word" key={index} style={{ display: 'inline-block' }}>
          {word}
        </span>
      );
    });
  }, [children, isString]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current || window;

    // Rotation animation for entire container
    gsap.fromTo(el,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        rotate: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top 90%',
          end: rotationEnd,
          scrub: 1,
          markers: false
        }
      }
    );

    const wordElements = el.querySelectorAll('.word');
    if (wordElements.length > 0) {
      // Opacity + position animation
      gsap.fromTo(wordElements,
        { opacity: baseOpacity, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.01,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top 85%',
            end: wordAnimationEnd,
            scrub: 1
          }
        }
      );

      // Optional blur effect
      if (enableBlur) {
        gsap.fromTo(wordElements,
          { filter: `blur(${blurStrength}px)` },
          {
            filter: 'blur(10px)',
            stagger: 0.4,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              scroller,
              start: 'top 85%',
              end: wordAnimationEnd,
              scrub: 1
            }
          }
        );
      }
    }

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, [scrollContainerRef, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength, enableBlur]);

 return (
  <Component ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
    {isString ? (
      <p className={`scroll-reveal-text ${textClassName}`}>
        {splitText}
      </p>
    ) : (
      React.cloneElement(children, {
        className: `${children.props.className || ''} ${textClassName}`.trim()
      })
    )}
  </Component>
);

};

export default ScrollReveal;
