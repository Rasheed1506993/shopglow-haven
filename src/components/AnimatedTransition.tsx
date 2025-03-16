
import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface AnimatedTransitionProps {
  children: ReactNode;
  direction?: 'ltr' | 'rtl';
}

const AnimatedTransition: React.FC<AnimatedTransitionProps> = ({ children, direction = 'rtl' }) => {
  const location = useLocation();

  const slideDirection = direction === 'rtl' ? 'slide-right' : 'slide-left';

  return (
    <div
      key={location.pathname}
      className={`animate-fade-in ${direction === 'rtl' ? 'text-right' : 'text-left'}`}
      style={{ 
        animation: `fade-in 0.3s ease-in-out, ${slideDirection} 0.4s ease-out`,
        minHeight: '100vh',
        direction: direction 
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedTransition;
