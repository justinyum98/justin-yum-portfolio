import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import SectionContainer from './SectionContainer';
import TabPanel from './TabPanel';

const WorkSection = () => {
  const theme = useTheme();
  const mdBreakpoint = useMediaQuery(theme.breakpoints.up('md'));
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const a11yProps = (index: number) => ({
    id: `work-tab-${index}`,
    role: 'tab',
    'aria-controls': `work-tabpanel-${index}`,
  });

  const workExperience = [
    {
      companyName: 'ASML',
      positionTitle: 'Operational Efficiency EE Intern & Co-op',
      startDate: 'June 2021',
      endDate: 'Current',
      skills: ['Python', 'pandas', 'SQL'],
      points: [
        'Wrote automation script using Python that queries SQL database to identify laser machine service maintenance times',
        "Automated and standardized laser machine's maintenance efficiency analysis; decreased production time per year by 98% (312 manual labor hours to 4.3 machine hours)",
      ],
    },
    {
      companyName: 'Dexcom',
      positionTitle: 'Software Development Intern',
      startDate: 'June 2018',
      endDate: 'September 2018',
      skills: ['TypeScript', 'Angular'],
      points: [
        "Developed User Account Management's internal OAuth client (using TypeScript) that uses CRUD operations to authenticate and authorize Dexcom's OAuth clients; Managed OAuth client tokens for over 100 company employees.",
        "Reduced UAM's client load-time to less than a second, compared to a 4 second load-time from previous client.",
      ],
    },
    {
      companyName: 'PlayStation',
      positionTitle: 'Engineering Intern',
      startDate: 'June 2017',
      endDate: 'September 2017',
      skills: ['Java'],
      points: [
        "Reformatted and updated old API documentation (using Markdown) to improve readability and reflect new endpoint changes, reducing the Account's Service team implementation timeline by 2 hours.",
        "Implemented parental control (using Java) that allowed parents to override children's set bedtime; Used by about 150,000 end-users daily.",
      ],
    },
  ];

  return (
    <SectionContainer id="work">
      <Typography
        variant="h5"
        component="div"
        color="textSecondary"
        fontWeight="medium"
        sx={{
          mb: 3,
        }}
      >
        Where I&apos;ve Worked
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          height: 350,
        }}
      >
        <Tabs
          orientation={mdBreakpoint ? 'vertical' : 'horizontal'}
          variant={mdBreakpoint ? 'scrollable' : 'fullWidth'}
          value={selectedTab}
          onChange={handleTabChange}
          sx={{
            borderRight: {
              xs: 0,
              md: 1,
            },
            borderBottom: {
              xs: 1,
              md: 0,
            },
            borderColor: 'divider',
            flex: 'none',
          }}
        >
          {workExperience.map(({ companyName }, index) => (
            <Tab key={index} label={companyName} {...a11yProps(index)} />
          ))}
        </Tabs>
        {workExperience.map(
          (
            { companyName, positionTitle, startDate, endDate, skills, points },
            index
          ) => (
            <TabPanel key={index} value={selectedTab} index={index}>
              <Typography
                variant="h6"
                component="div"
                fontWeight="bold"
                gutterBottom
              >
                {positionTitle}{' '}
                <Typography
                  variant="inherit"
                  component="span"
                  color="textSecondary"
                >
                  @ {companyName}
                </Typography>
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                fontFamily="monospace"
                gutterBottom
              >
                {startDate} - {endDate}
              </Typography>
              <Typography
                variant="body1"
                component="div"
                gutterBottom
                sx={{
                  mb: 3,
                }}
              >
                Skills used:{' '}
                <Typography
                  variant="inherit"
                  component="span"
                  fontWeight="medium"
                >
                  {skills.join(', ')}
                </Typography>
              </Typography>
              {points.map((point, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                  }}
                >
                  <ChevronRightIcon
                    fontSize="small"
                    color="primary"
                    sx={{ mr: 1 }}
                  />
                  <Typography variant="body1" paragraph>
                    {point}
                  </Typography>
                </Box>
              ))}
            </TabPanel>
          )
        )}
      </Box>
    </SectionContainer>
  );
};

export default WorkSection;
