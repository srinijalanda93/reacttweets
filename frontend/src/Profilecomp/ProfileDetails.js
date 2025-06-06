import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const ProfileDetails = () => {
  return (
    <div className="px-4 mt-2">
      <p className="flex items-center text-sm text-gray-400 mt-1">
        <FaCalendarAlt className="mr-1" /> Joined June 2025
      </p>
      <p className="mt-2 text-sm">
        <span className="font-semibold">1</span> Following ·{' '}
        <span className="font-semibold">0</span> Followers
      </p>
    </div>
  );
};

export default ProfileDetails;
