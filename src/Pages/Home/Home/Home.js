import React from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import HomePageBanner from '../HomePageBanner/HomePageBanner';
import HomePageProducts from '../HomePageProducts/HomePageProducts';
import HomePageReviews from '../HomePageReviews/HomePageReviews';
import HomepageAbout from '../HomePageAbout/HomepageAbout';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <HomePageBanner></HomePageBanner>
      <HomepageAbout></HomepageAbout>
      <HomePageProducts></HomePageProducts>
      <HomePageReviews></HomePageReviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;