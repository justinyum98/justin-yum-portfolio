import * as React from 'react';
import Box from '@mui/material/Box';
import { Fade } from 'react-awesome-reveal';

type SectionContainerProps = {
  id: string;
  children: React.ReactNode;
  centerAlignItems?: boolean;
};

const SectionContainer = ({
  id,
  children,
  centerAlignItems = false,
}: SectionContainerProps) => {
  return (
    <Box
      id={id}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: centerAlignItems ? 'center' : 'flex-start',
        py: {
          xs: 16,
          md: 20,
          xl: 24,
          xxl: 36,
        },
      }}
    >
      <Fade direction="up" triggerOnce>
        {children}
      </Fade>
    </Box>
  );
};

export default SectionContainer;
