import React, { createContext, useRef, useEffect } from 'react';

// Create Context
const IntersectionContext = createContext();

export const IntersectionProvider = ({ children }) => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const currentSections = sectionsRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          } else {
            entry.target.classList.remove("fade-in-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    currentSections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup function
    return () => {
      currentSections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <IntersectionContext.Provider value={{ sectionsRef }}>
      {children}
    </IntersectionContext.Provider>
  );
};

export default IntersectionContext;
