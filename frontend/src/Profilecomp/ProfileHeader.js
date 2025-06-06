import React from 'react';

const ProfileHeader = () => {
  return (
    <div>
      <div className="h-90 bg-gray-800 mt-5 me-5" />
      <div className="relative px-4">
        <img
          src="" // replace with actual avatar
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-black absolute -top-12"
        />
        <div className="flex justify-between items-center pt-16">
          <div>
            <h2 className="text-xl font-bold">Srinija Landa</h2>
            <p className="text-gray-400">@seenija24</p>
          </div>
          <button className="border px-4 py-1 rounded  bg-primary text-white">Edit profile</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
