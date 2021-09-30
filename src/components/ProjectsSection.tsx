import * as React from 'react';
import Typography from '@mui/material/Typography';
import SectionContainer from './SectionContainer';

const ProjectsSection = () => {
  const projects = [
    {
      name: 'First Iteration of Personal Website',
      description:
        "My first personal project ever. On May 2019, I made it my goal to start and finish creating my own personal website from scratch. After some growing pains and even scrapping the first rendition completely, I finally finished the website on December 2019. Though it's not my best work, I can proudly say that this was the start of my web development journey.",
      pictureUrl: '',
      url: 'https://justinyum.netlify.app/',
    },
  ];

  return (
    <SectionContainer id="projects">
      <Typography
        variant="h5"
        component="div"
        color="textSecondary"
        fontWeight="medium"
        sx={{ mb: 3 }}
      >
        Personal Projects
      </Typography>
    </SectionContainer>
  );
};

export default ProjectsSection;
