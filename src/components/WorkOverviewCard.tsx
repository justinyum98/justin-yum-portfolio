import * as React from 'react';
import Link from 'next/link';

type WorkOverviewCardProps = {
  key: string;
  company: string;
  positionTitle: string;
  startDate: string;
  endDate: string;
  imgSrc?: string;
};

const WorkOverviewCard = ({
  key,
  company,
  positionTitle,
  startDate,
  endDate,
  imgSrc,
}: WorkOverviewCardProps) => {
  return (
    <Link href={`/work/${key}`}>
      <a>
        <div className="grid grid-cols-2 rounded-lg shadow-lg bg-gray-700 bg-opacity-20 text-white px-20 py-20">
          <div className="flex flex-col justify-center pl-12">
            <h1 className="text-6xl pb-5">{company}</h1>
            <h2 className="text-2xl pb-1">{positionTitle}</h2>
            <h2 className="text-2xl">
              {startDate} - {endDate}
            </h2>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={imgSrc}
              alt="company logo"
              className="bg-white rounded-lg"
            />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default WorkOverviewCard;
