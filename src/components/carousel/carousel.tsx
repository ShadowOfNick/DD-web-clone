import React from 'react';
import { useSwipeable } from 'react-swipeable';
import { CarouselItem } from './carousel-item';
import { CarouselSlideFields } from '../../services';

interface CarouselProps {
  items: CarouselSlideFields[];
};

export const Carousel: React.FC<CarouselProps> = ({
  items,
}) => {
  const [currentItem, setCurrentItem] = React.useState(0);
  const [direction, setDirection] = React.useState(1)
  const [paused, setPaused] = React.useState(false);

  const getCurrentClass = (currentIndex: number, itemIndex: number, length: number) => {
    const slideClasses = ['carousel__content__wrapper']
    if (currentIndex === itemIndex) {
      slideClasses.push(' carousel__content__wrapper--first')
      if (currentIndex === itemIndex && direction === 0) {
        slideClasses.push(' fade-in')
        return slideClasses.join('');
      } else {
        return slideClasses.join('');
      }
    } else if (((currentIndex + 1) % length) === itemIndex) {
      slideClasses.push(' carousel__content__wrapper--second')
      return slideClasses.join('');
    } else if (((currentIndex + 2) % length) === itemIndex) {
      slideClasses.push(' carousel__content__wrapper--third')
      return slideClasses.join('');
    } else if (((currentIndex + 3) % length) === itemIndex) {
      slideClasses.push(' carousel__content__wrapper--fourth')
      return slideClasses.join('');
    } else if (((currentIndex + (length-1)) % length) === itemIndex && direction === 1) {
      slideClasses.push(' fade-out')
      return slideClasses.join('');
    }
    return slideClasses.join('');
  };

  const getPrevious = () => {
    setDirection(0);
    setCurrentItem(prevValue => (prevValue - 1 + items.length) % items.length);
  };

  const getNext = () => {
    setDirection(1);
    setCurrentItem(prevValue => (prevValue + 1) % items.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => getNext(),
    onSwipedRight: () => getPrevious(),
    onSwipedDown: () => getPrevious(),
    onSwipedUp: () => getNext()
  });

  React.useEffect(() => {
    if (!paused) {
      const id = setTimeout(getNext, 5000);
      return () => clearTimeout(id);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentItem, paused]);

  return (
    <div
      data-testid="carousel"
      {...handlers}
      className="carousel"
    >
      <div
        data-testid="carousel-content"
        className="carousel__content"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {items?.map((item, index)=> (
          <div
            className={getCurrentClass(currentItem, index, items.length)}
            key={index}
          >
            <CarouselItem {...item} />
          </div>
        ))}
      </div>
      <div className="carousel__control">
        <button data-testid="carousel-control-previous" className="carousel__control__previous" onClick={() => getPrevious()} />
        {items?.map((_, index) => (
          <button
            key={index}
            className={`carousel__control__item${currentItem === index ? ' carousel__control__item--activ' : ''}`}
            onClick={() => setCurrentItem(index)}
            data-testid={`carousel-control-item-${index}`}
          />
        ))}
        <button className="carousel__control__next" onClick={() => getNext()} />
      </div>
    </div>
  );
};
