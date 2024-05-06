import { Variants } from 'framer-motion';

export const fadeIn = (direction: string, delay: number): Variants => {
  return {
    parentHidden: {
      opacity: 0,
    },
    parentVisible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2, 
      },
    },
    childHidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      opacity: 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    childVisible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
