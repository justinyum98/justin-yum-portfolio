import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';

import SectionContainer from './SectionContainer';

const ContactSection = () => {
  return (
    <SectionContainer id="contact">
      <Typography
        variant="h5"
        component="div"
        color="textSecondary"
        fontWeight="medium"
        align="center"
        sx={{
          mb: 3,
        }}
      >
        Want To Talk?
      </Typography>
      <Typography
        variant="body1"
        component="div"
        align="center"
        sx={{
          px: {
            xs: 0,
            md: 10,
            lg: 20,
            xl: 30,
          },
          mb: 4,
        }}
      >
        Whether you have any opportunities or just want to talk,
        <br />
        feel free to send over an email! I&apos;ll do my best to get back to
        you.
      </Typography>
      <Button
        href="mailto:justinyum98@gmail.com"
        variant="contained"
        startIcon={<EmailIcon />}
        sx={{ alignSelf: 'center' }}
      >
        Say Hi
      </Button>
    </SectionContainer>
  );
};

export default ContactSection;
