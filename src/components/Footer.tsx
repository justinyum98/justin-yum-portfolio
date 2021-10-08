import * as React from 'react';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Typography
      variant="subtitle1"
      align="center"
      fontFamily="monospace"
      sx={{
        my: 3,
      }}
    >
      Built by Justin Yum
    </Typography>
  );
};

export default Footer;
