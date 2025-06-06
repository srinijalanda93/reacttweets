import React from 'react';
import ProfileHeader from '../Profilecomp/ProfileHeader';
import ProfileDetails from '../Profilecomp/ProfileDetails';
import ProfileTabs from '../Profilecomp/ProfileTabs';

const Profile = () => {
  return (
    <div className="w-full max-w-3xl mx-auto text-black min-h-screen">
      <ProfileHeader />
      <ProfileDetails />
      <ProfileTabs />
    </div>
  );
};

export default Profile;
