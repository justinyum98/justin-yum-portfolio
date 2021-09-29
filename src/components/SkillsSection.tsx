import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

type SkillsSectionProps = {
  isItem: boolean;
};

const SkillsSection = ({ isItem }: SkillsSectionProps) => {
  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'React Native',
    'Node.js',
    'Python',
  ];

  return (
    <>
      <Typography variant="body1" paragraph>
        Here are some technologies that I&apos;m currently working with:
      </Typography>
      <Grid item={isItem} container rowSpacing={1}>
        {skills.map((skillName, index) => (
          <Grid key={index} item xs={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <ChevronRightIcon fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="subtitle1" fontFamily="monospace">
                {skillName}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SkillsSection;
