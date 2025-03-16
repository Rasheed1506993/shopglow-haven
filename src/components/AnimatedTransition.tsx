
import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface AnimatedTransitionProps {
  children: ReactNode;
}

const AnimatedTransition: React.FC<AnimatedTransitionProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div
      key={location.pathname}
      className="animate-fade-in"
      style={{ 
        animation: 'fade-in 0.3s ease-in-out, slide-up 0.4s ease-out',
        minHeight: '100vh' 
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedTransition;
