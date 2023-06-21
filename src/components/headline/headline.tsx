import React, { ReactNode } from 'react';

interface HeadlineProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  underline?: boolean;
  children: ReactNode;
};

export const Headline: React.FC<HeadlineProps> = ({
  type,
  underline = false,
  children,
}) => {
  const Element = type;
  return (
    <Element className={`headline headline--${type}${underline ? ' headline--underline' : ''}`} >
      {children}
    </Element>
  );
};
