import React from 'react';
import LeftSidebar from '../components/LeftSidebar';
import MainFeed from '../components/MainFeed';
import RightSidebar from '../components/RightSidebar';
import Profile from '../components/Profile';
import { useState } from 'react';

import './Home.css';

const Home = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const renderMainContent = () => {
    switch (activeTab) {
      case 'Profile':
        return <Profile />;
      case 'Home':
      default:
        return <MainFeed />;
    }
  };

  return (
    <div className="d-flex justify-content-between">
      <LeftSidebar onMenuClick={setActiveTab} />
      <div style={{ flex: 1, maxWidth: '600px' }}>
        {renderMainContent()}
      </div>
      <RightSidebar />
    </div>
  );
};

export default Home;

//export default Home;
