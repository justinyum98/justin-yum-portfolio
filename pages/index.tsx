import type { NextPage } from 'next';
import Head from 'next/head';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/croodles-neutral';

import HeaderNavbar from '../components/HeaderNavbar';

const Home: NextPage = () => {
  const svg = createAvatar(style, {
    seed: 'justin-yum',
    eyes: 'variant16',
    nose: 'variant09',
    mouth: 'variant18',
  });

  console.log(svg);

  return (
    <div id="home-page" className="bg-fwTan">
      <Head>
        <title>Justin Yum</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Justin Yum's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderNavbar />
      <div id="home-page-content">
        <div
          id="home-page-content-intro"
          className="container mx-auto py-12 px-8 lg:py-24 lg:px-24"
        >
          <div className="flex flex-col font-sans">
            <h3 className="text-fwOrange text-lg lg:text-xl">Hi, my name is</h3>
            <div className="text-fwDarkPurple mt-1 mb-5 lg:mt-3 lg:mb-7">
              <h1 className="font-bold text-4xl pb-1 lg:text-7xl lg:pb-3">
                Justin Yum.
              </h1>
              <h1 className="font-semibold text-3xl pt-1 lg:text-5xl lg:pt-3">
                Software Engineer.
              </h1>
            </div>
            <h2 className="text-fwDarkPurple text-sm lg:text-base">
              I develop (and sometimes design) both web and mobile experiences.
              <br />
              Currently, I am a{' '}
              <span className="font-medium text-fwOrange">
                junior undergraduate student
              </span>{' '}
              working part-time at{' '}
              <span className="font-medium text-fwOrange">ASML</span>.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
