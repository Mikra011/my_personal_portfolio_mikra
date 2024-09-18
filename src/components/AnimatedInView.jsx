import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/animatedinview.css';

const AnimatedInView = ({ children, animationClass = 'animate', threshold = 0.1 }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold,
  })

  return (
    <div
      ref={ref}
      className={`animated-element ${inView ? animationClass : ''}`}
    >
      {children}
    </div>
  )
}

export default AnimatedInView;
