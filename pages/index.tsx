import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import HeaderNavbar from '../src/components/HeaderNavbar';

const Index = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <HeaderNavbar />
      <Container
        disableGutters={true}
        sx={{
          px: {
            xs: 3,
            sm: 4,
            md: 8,
            lg: 16,
            xl: 0,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            py: {
              xs: 6,
              md: 10,
              lg: 20,
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
            <Typography
              variant="inherit"
              component="span"
              color="textSecondary"
            >
              junior undergraduate student
            </Typography>{' '}
            working part-time at{' '}
            <Typography
              variant="inherit"
              component="span"
              color="textSecondary"
            >
              ASML
            </Typography>
            .
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Index;
