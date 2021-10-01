import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import MobileStepper from '@mui/material/MobileStepper';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import { IProject } from '../types';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

type ProjectCardProps = {
  project: IProject;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const {
    name,
    startDate,
    endDate,
    pictureUrl,
    description,
    technologies,
    url,
    githubUrl,
  } = project;

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = pictureUrl.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Card>
      <CardHeader title={name} subheader={`${startDate} - ${endDate}`} />
      {typeof pictureUrl === 'string' ? (
        <CardMedia
          component="img"
          src={pictureUrl}
          alt="project img"
          sx={{ maxWidth: '100%', height: 'auto' }}
        />
      ) : (
        <>
          <AutoPlaySwipeableViews
            axis="x"
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {pictureUrl.map((picUrl, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {Math.abs(activeStep - index) <= 2 ? (
                  <CardMedia
                    component="img"
                    src={picUrl}
                    alt="project img"
                    sx={{
                      maxWidth: {
                        xs: '70%',
                        md: '50%',
                      },
                      height: 'auto',
                    }}
                  />
                ) : null}
              </Box>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            sx={{
              backgroundColor: 'background.paper',
            }}
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                <KeyboardArrowLeft /> Back
              </Button>
            }
          />
        </>
      )}
      <CardContent component="p">
        <Typography variant="subtitle1" gutterBottom>
          {description}
        </Typography>
        <Typography variant="subtitle2">
          Tech stack:{' '}
          <Typography variant="inherit" component="span" fontWeight="medium">
            {technologies.join(', ')}
          </Typography>
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton color="primary" href={url}>
          <LanguageIcon />
        </IconButton>
        <IconButton color="primary" href={githubUrl}>
          <GitHubIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
