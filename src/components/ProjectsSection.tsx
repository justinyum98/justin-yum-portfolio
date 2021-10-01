import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import SectionContainer from './SectionContainer';
import ProjectCard from './ProjectCard';
import { IProject } from '../types';

const ProjectsSection = () => {
  const projects: IProject[] = [
    {
      name: 'ParkTaxi Mobile App',
      startDate: 'March 2021',
      endDate: 'Current',
      description:
        "Currently, I am working in a team of 3 to create a ride-share application that helps college students secure parking ahead of arriving at campus. I am the sole developer of the MVP, and I collaborate with the team's lead designer in materializing his designs. In the summer of 2021, we were accepted into UCSD's Summer Incubator Program, where we connect with established business leaders to receive guidance and advice in creating a successful business model.",
      pictureUrl: [
        'https://justinyumportfolio676d92023bae4f5c8237d7be84fba113139-dev.s3.us-west-1.amazonaws.com/public/parktaxi-1.png',
        'https://justinyumportfolio676d92023bae4f5c8237d7be84fba113139-dev.s3.us-west-1.amazonaws.com/public/parktaxi-2.png',
        'https://justinyumportfolio676d92023bae4f5c8237d7be84fba113139-dev.s3.us-west-1.amazonaws.com/public/parktaxi-3.png',
        'https://justinyumportfolio676d92023bae4f5c8237d7be84fba113139-dev.s3.us-west-1.amazonaws.com/public/parktaxi-4.png',
        'https://justinyumportfolio676d92023bae4f5c8237d7be84fba113139-dev.s3.us-west-1.amazonaws.com/public/parktaxi-5.png',
        'https://justinyumportfolio676d92023bae4f5c8237d7be84fba113139-dev.s3.us-west-1.amazonaws.com/public/parktaxi-6.png',
        'https://justinyumportfolio676d92023bae4f5c8237d7be84fba113139-dev.s3.us-west-1.amazonaws.com/public/parktaxi-7.png',
      ],
      url: 'https://www.parktaxiapp.com/',
      githubUrl: 'https://github.com/justinyum98/parktaxi-react-native',
      technologies: ['TypeScript', 'React Native', 'Firebase', 'Stripe'],
    },
    {
      name: 'Personal Website v1',
      startDate: 'May 2019',
      endDate: 'December 2019',
      description:
        "My first personal project ever. On May 2019, I made it my goal to create my own personal website from scratch. After some growing pains and even scrapping the first rendition completely, I finally finished the website on December 2019. Though it's not perfect, I'm still proud of it because it kickstarted my web development journey.",
      pictureUrl:
        'https://justinyumportfolio676d92023bae4f5c8237d7be84fba113139-dev.s3.us-west-1.amazonaws.com/public/justinyum-website-screenshot.png',
      url: 'https://justinyum.netlify.app/',
      githubUrl: 'https://github.com/justinyum98/justinyum-website',
      technologies: [
        'JavaScript',
        'React',
        'NodeJS',
        'GraphQL',
        'Instagram Graph API',
        'SendGrid API',
      ],
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
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid key={index} item xs={12} lg={6}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default ProjectsSection;
