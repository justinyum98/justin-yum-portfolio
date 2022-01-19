import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import SectionContainer from './SectionContainer';

const IntroSection = () => {
  return (
    <SectionContainer id="home">
      <Typography variant="h6" component="div" color="textSecondary">
        Hi, my name is
      </Typography>
      <Box
        sx={{
          pb: {
            xs: 1,
            lg: 2,
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: 'h3.fontSize',
              md: 'h2.fontSize',
            },
          }}
          component="div"
          fontWeight="bold"
        >
          Justin Yum.
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontSize: {
              xs: 'h4.fontSize',
              md: 'h3.fontSize',
            },
          }}
          component="div"
          fontWeight="bold"
        >
          Software Engineer.
        </Typography>
      </Box>
      <Typography variant="subtitle1" paragraph fontWeight="medium">
        I develop (and sometimes design) both web and mobile experiences.
        <br />
        Currently, I am a student at{' '}
        <Typography variant="inherit" component="span" color="textSecondary">
          California State University, San Marcos
        </Typography>
        .
      </Typography>
      <Button
        href="https://justinyumportfolio676d92023bae4f5c8237d7be84fba113139-dev.s3.us-west-1.amazonaws.com/public/Justin's+Resume.pdf"
        variant="outlined"
        size="large"
        sx={{
          mt: 4,
          alignSelf: 'flex-start',
        }}
      >
        See Resume
      </Button>
    </SectionContainer>
  );
};

export default IntroSection;
