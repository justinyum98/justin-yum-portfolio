import type { NextPage } from 'next';
import Head from 'next/head';

import HeaderNavbar from '../components/HeaderNavbar';

const About: NextPage = () => {
  return (
    <div id="about-page" className="container mx-auto">
      <Head>
        <title>About | Justin Yum</title>
        <meta name="description" content="Justin Yum's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderNavbar />
      <div id="about-page-content" className="bg-gray-300">
        About page content here
      </div>
    </div>
  );
};

export default About;
