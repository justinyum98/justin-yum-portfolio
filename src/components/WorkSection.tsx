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
        "Automated and standardized laser machine's maintenance efficiency analysis; boosted yearly production by 98% (312 manual labor hours per year to 4.3 machine hours per year)",
        'Designed and developed analytics dashboard (using TIBCO Spotfire) that queries from a SQL database and visualizes maintenance logs; streamlined laser machine maintenance efficiency analysis for field service managers worldwide (previously only available for one site)',
        "Initiated the creation of the team's first virtual machine; setup Windows Server environment that would run automation scripts on a schedule",
      ],
    },
    {
      companyName: 'Dexcom',
      positionTitle: 'Software Development Intern',
      startDate: 'June 2018',
      endDate: 'September 2018',
      skills: ['TypeScript', 'Angular'],
      points: [
        "Developed team's internal OAuth client (using Angular) that uses CRUD operations to authenticate and authorize team's OAuth clients; Managed OAuth client tokens for over 100 internal clients.",
      ],
    },
    {
      companyName: 'PlayStation',
      positionTitle: 'Engineering Intern',
      startDate: 'June 2017',
      endDate: 'September 2017',
      skills: ['Java'],
      points: [
        'Implemented new REST API endpoint (using Java) that is used by about 150,000 end-users daily',
        "Reformatted and updated API documentation to improve readability and reflect new endpoint changes, reducing team's implementation timeline",
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
