import React from 'react';

interface TitleProps {
  text: string;
  className: string;
};

export const CarouselTitle:React.FC<TitleProps> = ({
  text,
  className,
}) => {
  const rowText = text.split(' ');
  const title = rowText.map((word, index) => word.includes('-') ? (
      <React.Fragment key={index}>
        <span>{word}</span>{index < rowText.length - 1 ? ' ' : ''}
      </React.Fragment>
    ) : (
      `${word}${index < rowText.length - 1 ? ' ' : ''}`
    )
  );

  return (
    <h2 className={className}>
      {title}
    </h2>
  );
};
