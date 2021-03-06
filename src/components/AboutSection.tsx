import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import Link from './Link';
import SkillsSection from './SkillsSection';
import SectionContainer from './SectionContainer';

const AboutSection = () => {
  return (
    <SectionContainer id="about">
      <Typography
        variant="h5"
        component="div"
        color="textSecondary"
        fontWeight="medium"
        sx={{
          mb: 3,
        }}
      >
        About Me
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} lg={8}>
          <Typography variant="body1" paragraph>
            Hello! My name is Justin and I like creating experiences for the
            web. My interest in web development started in the summer of 2015,
            when I went with my dad to his job at{' '}
            <Link
              href="https://www.pluralsight.com/"
              color="primary"
              underline="hover"
            >
              Pluralsight
            </Link>{' '}
            on the weekdays. There, I learned the basics of web development
            (HTML, CSS, JavaScript) and saw how websites are actually built. As
            a college-bound high schooler, I was inspired and decided to pursue
            a bachelor&apos;s degree in computer science.
            <br />
            <br />
            In the past, I&apos;ve been blessed to intern for{' '}
            <Link
              href="https://www.playstation.com/"
              color="secondary"
              underline="hover"
            >
              a well-established video game company
            </Link>{' '}
            and{' '}
            <Link
              href="https://www.dexcom.com/"
              color="secondary"
              underline="hover"
            >
              a leading company in CGM development
            </Link>
            . I&apos;ve also had the opportunity to link with an old friend to
            lead the development of{' '}
            <Link
              href="https://www.parktaxiapp.com/"
              color="secondary"
              underline="hover"
            >
              a mobile ride-share application
            </Link>
            .<br />
            <br />
            In my free time, I&apos;ve built{' '}
            <Typography
              variant="inherit"
              component="span"
              color="textSecondary"
            >
              this website
            </Typography>{' '}
            using Nextjs and AWS Amplify.
          </Typography>
          <SkillsSection isItem={true} />
        </Grid>
        <Grid
          item
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          xs={12}
          lg={4}
        >
          <Avatar
            alt="Justin Yum"
            src="https://justinyumportfolio676d92023bae4f5c8237d7be84fba113139-dev.s3.us-west-1.amazonaws.com/public/profile-photo.png"
            variant="rounded"
            sx={{
              boxShadow: 2,
              width: {
                xs: 254,
                md: 300,
              },
              height: {
                xs: 254,
                md: 300,
              },
            }}
          />
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default AboutSection;
