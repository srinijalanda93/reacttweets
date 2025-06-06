import React from 'react';


const MainFeedTop = () => {
  return (
    <div className="d-flex justify-content-around align-items-center border-bottom mb-3 ps-2">
      <div style={{ fontWeight: 'bold', cursor: 'pointer' }}>For you</div>
      <div style={{ fontWeight: 'bold', cursor: 'pointer' }}>Following</div>
    </div>
  );
};

export default MainFeedTop;
