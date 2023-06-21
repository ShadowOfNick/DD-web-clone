import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CareerSection } from './career-section';

describe('CareerSection', () => {
  const props = {
    title: 'Software Engineer',
    subtitle: 'Full-time',
    positions: ['Position 1', 'Position 2'],
    description: 'This is the description',
    image: '//image.com/image.png',
    link: '/careers',
    buttonTitle: 'Apply Now',
  };

  it('renders the expected elements', () => {
    render(<CareerSection {...props} />);
    const { getAllByTestId } = render(<CareerSection {...props} />);
    const imageElements = getAllByTestId('career-section-image-item');
    expect(imageElements).toHaveLength(2);
    imageElements.forEach((item) => {
        expect(item).toBeInTheDocument();
    })
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.subtitle)).toBeInTheDocument();
    props.positions.forEach((position) => {
      expect(screen.getByText(position)).toBeInTheDocument();
    });
    expect(screen.getByText(props.description)).toBeInTheDocument();
    // linkElement will be fetched via getByRole
    // Need to fix, the code.
    // Another testid instead. check what is the element node name
    const linkElement = screen.getByTestId('career-section-link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', props.link);
  });
});