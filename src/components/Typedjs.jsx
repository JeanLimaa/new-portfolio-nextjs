'use client'
import React from 'react';
import Typed from 'typed.js';

export default function Typedjs({dictionary}) {
  const el = React.useRef(null);
  
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: dictionary.typedjs,
      typeSpeed: 60,
      backSpeed: 60,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
      <span ref={el} />
  );
} 