import React from 'react';
import { render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import  { ProjectSection } from './project-section';
import projectDetailData from './project-section-data';

describe('ProjectSection', () => {
  const props = {
    projectDetailData,
    title: 'Project Title',
    description: 'Project Description',
  };
  const {getByTestId, queryAllByTestId} = render(<ProjectSection {...props} />);

  it('renders the correct number of project cards and displays a "More Projects" button when there are more projects to be shown', () => {
    expect(queryAllByTestId('project-section-card')).toHaveLength(4);
    expect(getByTestId('more-projects-button')).toBeInTheDocument();
    expect(getByTestId('project-section-title')).toBeInTheDocument();
    expect(getByTestId('project-section-description')).toBeInTheDocument();
  });

  it('loads more projects when the "More Projects" button is clicked', () => {
    fireEvent.click(getByTestId('more-projects-button'));
    expect(queryAllByTestId('project-section-card')).toHaveLength(8);
  });

  it('does not display the "More Projects" button when all projects are already shown', () => {
    fireEvent.click(getByTestId('more-projects-button'));
    expect(getByTestId('more-projects-button')).not.toBeInTheDocument();
  });
});

