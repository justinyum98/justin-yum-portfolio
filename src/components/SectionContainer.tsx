import * as React from 'react';
import Box from '@mui/material/Box';

type SectionContainerProps = {
  id: string;
  children: React.ReactNode;
};

const SectionContainer = ({ id, children }: SectionContainerProps) => {
  return (
    <Box
      id={id}
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
      {children}
    </Box>
  );
};

export default SectionContainer;
