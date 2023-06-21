import React from 'react';
import { Color, getRgbColorString, SwingHandler, useColorSwing } from '../../utils';

interface BackgroundSwingerProps {
  initialColor: Color;
  className: string;
  swingHandler?: SwingHandler;
};

export const BackgroundSwinger: React.FC<React.PropsWithChildren<BackgroundSwingerProps>> = ({
  children,
  initialColor,
  className,
  swingHandler = undefined,
}) => {
  const element = React.useRef<HTMLDivElement>(null);
  const initialRgbColor = getRgbColorString(initialColor);

  useColorSwing(initialColor, element, swingHandler);

  return (
    <div ref={element} className={`background-swinger ${className}`} style={{ backgroundColor: initialRgbColor }}>
      {children}
    </div>
  );
};
