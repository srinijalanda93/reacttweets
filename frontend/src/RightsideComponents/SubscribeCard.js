import React from 'react';

const SubscribeCard = () => {
  return (
    <div className="bg-white text-black rounded p-3 border my-3 mx-3" >
      <h5 className="fw-bold">Subscribe to Premium</h5>
      <p className="mb-3">
        Subscribe to unlock new features and if eligible, receive a share of revenue.
      </p>
      <button className="btn btn-primary rounded-pill">Subscribe</button>
    </div>
  );
};

export default SubscribeCard;
