/* eslint-disable react/prop-types */

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TypingText = ({ text }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0 });
    tl.fromTo(
      textRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.3, stagger: 0.05 }
    );
  }, [text]);

  return (
    <div ref={textRef} className=''>
      {text.split('').map((char, index) => (
        <span key={index} style={{ display: 'inline-block', marginLeft: '2px' }}>
          {char}
        </span>
      ))}
    </div>
  );
};

export default TypingText;