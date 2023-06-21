import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LeadersSection } from './leaders-section';
import { leadersMockData  } from './leader-section-data';
import { LeaderCard } from '../../services';

interface LeadersSectionProps {
  title: string;
  description: string;
  leadersData: LeaderCard[];
  buttonLabel: string;
};

describe('LeadersSection', () => {
  const mockData: LeaderCard[] = leadersMockData;
  const props: LeadersSectionProps = {
    title: 'Leadership Team',
    description: 'Meet our amazing leadership team',
    leadersData: mockData,
    buttonLabel: 'Contact Us',
  };
  
  it('renders the correct content', () => {
    const { getByTestId } = render(<LeadersSection {...props} />);
    expect(getByTestId('leaders-section-title')).toHaveTextContent(props.title);
    expect(getByTestId('leaders-section-description')).toHaveTextContent(props.description);
    expect(getByTestId('leaders-section-contact-button')).toHaveTextContent(props.buttonLabel);
    leadersMockData.forEach((item, index) => {
      expect(getByTestId(`leader-card-${item.name || 'main'}`)).toHaveTextContent(item.name || '');
    });
  });
});