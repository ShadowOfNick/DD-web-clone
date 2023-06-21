import { useEffect } from 'react';

export interface Color {
  red: number;
  green: number;
  blue: number;
};

export type SwingHandler = (initialColor: Color) => Color | undefined;

export const getRgbColorString = (color: Color) =>
  `rgb(${color.red}, ${color.green}, ${color.blue})`;

export const useColorSwing = (
  initialColor: Color,
  element: React.RefObject<HTMLDivElement>,
  swingHandler: SwingHandler = (initialColor: Color) => {
    console.log('default swing handler');
    const y = 1 + (window.scrollY || window.pageYOffset) / 4;
    const offset = 40;

    if (y > offset) {
      return {
        red: Math.round(initialColor.red + y - offset),
        green: Math.round(initialColor.green + y - offset),
        blue: Math.round(initialColor.blue + y - offset),
      };
    }

    return undefined;
  },
): void => {
  useEffect(() => {
    const handleScroll = () => {
      const color = swingHandler(initialColor);
      if (element.current && color) {
        element.current.style.backgroundColor = getRgbColorString(color);
      }
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [initialColor, element, swingHandler]);
};
