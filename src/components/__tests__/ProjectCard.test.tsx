import * as React from 'react';
import faker from 'faker';
import { render, screen, fireEvent } from '@testing-library/react';

import ProjectCard from '../ProjectCard';
import { IProject } from '../../types';

describe('ProjectCard component', () => {
  let project: IProject;

  beforeEach(() => {
    project = {
      name: faker.random.words(),
      startDate: `${faker.date.month()} 2000`,
      endDate: `${faker.date.month()} 2001`,
      pictureUrl: [faker.image.imageUrl(), faker.image.imageUrl()],
      description: faker.lorem.paragraph(),
      technologies: Array(4).fill(faker.lorem.word()),
      url: faker.internet.url(),
      githubUrl: faker.internet.url(),
    };
  });

  it("should handle 'Back' and 'Next' button clicks", () => {
    // Arrange
    render(<ProjectCard project={project} />);

    // Act
    const nextButton = screen.getByRole('button', {
      name: 'Next',
    });
    const backButton = screen.getByRole('button', {
      name: 'Back',
    });
    fireEvent.click(nextButton);
    fireEvent.click(backButton);
    const image = screen.getByRole('img');

    // Assert
    expect(image.getAttribute('src')).toEqual(project.pictureUrl[0]);
  });
});
