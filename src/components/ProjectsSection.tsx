import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';

import SectionContainer from './SectionContainer';

const ProjectsSection = () => {
  const projects = [
    {
      name: 'Personal Website v1',
      startDate: 'May 2019',
      endDate: 'December 2019',
      description:
        "My first personal project ever. On May 2019, I made it my goal to create my own personal website from scratch. After some growing pains and even scrapping the first rendition completely, I finally finished the website on December 2019. Though it's not my best work, I'm proud of it because it kickstarted my web development journey.",
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
      {projects.map(
        (
          {
            name,
            startDate,
            endDate,
            description,
            pictureUrl,
            url,
            githubUrl,
            technologies,
          },
          index
        ) => (
          <Card key={index}>
            <CardHeader title={name} subheader={`${startDate} - ${endDate}`} />
            <CardMedia
              component="img"
              height={400}
              image={pictureUrl}
              alt="project img"
            />
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                {description}
              </Typography>
              <Typography variant="subtitle2" fontWeight="medium">
                Tech stack: {technologies.join(', ')}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton color="primary" href={url}>
                <LanguageIcon />
              </IconButton>
              <IconButton color="primary" href={githubUrl}>
                <GitHubIcon />
              </IconButton>
            </CardActions>
          </Card>
        )
      )}
    </SectionContainer>
  );
};

export default ProjectsSection;
