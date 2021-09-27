import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const IntroSection = () => {
  return (
    <Box
      id="home"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        py: {
          xs: 16,
          md: 20,
          xl: 24,
          xxl: 36,
        },
      }}
    >
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
        Currently, I am a{' '}
        <Typography variant="inherit" component="span" color="textSecondary">
          junior undergraduate student
        </Typography>{' '}
        working part-time at{' '}
        <Typography variant="inherit" component="span" color="textSecondary">
          ASML
        </Typography>
        .
      </Typography>
    </Box>
  );
};

export default IntroSection;
