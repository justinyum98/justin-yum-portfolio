import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import HeaderNavbar from '../src/components/HeaderNavbar';
import IntroSection from '../src/components/IntroSection';
import AboutSection from '../src/components/AboutSection';
import WorkSection from '../src/components/WorkSection';
import ProjectsSection from '../src/components/ProjectsSection';

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
        <IntroSection />
        <AboutSection />
        <WorkSection />
        <ProjectsSection />
      </Container>
    </Box>
  );
};

export default Index;
