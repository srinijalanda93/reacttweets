import React from 'react';
import LeftSidebar from '../components/LeftSidebar';
import MainFeed from '../components/MainFeed';
import RightSidebar from '../components/RightSidebar';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="left-column">
        <LeftSidebar />
      </div>
      <div className="main-column">
        <MainFeed />
      </div>
      <div className="right-column">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
