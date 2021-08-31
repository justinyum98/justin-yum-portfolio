import type { NextPage } from 'next';
import Head from 'next/head';

import HeaderNavbar from '../components/HeaderNavbar';

const Home: NextPage = () => {
  return (
    <div id="home-page" className="container mx-auto">
      <Head>
        <title>Home | Justin Yum</title>
        <meta name="description" content="Justin Yum's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderNavbar />
      <div id="home-page-content" className="bg-gray-300">
        Hello
      </div>
    </div>
  );
};

export default Home;
