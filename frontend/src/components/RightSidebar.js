import React from 'react';

import SearchBox from '../RightsideComponents/SearchBox';

import SubscribeCard from '../RightsideComponents/SubscribeCard';
import TrendingCard from '../RightsideComponents/TrendingCard';
import WhoToFollow from '../RightsideComponents/WhoToFollow';

const RightSidebar = () => {
  return (
    <div style={{ maxWidth: '350px', height: '100vh', overflowY: 'auto' }}>
      {/* Sticky Search */}
      <div  style={{ position: 'sticky', top: 0, zIndex: 10 }}>
        <SearchBox />
      </div>

      {/* Scrollable Cards */}
      <div className="p-2">
        <SubscribeCard />
        <TrendingCard />
        <WhoToFollow />
      </div>
    </div>
  );
};

export default RightSidebar;

