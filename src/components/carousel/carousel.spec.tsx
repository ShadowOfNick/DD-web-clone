import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Carousel } from './carousel';

const items = [
  { title: 'Item 1', description: 'Description 1', image: 'image1.jpg', link: '/item-1' },
  { title: 'Item 2', description: 'Description 2', image: 'image2.jpg', link: '/item-2' },
  { title: 'Item 3', description: 'Description 3', image: 'image3.jpg', link: '/item-3' }
];

jest.mock('./carousel-item', () => ({
  CarouselItem: jest.fn(({ title }) => <div data-testid={title}>{title}</div>)
}));

describe('Carousel', () => {
  it('should render the items correctly', () => {
    const { getByTestId } = render(<Carousel items={items} />);

    items.forEach(({ title }) => {
      expect(getByTestId(title)).toBeInTheDocument();
    });
  });

  it('should change current item on click and swipe events', () => {
    const { getByTestId } = render(<Carousel items={items} />);

    // Check first item
    expect(getByTestId('carousel-item').getAttribute('data-current-item')).toBe('0');

    // Simulate click on next button
    fireEvent.click(getByTestId('carousel-control-next'));
    expect(getByTestId('carousel-item').getAttribute('data-current-item')).toBe('1');

    // Simulate swipe left event
    fireEvent.touchStart(getByTestId('carousel'));
    fireEvent.touchMove(getByTestId('carousel'), { touches: [{ clientX: 100, clientY: 0 }] });
    fireEvent.touchEnd(getByTestId('carousel'));
    expect(getByTestId('carousel-item').getAttribute('data-current-item')).toBe('2');
  });

  it('should pause and restart the slideshow on hover', () => {
    jest.useFakeTimers();
    const { getByTestId } = render(<Carousel items={items} />);

    fireEvent.mouseEnter(getByTestId('carousel-content'));
    jest.advanceTimersByTime(5000);
    expect(getByTestId('carousel-item').getAttribute('data-current-item')).toBe('0');

    fireEvent.mouseLeave(getByTestId('carousel-content'));

    jest.advanceTimersByTime(5000);
    expect(getByTestId('carousel-item').getAttribute('data-current-item')).toBe('1');

    jest.clearAllTimers();
  });
});