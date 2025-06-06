import React from 'react';

const trends = [
  { category: 'Royal Challengers Bangalore · Trending', title: '#ArrestKohli', count: '47.2K posts' },
  { category: 'Politics · Trending', title: 'Mark Carney', count: '17.3K posts' },
  { category: 'Politics · Trending', title: '#ModiHaiToMumkinHai', count: '2,756 posts' },
  { category: 'Technology · Trending', title: 'OnePlus 13s', count: '1,899 posts' }
];

const TrendingCard = () => {
  return (
    <div className="bg-white text-black rounded p-3 my-3 mx-3 border">
      <h5 className="fw-bold mb-3">What’s happening</h5>

      <div className="d-flex align-items-start mb-3">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/e/e0/Lil_Wayne_-_Tha_Carter_VI.png"
          alt="Trending"
          style={{ width: '50px', height: '50px', objectFit: 'cover' }}
          className="rounded me-2"
        />
        <div>
          <strong>Lil Wayne Tha Carter VI</strong>
          <div className="text-muted small">LIVE</div>
        </div>
      </div>

      {trends.map((trend, idx) => (
        <div key={idx} className="mb-3">
          <div className="text-muted small">{trend.category}</div>
          <div className="fw-bold">{trend.title}</div>
          <div className="text-muted small">{trend.count}</div>
        </div>
      ))}

      <a href="#" className="text-primary small">Show more</a>
    </div>
  );
};

export default TrendingCard;
