import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/animatedinview.css';

const AnimatedInView = ({ children, baseClass = 'animated-up', animationClass = 'animate-u', threshold = 0.1 }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold,
  })

  return (
    <div
      ref={ref}
      className={`${baseClass} ${inView ? animationClass : ''}`}
    >
      {children}
    </div>
  )
}

export default AnimatedInView;

