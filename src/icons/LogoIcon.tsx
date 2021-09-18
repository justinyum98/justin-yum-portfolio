import * as React from 'react';

const LogoIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      viewBox="0 0 700 700"
      {...props}
    >
      <g fill="#ef473a">
        <path d="M311 2.5c-24.1 3-29.8 4-46 8.1C211 24.3 165 48 122.4 84.1c-11.9 10.1-34.4 33.6-46.1 48.1C53 161.3 34.2 194.5 21.6 229c-5.9 16.2-9.4 27.8-12.5 41.5-3.7 16.8-5.1 25-7.1 43.8-5.1 47.4.5 99.3 15.5 144.2 7.2 21.4 10.9 30.4 20.4 49.2 32.6 65.1 89.6 121.9 155.4 154.9 27.4 13.8 64.4 26.2 92.2 31 24.3 4.2 32.9 4.8 64 4.8 37.4 0 55.3-2 84.5-9.3 46.7-11.8 85.4-30.1 124.5-59.1 30-22.2 60.3-54.2 82.3-87 52.6-78.6 70.7-176.7 49.6-270-6.6-29.6-12.6-46.9-25.5-73.8C638 142.8 597.2 95.6 543.8 59.1 507 33.8 458.5 14.1 413 6c-35.2-6.3-69.5-7.5-102-3.5zm83 21.4c25.3 3.5 45.5 8.5 67.7 16.6 13.4 4.9 13.8 5.1 32.4 13.8 22.8 10.7 54.1 31.6 71.9 47.8 22.2 20.2 33.1 32.1 47.8 51.9 29.7 39.9 50.1 86.6 59.1 135.5 8.2 44.7 7.1 92.8-3 135.5-14.1 59.4-44.3 113.5-87.8 157.1-43.1 43.1-96 72.9-154.6 87.1-26.6 6.4-48.4 8.9-78 8.9-38.7 0-67.2-4.5-106-16.9-24.6-7.9-62.6-27.5-85-44-19.7-14.4-44.1-36.9-59.7-54.7-23.9-27.6-47.5-68.6-59.6-104-13.7-40-18.9-74.7-17.9-119 1-39.7 7.1-70.6 21.3-108 6.8-17.7 18.5-41 28.6-56.9 49.1-77 124.9-129.2 214.3-147.5 9.3-1.9 16.5-2.9 36.5-5.1 13.5-1.5 55.9-.4 72 1.9z" />
        <path d="M181 243.5V267h57.1l-.3 84.2-.3 84.3-2.3 6c-4.5 11.9-11.7 18.8-23 22.1-7.3 2.1-18.7 1.4-26.7-1.6-6.7-2.6-14.7-9.9-18.1-16.5-1.9-3.7-5.4-14.4-6.8-20.8-.4-1.5-1.2-2.7-1.9-2.7-3.9 0-56.8 7.8-57.5 8.4-.7.8 3.6 17.8 6.5 25.6 5.4 14.5 11.9 24.6 21.4 33.6 7.1 6.6 12 9.7 22.7 14 15 6.1 24.9 7.7 46.7 7.8 25.6.1 37.7-2.5 55.5-11.5 20.8-10.7 33.6-27.4 41.3-54.3 2-6.9 2.1-9.8 2.4-116.4l.4-109.2H181v23.5zM335.5 221.7c.5 1.5 38.6 64.7 58 96.3 2.9 4.7 13.9 22.7 24.4 40.1l19.1 31.6V508h60V389.5l9.8-16.2c15.4-25.7 42.3-70.4 68.2-113.3l23.8-39.5-31.2-.3c-24.4-.2-31.3 0-31.9 1-.4.7-9.7 16.8-20.6 35.8-10.9 19-26.2 45.6-34.1 59.2-7.8 13.7-14.5 24.8-14.9 24.8-.6 0-8.1-12.6-14.7-24.5-1.5-2.8-5.3-9.5-8.4-15-3.1-5.5-6.9-12.2-8.5-15-1.5-2.7-6.2-11-10.4-18.5-4.3-7.4-12.1-21.3-17.5-30.8l-9.8-17.2h-31c-29.1 0-31 .1-30.3 1.7z" />
      </g>
    </svg>
  );
};

export default LogoIcon;