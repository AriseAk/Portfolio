import { motion, AnimatePresence } from 'framer-motion';

const BlurText = ({
  text = '',
  className = '',
  animateBy = 'words',
  direction = 'top',
  stepDuration = 0.35,
  delay = 200,
  trigger = false,
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');

  const from = direction === 'top'
    ? { opacity: 0, y: -30, filter: 'blur(8px)' }
    : { opacity: 0, y: 30, filter: 'blur(8px)' };

  const to = { opacity: 1, y: 0, filter: 'blur(0px)' };
  const exit = { opacity: 0, y: 20, filter: 'blur(6px)', transition: { duration: 0.3 } };

  return (
    <AnimatePresence>
      {trigger && (
        <motion.p
          className={className}
          style={{ display: 'flex', flexWrap: 'wrap' }}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{
            hidden: {},
            visible: {},
            exit: {},
          }}
        >
          {elements.map((segment, index) => (
            <motion.span
              key={index}
              className="inline-block will-change-[transform,filter,opacity]"
              initial={from}
              animate={to}
              exit={exit}
              transition={{
                duration: stepDuration,
                delay: (index * delay) / 1000,
              }}
            >
              {segment === ' ' ? '\u00A0' : segment}
              {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
            </motion.span>
          ))}
        </motion.p>
      )}
    </AnimatePresence>
  );
};

export default BlurText;
