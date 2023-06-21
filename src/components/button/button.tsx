import React from 'react';
import Link from 'next/link';

const MUSTARD = 'mustard';
const AZURE = 'azure';
const SUBMIT = 'submit';
const BUTTON = 'button';

type ButtonColor = typeof MUSTARD | typeof AZURE;
type ButtonType = typeof SUBMIT | typeof BUTTON;

interface ButtonPros {
  text: string;
  link?: string;
  type?: ButtonType;
  color?: ButtonColor;
  arrow?: boolean;
  disabled?: boolean;
  external?: boolean;
  onClick?: () => void;
};

export const Button: React.FC<ButtonPros> = ({
  text,
  link = undefined,
  type = BUTTON,
  color = undefined,
  arrow = undefined,
  disabled = false,
  external = false,
  onClick = () => {},
}) => {
  const rel = link && external ? 'noopener noreferrer' : '';
  const target = link && external ? '_blank' : '';

  const getClasses = (color?: ButtonColor, arrow?: boolean) => {
    const classes = ['button'];
    if (color === MUSTARD) classes.push('button--mustard');
    if (color === AZURE) classes.push('button--azure');
    if (arrow === true) classes.push('button--arrow');
    return classes.join(' ');
  };

  return (
    <>
      {link ? (
        <Link href={link}>
          <a
            className={getClasses(color, arrow)}
            rel={rel}
            target={target}
          >
              {text}
          </a>
        </Link>
      ) : (
        <button
          className={getClasses(color, arrow)}
          type={type}
          disabled={disabled}
          onClick={onClick}
        >
          {text}
        </button>
      )}
    </>
  );
};
