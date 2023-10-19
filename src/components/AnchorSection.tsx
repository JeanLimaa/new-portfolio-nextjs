'use client'
import { Link } from 'react-scroll';
import { ReactNode } from 'react';

interface AnchorSectionProps{
  to: string;
  children: ReactNode;
  logo?: boolean;
  className?: string;
}

const AnchorSection = ({to, children, logo, className}: AnchorSectionProps) => {
  return (
    <Link
          to={to}
          spy={true}
          smooth={true}
          duration={100}
          activeClass="active"
          style={{cursor: 'pointer'}}
          className={`${className} ${logo && 'logo'}`}
        >
          {children}
    </Link>
  );
};

export default AnchorSection;
