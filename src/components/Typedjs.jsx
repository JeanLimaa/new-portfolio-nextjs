import React from 'react';
import Typed from 'typed.js';

export default function Typedjs() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        '<i>Desenvolvedor</i> de Software.', 
        '<i>Dev.</i> Fullstack Javascript.',
        '<i>Desenvolvedor</i> Front-end.'
      ],
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