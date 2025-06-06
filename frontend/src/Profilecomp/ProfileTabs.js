import React, { useState } from 'react';

const tabs = ['Posts', 'Replies', 'Highlights', 'Articles', 'Media', 'Likes'];

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('Posts');

  return (
    <div className="mt-4 overflow-x-auto px-4">
      <div className="flex space-x-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`fs-6 bg-white border-0 px-3  border-bottom hover:font-bold transition-all duration-200 ${
              activeTab === tab ? 'font-bold' : ''
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileTabs;
