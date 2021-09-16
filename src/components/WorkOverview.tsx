import * as React from 'react';
import WorkOverviewCard from './WorkOverviewCard';

const WorkOverview = () => {
  const workExperiences = [
    {
      key: 'asml-0',
      company: 'ASML',
      positionTitle: 'Operational Efficiency EE Intern',
      startDate: 'Aug. 2021',
      endDate: 'Now',
      imgSrc: '/asml-logo.png',
    },
    {
      key: 'asml-1',
      company: 'ASML',
      positionTitle: 'Operational Efficiency EE Intern',
      startDate: 'Jun. 2021',
      endDate: 'Aug. 2021',
      imgSrc: '/asml-logo.png',
    },
    {
      key: 'dexcom',
      company: 'Dexcom',
      positionTitle: 'Software Development Intern',
      startDate: 'Jun. 2018',
      endDate: 'Sep. 2018',
    },
    {
      key: 'playstation',
      company: 'PlayStation',
      positionTitle: 'Engineering Intern',
      startDate: 'Jun. 2017',
      endDate: 'Sep. 2017',
      imgSrc: '/playstation-logo.svg',
    },
  ];

  return (
    <div
      id="home-page-content-work"
      className="bg-black bg-opacity-90 text-white"
    >
      <div className="container mx-auto flex flex-col items-center px-10 py-10">
        <h1 className="self-start text-4xl font-serif pb-10">Work.</h1>
        <div className="grid grid-cols-1 gap-y-10">
          {workExperiences.map((workExperience) => (
            <WorkOverviewCard
              key={workExperience.key}
              company={workExperience.company}
              positionTitle={workExperience.positionTitle}
              startDate={workExperience.startDate}
              endDate={workExperience.endDate}
              imgSrc={workExperience.imgSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkOverview;
